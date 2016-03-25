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
 * @param {String} localPath
 * @param {Function} callback
 */

var assert  = require('chai').assert;

module.exports = function waitForMatch(selector, pattern, ms, reverse, callback) {
	var lastResultError;
	this.client.waitUntil(function() {
	  return this.getText(selector).then(function(text) {
	  	const expectedText = new RegExp(pattern);
	  	const assertFn = reverse ? assert.returnError.notMatch : assert.returnError.match;
	  	lastResultError = assertFn(text, expectedText);
	    return !(lastResultError instanceof Error);
	  });
	}, ms).then(function () {
    callback();
  },function (err) {
    callback(lastResultError);
  });
};
