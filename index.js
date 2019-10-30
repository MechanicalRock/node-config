const tslint = require('./tslint.json')
const tsconfig = require('./tsconfig.json')
const jestCi = require('./jest.config.ci')
const jestIntegration = require('./jest.config.integration')
const jestDefault=require('./jest.config')
module.exports = {
  tslint,
  tsconfig,
  jest: {
    config: {
      ci: jestCi,
      integration: jestIntegration,
      default: jestDefault
    }
  }
}