# SOP: CI/CD Pipeline for Node.js App

## Trigger
Automatically runs on every push to `main`. No manual steps needed.

## Pipeline Steps
1. GitHub Actions spins up a fresh Ubuntu runner
2. Checks out the code
3. Installs Node.js 18 and runs `npm ci`
4. Runs `npm test` → pipeline stops here if tests fail
5. Runs `npm run build`
6. Logs into Docker Hub using stored secrets
7. Builds Docker image and pushes to Docker Hub as `devToluwa/node-cicd:latest`

## Required Secrets
Set these in GitHub repo → Settings → Secrets and variables → Actions:
- `DOCKERHUB_USERNAME`: Docker Hub username
- `DOCKERHUB_TOKEN` : Docker Hub personal access token (Read & Write)

## Running Locally
```bash
npm install
npm test
docker build -t node-cicd .
docker run -p 3000:3000 node-cicd
```