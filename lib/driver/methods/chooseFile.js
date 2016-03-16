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

var path = require('path');
var fs = require('fs');

module.exports = function chooseFile(selector, localPath, callback) {
  const fullPath = path.resolve(localPath);
  fs.access(fullPath, fs.F_OK, err => {
    if (err) {
        callback(err);
    } else {
      this.client.addValue(selector, fullPath).then(function () {
        callback();
      },function (err) {
        callback(err);
      });
    }
  });
};
