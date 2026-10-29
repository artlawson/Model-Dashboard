import type { Build } from "../types/Build"

interface BuildDetailsProps {
  build: Build | null
  onClose: () => void
}

function BuildDetails({ build, onClose }: BuildDetailsProps) {
  if (!build) {
    return null
  }

  return (
    <>
        <div>
            <button type="button" onClick={onClose}>Close</button>
            <h3>Build Details</h3>
            <p>Build ID: {build.id}</p>
            <p>Branch: {build.branch}</p>
            <p>Status: {build.status}</p>
        </div>
    </>
  )

}

export default BuildDetails