# DevOps Portfolio Pipeline

![CI/CD Pipeline](https://github.com/bleriotwafo/devops-portfolio-pipeline/actions/workflows/ci.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-Multi--Container-blue)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-green)
![GHCR](https://img.shields.io/badge/GHCR-Container%20Registry-lightgrey)
![License](https://img.shields.io/badge/License-MIT-yellow)

Languages:  
[English](README.md) | [Français](docs/README.fr.md) | [Deutsch](docs/README.de.md)

Architecture: [View architecture diagram](docs/ARCHITECTURE.md)

## Overview

DevOps Portfolio Pipeline is a practical DevOps project built to demonstrate how a modern web application can be containerized, tested, published and deployed using professional DevOps tools.

The project is based on a simple Node.js API, but the focus is not only the application itself. The main goal is to show a complete DevOps workflow including Docker, Docker Compose, Nginx, automated testing, CI/CD with GitHub Actions, container publishing with GitHub Container Registry and production deployment scripts.

This project is part of my personal portfolio and is intended to demonstrate real-world DevOps skills in a clear and practical way.

---

## Project Goals

The main goals of this project are:

- Build a simple and reliable Node.js API
- Add automated tests for the main API endpoints
- Containerize the application with Docker
- Use Docker Compose for local and production environments
- Add Nginx as a reverse proxy
- Add Docker healthchecks for service monitoring
- Create a CI/CD pipeline with GitHub Actions
- Publish Docker images automatically to GitHub Container Registry
- Prepare a production-oriented deployment workflow
- Document the project clearly for technical reviewers

---

## Architecture

```txt
Developer
   |
   | git push
   v
GitHub Repository
   |
   v
GitHub Actions CI/CD Pipeline
   |
   | Run tests
   | Build Docker image
   | Publish Docker image
   v
GitHub Container Registry
   |
   v
Production Docker Compose
   |
   v
Nginx Reverse Proxy
   |
   v
Node.js API
```

---

## Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- Docker Compose
- Nginx
- GitHub Actions
- GitHub Container Registry
- PowerShell
- Bash

---

## Main Features

- REST API built with Node.js and Express
- Automated API testing with Jest and Supertest
- Dockerized backend application
- Multi-container setup with Docker Compose
- Nginx reverse proxy in front of the API
- Healthcheck endpoint for monitoring
- Docker healthchecks for API and Nginx
- CI/CD pipeline using GitHub Actions
- Automatic Docker image publishing to GitHub Container Registry
- Separate production Docker Compose configuration
- Deployment scripts for Windows and Linux
- Environment variable example file with `.env.example`

---

## API Endpoints

### GET `/`

Returns basic information about the API.

Example response:

```json
{
  "message": "DevOps Portfolio Pipeline API",
  "status": "running",
  "author": "Bleriot Wafo"
}
```

### GET `/health`

Returns the health status of the application.

Example response:

```json
{
  "status": "healthy",
  "uptime": 123.45
}
```

---

## Project Structure

```txt
devops-portfolio-pipeline/
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── README.fr.md
│   └── README.de.md
├── nginx/
│   └── default.conf
├── scripts/
│   ├── deploy-prod.ps1
│   └── deploy-prod.sh
├── src/
│   ├── app.js
│   └── server.js
├── tests/
│   └── app.test.js
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── docker-compose.prod.yml
├── package.json
├── package-lock.json
└── README.md
```

---

## Local Installation

Clone the repository:

```bash
git clone https://github.com/bleriotwafo/devops-portfolio-pipeline.git
cd devops-portfolio-pipeline
```

Install dependencies:

```bash
npm install
```

Start the application locally:

```bash
npm run dev
```

The API will be available at:

```txt
http://localhost:3000
```

---

## Environment Variables

Create a local `.env` file based on `.env.example`.

Example:

```env
NODE_ENV=production
PORT=3000
APP_NAME=DevOps Portfolio Pipeline API
```

The `.env` file is ignored by Git and should not be committed.

---

## Running Tests

Run the automated test suite:

```bash
npm test
```

The tests verify that the main API route and the healthcheck endpoint respond correctly.

---

## Docker Usage

Build the Docker image:

```bash
npm run docker:build
```

Start the local Docker Compose environment:

```bash
npm run compose:up
```

Start the environment in detached mode:

```bash
npm run compose:up:detached
```

View running containers:

```bash
npm run compose:ps
```

View logs:

```bash
npm run compose:logs
```

Stop the environment:

```bash
npm run compose:down
```

When running with Docker Compose, the application is available through Nginx at:

```txt
http://localhost:8080
```

---

## Production Mode

The production setup uses the Docker image published to GitHub Container Registry.

Start production mode:

```bash
npm run prod:up
```

View production containers:

```bash
npm run prod:ps
```

View production logs:

```bash
npm run prod:logs
```

Stop production mode:

```bash
npm run prod:down
```

The production Docker Compose file uses an image like:

```txt
ghcr.io/bleriotwafo/devops-portfolio-api:latest
```

---

## Deployment

A PowerShell deployment script is available for Windows:

```bash
npm run deploy:prod
```

The deployment script performs the following actions:

```txt
1. Stops existing production containers
2. Pulls the latest Docker image from GitHub Container Registry
3. Starts the production environment
4. Displays the container status
```

A Bash deployment script is also available for Linux servers:

```bash
bash scripts/deploy-prod.sh
```

---

## CI/CD Pipeline

The project uses GitHub Actions to automate the DevOps workflow.

The pipeline performs the following steps:

```txt
1. Checkout repository
2. Install Node.js dependencies
3. Run automated tests
4. Build the Docker image
5. Publish the Docker image to GitHub Container Registry
```

The CI/CD workflow ensures that the application is tested and containerized automatically after each push to the main branch.

---

## Healthchecks

The project includes healthchecks for both the Node.js API and the Nginx reverse proxy.

The API healthcheck endpoint is:

```txt
http://localhost:3000/health
```

Through Nginx, the healthcheck is available at:

```txt
http://localhost:8080/health
```

This helps verify that the containers are not only running, but also responding correctly.

---

## DevOps Skills Demonstrated

This project demonstrates the following DevOps skills:

- Containerization with Docker
- Multi-container orchestration with Docker Compose
- Reverse proxy configuration with Nginx
- CI/CD pipeline design with GitHub Actions
- Automated testing before image publishing
- Docker image publishing to a container registry
- Production deployment workflow
- Environment variable management
- Health monitoring with Docker healthchecks
- Deployment scripting with PowerShell and Bash
- Basic production-readiness practices

---

## Author

**Bleriot Wafo**

This project was created as part of my DevOps portfolio to demonstrate practical skills in automation, containerization, CI/CD and deployment workflows.