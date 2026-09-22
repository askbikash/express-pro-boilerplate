# Express Pro Boilerplate

An industry-standard, plain JavaScript (ESM) Express.js boilerplate designed for production APIs.

## Features
- **Modern JavaScript:** Uses ES Modules (`type: module`) and the latest features.
- **Express 5:** Uses the next-generation Express framework with built-in async error handling.
- **Validation:** Type-safe runtime validation using [Zod](https://zod.dev/).
- **Database:** Out-of-the-box support for both **PostgreSQL** (via Sequelize) and **MongoDB** (via Mongoose).
- **Authentication:** Built-in JWT authentication (Register, Login, Refresh).
- **Authorization:** Declarative Role-Based Access Control (RBAC).
- **Logging:** High-performance structured JSON logging using [Pino](https://getpino.io/).
- **Testing:** Integration tests configured with Jest and Supertest.
- **Docker:** Ready-to-go `Dockerfile` and `docker-compose.yml` for local development.
- **CI/CD:** GitHub Actions configured for automated linting and testing.
- **API Documentation:** Swagger UI built-in for interactive endpoint documentation.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in the required variables.

### 3. Start Database
```bash
docker-compose up -d db
```

### 4. Run the Server
```bash
npm run dev
```

The API will be available at `http://localhost:3000`. You can view the interactive Swagger documentation at `http://localhost:3000/api-docs`.

## Available Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run test` - Run Jest test suite

## Architecture
This boilerplate uses a **Feature-first** architecture. Each domain (e.g., `auth`, `users`) is isolated within the `src/modules/` directory containing its own routes, controller, service, and validation logic. This promotes better maintainability and scalability than traditional layer-first architectures.
