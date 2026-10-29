import type { Build } from "../types/Build"

const fixedBuilds: Build[] = [
  { id: 101, branch: "main", status: "success" },
  { id: 102, branch: "feature/login", status: "running" },
  { id: 103, branch: "bugfix/api", status: "failed" },
  ];

async function getBuilds(): Promise<Build[]> {
  // Simulate an API call with a delay
  //throw new Error('Simulated API failure')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fixedBuilds);
    }, 3000);
  });
}

export { getBuilds };