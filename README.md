<div align="center">
  <img src="https://raw.githubusercontent.com/expressjs/expressjs.com/gh-pages/images/express-facebook-share.png" width="200" alt="Express Logo"/>
  <h1>⚡ Express Pro Boilerplate</h1>
  <p><strong>An Industry-Standard, Highly Scalable, and Production-Ready Backend Template</strong></p>
  
  [![Build Status](https://img.shields.io/github/actions/workflow/status/askbikash/express-pro-boilerplate/ci.yml?style=for-the-badge)](https://github.com/askbikash/express-pro-boilerplate/actions)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
</div>

<br>

<div align="center">
  <b>Tired of spending hours configuring ESLint, Prettier, Error Handling, and Database connections for every new Express project?</b><br>
  <i>This boilerplate solves that. Start building your actual business logic in seconds.</i>
</div>

---

## ✨ Key Features

This template is packed with everything a modern Node.js backend requires:

| Feature | Description |
| :--- | :--- |
| 🗄️ **Dual DB Support** | Interchangable support for both **PostgreSQL** (`Sequelize`) and **MongoDB** (`Mongoose`). |
| 🔐 **Authentication** | Built-in JWT authentication, Bcrypt password hashing, and security headers. |
| 🛡️ **Validation** | Type-safe environment variables and request payload validation using **Zod**. |
| 🚀 **High Performance** | Asynchronous, structured JSON logging using **Pino** (blazing fast). |
| 🛑 **Error Handling** | Centralized error capturing using a custom `ApiError` utility. No unhandled rejections! |
| 🐳 **Docker Ready** | Local infrastructure is fully containerized with `docker-compose.yml`. |
| 🧪 **Testing Suite** | Pre-configured with **Jest** and **Supertest** for unit and integration testing. |
| 🔄 **CI/CD Built-in** | GitHub Actions workflows included to automatically run tests and linting on PRs. |

---

## 🚀 Getting Started

The absolute easiest way to start a new project is by using our interactive CLI. You don't even need to clone this repository manually!

### 1. Scaffold your project
Run the following command in your terminal. It will download the template and ask you how you want to configure it:

```bash
npx @askbikash/create-express-pro my-new-api
```

### 2. Enter the directory
```bash
cd my-new-api
```

### 3. Setup Environment Variables
The CLI handles most of this, but you can double check your `.env` file to ensure your database credentials are correct.

### 4. Start the Application
If you opted for Docker during the CLI setup, spin up your database first:
```bash
docker-compose up -d
```
Then, run the app in development mode:
```bash
npm run dev
```
🎉 **Your API is now running on `http://localhost:3000`**

---

## 📖 API Documentation (Built-in Routes)

Out of the box, this boilerplate comes with a fully functioning Authentication module to get you started.

### Auth Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Register a new user |
| `POST` | `/api/v1/auth/login` | Login and receive a JWT token |

*You can easily test these endpoints using Postman or Thunder Client.*

---

## 📂 Project Architecture

We follow a highly scalable **Feature-Based Routing** architecture. This keeps your codebase extremely clean as it grows.

<details>
<summary><b>Click to expand folder structure</b></summary>

```text
src/
├── config/           # Configuration files (env, database connection, logger setup)
├── middlewares/      # Global Express middlewares (Auth guard, Error Handler, 404 handler)
├── models/           # Database schemas (Postgres and Mongo interchangeable schemas)
├── modules/          # Feature modules! (e.g., Auth, Users, Products)
│   └── auth/         
│       ├── auth.controller.js  # Handles incoming requests
│       ├── auth.routes.js      # Defines the route paths
│       └── auth.service.js     # Business logic and database calls
├── utils/            # Helper utilities (ApiError, catchAsync wrappers)
├── app.js            # Express app assembly and global middleware mounting
└── server.js         # HTTP server entry point and graceful shutdown logic
```

</details>

---

## 🛠️ Environment Variables

This project uses `zod` to strictly validate environment variables on startup. If a required variable is missing, the app will refuse to start, saving you from hidden production bugs!

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `NODE_ENV` | Application environment (`development`, `production`, `test`) | `development` |
| `PORT` | Port the server runs on | `3000` |
| `DB_TYPE` | Database dialect (`postgres` or `mongo`) | `postgres` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `supersecret...` |

---

## 🧪 Available Commands

```bash
# Start server with Nodemon (auto-reloading)
npm run dev

# Start server in production mode
npm start

# Run all automated tests
npm run test

# Run ESLint to check code quality
npm run lint

# Automatically fix linting errors
npm run lint:fix
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Let's build the best Express boilerplate in the world together.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Bikash Kumar** 
- GitHub: [@askbikash](https://github.com/askbikash)
- NPM: [@askbikash](https://www.npmjs.com/~askbikash)

---
<div align="center">
  <i>If you found this tool helpful, please give the repo a ⭐️ to support the project!</i>
</div>
