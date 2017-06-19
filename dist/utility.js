'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logError = exports.log = undefined;

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generic log
var log = exports.log = function log() {
  for (var _len = arguments.length, msg = Array(_len), _key = 0; _key < _len; _key++) {
    msg[_key] = arguments[_key];
  }

  _gulpUtil2.default.log.apply(_gulpUtil2.default, [_gulpUtil2.default.colors.green('[Milk Carton]')].concat(msg));
};

// Generic error log
var logError = exports.logError = function logError() {
  for (var _len2 = arguments.length, msg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    msg[_key2] = arguments[_key2];
  }

  _gulpUtil2.default.log.apply(_gulpUtil2.default, [_gulpUtil2.default.colors.red('[Milk Carton]')].concat(msg));
};