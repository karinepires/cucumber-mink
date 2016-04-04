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
 * @param {String} expectedValue
 * @param {Integer} timeout
 * @param {Boolean} reverse
 * @param {Function} callback
 */

var assert  = require('chai').assert;

module.exports = function waitForValueContain(selector, expectedValue, timeout, reverse, callback) {
  var lastResultError;
  this.client.waitUntil(function() {
    return this
      .waitForExist(selector, timeout)
      .getValue(selector).then(function(value) {
        const assertFn = reverse ? assert.returnError.notInclude : assert.returnError.include;
        lastResultError = assertFn(value, expectedValue);
        return !(lastResultError instanceof Error);
      });
  }, timeout).then(function () {
    callback();
  },function (err) {
    callback(lastResultError);
  });
};
