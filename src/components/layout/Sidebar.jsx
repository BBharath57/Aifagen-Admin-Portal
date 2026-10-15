import { NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  Users,
  CreditCard,
  BriefcaseBusiness,
  Building2,
  Radio,
  Sparkles,
  ClipboardList,
  Settings,
  LogOut,
  Sun,
  Moon,
} from "lucide-react"

function Sidebar({ darkMode, setDarkMode }) {

  const linkClass = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`

  return (
    <aside className="sidebar">

      <div className="logo-area">

        <div className="logo-mark">
          A
        </div>

        <div>
          <h2>AIFAGen</h2>
          <span>Admin Portal</span>
        </div>

      </div>

      <nav>

        <div className="nav-group">

          <p className="nav-title">
            Overview
          </p>

          <NavLink to="/" className={linkClass}>
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </NavLink>

        </div>

        <div className="nav-group">

          <p className="nav-title">
            Revenue
          </p>

          <NavLink to="/users" className={linkClass}>
            <Users size={17} />
            <span>Users</span>
          </NavLink>

          <NavLink to="/payments" className={linkClass}>
            <CreditCard size={17} />
            <span>Payments</span>
          </NavLink>

        </div>

        <div className="nav-group">

          <p className="nav-title">
            Content
          </p>

          <NavLink to="/jobs" className={linkClass}>
            <BriefcaseBusiness size={17} />
            <span>Jobs</span>
          </NavLink>

          <NavLink to="/internal-jobs" className={linkClass}>
            <Building2 size={17} />
            <span>Internal Jobs</span>
          </NavLink>

          <NavLink to="/job-sources" className={linkClass}>
            <Radio size={17} />
            <span>Job Sources</span>
          </NavLink>

        </div>

        <div className="nav-group">

          <p className="nav-title">
            Operations
          </p>

          <NavLink to="/ai-usage" className={linkClass}>
            <Sparkles size={17} />
            <span>AI Usage</span>
          </NavLink>

          <NavLink to="/audit-log" className={linkClass}>
            <ClipboardList size={17} />
            <span>Audit Log</span>
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            <Settings size={17} />
            <span>Settings</span>
          </NavLink>

        </div>

      </nav>

      <div className="sidebar-footer">

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}

          <span>
            {darkMode ? "Light mode" : "Dark mode"}
          </span>
        </button>

        <div className="sidebar-user">

          <div className="sidebar-avatar">
            A
          </div>

          <div>
            <strong>Admin</strong>
            <span>admin@aifagen.com</span>
          </div>

        </div>

        <button className="sidebar-signout">
          <LogOut size={16} />
          Sign out
        </button>

      </div>

    </aside>
  )
}

export default Sidebar