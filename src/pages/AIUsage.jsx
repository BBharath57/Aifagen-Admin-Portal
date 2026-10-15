import { useState } from "react"

function AIUsage() {

  const [period, setPeriod] = useState("30")

  return (
    <div>

      <div className="page-actions">

        <select
          value={period}
          onChange={(e) =>
            setPeriod(e.target.value)
          }
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>

        <button className="btn secondary">
          Export
        </button>

      </div>

      <div className="summary-grid">

        <div className="summary-card">
          <span>AI Calls</span>
          <strong>84,291</strong>
          <small>Selected period</small>
        </div>

        <div className="summary-card">
          <span>Estimated Cost</span>
          <strong>$1,284.60</strong>
          <small>API usage estimate</small>
        </div>

        <div className="summary-card">
          <span>Avg. Cost / Call</span>
          <strong>$0.015</strong>
          <small>Across all providers</small>
        </div>

        <div className="summary-card">
          <span>Active Users</span>
          <strong>3,842</strong>
          <small>Using AI features</small>
        </div>

      </div>

      <div className="two-column-cards">

        <div className="card">

          <div className="card-header">
            <div>
              <h3>Usage by Feature</h3>
              <p>AI calls in selected period</p>
            </div>
          </div>

          <div className="usage-bars">

            <div className="usage-row">
              <span>Resume Analysis</span>
              <div>
                <i style={{ width: "82%" }} />
              </div>
              <strong>34,821</strong>
            </div>

            <div className="usage-row">
              <span>Job Matching</span>
              <div>
                <i style={{ width: "67%" }} />
              </div>
              <strong>28,402</strong>
            </div>

            <div className="usage-row">
              <span>Career Assistant</span>
              <div>
                <i style={{ width: "45%" }} />
              </div>
              <strong>12,281</strong>
            </div>

            <div className="usage-row">
              <span>Job Recommendations</span>
              <div>
                <i style={{ width: "32%" }} />
              </div>
              <strong>8,787</strong>
            </div>

          </div>

        </div>

        <div className="card">

          <div className="card-header">
            <div>
              <h3>By Provider</h3>
              <p>Estimated distribution</p>
            </div>
          </div>

          <div className="provider-list">

            <div>
              <strong>OpenAI</strong>
              <span>61% · $783.60</span>
            </div>

            <div>
              <strong>Gemini</strong>
              <span>24% · $308.30</span>
            </div>

            <div>
              <strong>Anthropic</strong>
              <span>15% · $192.70</span>
            </div>

          </div>

        </div>

      </div>

      <div className="table-card">

        <div className="table-top">
          <div>
            <h3>Top Users by AI Usage</h3>
            <span>Monitor unusual usage</span>
          </div>
        </div>

        <div className="table-wrapper">

          <table className="data-table">

            <thead>
              <tr>
                <th>User</th>
                <th>AI Calls</th>
                <th>Feature</th>
                <th>Estimated Cost</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td><strong>Vikram Kumar</strong></td>
                <td>2,842</td>
                <td>Resume Analysis</td>
                <td>$42.63</td>
              </tr>

              <tr>
                <td><strong>Rahul Sharma</strong></td>
                <td>2,184</td>
                <td>Job Matching</td>
                <td>$32.76</td>
              </tr>

              <tr>
                <td><strong>Ananya Reddy</strong></td>
                <td>1,982</td>
                <td>Career Assistant</td>
                <td>$29.73</td>
              </tr>

              <tr>
                <td><strong>Arjun Mehta</strong></td>
                <td>1,640</td>
                <td>Job Recommendations</td>
                <td>$24.60</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default AIUsage