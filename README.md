# telnyx.com Test Project

## Overview

This project is a Cypress test suite for testing the functionalities of the telnyx.com website. It includes various test cases to ensure the reliability and performance of the site's features across different browsers and screen resolutions.
## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gadiim/23.09.24_cypress_project.git
   ```
2. Navigate into the project directory:
   ```bash
   cd 23.09.24_cypress_project
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running Tests

You can run tests in various ways:

- To open the Cypress Test Runner:
   ```bash
   npm run cypress:open
   ```
- To run all tests in headless mode:  
   ```bash
   npm run cypress:run
   ```
- To run tests in specific browsers:
   ```bash
   npm run cypress:run:chrome
   npm run cypress:run:firefox
   ```
- To run tests for specific test files:
  ```bash
   npm run test:footer
   npm run test:header
   npm run test:shop
   npm run test:header-nfs
   ```
## Test Structure

The tests are organized in the following structure:
   ```sql
   cypress/
├── e2e/
│   ├── test_footer_full-screen_spec.js
│   ├── test_header_full-screen_spec.js
│   ├── test_header_non-full-screen_spec.js
│   └── test_shop_full-screen_spec.js
└── fixtures/
   ```
Each test file contains specific test cases that validate various functionalities of the website.

## Configuration

The Cypress configuration is located in cypress.config.js. 

### Configuration:
```javascript
module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    retries: 1,
    screenshotOnRunFailure: true,
  },
});
```
### Contributing:

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

 ## License

 No license yet.
