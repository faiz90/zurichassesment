# 💳 Customer Billing Portal API

This is a simple NestJS REST API for managing billing records, backed by a PostgreSQL database using TypeORM.

---

## 🚀 Features

- RESTful endpoints: `GET`, `POST`, `PUT`, `DELETE /billing`
- Role-based access control (admin required for create/update/delete)
- Swagger documentation (`/api`)
- PostgreSQL integration with TypeORM
- DTO validation via `class-validator`
- Unit tests for service and controller

---

## 🛠 Technologies

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/)

---

## 📦 Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
