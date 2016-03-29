/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Arnaud Dezandee
 *
 * Authors:
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 */

var context = require('../../utils/context');
var slugify = require('slugify');
var path = require('path');

exports.viewport = function(sWidth, sHeight, callback) {
  this.driver.setViewportSize({
    width:  parseInt(sWidth),
    height: parseInt(sHeight)
  }, callback);
};

exports.wait = function(sec, callback) {
  setTimeout(callback, parseInt(sec) * 1000);
};

exports.takeScreenshot = function(callback) {
	var currentStep = context.getCurrentStep();
	var currentFeature = context.getCurrentFeature();
	var screenshotFilename = [slugify(currentFeature.getName()) || 'Screenshot' , '_', currentStep.getLine(), '.png'].join('');
  if (this.driver.options.screenshotPath) {
		screenshotFilename = path.join(this.driver.options.screenshotPath, screenshotFilename);
	}
  this.driver.saveScreenshot(screenshotFilename, callback);
};

exports.takeScreenshotFilename = function(filename, callback) {
	var screenshotFilename = filename;
	if (this.driver.options.screenshotPath) {
		screenshotFilename = path.join(this.driver.options.screenshotPath, screenshotFilename);
	}
  this.driver.saveScreenshot(screenshotFilename, callback);
};

const timeout = 5000;

exports.waitForText = function(selector, callback) {
	this.driver.waitForText(selector, timeout, false, callback);
};

exports.waitForNotText = function(selector, callback) {
	this.driver.waitForText(selector, timeout, true, callback);
};

exports.waitForContain = function(selector, text, callback) {
	this.driver.waitForContain(selector, text, timeout, false, callback);
};

exports.waitForNotContain = function(selector, text, callback) {
	this.driver.waitForContain(selector, text, timeout, true, callback);
};

exports.waitForMatch = function(selector, pattern, callback) {
	this.driver.waitForMatch(selector, pattern, timeout, false, callback);
};

exports.waitForNotMatch = function(selector, pattern, callback) {
  this.driver.waitForMatch(selector, pattern, timeout, true, callback);
};

exports.waitForSelected = function(selector, callback) {
	this.driver.waitForSelected(selector, timeout, true, callback);
};

exports.waitForNotSelected = function(selector, callback) {
	this.driver.waitForSelected(selector, timeout, true, callback);
};

exports.waitForExist = function(selector, callback) {
	this.driver.waitForExist(selector, timeout, true, callback);
};

exports.waitForNotExist = function(selector, callback) {
	this.driver.waitForExist(selector, timeout, true, callback);
};

exports.waitForEnabled = function(selector, callback) {
	this.driver.waitForEnabled(selector, timeout, false, callback);
};

exports.waitForDisabled = function(selector, callback) {
	this.driver.waitForEnabled(selector, timeout, true, callback);
};

exports.waitForValue = function(selector, callback) {
	this.driver.waitForValue(selector, timeout, false, callback);
};

exports.waitForNotValue = function(selector, callback) {
	this.driver.waitForValue(selector, timeout, true, callback);
};

exports.waitForVisible = function(selector, callback) {
	this.driver.waitForVisible(selector, timeout, false, callback);
};

exports.waitForInvisible = function(selector, callback) {
	this.driver.waitForVisible(selector, timeout, true, callback);
};

exports.waitForValueContain = function(selector, value, callback) {
	this.driver.waitForValueContain(selector, value, timeout, false, callback);
};

exports.waitForValueNotContain = function(selector, value, callback) {
	this.driver.waitForValueContain(selector, value, timeout, true, callback);
};

exports.waitForValueMatch = function(selector, pattern, callback) {
	this.driver.waitForValueMatch(selector, pattern, timeout, false, callback);
};

exports.waitForValueNotMatch = function(selector, pattern, callback) {
	this.driver.waitForValueMatch(selector, pattern, timeout, true, callback);
};




exports.waitForTextTimeout = function(timeout, selector, callback) {
	this.driver.waitForText(selector, timeout*1000, false, callback);
};

exports.waitForNotTextTimeout = function(timeout, selector, callback) {
	this.driver.waitForText(selector, timeout*1000, true, callback);
};

exports.waitForContainTimeout = function(timeout, selector, text, callback) {
	this.driver.waitForContain(selector, text, timeout*1000, false, callback);
};

exports.waitForNotContainTimeout = function(timeout, selector, text, callback) {
	this.driver.waitForContain(selector, text, timeout*1000, true, callback);
};

exports.waitForMatchTimeout = function(timeout, selector, pattern, callback) {
	this.driver.waitForMatch(selector, pattern, timeout*1000, false, callback);
};

exports.waitForNotMatchTimeout = function(timeout, selector, pattern, callback) {
  this.driver.waitForMatch(selector, pattern, timeout*1000, true, callback);
};

exports.waitForSelectedTimeout = function(timeout, selector, callback) {
	this.driver.waitForSelected(selector, timeout*1000, true, callback);
};

exports.waitForNotSelectedTimeout = function(timeout, selector, callback) {
	this.driver.waitForSelected(selector, timeout*1000, true, callback);
};

exports.waitForExistTimeout = function(timeout, selector, callback) {
	this.driver.waitForExist(selector, timeout*1000, true, callback);
};

exports.waitForNotExistTimeout = function(timeout, selector, callback) {
	this.driver.waitForExist(selector, timeout*1000, true, callback);
};

exports.waitForEnabledTimeout = function(timeout, selector, callback) {
	this.driver.waitForEnabled(selector, timeout*1000, false, callback);
};

exports.waitForDisabledTimeout = function(timeout, selector, callback) {
	this.driver.waitForEnabled(selector, timeout*1000, true, callback);
};

exports.waitForValueTimeout = function(timeout, selector, callback) {
	this.driver.waitForValue(selector, timeout*1000, false, callback);
};

exports.waitForNotValueTimeout = function(timeout, selector, callback) {
	this.driver.waitForValue(selector, timeout*1000, true, callback);
};

exports.waitForVisibleTimeout = function(timeout, selector, callback) {
	this.driver.waitForVisible(selector, timeout*1000, false, callback);
};

exports.waitForInvisibleTimeout = function(timeout, selector, callback) {
	this.driver.waitForVisible(selector, timeout*1000, true, callback);
};

exports.waitForValueContainTimeout = function(timeout, selector, value, callback) {
	this.driver.waitForValueContain(selector, value, timeout*1000, false, callback);
};

exports.waitForValueNotContainTimeout = function(timeout, selector, value, callback) {
	this.driver.waitForValueContain(selector, value, timeout*1000, true, callback);
};

exports.waitForValueMatchTimeout = function(timeout, selector, pattern, callback) {
	this.driver.waitForValueMatch(selector, pattern, timeout*1000, false, callback);
};

exports.waitForValueNotMatchTimeout = function(timeout, selector, pattern, callback) {
	this.driver.waitForValueMatch(selector, pattern, timeout*1000, true, callback);
};
