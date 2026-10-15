import { useState } from "react"
import { Bell, ChevronDown, LogOut, UserCircle } from "lucide-react"
import { useLocation } from "react-router-dom"

const pageInfo = {
  "/": {
    title: "Dashboard",
    subtitle: "Overview of users, revenue, jobs and platform activity.",
  },
  "/users": {
    title: "Users",
    subtitle: "Manage users, plans, profiles and account activity.",
  },
  "/payments": {
    title: "Payments",
    subtitle: "Monitor payments, refunds and upcoming renewals.",
  },
  "/jobs": {
    title: "Jobs",
    subtitle: "Manage job listings displayed to users.",
  },
  "/internal-jobs": {
    title: "Internal Jobs",
    subtitle: "Create and manage jobs posted by the AIFAGen team.",
  },
  "/job-sources": {
    title: "Job Sources",
    subtitle: "Monitor job collection sources and recent runs.",
  },
  "/ai-usage": {
    title: "AI Usage",
    subtitle: "Monitor AI usage, costs and top users.",
  },
  "/audit-log": {
    title: "Audit Log",
    subtitle: "Track important administrative changes.",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Manage administrators and connected services.",
  },
}

function Header() {
  const location = useLocation()

  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const info = pageInfo[location.pathname] || pageInfo["/"]

  return (
    <header className="page-header">

      <div className="page-title">
        <h1>{info.title}</h1>
        <p>{info.subtitle}</p>
      </div>

      <div className="header-right">

        {/* Notifications */}

        <div className="header-dropdown">

          <button
            className="icon-button notification-button"
            onClick={() => {
              setNotificationsOpen(!notificationsOpen)
              setProfileOpen(false)
            }}
          >
            <Bell size={18} />

            <span className="notification-dot" />
          </button>

          {notificationsOpen && (
            <div className="dropdown-panel notification-panel">

              <div className="dropdown-header">
                <div>
                  <strong>Notifications</strong>
                  <span>3 new alerts</span>
                </div>

                <button className="small-link">
                  Mark all read
                </button>
              </div>

              <div className="notification-item">
                <div className="notification-icon warning">
                  !
                </div>

                <div>
                  <strong>Job source failed</strong>
                  <p>Naukri authentication failed.</p>
                  <span>12 min ago</span>
                </div>
              </div>

              <div className="notification-item">
                <div className="notification-icon success">
                  ✓
                </div>

                <div>
                  <strong>Payment received</strong>
                  <p>₹1,999 payment from Rahul Sharma.</p>
                  <span>35 min ago</span>
                </div>
              </div>

              <div className="notification-item">
                <div className="notification-icon info">
                  i
                </div>

                <div>
                  <strong>Plan ending soon</strong>
                  <p>3 Premium plans expire this week.</p>
                  <span>1 hour ago</span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Admin */}

        <div className="header-dropdown">

          <button
            className="admin-profile"
            onClick={() => {
              setProfileOpen(!profileOpen)
              setNotificationsOpen(false)
            }}
          >

            <div className="avatar">
              A
            </div>

            <div className="admin-profile-text">
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

            <ChevronDown
              size={16}
              className={profileOpen ? "rotate-icon" : ""}
            />

          </button>

          {profileOpen && (
            <div className="dropdown-panel profile-panel">

              <div className="profile-dropdown-top">

                <div className="large-avatar">
                  A
                </div>

                <div>
                  <strong>Admin</strong>
                  <span>admin@aifagen.com</span>
                </div>

              </div>

              <div className="dropdown-divider" />

              <button className="dropdown-action">
                <UserCircle size={16} />
                My Profile
              </button>

              <div className="dropdown-divider" />

              <button className="dropdown-action danger-action">
                <LogOut size={16} />
                Sign out
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  )
}

export default Header
