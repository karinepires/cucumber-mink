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

const ms = 5000;

exports.waitForText = function(selector, callback) {
	this.driver.waitForText(selector, ms, false, callback);
};

exports.waitForNotText = function(selector, callback) {
	this.driver.waitForText(selector, ms, true, callback);
};

exports.waitForSelected = function(selector, reverse, callback) {
	this.driver.waitForSelected(selector, ms, reverse, callback);
};

exports.waitForExist = function(selector, callback) {
	this.driver.waitForExist(selector, ms, reverse, callback);
};

exports.waitForEnabled = function(selector, callback) {
	this.driver.waitForEnabled(selector, ms, reverse, callback);
};

exports.waitForValue = function(selector, callback) {
	this.driver.waitForValue(selector, ms, reverse, callback);
};

exports.waitForVisible = function(selector, callback) {
	this.driver.waitForVisible(selector, ms, reverse, callback);
};

exports.waitForInvisible = function(selector, callback) {
	this.driver.waitForInvisible(selector, ms, reverse, callback);
};

exports.waitForInvisible = function(selector, callback) {
	this.driver.waitForInvisible(selector, ms, reverse, callback);
};

exports.waitForContain = function(selector, text, callback) {
	this.driver.waitForContain(selector, text, ms, false, callback);
};

exports.waitForNotContain = function(selector, text, callback) {
	this.driver.waitForContain(selector, text, ms, true, callback);
};

exports.waitForMatch = function(selector, pattern, callback) {
	this.driver.waitForMatch(selector, pattern, ms, false, callback);
};

exports.waitForNotMatch = function(selector, pattern, callback) {
  this.driver.waitForMatch(selector, pattern, ms, true, callback);
};
