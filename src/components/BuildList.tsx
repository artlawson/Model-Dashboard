import type { Build } from "../types/Build"

function BuildList({ builds }: { builds: Build[] }) {
  return (
    <>
      <h2>Build Status Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Build ID</th>
            <th>Branch</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {builds.map((build) => (
            <tr key={build.id}>
              {build.id} - {build.branch} - {build.status}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default BuildList