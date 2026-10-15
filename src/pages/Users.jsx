// import { useState } from "react"

// import { users } from "../data/mockData"
// import Badge from "../components/ui/Badge"
// import DataTable from "../components/ui/DataTable"
// import SidePanel from "../components/ui/SidePanel"

// function Users() {

//   const [search, setSearch] = useState("")
//   const [plan, setPlan] = useState("All")
//   const [status, setStatus] = useState("All")
//   const [selectedUser, setSelectedUser] = useState(null)

//   const filteredUsers = users.filter((user) => {

//     const matchesSearch =
//       user.name.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase()) ||
//       user.mobile.includes(search)

//     const matchesPlan =
//       plan === "All" || user.plan === plan

//     const matchesStatus =
//       status === "All" || user.status === status

//     return (
//       matchesSearch &&
//       matchesPlan &&
//       matchesStatus
//     )
//   })

//   const columns = [
//     {
//       key: "name",
//       label: "Name & Email",
//       render: (user) => (
//         <div className="user-cell">
//           <div className="table-avatar">
//             {user.name.charAt(0)}
//           </div>

//           <div>
//             <strong>{user.name}</strong>
//             <span>{user.email}</span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       key: "mobile",
//       label: "Mobile",
//     },
//     {
//       key: "area",
//       label: "Area",
//     },
//     {
//       key: "plan",
//       label: "Plan",
//       render: (user) => (
//         <Badge type={user.plan}>
//           {user.plan}
//         </Badge>
//       ),
//     },
//     {
//       key: "status",
//       label: "Status",
//       render: (user) => (
//         <Badge type={user.status}>
//           {user.status}
//         </Badge>
//       ),
//     },
//     {
//       key: "aiUsage",
//       label: "AI / 30 Days",
//       render: (user) => `${user.aiUsage} calls`,
//     },
//     {
//       key: "joined",
//       label: "Joined",
//     },
//   ]

//   return (
//     <div>

//       <div className="page-actions">
//         <button className="btn secondary">
//           Export CSV
//         </button>

//         <button className="btn primary">
//           + Add User
//         </button>
//       </div>

//       <div className="filters card">

//         <div className="search-box">
//           🔍
//           <input
//             type="text"
//             placeholder="Search name, email or mobile..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <select
//           value={plan}
//           onChange={(e) => setPlan(e.target.value)}
//         >
//           <option>All</option>
//           <option>None</option>
//           <option>Basic</option>
//           <option>Premium</option>
//         </select>

//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//         >
//           <option>All</option>
//           <option>Active</option>
//           <option>Inactive</option>
//           <option>Past due</option>
//           <option>Cancelled</option>
//         </select>

//       </div>

//       <div className="table-card">

//         <div className="table-top">
//           <div>
//             <h3>All Users</h3>
//             <span>
//               {filteredUsers.length} users found
//             </span>
//           </div>

//           <span className="page-size">
//             25 per page
//           </span>
//         </div>

//         <DataTable
//           columns={columns}
//           data={filteredUsers}
//           onRowClick={setSelectedUser}
//         />

//       </div>

//       <SidePanel
//         open={!!selectedUser}
//         onClose={() => setSelectedUser(null)}
//         title="User Details"
//       >

//         {selectedUser && (
//           <>

//             <div className="profile-header">

//               <div className="profile-avatar">
//                 {selectedUser.name.charAt(0)}
//               </div>

//               <div>
//                 <h3>{selectedUser.name}</h3>
//                 <p>{selectedUser.email}</p>
//               </div>

//             </div>

//             <div className="detail-section">

//               <h4>Account</h4>

//               <div className="detail-grid">
//                 <div>
//                   <span>Plan</span>
//                   <strong>{selectedUser.plan}</strong>
//                 </div>

//                 <div>
//                   <span>Status</span>
//                   <strong>{selectedUser.status}</strong>
//                 </div>

//                 <div>
//                   <span>Joined</span>
//                   <strong>{selectedUser.joined}</strong>
//                 </div>

//                 <div>
//                   <span>Plan End</span>
//                   <strong>{selectedUser.planEnd}</strong>
//                 </div>
//               </div>

//             </div>

//             <div className="detail-section">

//               <h4>Contact & Profile</h4>

//               <div className="detail-list">
//                 <p>
//                   <span>Mobile</span>
//                   {selectedUser.mobile}
//                 </p>

//                 <p>
//                   <span>Area</span>
//                   {selectedUser.area}
//                 </p>

//                 <p>
//                   <span>Location</span>
//                   {selectedUser.location}
//                 </p>

//                 <p>
//                   <span>Headline</span>
//                   {selectedUser.headline}
//                 </p>
//               </div>

//             </div>

//             <div className="detail-section">

//               <h4>AI Usage</h4>

//               <div className="usage-box">
//                 <strong>{selectedUser.aiUsage}</strong>
//                 <span>AI calls in last 30 days</span>
//               </div>

//             </div>

//             <div className="panel-actions">
//               <button className="btn secondary">
//                 Edit Profile
//               </button>

//               <button className="btn primary">
//                 Change Plan
//               </button>
//             </div>

//           </>
//         )}

//       </SidePanel>

//     </div>
//   )
// }

// export default Users



import { useState } from "react"

import {
  Download,
  Plus,
  MoreHorizontal,
  Eye,
  Pencil,
  CreditCard,
  FileText,
  Briefcase,
  Bookmark,
  Sparkles,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

import { users as initialUsers } from "../data/mockData"

import Badge from "../components/ui/Badge"
import DataTable from "../components/ui/DataTable"
import SidePanel from "../components/ui/SidePanel"

function Users() {

  const [users, setUsers] =
    useState(initialUsers)

  const [search, setSearch] =
    useState("")

  const [plan, setPlan] =
    useState("All Plans")

  const [status, setStatus] =
    useState("All Statuses")

  const [selectedUser, setSelectedUser] =
    useState(null)

  const [panelMode, setPanelMode] =
    useState("view")

  const [actionUser, setActionUser] =
    useState(null)

  const filteredUsers =
    users.filter((user) => {

      const query =
        search.toLowerCase()

      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(query) ||
        user.email
          .toLowerCase()
          .includes(query) ||
        user.mobile.includes(search)

      const matchesPlan =
        plan === "All Plans" ||
        user.plan === plan

      const matchesStatus =
        status === "All Statuses" ||
        user.status === status

      return (
        matchesSearch &&
        matchesPlan &&
        matchesStatus
      )
    })

  const openUser = (
    user,
    mode = "view"
  ) => {
    setSelectedUser(user)
    setPanelMode(mode)
    setActionUser(null)
  }

  const exportCSV = () => {

    const header =
      "Name,Email,Mobile,Area,Plan,Status,AI Usage,Joined\n"

    const rows = filteredUsers
      .map(
        (user) =>
          `"${user.name}","${user.email}","${user.mobile}","${user.area}","${user.plan}","${user.status}","${user.aiUsage}","${user.joined}"`
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
      "aifagen-users.csv"

    link.click()

    URL.revokeObjectURL(url)
  }

  const columns = [

    {
      key: "name",
      label: "User",
      render: (user) => (

        <div className="user-cell">

          <div className="table-avatar">
            {user.name.charAt(0)}
          </div>

          <div>
            <strong>
              {user.name}
            </strong>

            <span>
              {user.email}
            </span>
          </div>

        </div>
      ),
    },

    {
      key: "mobile",
      label: "Mobile",
    },

    {
      key: "area",
      label: "Area",
    },

    {
      key: "plan",
      label: "Plan",
      render: (user) => (
        <Badge type={user.plan}>
          {user.plan}
        </Badge>
      ),
    },

    {
      key: "status",
      label: "Status",
      render: (user) => (
        <Badge type={user.status}>
          {user.status}
        </Badge>
      ),
    },

    {
      key: "aiUsage",
      label: "AI / 30 Days",
      render: (user) =>
        `${user.aiUsage} calls`,
    },

    {
      key: "joined",
      label: "Joined",
    },

    {
      key: "actions",
      label: "Actions",
      render: (user) => (

        <div className="user-actions">

          <button
            className="row-icon-btn"
            title="View"
            onClick={(e) => {
              e.stopPropagation()
              openUser(user, "view")
            }}
          >
            <Eye size={15} />
          </button>

          <button
            className="row-icon-btn"
            title="Edit"
            onClick={(e) => {
              e.stopPropagation()
              openUser(user, "edit")
            }}
          >
            <Pencil size={15} />
          </button>

          <button
            className="row-icon-btn"
            title="Change plan"
            onClick={(e) => {
              e.stopPropagation()
              openUser(user, "plan")
            }}
          >
            <CreditCard size={15} />
          </button>

          <button
            className="row-icon-btn"
            title="More"
            onClick={(e) => {
              e.stopPropagation()
              setActionUser(
                actionUser === user.id
                  ? null
                  : user.id
              )
            }}
          >
            <MoreHorizontal size={15} />
          </button>

        </div>
      ),
    },
  ]

  return (
    <div>

      <div className="page-actions">

        <button
          className="btn secondary"
          onClick={exportCSV}
        >
          <Download size={15} />
          Export CSV
        </button>

        <button
          className="btn primary"
          onClick={() => {
            setSelectedUser({})
            setPanelMode("add")
          }}
        >
          <Plus size={15} />
          Add User
        </button>

      </div>

      {/* FILTERS */}

      <div className="filters card">

        <div className="search-box">

          🔍

          <input
            type="text"
            placeholder="Search name, email or mobile..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="filter-field">

          <label>Plan</label>

          <select
            value={plan}
            onChange={(e) =>
              setPlan(e.target.value)
            }
          >
            <option>All Plans</option>
            <option>None</option>
            <option>Basic</option>
            <option>Premium</option>
          </select>

        </div>

        <div className="filter-field">

          <label>Status</label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Past due</option>
            <option>Cancelled</option>
          </select>

        </div>

      </div>

      {/* TABLE */}

      <div className="table-card">

        <div className="table-top">

          <div>
            <h3>All Users</h3>

            <span>
              {filteredUsers.length}
              {" "}
              users found
            </span>
          </div>

          <span>
            25 per page
          </span>

        </div>

        <DataTable
          columns={columns}
          data={filteredUsers}
          onRowClick={(user) =>
            openUser(user, "view")
          }
        />

      </div>

      {/* SIDE PANEL */}

      <SidePanel
        open={!!selectedUser}
        onClose={() =>
          setSelectedUser(null)
        }
        title={
          panelMode === "add"
            ? "Add User"
            : panelMode === "edit"
            ? "Edit User"
            : panelMode === "plan"
            ? "Change Plan"
            : "User Details"
        }
        subtitle={
          selectedUser?.email
        }
      >

        {panelMode === "view" &&
          selectedUser && (

            <UserDetails
              user={selectedUser}
              onEdit={() =>
                setPanelMode("edit")
              }
              onPlan={() =>
                setPanelMode("plan")
              }
            />

          )}

        {panelMode === "edit" &&
          selectedUser && (

            <EditUser
              user={selectedUser}
              onSave={(updated) => {

                setUsers((current) =>
                  current.map((user) =>
                    user.id === updated.id
                      ? updated
                      : user
                  )
                )

                setSelectedUser(updated)
                setPanelMode("view")
              }}
            />

          )}

        {panelMode === "plan" &&
          selectedUser && (

            <ChangePlan
              user={selectedUser}
              onSave={(newPlan) => {

                const updated = {
                  ...selectedUser,
                  plan: newPlan,
                }

                setUsers((current) =>
                  current.map((user) =>
                    user.id === updated.id
                      ? updated
                      : user
                  )
                )

                setSelectedUser(updated)
                setPanelMode("view")
              }}
            />

          )}

        {panelMode === "add" && (

          <AddUser
            onSave={(newUser) => {

              setUsers((current) => [
                ...current,
                {
                  ...newUser,
                  id: Date.now(),
                  aiUsage: 0,
                  joined: "12 Oct 2026",
                  planEnd: "-",
                },
              ])

              setSelectedUser(null)
            }}
          />

        )}

      </SidePanel>

    </div>
  )
}


/* ---------------- USER DETAILS ---------------- */

function UserDetails({
  user,
  onEdit,
  onPlan,
}) {

  return (
    <>

      <div className="profile-header">

        <div className="profile-avatar">
          {user.name.charAt(0)}
        </div>

        <div>
          <h3>{user.name}</h3>

          <div className="profile-status">
            <Badge type={user.plan}>
              {user.plan}
            </Badge>

            <Badge type={user.status}>
              {user.status}
            </Badge>
          </div>
        </div>

      </div>

      <div className="profile-actions">

        <button
          className="btn secondary"
          onClick={onEdit}
        >
          <Pencil size={14} />
          Edit Profile
        </button>

        <button
          className="btn primary"
          onClick={onPlan}
        >
          <CreditCard size={14} />
          Change Plan
        </button>

      </div>

      <div className="detail-section">

        <h4>Contact Information</h4>

        <div className="detail-list">

          <p>
            <span>
              <Mail size={12} />
              Email
            </span>
            {user.email}
          </p>

          <p>
            <span>
              <Phone size={12} />
              Mobile
            </span>
            {user.mobile}
          </p>

          <p>
            <span>
              <MapPin size={12} />
              Location
            </span>
            {user.location}
          </p>

          <p>
            <span>Area of Interest</span>
            {user.area}
          </p>

        </div>

      </div>

      <div className="detail-section">

        <h4>Account</h4>

        <div className="detail-grid">

          <div>
            <span>Plan</span>
            <strong>{user.plan}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{user.status}</strong>
          </div>

          <div>
            <span>Joined</span>
            <strong>{user.joined}</strong>
          </div>

          <div>
            <span>Plan End</span>
            <strong>
              {user.planEnd}
            </strong>
          </div>

        </div>

      </div>

      <div className="detail-section">

        <h4>Resume</h4>

        <div className="resume-card">

          <FileText size={18} />

          <div>
            <strong>
              Latest Resume
            </strong>

            <span>
              AI Score: 86 / 100
            </span>
          </div>

          <button>
            View
          </button>

        </div>

      </div>

      <div className="detail-section">

        <h4>Activity</h4>

        <div className="activity-grid">

          <div>
            <Briefcase size={17} />
            <strong>24</strong>
            <span>Applications</span>
          </div>

          <div>
            <Bookmark size={17} />
            <strong>18</strong>
            <span>Saved Jobs</span>
          </div>

          <div>
            <Sparkles size={17} />
            <strong>
              {user.aiUsage}
            </strong>
            <span>AI Calls</span>
          </div>

        </div>

      </div>

    </>
  )
}


/* ---------------- EDIT ---------------- */

function EditUser({
  user,
  onSave,
}) {

  const [form, setForm] =
    useState(user)

  const update =
    (key, value) => {
      setForm({
        ...form,
        [key]: value,
      })
    }

  return (
    <div className="edit-form">

      <div className="form-group">
        <label>Name</label>

        <input
          value={form.name}
          onChange={(e) =>
            update(
              "name",
              e.target.value
            )
          }
        />
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          value={form.email}
          onChange={(e) =>
            update(
              "email",
              e.target.value
            )
          }
        />
      </div>

      <div className="form-group">
        <label>Mobile</label>

        <input
          value={form.mobile}
          onChange={(e) =>
            update(
              "mobile",
              e.target.value
            )
          }
        />
      </div>

      <div className="form-group">
        <label>Area of Interest</label>

        <select
          value={form.area}
          onChange={(e) =>
            update(
              "area",
              e.target.value
            )
          }
        >
          <option>
            Software Engineer
          </option>

          <option>
            AI / ML
          </option>

          <option>
            Data Scientist
          </option>

          <option>
            Data Analyst
          </option>

          <option>
            Full Stack
          </option>

          <option>
            DevOps
          </option>
        </select>

      </div>

      <button
        className="btn primary full-width"
        onClick={() =>
          onSave(form)
        }
      >
        Save Changes
      </button>

    </div>
  )
}


/* ---------------- CHANGE PLAN ---------------- */

function ChangePlan({
  user,
  onSave,
}) {

  const [selected, setSelected] =
    useState(user.plan)

  return (
    <div className="plan-selector">

      <p className="form-description">
        Select a new plan for{" "}
        <strong>{user.name}</strong>.
      </p>

      {["None", "Basic", "Premium"].map(
        (item) => (

          <button
            key={item}
            className={`plan-option ${
              selected === item
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setSelected(item)
            }
          >

            <div>
              <strong>{item}</strong>

              <span>
                {item === "Premium"
                  ? "Full access"
                  : item === "Basic"
                  ? "Standard access"
                  : "Free access"}
              </span>
            </div>

            {selected === item && (
              <span>✓</span>
            )}

          </button>

        )
      )}

      <div className="form-group">

        <label>
          Reason
        </label>

        <textarea
          rows="3"
          placeholder="Reason for plan change..."
        />

      </div>

      <button
        className="btn primary full-width"
        onClick={() =>
          onSave(selected)
        }
      >
        Confirm Plan Change
      </button>

    </div>
  )
}


/* ---------------- ADD USER ---------------- */

function AddUser({
  onSave,
}) {

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      mobile: "",
      area: "Software Engineer",
      plan: "None",
      status: "Active",
      location: "",
      headline: "",
    })

  const update =
    (key, value) => {
      setForm({
        ...form,
        [key]: value,
      })
    }

  return (
    <div className="edit-form">

      <div className="form-group">
        <label>Name *</label>

        <input
          value={form.name}
          onChange={(e) =>
            update(
              "name",
              e.target.value
            )
          }
          placeholder="Full name"
        />
      </div>

      <div className="form-group">
        <label>Email *</label>

        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            update(
              "email",
              e.target.value
            )
          }
          placeholder="user@example.com"
        />
      </div>

      <div className="form-group">
        <label>Mobile</label>

        <input
          value={form.mobile}
          onChange={(e) =>
            update(
              "mobile",
              e.target.value
            )
          }
          placeholder="+91..."
        />
      </div>

      <div className="form-group">
        <label>Area</label>

        <select
          value={form.area}
          onChange={(e) =>
            update(
              "area",
              e.target.value
            )
          }
        >
          <option>
            Software Engineer
          </option>

          <option>AI / ML</option>
          <option>Data Scientist</option>
          <option>Data Analyst</option>
          <option>Full Stack</option>
          <option>DevOps</option>
        </select>

      </div>

      <div className="form-group">
        <label>Plan</label>

        <select
          value={form.plan}
          onChange={(e) =>
            update(
              "plan",
              e.target.value
            )
          }
        >
          <option>None</option>
          <option>Basic</option>
          <option>Premium</option>
        </select>

      </div>

      <button
        className="btn primary full-width"
        onClick={() =>
          onSave(form)
        }
      >
        Create User
      </button>

    </div>
  )
}

export default Users