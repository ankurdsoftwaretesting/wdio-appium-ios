export const config: WebdriverIO.Config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    
    specs: ['./features/**/*.feature'],
    
    exclude: [],
    
    maxInstances: 1,
    
    capabilities: [{
        maxInstances: 5,
        browserName: '',
        acceptInsecureCerts: true,
        platformName: 'iOS',
        automationName: 'XCUITest',
        commandTimeout: 5000,
        bundleId: 'com.apple.MobileAddressBook',
        udid: '',
        deviceName: 'iPhone 12',
        platformVersion: '14.5'
    }],

    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'https://todomvc.com/examples/vue/',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
   
    services: ['appium'],
    
    framework: 'cucumber',
    
    reporters: ['spec','dot',['allure', {outputDir: 'allure-results'}]],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
}
