import BuildList from './components/BuildList'
import type { Build } from "./types/Build"
import './App.css'
import { useState } from 'react'

const fixedBuilds: Build[] = [
  { id: 101, branch: "main", status: "success" },
  { id: 102, branch: "feature/login", status: "running" },
  { id: 103, branch: "bugfix/api", status: "failed" },
  ];

interface BuildListProps {
  builds: Build[]
}
const listProps: BuildListProps = {builds: fixedBuilds}



function App() {  
  const [statusFilter, setStatusFilter] = useState('all')
  const filteredBuilds = statusFilter !== 'all'
  ?  listProps.builds.filter(
    // filter
    (build) => build.status === statusFilter)
    // all
  : listProps.builds 

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
        <div>
          <BuildList builds= {filteredBuilds}/>
        </div>
      </section>
    </>
  )
}

export default App
