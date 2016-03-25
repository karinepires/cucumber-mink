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
 * @param {String} expectedText
 * @param {Integer} timeout
 * @param {Boolean} reverse
 * @param {Function} callback
 */

var assert  = require('chai').assert;

module.exports = function waitForContain(selector, expectedText, timeout, reverse, callback) {
	var lastResultError;
	this.client.waitUntil(function() {
	  return this.getText(selector).then(function(text) {
	  	const assertFn = reverse ? assert.returnError.notInclude : assert.returnError.include;
	    lastResultError = assertFn(text, expectedText);
	    return !(lastResultError instanceof Error);
	  });
	}, timeout).then(function () {
    callback();
  },function (err) {
    callback(lastResultError);
  });
};
