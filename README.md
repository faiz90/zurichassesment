# 💳 Customer Billing Portal API

A NestJS-based REST API for managing billing records, powered by PostgreSQL and TypeORM. This project uses Docker for easy local setup.

---

## 🚀 Features

- RESTful billing endpoints (`GET`, `POST`, `PUT`, `DELETE /billing`)
- Role-based access (admin required for write operations)
- PostgreSQL 15 (Dockerized)
- TypeORM for DB access
- DTO validation with class-validator
- Swagger documentation (`/api`)
- Unit tests for service and controller

---

## 🐳 Docker-Based Setup

### ✅ Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) installed

---

### ✅ Quick Start

```bash
# Clone and navigate into the project folder
git clone <your-repo-url>
cd your-project

# Start PostgreSQL and NestJS app using Docker
docker-compose up --build
