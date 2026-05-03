# TaskFlow Pro 🚀

## Scalable Microservice-Based Task Management Platform

TaskFlow Pro is a modern full-stack task management platform built using a distributed microservice architecture. The application demonstrates scalable backend communication, Redis-based caching, asynchronous worker processing, containerized deployment, and optimized data handling using MySQL.

The project was developed to understand how real-world scalable systems handle API communication, caching, database operations, and service orchestration across multiple independent services.

---

# ✨ Features

- Scalable microservice architecture
- RESTful API communication
- Redis caching integration
- Redis Pub/Sub messaging
- Dockerized multi-container deployment
- MySQL persistent database storage
- Responsive Next.js frontend
- Background worker service
- Distributed service communication
- Backend performance optimization

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ReactJS / Next.js | Frontend UI |
| Node.js / Express | Backend APIs |
| Redis | Caching & Pub/Sub |
| MySQL | Database |
| Docker & Docker Compose | Containerization |
| REST APIs | Service Communication |

---

# 🏗️ System Architecture

<p align="center">
  <img src="./assets/dataflow_diagram.jpg" width="850" />
</p>

<p align="center">
  Distributed Microservice Architecture Workflow
</p>

---

# 📸 Application Screenshots

## Dashboard Interface

<p align="center">
  <img src="./assets/dashboard.png" width="850" />
</p>

---

## Task Creation & Redis Cache Response

<p align="center">
  <img src="./assets/cache-response.png" width="850" />
</p>

---

## Docker Container Execution

<p align="center">
  <img src="./assets/docker-containers.png" width="850" />
</p>

---

# ⚙️ Architecture Overview

## Frontend Service (Next.js)

The frontend application provides an interactive task management interface and communicates with backend APIs to create and retrieve tasks.

Responsibilities:
- User interaction
- API communication
- Dynamic UI rendering
- Responsive design

---

## Backend Service (Express.js)

The backend acts as the communication layer between frontend, Redis cache, worker-service, and MySQL database.

Responsibilities:
- Handle REST API requests
- Implement Redis caching
- Publish Redis Pub/Sub messages
- Process incoming client requests
- Reduce database load

---

## Worker Service

The worker-service listens to Redis Pub/Sub channels and processes asynchronous database operations.

Responsibilities:
- Background task processing
- MySQL data insertion
- Distributed event handling

---

## Redis Cache & Pub/Sub

Redis is used for:
- High-speed caching
- Faster API response time
- Pub/Sub communication
- Reducing repeated database queries

---

## MySQL Database

MySQL stores application task data and provides persistent storage for the platform.

---

# 🐳 Dockerized Deployment

All services are containerized using Docker Compose for:
- Independent service execution
- Simplified deployment
- Scalable architecture
- Environment consistency

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/taskflow-pro.git
cd taskflow-pro