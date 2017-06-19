'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, config) {
  // return gulp.watch(watchFiles, ['test']);
  return gulp.watch(watchFiles, ['build']);
};

// dependencies tasks will be run prior to the default task
var dependencies = exports.dependencies = [];

// files to watch
var watchFiles = ['./src/**/*', './objects/**/*.js', './test/**/*', './package.json', './**/.eslintrc', '.jscsrc',

// ignore
'!./src/objects.js'];

// default task
;