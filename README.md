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


