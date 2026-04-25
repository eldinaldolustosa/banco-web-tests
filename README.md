# Bank Web Tests

## Project Objective

This project demonstrates end-to-end test automation for a banking web application using Cypress and JavaScript. The focus is to showcase to recruiters and repository visitors how tests were automated with Cypress, code was organized efficiently using Custom Commands, and the project's evolution over time through commits and GitHub interactions.

## Installation and Execution Guide

### Prerequisites

- Node.js installed
- The dependent applications must be running:
  - API: [banco-api](https://github.com/eldinaldolustosa/qa-mentorship-program-banco-api)
  - Web Application: [banco-web](https://github.com/eldinaldolustosa/qa-mentorship-program-banco-web)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eldinaldolustosa/banco-web-tests.git
   cd banco-web-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Tests

- Run all tests in headless mode:
  ```bash
  npm run test
  ```

- Run tests in interactive mode (opens Cypress Test Runner):
  ```bash
  npm run cy:open
  ```

- Run tests with GUI:
  ```bash
  npm run cy:headed
  ```

## Project Components

- **Cypress**: Main framework for E2E test automation.
- **Mochawesome Reporter**: Generates detailed HTML test reports.
- **Custom Commands**: Custom commands for code reuse and improved readability.
- **Fixtures**: Mocked data to dynamize tests.
- **npm Scripts**: Commands for quick test execution.

## File and Folder Structure

```
banco-web-tests/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js          # Login tests
│   │   └── transferencia.cy.js  # Transfer tests
│   ├── fixtures/
│   │   ├── credentials.json     # Valid and invalid credentials
│   │   └── example.json         # Standard Cypress fixture example
│   ├── reports/
│   │   └── html/                # Generated HTML reports
│   ├── screenshots/             # Test screenshots
│   ├── support/
│   │   ├── commands.js          # Main commands file
│   │   ├── e2e.js               # E2E configurations
│   │   └── commands/
│   │       ├── common.js        # Common commands (toast, combobox)
│   │       ├── login.js         # Login commands
│   │       └── transferencia.js # Transfer commands
│   └── videos/                  # Test videos
├── cypress.config.js            # Cypress configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Project Evolution

The project's evolution can be tracked through commits and pull requests on GitHub. Here's a chronological summary of the main changes:

- **Initial commit**: Initial project setup.
- **starting-project**: Addition of initial files and first login test.
- **add-new-test-login-fail**: Addition of test with invalid credentials and code reduction with hooks.
- **add-beforeEach-Hook**: Implementation of BeforeEach hook to access login page.
- **add-before-each-login**: Addition of BeforeEach to access login page.
- **Add-Command-Line-Scripts**: Addition of command-line scripts in package.json for test execution.
- **add-videos-screenshots-commands**: Creation of evidence with screenshots and videos.
- **add-fixtures**: Addition of fixtures for credentials and environment variables.
- **chance-to-baseUrl**: Change of origin URL.
- **start-transferencia-test**: Start of base transfer screen testing.
- **custom-commands-implementation**: Implementation of custom commands for login, transfers, and common actions.
- **Add-HTML-report**: Addition of HTML report with Mochawesome.

For more details, check the [commit history](https://github.com/eldinaldolustosa/banco-web-tests/commits/main).

## Tests and Custom Commands

### Implemented Tests

- **Login**:
  - Valid data login: Verifies user can access the system.
  - Invalid data login: Verifies error message is displayed.

- **Transfers**:
  - Valid transfer: Verifies transfer is completed successfully.
  - Transfer above R$5,000 without token: Verifies error message for required authentication.

### Custom Commands Used

- **loginValidCredential()**: Performs login with valid credentials.
- **loginInvalidCredential()**: Performs login with invalid credentials.
- **transferAmount(originAccount, destinationAccount, amount)**: Performs transfer between accounts.
- **verifyToastMessage(message)**: Verifies toast messages.
- **selectComboBox(labelField, option)**: Selects option in combobox.

## Fixtures Used

Fixtures are used to dynamize tests by providing mocked data:

- **credentials.json**: Contains valid and invalid credentials for login tests.
  ```json
  {
    "valida": {
      "user": "julio.lima",
      "password": "123456"
    },
    "invalida": {
      "user": "julio.lima",
      "password": "1234567"
    }
  }
  ```

- **example.json**: Standard Cypress example for demonstration.

## Environment Variables and Credentials

- **baseUrl**: Defined in `cypress.config.js` as `http://localhost:4000/` (web application).
- Credentials: Stored in fixtures for security and reuse.
- Environment variables can be configured via `.env` file (not versioned).

## Code Reuse and Evolution

Initially, tests were written with direct code, leading to repetition. Over time, Custom Commands were created to encapsulate common actions like login and transfers. This enabled:

- Reduction of code duplication.
- Improved test readability.
- Easier maintenance and updates.
- Reuse across multiple tests.

For example, the `cy.loginValidCredential()` command replaced several repeated lines of code, evolving from hardcoded tests to a more modular approach.

## Contact

For more information or professional opportunities, connect via LinkedIn: [https://www.linkedin.com/in/eldinaldolustosa/](https://www.linkedin.com/in/eldinaldolustosa/)

Thank you for visiting this repository! Feel free to reach out for any questions or collaborations.

## Technologies

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-FF6B6B?style=for-the-badge&logo=mocha&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)