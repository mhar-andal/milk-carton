'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

exports.default = function (gulp, config, done) {
  var count = 0;
  return (0, _del2.default)(config.clean).then(function (paths) {
    (0, _utility.log)('paths', paths);
    if (count >= config.clean.lenght) {
      done();
    }
  });
};

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utility = require('../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies tasks will be run prior to the default task
var dependencies = exports.dependencies = [];

// default task
;