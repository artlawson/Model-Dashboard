export interface Build {
  id: number
  branch: string
  status: 'pending' | 'success' | 'running' | 'failed'
}
