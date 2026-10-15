import { useState } from "react"

import {
  Users,
  UserPlus,
  CreditCard,
  Percent,
  IndianRupee,
  RefreshCw,
  Download,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"

import StatCard from "../components/ui/StatCard"

function Dashboard() {

  const [period, setPeriod] = useState("30")
  const [chartType, setChartType] = useState("bar")
  const [refreshing, setRefreshing] = useState(false)

  const chartData = {
    "7": [42, 58, 51, 68, 74, 62, 82],
    "30": [
      42, 56, 48, 65, 51, 72, 60,
      78, 68, 82, 71, 88, 74, 92,
      67, 76, 85, 70, 81, 94, 76,
      84, 72, 90, 78, 87, 80, 96, 84,
    ],
    "90": [
      32, 45, 38, 54, 48, 62, 58, 69,
      63, 75, 68, 82, 76, 88, 72, 84,
      78, 91, 83, 74, 89, 95, 82, 90,
    ],
  }

  const data = chartData[period]

  const refreshDashboard = () => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 900)
  }

  const exportDashboard = () => {

    const csv = [
      "Metric,Value",
      "Total Users,12842",
      "New Users,1284",
      "Paying Users,3426",
      "Conversion,26.7%",
      "Revenue,842000",
    ].join("\n")

    const blob = new Blob(
      [csv],
      { type: "text/csv" }
    )

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url
    link.download = "aifagen-dashboard.csv"

    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div>

      {/* ACTIONS */}

      <div className="page-actions">

        <button
          className="btn secondary"
          onClick={exportDashboard}
        >
          <Download size={15} />
          Export
        </button>

        <button
          className="btn primary"
          onClick={refreshDashboard}
          disabled={refreshing}
        >
          <RefreshCw
            size={15}
            className={
              refreshing
                ? "spin"
                : ""
            }
          />

          {refreshing
            ? "Refreshing..."
            : "Refresh"}
        </button>

      </div>

      {/* STATS */}

      <section className="stats-grid">

        <StatCard
          title="Total Users"
          value="12,842"
          change="+8.2% from last month"
          icon={Users}
        />

        <StatCard
          title="New Users"
          value="1,284"
          change="+12.5% last 30 days"
          icon={UserPlus}
        />

        <StatCard
          title="Paying Users"
          value="3,426"
          change="+6.8% from last month"
          icon={CreditCard}
        />

        <StatCard
          title="Conversion"
          value="26.7%"
          change="+2.1% from last month"
          icon={Percent}
        />

        <StatCard
          title="Revenue"
          value="₹8.42L"
          change="+14.3% this month"
          icon={IndianRupee}
        />

      </section>

      {/* CHART */}

      <section className="dashboard-grid">

        <div className="card chart-card">

          <div className="card-header">

            <div>
              <h3>Sign-ups</h3>
              <p>
                User registrations over time
              </p>
            </div>

            <div className="chart-controls">

              <select
                value={period}
                onChange={(e) =>
                  setPeriod(e.target.value)
                }
              >
                <option value="7">
                  Last 7 days
                </option>

                <option value="30">
                  Last 30 days
                </option>

                <option value="90">
                  Last 90 days
                </option>
              </select>

              <select
                value={chartType}
                onChange={(e) =>
                  setChartType(e.target.value)
                }
              >
                <option value="bar">
                  Bar chart
                </option>

                <option value="line">
                  Line chart
                </option>

                <option value="trend">
                  Trend chart
                </option>
              </select>

            </div>

          </div>

          {chartType === "bar" && (

            <div className="chart">

              {data.map((height, index) => (
                <div
                  className="chart-column"
                  key={index}
                >
                  <div
                    className="chart-bar"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>
              ))}

            </div>

          )}

          {chartType === "line" && (

            <div className="line-chart-wrapper">

              <svg
                viewBox="0 0 800 260"
                preserveAspectRatio="none"
                className="line-chart"
              >

                <defs>
                  <linearGradient
                    id="areaGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <polyline
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={
                    data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * 780 + 10},${240 - value * 2}`
                      )
                      .join(" ")
                  }
                />

                {data.map(
                  (value, index) => (
                    <circle
                      key={index}
                      cx={
                        (index /
                          (data.length - 1)) *
                          780 +
                        10
                      }
                      cy={
                        240 -
                        value * 2
                      }
                      r="5"
                      fill="var(--accent)"
                    />
                  )
                )}

              </svg>

            </div>

          )}

          {chartType === "trend" && (

            <div className="trend-chart">

              <div className="trend-number">
                <strong>+18.4%</strong>
                <span>growth trend</span>
              </div>

              <svg
                viewBox="0 0 800 260"
                preserveAspectRatio="none"
                className="line-chart"
              >

                <path
                  d="M0 210 C100 190 120 200 180 165 S280 180 340 125 S450 150 500 105 S620 100 680 70 S750 90 800 35"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          )}

        </div>

        {/* PLAN SPLIT */}

        <div className="card">

          <div className="card-header">

            <div>
              <h3>Plan Split</h3>
              <p>Current users</p>
            </div>

          </div>

          <div className="donut-container">

            <div className="donut-chart">
              <div>
                <strong>12.8K</strong>
                <span>Users</span>
              </div>
            </div>

          </div>

          <div className="plan-summary">

            <div className="plan-row">
              <span>
                <i className="dot premium" />
                Premium
              </span>

              <strong>42%</strong>
            </div>

            <div className="plan-row">
              <span>
                <i className="dot basic" />
                Basic
              </span>

              <strong>31%</strong>
            </div>

            <div className="plan-row">
              <span>
                <i className="dot none" />
                None
              </span>

              <strong>27%</strong>
            </div>

          </div>

        </div>

      </section>

      {/* LOWER CARDS */}

      <section className="dashboard-grid">

        <div className="card">

          <div className="card-header">

            <div>
              <h3>Plans Ending Soon</h3>
              <p>Next 30 days</p>
            </div>

            <button className="text-btn">
              View users →
            </button>

          </div>

          <div className="ending-list">

            <div className="ending-row">

              <div>
                <strong>
                  Rahul Sharma
                </strong>

                <span>
                  Premium plan
                </span>
              </div>

              <b>3 days</b>

            </div>

            <div className="ending-row">

              <div>
                <strong>
                  Ananya Reddy
                </strong>

                <span>
                  Basic plan
                </span>
              </div>

              <b>7 days</b>

            </div>

            <div className="ending-row">

              <div>
                <strong>
                  Vikram Kumar
                </strong>

                <span>
                  Premium plan
                </span>
              </div>

              <b>12 days</b>

            </div>

          </div>

        </div>

        <div className="card">

          <div className="card-header">

            <div>
              <h3>Job Health</h3>
              <p>Current ingestion status</p>
            </div>

          </div>

          <div className="health-grid">

            <div className="health-box">

              <CheckCircle2 size={20} />

              <strong>
                18,492
              </strong>

              <span>
                Active Jobs
              </span>

            </div>

            <div className="health-box warning">

              <AlertTriangle size={20} />

              <strong>
                3
              </strong>

              <span>
                Sources Need Attention
              </span>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Dashboard
