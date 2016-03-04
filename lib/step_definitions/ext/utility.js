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
