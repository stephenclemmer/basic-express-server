'use strict';

const validator = require('../src/middleware/logger');

describe('Validator Middleware', () => {
  it('works as expected', async () => {
    let req = {};
    let res = {};
    let next = jest.fn();

    validator(req, res, next);
    // PUT CODE HERE
  });
});