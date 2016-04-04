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
 * @param {Integer} timeout
 * @param {Boolean} reverse
 * @param {Function} callback
 */

module.exports = function waitForEnabled(selector, timeout, reverse, callback) {
  this.client.waitForEnabled(selector, timeout, reverse).then(function () {
    callback();
  },function (err) {
    callback(err);
  });
};