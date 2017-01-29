const path = require('path');

const srcType = process.env.INJECT_TEST_TYPE || 'src';

if (srcType === 'src') {
  require('babel-register');
}

const injectMiddleware = require(path.resolve(__dirname, '..', srcType));

global.injectMiddleware = (injectMiddleware.default) ? injectMiddleware.default : injectMiddleware;

global.sinon = require('sinon');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

chai.use(chaiAsPromised);
chai.use(sinonChai);
global.expect = chai.expect;
