<div align="center">
  <img src="https://raw.githubusercontent.com/expressjs/expressjs.com/gh-pages/images/express-facebook-share.png" width="200" alt="Express Logo"/>
  <h1>⚡ Express Pro Boilerplate</h1>
  <p><strong>An Industry-Standard, Highly Scalable, and Production-Ready Backend Template</strong></p>
  
  [![Build Status](https://img.shields.io/github/actions/workflow/status/askbikash/express-pro-boilerplate/ci.yml?style=for-the-badge)](https://github.com/askbikash/express-pro-boilerplate/actions)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
</div>

<hr>

## 🚀 The Easiest Way to Start

You don't need to manually clone this repository. We have built an interactive CLI tool to automatically configure everything for you!

Just run this command in your terminal:
```bash
npx @askbikash/create-express-pro my-app
```
*The CLI will ask you whether you want PostgreSQL or MongoDB, configure Docker, setup CI/CD, and more!*

---

## 💎 Features

This repository is packed with everything a Senior Engineer expects from a Node.js backend:

- **Dual Database Support:** Native, abstracted support for both **PostgreSQL** (`Sequelize`) and **MongoDB** (`Mongoose`).
- **Authentication & Security:** Fully integrated JWT authentication, Bcrypt password hashing, and Helmet headers.
- **Environment Management:** Strongly typed environment variables using **Zod**. If you miss an env variable, the app won't start!
- **Error Handling:** Centralized, highly structured error handling utilizing a custom `ApiError` utility. No more random crashes.
- **Blazing Fast Logging:** Integrated with **Pino** for asynchronous, high-throughput JSON logging.
- **Testing Ready:** Fully configured with **Jest** and **Supertest** with an isolated testing environment and parallel test execution.
- **Dockerized:** Instant setup for local development using `docker-compose.yml`.
- **Automated CI/CD:** Ready-to-go GitHub Actions pipelines for running linters and matrix tests against both DBs.
- **Pristine Code Quality:** Strict **ESLint** rules and **Prettier** formatting enforced.

---

## 📁 Architecture 

We use a highly scalable **Feature/Module-First** architectural pattern. Instead of dumping all routes, controllers, and services into massive global folders, features are encapsulated.

```text
src/
├── config/           # Centralized configuration files (env, database, logger)
├── middlewares/      # Global Express middlewares (Auth, Error Handler, Not Found)
├── models/           # Database schemas (Postgres and Mongo interchangeable)
├── modules/          # The meat of the app! Feature-based folders.
│   └── auth/         # E.g., Auth module encapsulating its own route, controller, and service.
├── utils/            # Helper utilities (ApiError, catchAsync)
├── app.js            # Express app assembly
└── server.js         # HTTP server entry point
```

---

## 🛠️ Manual Installation & Setup

If you prefer cloning the boilerplate manually instead of using the CLI:

### 1. Clone & Install
```bash
git clone https://github.com/askbikash/express-pro-boilerplate.git
cd express-pro-boilerplate
npm install
```

### 2. Environment Variables
Copy the `.env.example` file and rename it to `.env`:
```bash
cp .env.example .env
```
*(Make sure to update the database credentials inside the `.env` file!)*

### 3. Spin up Infrastructure (Optional but recommended)
Use Docker Compose to instantly launch your required databases locally:
```bash
docker-compose up -d
```

### 4. Run the App
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

---

## 🧪 Testing & Code Quality

```bash
# Run all Jest integration and unit tests
npm run test

# Run ESLint to catch syntax and style errors
npm run lint

# Automatically fix linting errors
npm run lint:fix
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Let's make this the #1 Express boilerplate in the world.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Bikash Kumar** 
- GitHub: [@askbikash](https://github.com/askbikash)

---
<div align="center">
  <i>If you found this boilerplate helpful, please give it a ⭐️ to help it grow!</i>
</div>
