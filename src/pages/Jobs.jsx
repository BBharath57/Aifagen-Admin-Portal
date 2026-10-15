import { useState } from "react"

import { jobs as initialJobs } from "../data/mockData"
import Badge from "../components/ui/Badge"
import DataTable from "../components/ui/DataTable"

function Jobs() {

  const [jobs, setJobs] = useState(initialJobs)
  const [search, setSearch] = useState("")
  const [source, setSource] = useState("All")
  const [visibility, setVisibility] = useState("All")

  const toggleVisibility = (id) => {
    setJobs((current) =>
      current.map((job) =>
        job.id === id
          ? { ...job, visible: !job.visible }
          : job
      )
    )
  }

  const filtered = jobs.filter((job) => {

    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())

    const matchesSource =
      source === "All" || job.source === source

    const matchesVisibility =
      visibility === "All" ||
      (visibility === "Visible" && job.visible) ||
      (visibility === "Hidden" && !job.visible)

    return (
      matchesSearch &&
      matchesSource &&
      matchesVisibility
    )
  })

  const columns = [
    {
      key: "title",
      label: "Job",
      render: (job) => (
        <div>
          <strong>{job.title}</strong>
          <span className="table-subtext">
            {job.company}
          </span>
        </div>
      ),
    },
    {
      key: "location",
      label: "Location",
    },
    {
      key: "source",
      label: "Source",
    },
    {
      key: "posted",
      label: "Posted",
    },
    {
      key: "visible",
      label: "Visibility",
      render: (job) => (
        <Badge type={job.visible ? "Active" : "Inactive"}>
          {job.visible ? "Visible" : "Hidden"}
        </Badge>
      ),
    },
    {
      key: "actions",
      label: "Action",
      render: (job) => (
        <button
          className="table-action"
          onClick={(e) => {
            e.stopPropagation()
            toggleVisibility(job.id)
          }}
        >
          {job.visible ? "Hide" : "Show"}
        </button>
      ),
    },
  ]

  return (
    <div>

      <div className="page-actions">
        <button className="btn secondary">
          Export CSV
        </button>

        <button className="btn primary">
          Refresh
        </button>
      </div>

      <div className="filters card">

        <div className="search-box">
          🔍
          <input
            placeholder="Search title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          <option>All</option>
          <option>LinkedIn</option>
          <option>Indeed</option>
          <option>Wellfound</option>
          <option>Naukri</option>
        </select>

        <select
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
        >
          <option>All</option>
          <option>Visible</option>
          <option>Hidden</option>
        </select>

      </div>

      <div className="table-card">

        <div className="table-top">
          <div>
            <h3>Job Listings</h3>
            <span>
              {filtered.length} jobs
            </span>
          </div>

          <span className="selection-info">
            Hidden jobs remain in the portal.
          </span>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
        />

      </div>

    </div>
  )
}

export default Jobs