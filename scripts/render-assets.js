'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');

    const wellKnownPath = upath.resolve(upath.dirname(__filename), '../src/.well-known');

    sh.cp('-R', sourcePath, destPath)
    sh.cp('-R', wellKnownPath, destPath)
};