import { useState } from "react"

import {
  Download,
  Eye,
  Bell,
  Receipt,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react"

import { payments } from "../data/mockData"

import Badge from "../components/ui/Badge"
import DataTable from "../components/ui/DataTable"
import SidePanel from "../components/ui/SidePanel"

function Payments() {

  const [status, setStatus] =
    useState("All Statuses")

  const [range, setRange] =
    useState("Last 30 days")

  const [selectedPayment, setSelectedPayment] =
    useState(null)

  const [reminded, setReminded] =
    useState([])

  const filtered =
    payments.filter(
      (payment) =>
        status === "All Statuses" ||
        payment.status === status
    )

  const total =
    filtered
      .filter(
        (p) => p.status === "Paid"
      )
      .reduce(
        (sum, p) =>
          sum + p.amount,
        0
      )

  const failed =
    payments.filter(
      (p) => p.status === "Failed"
    ).length

  const refunds =
    payments
      .filter(
        (p) =>
          p.status === "Refunded"
      )
      .reduce(
        (sum, p) =>
          sum + p.amount,
        0
      )

  const exportCSV = () => {

    const header =
      "Payment ID,User,Amount,Status,Method,Date\n"

    const rows =
      filtered
        .map(
          (p) =>
            `"${p.id}","${p.user}","₹${p.amount}","${p.status}","${p.method}","${p.date}"`
        )
        .join("\n")

    const blob = new Blob(
      [header + rows],
      { type: "text/csv" }
    )

    const url =
      URL.createObjectURL(blob)

    const link =
      document.createElement("a")

    link.href = url
    link.download =
      "aifagen-payments.csv"

    link.click()

    URL.revokeObjectURL(url)
  }

  const sendReminder = (user) => {

    setReminded((current) => [
      ...current,
      user,
    ])
  }

  const columns = [

    {
      key: "id",
      label: "Payment ID",
      render: (payment) => (
        <strong>{payment.id}</strong>
      ),
    },

    {
      key: "user",
      label: "User",
    },

    {
      key: "amount",
      label: "Amount",
      render: (payment) =>
        `₹${payment.amount.toLocaleString(
          "en-IN"
        )}.00`,
    },

    {
      key: "status",
      label: "Status",
      render: (payment) => (

        <Badge type={payment.status}>
          {payment.status}
        </Badge>

      ),
    },

    {
      key: "method",
      label: "Payment Method",
    },

    {
      key: "date",
      label: "Date",
    },

    {
      key: "actions",
      label: "Actions",
      render: (payment) => (

        <button
          className="row-icon-btn"
          title="View invoice"
          onClick={(e) => {
            e.stopPropagation()
            setSelectedPayment(
              payment
            )
          }}
        >
          <Eye size={15} />
        </button>

      ),
    },

  ]

  return (
    <div>

      <div className="summary-grid">

        <div className="summary-card">
          <span>
            Total Collected
          </span>

          <strong>
            ₹{total.toLocaleString(
              "en-IN"
            )}
          </strong>

          <small>
            Successful payments
          </small>
        </div>

        <div className="summary-card">
          <span>
            Transactions
          </span>

          <strong>
            {filtered.length}
          </strong>

          <small>
            Selected period
          </small>
        </div>

        <div className="summary-card">
          <span>
            Failed Payments
          </span>

          <strong className="danger">
            {failed}
          </strong>

          <small>
            Require attention
          </small>
        </div>

        <div className="summary-card">
          <span>
            Refunded
          </span>

          <strong>
            ₹{refunds.toLocaleString(
              "en-IN"
            )}
          </strong>

          <small>
            Total refunds
          </small>
        </div>

      </div>

      <div className="filters card">

        <div className="filter-field">

          <label>
            Date Range
          </label>

          <select
            value={range}
            onChange={(e) =>
              setRange(e.target.value)
            }
          >
            <option>
              Last 7 days
            </option>

            <option>
              Last 30 days
            </option>

            <option>
              Last 90 days
            </option>
          </select>

        </div>

        <div className="filter-field">

          <label>
            Payment Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>
              All Statuses
            </option>

            <option>Paid</option>
            <option>Failed</option>
            <option>Refunded</option>
          </select>

        </div>

        <button
          className="btn primary filter-export"
          onClick={exportCSV}
        >
          <Download size={15} />
          Export CSV
        </button>

      </div>

      <div className="table-card">

        <div className="table-top">

          <div>
            <h3>
              Payment Transactions
            </h3>

            <span>
              Review successful,
              failed and refunded
              payments.
            </span>
          </div>

        </div>

        <DataTable
          columns={columns}
          data={filtered}
        />

      </div>

      <div className="two-column-cards">

        {/* FAILED */}

        <div className="card">

          <div className="card-header">

            <div>
              <h3>
                Failed Payers
              </h3>

              <p>
                Users requiring
                follow-up
              </p>
            </div>

            <XCircle
              size={19}
              className="danger-icon"
            />

          </div>

          <div className="simple-list">

            {payments
              .filter(
                (p) =>
                  p.status ===
                  "Failed"
              )
              .map((payment) => (

                <div
                  className="simple-list-row"
                  key={payment.id}
                >

                  <div>
                    <strong>
                      {payment.user}
                    </strong>

                    <span>
                      {payment.id} ·{" "}
                      ₹{payment.amount}
                    </span>
                  </div>

                  <button
                    className="table-action"
                    onClick={() =>
                      setSelectedPayment(
                        payment
                      )
                    }
                  >
                    View invoice
                  </button>

                </div>

              ))}

          </div>

        </div>

        {/* RENEWALS */}

        <div className="card">

          <div className="card-header">

            <div>
              <h3>
                Upcoming Renewals
              </h3>

              <p>
                Plans ending soon
              </p>
            </div>

            <Bell size={18} />

          </div>

          <div className="simple-list">

            {[
              {
                user: "Rahul Sharma",
                plan: "Premium",
                days: 3,
              },
              {
                user: "Ananya Reddy",
                plan: "Basic",
                days: 7,
              },
              {
                user: "Vikram Kumar",
                plan: "Premium",
                days: 12,
              },
            ].map((item) => {

              const isReminded =
                reminded.includes(
                  item.user
                )

              return (

                <div
                  className="renewal-row"
                  key={item.user}
                >

                  <div>
                    <strong>
                      {item.user}
                    </strong>

                    <span>
                      {item.plan} ·{" "}
                      {item.days} days
                    </span>
                  </div>

                  <button
                    className={
                      isReminded
                        ? "reminder-sent"
                        : "reminder-btn"
                    }
                    onClick={() =>
                      sendReminder(
                        item.user
                      )
                    }
                  >
                    {isReminded ? (
                      <>
                        <CheckCircle2
                          size={13}
                        />
                        Sent
                      </>
                    ) : (
                      <>
                        <Bell
                          size={13}
                        />
                        Remind
                      </>
                    )}
                  </button>

                </div>

              )
            })}

          </div>

        </div>

      </div>

      <SidePanel
        open={!!selectedPayment}
        onClose={() =>
          setSelectedPayment(null)
        }
        title="Payment Details"
        subtitle={
          selectedPayment?.id
        }
      >

        {selectedPayment && (

          <div>

            <div className="invoice-status">

              {selectedPayment.status ===
              "Paid" ? (
                <CheckCircle2 size={28} />
              ) : selectedPayment.status ===
                "Failed" ? (
                <XCircle size={28} />
              ) : (
                <RotateCcw size={28} />
              )}

              <div>
                <strong>
                  {selectedPayment.status}
                </strong>

                <span>
                  Transaction status
                </span>
              </div>

            </div>

            <div className="invoice-amount">
              ₹
              {selectedPayment.amount.toLocaleString(
                "en-IN"
              )}
              .00
            </div>

            <div className="detail-section">

              <h4>
                Transaction Information
              </h4>

              <div className="detail-list">

                <p>
                  <span>
                    Payment ID
                  </span>

                  {selectedPayment.id}
                </p>

                <p>
                  <span>
                    Customer
                  </span>

                  {selectedPayment.user}
                </p>

                <p>
                  <span>
                    Payment Method
                  </span>

                  {selectedPayment.method}
                </p>

                <p>
                  <span>
                    Date
                  </span>

                  {selectedPayment.date}
                </p>

              </div>

            </div>

            <div className="detail-section">

              <h4>
                Payment Timeline
              </h4>

              <div className="payment-timeline">

                <div>
                  <span />
                  <div>
                    <strong>
                      Payment initiated
                    </strong>

                    <small>
                      Customer started checkout
                    </small>
                  </div>
                </div>

                <div>
                  <span />
                  <div>
                    <strong>
                      Gateway processed
                    </strong>

                    <small>
                      Payment gateway response received
                    </small>
                  </div>
                </div>

                <div>
                  <span />
                  <div>
                    <strong>
                      {selectedPayment.status ===
                      "Paid"
                        ? "Payment successful"
                        : selectedPayment.status ===
                          "Failed"
                        ? "Payment failed"
                        : "Payment refunded"}
                    </strong>

                    <small>
                      Final transaction state
                    </small>
                  </div>
                </div>

              </div>

            </div>

            <button className="btn secondary full-width">
              <Receipt size={15} />
              Download Invoice
            </button>

          </div>

        )}

      </SidePanel>

    </div>
  )
}

export default Payments