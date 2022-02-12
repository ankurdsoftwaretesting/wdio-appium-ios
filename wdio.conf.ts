export const config: WebdriverIO.Config = {
  hostname: '127.0.0.1',
  port: 4723,
  path: '/wd/hub',

  specs: ['./features/**/*.feature'],

  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      maxInstances: 1,
      browserName: '',
      acceptInsecureCerts: true,
      platformName: 'iOS',
      automationName: 'XCUITest',
      bundleId: 'com.apple.MobileAddressBook',
      commandTimeout: 4000,
      udid: '',
      
      deviceName: process.env.DEVICE_NAME || 'iPhone 13 Pro Max',
      platformVersion: '15.2',
    },
  ],

  logLevel: 'info',

  bail: 0,

  baseUrl: 'https://todomvc.com/examples/vue/',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['appium'],

  framework: 'cucumber',

  reporters: ['spec', 'dot', ['allure', { outputDir: 'allure-results' }]],

  cucumberOpts: {
    require: ['./features/step-definitions/*-steps.ts'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
