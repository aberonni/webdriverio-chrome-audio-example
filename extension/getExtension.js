const zipper = require('zip-local');
const path = require('path');

// https://www.npmjs.com/package/zip-local#zipping
module.exports = () =>
    zipper
        .sync
        .zip(path.join(__dirname, 'src'))
        .memory()
        .toString('base64');
