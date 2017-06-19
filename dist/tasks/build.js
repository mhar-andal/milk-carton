'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

exports.default = function (gulp, config) {

  // Choose a different version of webpack
  // otherwise null will use included version
  var wpVersion = config.wpVersion || null;

  // choose the destination folder
  var destinationFolder = _path2.default.dirname(config.mainFile);

  // determine the initial source file
  var sourceFile = _path2.default.join(config.paths.src, config.entryFileName + '.js');

  // webpack options
  var options = {

    output: {

      // output paths
      path: '/' + config.paths.build + '/',
      publicPath: '/' + config.paths.build + '/',

      // destination file name
      filename: config.exportFileName + '.js',

      // configure the output library type
      libraryTarget: config.libraryTarget,

      // configure the output variable
      library: config.mainVarName,

      // prefix module filename to avoid duplicates among many of our projects
      devtoolModuleFilenameTemplate: 'webpack:///' + config.mainVarName + '[resource-path]'

    },

    module: {
      loaders: [{

        // all javascript files
        test: /\.js$/,

        // don't include node modules or bower components
        // exclude: /(node_modules)/,

        // use babel to compile for all js files
        loader: 'babel-loader'

      }, {

        // all json files for configuration
        test: /\.json$/,

        // exclude node modules or bower components
        exclude: /(node_modules|bower_components)/,

        // https://github.com/webpack-contrib/json-loader
        loader: 'json-loader'

      }]
    },

    resolve: {
      modulesDirectories: config.modulesDirectories
    },

    // enable source-maps
    devtool: 'source-map'

  };

  // plumbing error
  function errorHandler(error, stats) {
    (0, _utility.logError)(error);
    this.emit('end');
  };

  return gulp.src(sourceFile)

  // plumber
  .pipe((0, _gulpPlumber2.default)({ errorHandler: errorHandler }))

  // stream webpack build
  .pipe((0, _webpackStream2.default)(options, wpVersion))

  // add compiled output to the destination folder
  .pipe(gulp.dest(destinationFolder))

  // create minified and map sources
  .pipe((0, _gulpFilter2.default)(['*', '!**/*.js.map'])).pipe((0, _gulpRename2.default)(config.exportFileName + '.min.js')).pipe(_gulpSourcemaps2.default.init({ loadMaps: true })).pipe((0, _gulpUglify2.default)()).pipe(_gulpSourcemaps2.default.write('./')).pipe(gulp.dest(destinationFolder));
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulpPlumber = require('gulp-plumber');

var _gulpPlumber2 = _interopRequireDefault(_gulpPlumber);

var _gulpFilter = require('gulp-filter');

var _gulpFilter2 = _interopRequireDefault(_gulpFilter);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpUglify = require('gulp-uglify');

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _webpackStream = require('webpack-stream');

var _webpackStream2 = _interopRequireDefault(_webpackStream);

var _utility = require('../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies will be run prior to the default task
var dependencies = exports.dependencies = [];

// default task
;