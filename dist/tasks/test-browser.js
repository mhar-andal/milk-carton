'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

exports.default = function (gulp, config) {
  // Our testing bundle is made up of our unit tests, which
  // should individually load up pieces of our application.
  // We also include the browser setup file.
  var allFiles = ['./test/setup/browser.js'].concat(_glob2.default.sync('./test/unit/**/*.js'));

  // start server
  _gulpConnect2.default.server({
    root: './',
    livereload: true
  });

  // This empty stream might seem like a hack, but we need to specify all of our files through
  // the `entry` option of webpack. Otherwise, it ignores whatever file(s) are placed in here.
  return gulp.src('').pipe((0, _gulpPlumber2.default)({
    errorHandler: function errorHandler(error) {
      console.log(error);
      this.emit('end');
    }
  })).pipe((0, _webpackStream2.default)({
    watch: true,
    verbose: true,
    entry: allFiles,
    output: {
      filename: '__spec-build.js'
    },
    module: {
      loaders: [
      // This is what allows us to author in future JavaScript
      { test: /\.js$/, exclude: /(node_modules|src\/workers)/, loader: 'babel-loader' },
      // This allows the test setup scripts to load `package.json`
      { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader' },
      // This allows the test setup scripts to load `package.json`
      { test: /src\/workers\/.js$/, exclude: /node_modules/, loader: 'worker-loader' }]
    },
    plugins: [
    // By default, webpack does `n=>n` compilation with entry files. This concatenates
    // them into a single chunk.
    new _webpack2.default.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
    devtool: 'inline-source-map'
  }, null)).pipe(gulp.dest('./tmp'));
};

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _gulpPlumber = require('gulp-plumber');

var _gulpPlumber2 = _interopRequireDefault(_gulpPlumber);

var _gulpConnect = require('gulp-connect');

var _gulpConnect2 = _interopRequireDefault(_gulpConnect);

var _webpackStream = require('webpack-stream');

var _webpackStream2 = _interopRequireDefault(_webpackStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies will be run prior to the default task
var dependencies = exports.dependencies = [];

var firstBuild = true;

// default task