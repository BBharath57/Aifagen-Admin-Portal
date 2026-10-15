import { useState } from "react"

import { jobSources as initialSources } from "../data/mockData"
import Badge from "../components/ui/Badge"

function JobSources() {

  const [sources, setSources] =
    useState(initialSources)

  const working = sources.filter(
    (s) => s.status === "Working"
  ).length

  const attention = sources.length - working

  const refreshSource = (id) => {

    setSources((current) =>
      current.map((source) =>
        source.id === id
          ? {
              ...source,
              status: "Running",
              note: "Refresh started...",
            }
          : source
      )
    )

    setTimeout(() => {
      setSources((current) =>
        current.map((source) =>
          source.id === id
            ? {
                ...source,
                status: "Working",
                note: "Running normally",
              }
            : source
        )
      )
    }, 1200)
  }

  return (
    <div>

      <div className="source-summary">

        <div>
          <strong>{working} working</strong>
          <span> · </span>
          <strong className="danger">
            {attention} need attention
          </strong>
        </div>

        <button
          className="btn primary"
          onClick={() => {
            sources.forEach(
              (source) =>
                source.status !== "Working" &&
                refreshSource(source.id)
            )
          }}
        >
          ↻ Start Refresh
        </button>

      </div>

      <div className="table-card">

        <div className="table-top">
          <div>
            <h3>Job Sources</h3>
            <span>
              Problem sources appear first
            </span>
          </div>
        </div>

        <div className="table-wrapper">

          <table className="data-table">

            <thead>
              <tr>
                <th>Source</th>
                <th>Status</th>
                <th>Last Run</th>
                <th>Duration</th>
                <th>Jobs Saved</th>
                <th>24h Jobs</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {[...sources]
                .sort((a, b) =>
                  a.status === "Working"
                    ? 1
                    : b.status === "Working"
                    ? -1
                    : 0
                )
                .map((source) => (

                  <tr key={source.id}>

                    <td>
                      <strong>{source.name}</strong>
                    </td>

                    <td>
                      <Badge
                        type={
                          source.status === "Working"
                            ? "Active"
                            : "Failed"
                        }
                      >
                        {source.status}
                      </Badge>
                    </td>

                    <td>{source.lastRun}</td>

                    <td>{source.duration}</td>

                    <td>
                      {source.jobs}
                      <span className="new-jobs">
                        {" "}
                        (+{source.newJobs})
                      </span>
                    </td>

                    <td>{source.jobs24h}</td>

                    <td>{source.note}</td>

                    <td>
                      <button
                        className="table-action"
                        onClick={() =>
                          refreshSource(source.id)
                        }
                      >
                        Refresh
                      </button>
                    </td>

                  </tr>

                ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="card run-history">

        <div className="card-header">
          <div>
            <h3>Recent Run History</h3>
            <p>Latest collection activity</p>
          </div>
        </div>

        <div className="history-row">
          <span>12 Oct · 10:20 AM</span>
          <strong>LinkedIn</strong>
          <Badge type="Active">Completed</Badge>
          <span>482 jobs</span>
        </div>

        <div className="history-row">
          <span>12 Oct · 10:05 AM</span>
          <strong>Indeed</strong>
          <Badge type="Active">Completed</Badge>
          <span>316 jobs</span>
        </div>

        <div className="history-row">
          <span>12 Oct · 09:15 AM</span>
          <strong>Naukri</strong>
          <Badge type="Failed">Failed</Badge>
          <span>Authentication failed</span>
        </div>

      </div>

    </div>
  )
}

export default JobSources