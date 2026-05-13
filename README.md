# Node.js CI/CD Pipeline with GitHub Actions

A simple CI/CD pipeline that automatically tests, builds, and pushes a Docker image to Docker Hub on every push to main.

## How it works

Every push to main triggers a GitHub Actions workflow that does three things in order:
1. Runs Jest tests against the Node.js app. If anything fails, the pipeline stops.
2. Builds a Docker image from the Dockerfile
3. Pushes the image to Docker Hub automatically

## Screenshots

### GitHub Actions Workflow
<img src="screenshots/workflow-on-github.png" width="600" alt="GitHub Actions Workflow"/>

### Workflow File
<img src="screenshots/workflow-file.png" width="600" alt="Workflow File"/>

### Running Node.js App
<img src="screenshots/running-nodejs-app.png" width="600" alt="Running Node.js App"/>

### Docker Image on Docker Hub
<img src="screenshots/docker-image-on-docker-hub.png" width="600" alt="Docker Image on Docker Hub"/>

## Stack
- Node.js + Express
- Jest + Supertest
- Docker
- GitHub Actions

## Pipeline Flow
Push to main → Run tests → Build Docker image → Push to Docker Hub