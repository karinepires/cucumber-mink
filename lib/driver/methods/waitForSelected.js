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

module.exports = function waitForSelected(selector, ms, reverse, callback) {
  this.client.waitForSelected(selector, ms, reverse).then(callback, function (err) {
    callback(err);
  });
};
