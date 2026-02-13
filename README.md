# 🚀 90 Days of JavaScript & Playwright

> A structured, hands-on journey from JS fundamentals to full-scale test automation — documented day by day.

![Progress](https://img.shields.io/badge/Day-90%2F90-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![Playwright](https://img.shields.io/badge/Playwright-1.x-blue?logo=playwright)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 About This Repo

This repository is my public proof of work. Over 90 days, I went from "what is a callback?" to writing robust, scalable end-to-end test suites with Playwright. Every concept is backed by working code, real test cases, and notes I wish I had when starting out.

If you're also learning — fork it, use it, break it. That's what it's here for.

---

## 🗂️ Repo Structure

```
📦 90-days-js-playwright/
├── 📁 javascript/
│   ├── 01-fundamentals/
│   ├── 02-functions-and-scope/
│   ├── 03-arrays-and-objects/
│   ├── 04-async-js/
│   ├── 05-dom-and-events/
│   └── 06-modules-and-tooling/
├── 📁 playwright/
│   ├── 01-setup-and-basics/
│   ├── 02-locators-and-selectors/
│   ├── 03-interactions/
│   ├── 04-assertions/
│   ├── 05-page-object-model/
│   ├── 06-api-testing/
│   ├── 07-visual-testing/
│   └── 08-ci-integration/
├── 📁 projects/
│   ├── e2e-demo-app/
│   ├── api-test-suite/
│   └── pom-framework/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 🧠 What I Learned

### JavaScript (Days 1–40)

| Topic | What I Covered |
|---|---|
| **Fundamentals** | Variables, types, operators, control flow, hoisting |
| **Functions & Scope** | Arrow functions, closures, `this`, lexical scope |
| **Arrays & Objects** | Destructuring, spread/rest, map/filter/reduce |
| **Async JS** | Callbacks → Promises → async/await, error handling |
| **DOM & Events** | Querying, event listeners, event bubbling, delegation |
| **Modules** | ES Modules, CommonJS, npm, bundling basics |

### Playwright (Days 41–90)

| Topic | What I Covered |
|---|---|
| **Setup** | Installation, config, browsers, projects |
| **Locators** | `getByRole`, `getByText`, `getByTestId`, CSS/XPath fallbacks |
| **Interactions** | Click, type, hover, drag-and-drop, file upload |
| **Assertions** | `expect()`, soft assertions, custom matchers |
| **Page Object Model** | Reusable components, fixture-based architecture |
| **API Testing** | `request` context, mocking, intercepting network calls |
| **Visual Testing** | Screenshot comparison, viewport testing |
| **CI/CD** | GitHub Actions pipeline, parallel execution, reporting |

---

## ⚡ Quick Start

```bash
# Clone the repo
git clone https://github.com/yourusername/90-days-js-playwright.git
cd 90-days-js-playwright

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run tests with UI mode
npx playwright test --ui

# View the HTML report
npx playwright show-report
```

---

## 🏆 Key Projects

### 1. End-to-End Demo Test Suite
Full E2E coverage for a demo e-commerce app — login, search, cart, checkout, and order confirmation flows.

```
📁 projects/e2e-demo-app/
```

### 2. API Test Suite
REST API tests using Playwright's `request` context — covers auth, CRUD operations, and error handling.

```
📁 projects/api-test-suite/
```

### 3. Page Object Model Framework
A scalable POM architecture with base page, fixtures, and reusable components — ready to plug into any project.

```
📁 projects/pom-framework/
```

---

## 📅 Daily Progress Log

<details>
<summary><strong>Days 1–10: JS Fundamentals</strong></summary>

- Day 1: Variables (`var`, `let`, `const`), data types, type coercion
- Day 2: Operators, conditionals, `switch`
- Day 3: Loops — `for`, `while`, `for...of`, `for...in`
- Day 4: Functions — declarations, expressions, arrow functions
- Day 5: Scope, hoisting, the temporal dead zone
- Day 6: Closures — how and why they work
- Day 7: `this` keyword — context, binding, `call`/`apply`/`bind`
- Day 8: Arrays — creation, methods, iteration
- Day 9: Objects — creation patterns, property access, shorthand
- Day 10: Destructuring and spread/rest operators

</details>

<details>
<summary><strong>Days 11–20: Intermediate JS</strong></summary>

- Day 11: Prototype chain and inheritance
- Day 12: ES6 Classes — constructor, methods, extends
- Day 13: Error handling — `try/catch/finally`, custom errors
- Day 14: Higher-order functions — `map`, `filter`, `reduce`
- Day 15: Callbacks and callback hell
- Day 16: Promises — creation, chaining, `.then/.catch`
- Day 17: `Promise.all`, `Promise.race`, `Promise.allSettled`
- Day 18: `async/await` — syntax, error handling patterns
- Day 19: Fetch API — making real HTTP requests
- Day 20: DOM fundamentals — querying and manipulating elements

</details>

<details>
<summary><strong>Days 21–40: Advanced JS & Tooling</strong></summary>

- Days 21–25: Events — listeners, delegation, custom events
- Days 26–30: ES Modules, CommonJS, dynamic imports
- Days 31–35: npm, package.json, scripts, devDependencies
- Days 36–40: Introduction to testing concepts, Jest basics

</details>

<details>
<summary><strong>Days 41–55: Playwright Basics</strong></summary>

- Day 41: Playwright setup, `playwright.config.ts`, first test
- Day 42: Test structure — `test`, `describe`, `beforeEach`, `afterEach`
- Days 43–47: Locators — role, text, label, placeholder, testId
- Days 48–52: Interactions — click, fill, keyboard, mouse
- Days 53–55: Assertions — `toBeVisible`, `toHaveText`, `toHaveValue`

</details>

<details>
<summary><strong>Days 56–75: Intermediate Playwright</strong></summary>

- Days 56–60: Page Object Model pattern
- Days 61–65: Fixtures — built-in and custom
- Days 66–70: Network interception, mocking API responses
- Days 71–75: API testing with Playwright's `request` context

</details>

<details>
<summary><strong>Days 76–90: Advanced Playwright & CI</strong></summary>

- Days 76–80: Visual regression testing, screenshot assertions
- Days 81–85: Parallel execution, sharding, test retries
- Days 86–88: GitHub Actions integration, environment configs
- Days 89–90: Final project — full POM framework with CI pipeline

</details>

---

## 🛠️ Tech Stack

- **Language:** JavaScript (ES2022) / TypeScript
- **Test Runner:** Playwright Test
- **Browsers:** Chromium, Firefox, WebKit
- **CI:** GitHub Actions
- **Reporting:** Playwright HTML Reporter
- **Node Version:** 18+

---

## 💡 Things That Clicked (The Real Lessons)

- Async/await doesn't eliminate the event loop — it just makes async code *look* synchronous. Understanding the underlying Promise is still essential.
- `getByRole` should be your first locator choice. It tests the way real users interact with a page and is resilient to refactoring.
- Page Object Model is not about hiding complexity — it's about organizing it so tests stay readable as the suite grows.
- Soft assertions (`expect.soft()`) are a game changer for form validation tests where you want to catch all errors in one run.
- Always set `baseURL` in `playwright.config.ts`. It makes tests portable and CI setup much cleaner.

---

## 📬 Connect

If you're on a similar journey or want to collaborate, find me on:

- **GitHub:** [@yourusername](https://github.com/yourusername)
- **LinkedIn:** [Your Name](https://linkedin.com/in/yourprofile)
- **Twitter/X:** [@yourhandle](https://twitter.com/yourhandle)

---

## 📄 License

MIT — use anything here freely.

---

<p align="center">Built in public, one day at a time. 💪</p>
