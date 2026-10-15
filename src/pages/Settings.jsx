import { useState } from "react"

import { admins as initialAdmins } from "../data/mockData"
import Badge from "../components/ui/Badge"

function Settings() {

  const [admins, setAdmins] =
    useState(initialAdmins)

  const [email, setEmail] =
    useState("")

  const addAdmin = () => {

    if (!email || !email.includes("@")) {
      alert("Enter a valid email.")
      return
    }

    setAdmins((current) => [
      ...current,
      {
        id: Date.now(),
        email,
        added: "12 Oct 2026",
      },
    ])

    setEmail("")
  }

  const removeAdmin = (id) => {

    if (admins.length === 1) {
      alert("The last admin cannot be removed.")
      return
    }

    const admin = admins.find(
      (item) => item.id === id
    )

    if (
      window.confirm(
        `Remove ${admin.email} as admin?`
      )
    ) {
      setAdmins((current) =>
        current.filter(
          (item) => item.id !== id
        )
      )
    }
  }

  return (
    <div className="settings-grid">

      <div className="card">

        <div className="card-header">
          <div>
            <h3>Administrators</h3>
            <p>
              Manage people who can access
              the admin portal.
            </p>
          </div>
        </div>

        <div className="add-admin">

          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button
            className="btn primary"
            onClick={addAdmin}
          >
            + Add Admin
          </button>

        </div>

        <div className="admin-list">

          {admins.map((admin) => (
            <div
              className="admin-row"
              key={admin.id}
            >

              <div className="user-cell">

                <div className="table-avatar">
                  {admin.email
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <strong>
                    {admin.email}
                  </strong>

                  <span>
                    Added {admin.added}
                  </span>
                </div>

              </div>

              <button
                className="table-action danger-text"
                onClick={() =>
                  removeAdmin(admin.id)
                }
              >
                Remove
              </button>

            </div>
          ))}

        </div>

      </div>

      <div className="card">

        <div className="card-header">
          <div>
            <h3>Connected Services</h3>
            <p>
              Status of external platform services.
            </p>
          </div>
        </div>

        <div className="service-list">

          <div className="service-row">

            <div>
              <strong>Job Collection API</strong>
              <span>
                Job source integration
              </span>
            </div>

            <Badge type="Active">
              OK
            </Badge>

          </div>

          <div className="service-row">

            <div>
              <strong>Payment Gateway</strong>
              <span>
                Payment processing service
              </span>
            </div>

            <Badge type="Active">
              OK
            </Badge>

          </div>

          <div className="service-row">

            <div>
              <strong>AI Provider</strong>
              <span>
                AI model provider connection
              </span>
            </div>

            <Badge type="Failed">
              Needs attention
            </Badge>

          </div>

          <div className="service-row">

            <div>
              <strong>Email Service</strong>
              <span>
                Transactional notifications
              </span>
            </div>

            <Badge type="Active">
              OK
            </Badge>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Settings