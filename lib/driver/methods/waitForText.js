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

module.exports = function waitForText(selector, ms, reverse, callback) {
  this.client.waitForText(selector, ms, reverse).then(function () {
    callback();
  },function (err) {
    callback(err);
  });
};
