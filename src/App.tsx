import BuildList from './components/BuildList'
import BuildDetails from './components/BuildDetails'
import type { Build } from "./types/Build"
import './App.css'
import { useState, useEffect } from 'react'
import {getBuilds} from './api/builds'

function App() {  
  // States
  const [isLoading, setIsLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [builds, setBuilds] = useState<Build[]>([])
  const [error, setError] = useState<string | null>(null)
  const [selectedBuild, onSelectBuild] = useState<Build | null>(null)
  
  // useEffect only runs when component mounts,
  // so we can fetch builds once and set them in state
  useEffect(() => {
    const fetchBuilds = async () => {
      try {
        const buildsData = await getBuilds()
        setBuilds(buildsData)
      } catch (err) {
        console.error(err)
        setError('Error loading builds.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBuilds()
  }, [])
  

  const filteredBuilds = statusFilter !== 'all'
  ?  builds.filter(
    // filter
    (build) => build.status === statusFilter)
    // all
  : builds

  return (
    <>
      <section id="center">
        
        <div>
          <h1>Let It All Work Out</h1>
        </div>
        
        <button
        type="button"
        onClick={() => setStatusFilter('success')}
        >
        Successful Builds
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('all')}
          >
          All Builds
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('pending')}
          >
          Pending Builds
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter('failed')}
          >
          Failed Builds
        </button>
        <div>
          <BuildList 
          builds= {filteredBuilds} 
          isLoading={isLoading} 
          error={error}
          onSelectBuild={onSelectBuild}
        />
        </div>
        <div>
          <BuildDetails 
          build={selectedBuild} 
          onClose={() => onSelectBuild(null)} />
        </div>
      </section>
    </>
  )
}

export default App
