# node-config
Mechanical Config for node.js packages

This package captures common configuration for how we configure node modules.

## Installation

`npm install --save-dev @mechanicalrock/node-config`

## Setup

Create the following in your new module:

jest.config.ci.js:
```
const base = require('@mechanicalrock/node-config').jest.config.ci;

const overrides = {
};

module.exports = Object.assign({}, base, overrides);
```

jest.config.integration.js:
```
const base = require('@mechanicalrock/node-config').jest.config.ci;

const overrides = {
};

module.exports = Object.assign({}, base, overrides);
```

jest.config.js:
```
const base = require('@mechanicalrock/node-config').jest.config.default;

const overrides = {
};

module.exports = Object.assign({}, base, overrides);

```

tsconfig.js:
```
const config = require('@mechanicalrock/node-config').tsconfig;

console.log(config);
require('fs').writeFileSync('tsconfig.json', JSON.stringify(config));
```

Add the following scripts to your `package.json`:
```
    "build": "npm run clean && npm run init && tsc",
    "build:watch": "nodemon --watch src --legacy-watch --ext ts --exec npm run build --",
    "clean": "rm -rf .build",
    "init": "node tsconfig.js && node tslint.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:security": "snyk test",
    "test:security-monitor": "snyk monitor"
```
