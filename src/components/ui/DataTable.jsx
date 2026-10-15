function DataTable({
  columns,
  data,
  onRowClick,
}) {

  return (
    <div className="table-wrapper">

      <table className="data-table">

        <thead>

          <tr>

            {columns.map(
              (column) => (
                <th
                  key={column.key}
                >
                  {column.label}
                </th>
              )
            )}

          </tr>

        </thead>

        <tbody>

          {data.length === 0 ? (

            <tr>

              <td
                colSpan={
                  columns.length
                }
              >
                <div className="empty-state">
                  No records found
                </div>
              </td>

            </tr>

          ) : (

            data.map((row) => (

              <tr
                key={row.id}
                onClick={() =>
                  onRowClick &&
                  onRowClick(row)
                }
                className={
                  onRowClick
                    ? "clickable-row"
                    : ""
                }
              >

                {columns.map(
                  (column) => (

                    <td
                      key={
                        column.key
                      }
                    >

                      {column.render
                        ? column.render(
                            row
                          )
                        : row[
                            column.key
                          ]}

                    </td>

                  )
                )}

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  )
}

export default DataTable