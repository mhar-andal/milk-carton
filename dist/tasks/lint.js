'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

exports.default = function (gulp, config) {
  // Lint a set of files
  return gulp.src(files).pipe((0, _gulpPlumber2.default)()).pipe((0, _gulpEslint2.default)()).pipe(_gulpEslint2.default.format()).pipe(_gulpEslint2.default.failOnError()).pipe((0, _gulpJscs2.default)()).pipe(_gulpJscs2.default.reporter()).pipe(_gulpJscs2.default.reporter('fail')).on('error', _utility.logError);
};

var _gulpPlumber = require('gulp-plumber');

var _gulpPlumber2 = _interopRequireDefault(_gulpPlumber);

var _gulpEslint = require('gulp-eslint');

var _gulpEslint2 = _interopRequireDefault(_gulpEslint);

var _gulpJscs = require('gulp-jscs');

var _gulpJscs2 = _interopRequireDefault(_gulpJscs);

var _utility = require('../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies will be run prior to the default task
var dependencies = exports.dependencies = [];

// files to watch
var files = ['src/**/*.js', 'test/**/*.js', 'gulpfile.babel.js'];

// default task
;