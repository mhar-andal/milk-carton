'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, config) {

  // configuration based on initial build or not
  var startOrReload = firstBuild ? 'server' : 'reload';
  var options = firstBuild ? { livereload: true } : null;

  // start or reload the server
  _gulpConnect2.default[startOrReload](options);

  // no longer the first build
  firstBuild = false;
};

var _gulpConnect = require('gulp-connect');

var _gulpConnect2 = _interopRequireDefault(_gulpConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lets us differentiate between the first build and subsequent builds
var firstBuild = true;

// default task
;