/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Arnaud Dezandee
 *
 * Authors:
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 */

var assert = require('chai').assert;
var nUrl = require('url');

///////////////////

function browserUrl(property, assertionFn) {
  return function (input, callback) {
    this.driver.url(function (err, oUrl) {
      if (err) return callback(err);
      callback(assertionFn(oUrl[property], input));
    });
  };
}

function browserUrlMatch(property) {
  return function(pattern, callback) {
    browserUrl(property, assert.returnError.match).bind(this)(new RegExp(pattern), callback);
  };
}

function browserRoot() {
  return function (callback) {
    browserUrl('pathname', assert.returnError.equal).bind(this)('/', callback);
  };
}

function browserUrlWaitBase(property, assertFn, timeout) {
  return function(expectedUrl, callback) {
    var lastResultError;
    this.driver.client.waitUntil(function() {
      return this.url()
        .then(function(currentSessionUrl) {
          var currentUrl = nUrl.parse(currentSessionUrl.value);
          lastResultError = assertFn(currentUrl[property], expectedUrl);
          return !(lastResultError instanceof Error);
        }, function(err) {
          return callback(err);
        });
    }, timeout).then(function () {
      callback();
    },function (err) {
      callback(lastResultError);
    });
  };
}

function browserUrlWait(property, isRegex) {
  return function(pattern, callback) {
    var urlExpected = isRegex ? new RegExp(pattern) : pattern;
    var assertFn = isRegex ? assert.returnError.match : assert.returnError.equal;
    browserUrlWaitBase(property, assertFn, this.driver.options.waitTimeout).bind(this)(urlExpected, callback);
  };
}

function browserUrlWaitTimeout(property, isRegex) {
  return function(timeout, pattern, callback) {
    var urlExpected = isRegex ? new RegExp(pattern) : pattern;
    var assertFn = isRegex ? assert.returnError.match : assert.returnError.equal;
    browserUrlWaitBase(property, assertFn, timeout*1000).bind(this)(urlExpected, callback);
  };
}

///////////////////

module.exports = {
  equal:       browserUrl('pathname', assert.returnError.equal),
  match:       browserUrlMatch('pathname'),
  queryMatch:  browserUrlMatch('search'),
  hashMatch:   browserUrlMatch('hash'),
  root:        browserRoot(),

  waitForURLEqual: browserUrlWait('pathname', false),
  waitForURLMatch: browserUrlWait('pathname', true),
  waitForURLQueryMatch: browserUrlWait('search', true),
  waitForURLHashMatch: browserUrlWait('hash', true),

  waitForURLEqualTimeout: browserUrlWaitTimeout('pathname', false),
  waitForURLMatchTimeout: browserUrlWaitTimeout('pathname', true),
  waitForURLQueryMatchTimeout: browserUrlWaitTimeout('search', true),
  waitForURLHashMatchTimeout: browserUrlWaitTimeout('hash', true)
};
