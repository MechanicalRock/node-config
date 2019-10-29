module.exports = {
  tslint: require('./tslint.json'),
  tsconfig: require('./tsconfig.json'),
  jest: {
    config: {
      ci: require('./jest.config.ci'),
      integration: require('./jest.config.integration'),
      default: require('./jest.config')
    }
  }
}