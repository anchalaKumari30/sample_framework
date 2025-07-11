# Playwright Test Automation Framework

A simple, scalable Playwright framework for UI and API testing of https://www.saucedemo.com/.

## Features

- Page Object Model for maintainable code
- Environment config (stage by default)
- Screenshots on test failure
- Custom HTML reports
- Sample UI & API tests

## Project Structure

```
config/           # Environment configs
pages/            # Page Object classes
tests/            # Test cases (UI & API)
utils/            # Utilities
screenshots/      # Failure screenshots
html-report/      # Custom HTML reports
playwright.config.js
package.json
```

## Getting Started

1. Clone the repo:
   ```sh
   git clone <your-repo-url>
   cd sample_framework
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run all tests:
   ```sh
   npx playwright test
   ```
4. View HTML report:
   ```sh
   npx playwright show-report
   # or open html-report/index.html in your browser
   ```

## Requirements

- Node.js >= 16
- npm

## Test Cases

- UI: Login, product check, logout, dashboard load
- API: Login (POST), Products (GET)

## Design Notes

- No public API for SauceDemo; API tests use UI endpoints
- Page Object Model for scalability
- Screenshots auto-captured on failure
- Custom HTML reports via `playwright-html-reporter`
- Default environment: stage (see `playwright.config.js`)

## Extending

- Add page objects in `/pages`
- Add tests in `/tests`
- Update configs in `/config`

---
