const assert = require('assert');
const { element } = require('../extension/src/config.js');

// Don't use arrow function here
// https://mochajs.org/#arrow-functions
// eslint-disable-next-line prefer-arrow-callback
describe('Chrome audio example ', function testDescriber () {
    it('plays audio when visiting youtube video', () => {
        browser
            .url('https://www.youtube.com/watch?v=31g0YE61PLQ')
            .pause(3000);

        // element injected by extension if audio has been played
        const extensionElementSelector = `#${element.id}.${element.isPlayingAudioClass}`;

        // if the elements doesn't exist then the test should fail
        const isPlayingAudio = browser.isExisting(extensionElementSelector);
        assert(isPlayingAudio, 'Tab should be playing audio');
    });
});
