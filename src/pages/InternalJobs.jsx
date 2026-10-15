import { useState } from "react"

import { internalJobs as initialJobs } from "../data/mockData"
import Badge from "../components/ui/Badge"

function InternalJobs() {

  const [jobs, setJobs] = useState(initialJobs)

  const [form, setForm] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: "",
    skills: "",
    applyLink: "",
    visible: true,
  })

  const [editingId, setEditingId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.title || !form.description) {
      alert("Title and description are required.")
      return
    }

    if (editingId) {
      setJobs((current) =>
        current.map((job) =>
          job.id === editingId
            ? {
                ...job,
                ...form,
              }
            : job
        )
      )

      setEditingId(null)
    } else {
      setJobs((current) => [
        ...current,
        {
          id: Date.now(),
          ...form,
        },
      ])
    }

    setForm({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      description: "",
      skills: "",
      applyLink: "",
      visible: true,
    })
  }

  const editJob = (job) => {
    setEditingId(job.id)

    setForm({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: "Build and maintain AIFAGen products.",
      skills: job.skills,
      applyLink: "",
      visible: job.visible,
    })

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const toggleJob = (id) => {
    setJobs((current) =>
      current.map((job) =>
        job.id === id
          ? { ...job, visible: !job.visible }
          : job
      )
    )
  }

  const deleteJob = (id) => {
    if (window.confirm("Delete this internal job?")) {
      setJobs((current) =>
        current.filter((job) => job.id !== id)
      )
    }
  }

  return (
    <div>

      <form
        className="card job-form"
        onSubmit={handleSubmit}
      >

        <div className="card-header">
          <div>
            <h3>
              {editingId
                ? "Edit Internal Job"
                : "Create Internal Job"}
            </h3>

            <p>
              Post a new opportunity on the platform.
            </p>
          </div>
        </div>

        <div className="form-grid">

          <div className="form-group">
            <label>Title *</label>

            <input
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
              placeholder="e.g. AI Engineer"
            />
          </div>

          <div className="form-group">
            <label>Department</label>

            <input
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value,
                })
              }
              placeholder="Engineering"
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              value={form.location}
              onChange={(e) =>
                setForm({
                  ...form,
                  location: e.target.value,
                })
              }
              placeholder="Hyderabad / Remote"
            />
          </div>

          <div className="form-group">
            <label>Employment Type</label>

            <select
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value,
                })
              }
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Description *</label>

            <textarea
              rows="4"
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              placeholder="Job description..."
            />
          </div>

          <div className="form-group full">
            <label>Skills</label>

            <input
              value={form.skills}
              onChange={(e) =>
                setForm({
                  ...form,
                  skills: e.target.value,
                })
              }
              placeholder="Python, React, AI"
            />
          </div>

          <div className="form-group">
            <label>Apply Link</label>

            <input
              value={form.applyLink}
              onChange={(e) =>
                setForm({
                  ...form,
                  applyLink: e.target.value,
                })
              }
              placeholder="https://... or mailto:..."
            />
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.visible}
              onChange={(e) =>
                setForm({
                  ...form,
                  visible: e.target.checked,
                })
              }
            />

            Visible on site
          </label>

        </div>

        <div className="form-actions">

          {editingId && (
            <button
              type="button"
              className="btn secondary"
              onClick={() => setEditingId(null)}
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            className="btn primary"
          >
            {editingId ? "Update Job" : "Create Job"}
          </button>

        </div>

      </form>

      <div className="table-card">

        <div className="table-top">
          <div>
            <h3>Internal Job Postings</h3>
            <span>{jobs.length} postings</span>
          </div>
        </div>

        <div className="table-wrapper">

          <table className="data-table">

            <thead>
              <tr>
                <th>Title</th>
                <th>Department</th>
                <th>Location</th>
                <th>Type</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {jobs.map((job) => (
                <tr key={job.id}>

                  <td>
                    <strong>{job.title}</strong>
                    <span className="table-subtext">
                      {job.skills}
                    </span>
                  </td>

                  <td>{job.department}</td>

                  <td>{job.location}</td>

                  <td>{job.type}</td>

                  <td>
                    <Badge
                      type={
                        job.visible
                          ? "Active"
                          : "Inactive"
                      }
                    >
                      {job.visible
                        ? "Visible"
                        : "Hidden"}
                    </Badge>
                  </td>

                  <td>

                    <div className="action-group">

                      <button
                        className="table-action"
                        onClick={() =>
                          editJob(job)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="table-action"
                        onClick={() =>
                          toggleJob(job.id)
                        }
                      >
                        {job.visible
                          ? "Hide"
                          : "Show"}
                      </button>

                      <button
                        className="table-action danger-text"
                        onClick={() =>
                          deleteJob(job.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default InternalJobs