'use strict';

const logger = require('../src/middleware/logger');

describe('Logger Middleware', () => {
  it('works as expected', async () => {
    let req = {};
    let res = {};
    let next = jest.fn();

    logger(req, res, next);
    // PUT CODE HERE
  });
});