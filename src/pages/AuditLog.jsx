import { auditLogs } from "../data/mockData"

function AuditLog() {

  const exportCSV = () => {

    const header =
      "Date,Admin,Action,Target,Before,After,Reason\n"

    const rows = auditLogs
      .map(
        (log) =>
          `"${log.date}","${log.admin}","${log.action}","${log.target}","${log.before}","${log.after}","${log.reason}"`
      )
      .join("\n")

    const blob = new Blob(
      [header + rows],
      { type: "text/csv" }
    )

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "aifagen-audit-log.csv"
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div>

      <div className="page-actions">

        <button
          className="btn secondary"
          onClick={exportCSV}
        >
          Export CSV
        </button>

      </div>

      <div className="table-card">

        <div className="table-top">
          <div>
            <h3>Audit Log</h3>
            <span>
              Newest administrative actions first
            </span>
          </div>
        </div>

        <div className="table-wrapper">

          <table className="data-table">

            <thead>
              <tr>
                <th>When</th>
                <th>Admin</th>
                <th>Action</th>
                <th>Target</th>
                <th>Before</th>
                <th>After</th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>

              {auditLogs.map((log) => (
                <tr key={log.id}>

                  <td>{log.date}</td>

                  <td>
                    {log.admin}
                  </td>

                  <td>
                    <strong>
                      {log.action}
                    </strong>
                  </td>

                  <td>
                    {log.target}
                  </td>

                  <td>
                    <span className="old-value">
                      {log.before}
                    </span>
                  </td>

                  <td>
                    <span className="new-value">
                      {log.after}
                    </span>
                  </td>

                  <td>
                    {log.reason}
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

export default AuditLog