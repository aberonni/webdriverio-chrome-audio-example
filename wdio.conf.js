const getExtension = require('./extension/getExtension');

exports.config = {
    specs: [
        'specs/**/*.js'
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            extensions: [getExtension()]
        }
    }],
    reporters: ['spec'],
    services: ['selenium-standalone', 'chromedriver']
};
