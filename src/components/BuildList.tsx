import type { Build } from "../types/Build"

interface BuildListProps {
  builds: Build[]
  isLoading: boolean
  error: string | null
  onSelectBuild: (build: Build | null) => void
}

function BuildList({ builds, isLoading, error, onSelectBuild }: BuildListProps) {
  if (isLoading) {
    return <p>Loading builds...</p>
  }
  else if (error) {
    return <p role="alert">{error}</p>
  }
  else if (builds.length === 0) {
    return <p>No builds available.</p>
  }
  // else success
  // return dashboard
  

  return (
    <>
      <h2>Build Status Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Build ID</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
          {builds.map((build) => (
            <tr key={build.id}>
              <td>{build.id}</td>
              <td>{build.branch}</td>
              <td>{build.status}</td>
              <td> 
                <button
                type="button"
                onClick={() => onSelectBuild(build)}
                >
                View
                </button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default BuildList