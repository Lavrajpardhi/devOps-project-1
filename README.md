CI/CD Pipeline with GitHub Actions & Docker

A robust, local-first CI/CD pipeline implementation built as part of the Elevate Labs DevOps Internship. This project automates code testing, containerization, and local deployment using modern DevOps tools without requiring paid cloud infrastructure.

🚀 Project Overview

The primary objective of this project is to set up a complete Continuous Integration and Continuous Deployment (CI/CD) workflow. Code changes pushed to the repository automatically trigger automated testing via GitHub Actions, build a production-ready Docker image, and publish it to Docker Hub.

🛠️ Tools & Technologies Used

Version Control: Git & GitHub

CI/CD Automation: GitHub Actions

Containerization: Docker & Docker Hub

Runtime Environment: Node.js & Express.js

Testing Framework: Jest & Supertest

⚙️ Architecture & Steps Involved

Application Setup: Developed a lightweight Express.js web server with automated test coverage.

Automated Testing: Configured Jest and Supertest to execute integration tests on HTTP endpoints.

Continuous Integration (CI): Implemented a GitHub Actions workflow (.github/workflows/ci.yml) that spins up an Ubuntu environment, installs dependencies, and runs tests automatically on every git push.

Containerization: Created a multi-layered Dockerfile using node:18-alpine to package the Node.js application securely and efficiently.

Continuous Deployment (CD): Built and pushed the Docker container image to Docker Hub, allowing seamless local execution via Docker Desktop.

📂 Project Directory Structure

devOps-project-1/
│
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI/CD pipeline workflow
│
├── node_modules/           # Dependencies (ignored in git)
├── app.js                  # Main Express.js application server
├── test.js                 # Automated integration tests
├── Dockerfile              # Instructions for building the Docker container
├── package.json            # Project metadata and dependencies script
├── package-lock.json       # Locked dependency versions
└── .gitignore              # Files to ignore during version control


🚀 Getting Started & Local Execution

To run this project locally on your machine, follow these steps:

1. Clone the Repository

git clone https://github.com/Lavrajpardhi/devOps-project-1.git
cd devOps-project-1


2. Install Dependencies

npm install


3. Run Automated Tests

npm test


4. Build and Run Docker Container Locally

# Build the Docker image
docker build -t lavrajpardhi/devops-project-1:latest .

# Run the container
docker run -d -p 3000:3000 lavrajpardhi/devops-project-1:latest


Open your browser and navigate to: http://localhost:3000

📸 Screenshots & Proof of Work

GitHub Actions CI/CD Success: Pipeline passing with a green checkmark (✅).

Docker Container Running: Active status in Docker Desktop and response in the local web browser.
