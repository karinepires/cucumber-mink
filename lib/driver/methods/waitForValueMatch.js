/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Karine Pires
 *
 * Authors:
 *     Karine Pires <karine.pires@alterway.fr>
 */

/**
 * @param {String} selector
 * @param {String} pattern
 * @param {Integer} timeout
 * @param {Boolean} reverse
 * @param {Function} callback
 */

var assert  = require('chai').assert;

module.exports = function waitForValueMatch(selector, pattern, timeout, reverse, callback) {
  var lastResultError;
  this.client.waitUntil(function() {
    return this
      .waitForExist(selector, timeout)
      .getValue(selector).then(function(value) {
        const expectedText = new RegExp(pattern);
        const assertFn = reverse ? assert.returnError.notMatch : assert.returnError.match;
        lastResultError = assertFn(value, expectedText);
        return !(lastResultError instanceof Error);
      });
  }, timeout).then(function () {
    callback();
  },function (err) {
    callback(lastResultError);
  });
};
