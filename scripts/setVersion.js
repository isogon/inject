#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

if (process.env.TRAVIS !== 'true') {
  process.exit(0);
}

if (process.env.TRAVIS_PULL_REQUEST !== 'false') {
  console.log('deploys should never be run for pull requests');
  process.exit(1);
}

const tagName = process.env.TRAVIS_TAG;

if (tagName.replace(/^\d+\.\d+\.\d+$/, '') !== '') {
  console.log(`the tag '${tagName}' is not a valid semver version`);
  process.exit(1);
}

const packagePath = path.resolve(__dirname, '../package.json');

const currentPackage = JSON.parse(fs.readFileSync(packagePath).toString());

currentPackage.version = tagName;

fs.writeFileSync(packagePath, JSON.stringify(currentPackage, null, 2));
