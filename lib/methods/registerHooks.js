/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Arnaud Dezandee
 *
 * Authors:
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 */

var path = require('path');
var context = require('../utils/context');
var slugify = require('slugify');

/**
 * Register mink driver hooks on cucumber context
 * @param {Object}  Cucumber    cucumber-js context
 * @param {Object}  Driver      mink driver instance
 */
module.exports = function registerHooks(Cucumber, Driver) {
  var options = Driver.options;

  Cucumber.registerHandler('BeforeFeatures', function (event, callback) {
    Driver.init(function () {
      Driver.setViewportSize({ width: 1366, height: 768 }, callback);
    });
  });

  Cucumber.registerHandler('AfterFeatures', function (event, callback) {
    Driver.end(callback);
  });

  // Register hooks that will expose context
  Cucumber.registerHandler('BeforeFeature', function (event, callback) {
    context.setCurrentFeature(event.getPayloadItem('feature'));
    callback();
  });

  Cucumber.registerHandler('BeforeScenario', function (event, callback) {
    context.setCurrentScenario(event.getPayloadItem('scenario'));
    callback();
  });

  Cucumber.registerHandler('BeforeStep', function (event, callback) {
    context.setCurrentStep(event.getPayloadItem('step'));
    callback();
  });

  /* istanbul ignore next */
  if (options.screenshotPath) {
    Cucumber.After(function (event, callback) {
      if (!event.isFailed()) {
        return callback();
      }
      var fileName = [slugify(event.getName()) || 'Error', ':', event.getLine(), '.png'].join('');
      var filePath = path.join(options.screenshotPath, fileName);
      Driver.saveScreenshot(filePath, callback);
    });
  }
};
