<div align="center">
  <h1>🚀 create-express-pro</h1>
  <p><strong>The Ultimate, Production-Ready Express.js CLI Scaffolding Tool</strong></p>
  
  [![npm version](https://img.shields.io/npm/v/@askbikash/create-express-pro.svg?style=flat-square)](https://www.npmjs.com/package/@askbikash/create-express-pro)
  [![npm downloads](https://img.shields.io/npm/dt/@askbikash/create-express-pro.svg?style=flat-square)](https://www.npmjs.com/package/@askbikash/create-express-pro)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
</div>

<hr>

## 🌟 Why this Boilerplate?

Tired of setting up Express.js projects from scratch? Setting up ESLint, Prettier, Error Handling, Authentication, Docker, and CI/CD pipelines can take hours or even days. 

**`@askbikash/create-express-pro`** solves this instantly. With a single command, you get a highly scalable, industry-standard Express backend configured with industry best practices, straight out of the box.

## ✨ Features out-of-the-box

- **Database Agnostic:** Choose between **PostgreSQL** (Sequelize) or **MongoDB** (Mongoose) during setup.
- **Robust Authentication:** Built-in JWT-based authentication (Register, Login) with encrypted passwords.
- **Validation:** Type-safe request validation using **Zod**.
- **Logging:** High-performance, structured logging via **Pino**.
- **Centralized Error Handling:** Global error catching with custom `ApiError` classes.
- **Docker Ready:** Includes `Dockerfile` and `docker-compose.yml` for instant local development.
- **Testing Setup:** Configured with **Jest** and **Supertest** for integration/unit testing.
- **CI/CD:** Pre-configured **GitHub Actions** workflows for automated testing and linting.
- **Code Quality:** **ESLint** and **Prettier** strictly enforced.

---

## ⚡ Quick Start

You don't even need to install it globally. Just use `npx`!

```bash
# 1. Scaffold your new project
npx @askbikash/create-express-pro my-awesome-api

# 2. Navigate to the directory
cd my-awesome-api

# 3. Start the magic! 
npm run dev
```

### Interactive Prompts
The CLI will interactively ask you:
1. **Which Database?** (Postgres or MongoDB)
2. **Include Authentication?** (Yes/No)
3. **Include Docker setup?** (Yes/No)
4. **Include GitHub Actions CI?** (Yes/No)

---

## 📂 Project Structure Generated

Your new project will be perfectly modular, feature-first, and highly scalable:

```text
├── .github/workflows/   # CI/CD pipelines
├── src/
│   ├── config/          # Environment & DB configurations
│   ├── middlewares/     # Global middlewares (Auth, Error handler)
│   ├── models/          # DB Schemas & Models
│   ├── modules/         # Feature-based modules (e.g., Auth controllers, routes)
│   ├── utils/           # Helper functions (ApiError, catchAsync)
│   ├── app.js           # Express App initialization
│   └── server.js        # Server entry point
├── tests/               # Jest testing suite
├── .env.example         # Example environment variables
├── docker-compose.yml   # Docker compose configuration
└── package.json
```

---

## 👨‍💻 Created By

**Bikash Kumar** ([askbikash](https://github.com/askbikash))  
If you found this tool helpful in saving your time, please consider giving the [GitHub Repository](https://github.com/askbikash/express-pro-boilerplate) a ⭐️!
