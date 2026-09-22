<div align="center">
  <h1>🚀 @askbikash/create-express-pro</h1>
  <p><strong>The Ultimate, Production-Ready Express.js CLI Scaffolding Tool</strong></p>
  
  [![npm version](https://img.shields.io/npm/v/@askbikash/create-express-pro.svg?style=flat-square)](https://www.npmjs.com/package/@askbikash/create-express-pro)
  [![npm downloads](https://img.shields.io/npm/dt/@askbikash/create-express-pro.svg?style=flat-square)](https://www.npmjs.com/package/@askbikash/create-express-pro)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
</div>

<br>

<div align="center">
  <b>Tired of setting up Express.js projects from scratch?</b><br>
  <i>Setting up ESLint, Prettier, Error Handling, Authentication, Docker, and CI/CD pipelines can take hours or even days. This CLI solves that instantly.</i>
</div>

---

## ⚡ Quick Start

You don't even need to install it globally. Just use `npx` to instantly generate your backend!

```bash
npx @askbikash/create-express-pro my-awesome-api
```

### 🎮 Interactive Setup
The CLI will interactively ask you how you want to configure your project:
1. **Which Database?** (PostgreSQL via Sequelize or MongoDB via Mongoose)
2. **Include Authentication?** (Generates pre-built JWT Register/Login endpoints)
3. **Include Docker setup?** (Generates `docker-compose.yml` for instant local DBs)
4. **Include GitHub Actions CI?** (Generates automated Testing & Linting pipelines)

Once it finishes, just navigate in and start coding:
```bash
cd my-awesome-api
npm run dev
```

---

## ✨ Features out-of-the-box

- **Database Agnostic:** Choose between **PostgreSQL** or **MongoDB** during setup.
- **Robust Authentication:** Built-in JWT-based authentication with Bcrypt password hashing.
- **Validation:** Type-safe request validation using **Zod**.
- **Logging:** High-performance, structured logging via **Pino**.
- **Centralized Error Handling:** Global error catching with custom `ApiError` classes.
- **Testing Setup:** Configured with **Jest** and **Supertest** for integration/unit testing.
- **CI/CD:** Pre-configured **GitHub Actions** workflows for automated testing and linting.
- **Code Quality:** **ESLint** and **Prettier** strictly enforced.

---

## 📂 Project Structure Generated

Your new project will be perfectly modular, feature-first, and highly scalable:

<details>
<summary><b>Click to expand folder structure</b></summary>

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
</details>

---

## 👨‍💻 Created By

**Bikash Kumar** ([askbikash](https://github.com/askbikash))  

If you found this tool helpful in saving your time, please consider giving the [GitHub Repository](https://github.com/askbikash/express-pro-boilerplate) a ⭐️!
