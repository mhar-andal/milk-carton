'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

exports.default = function (gulp, config, done) {
  return gulp.src([config.paths.src + '/**/*.js']).pipe((0, _gulpIstanbul2.default)({ instrumenter: _isparta.Instrumenter })).pipe(_gulpIstanbul2.default.hookRequire()).on('finish', function () {
    return (0, _test2.default)(gulp, config).pipe(_gulpIstanbul2.default.writeReports()).on('end', done);
  });
};

var _gulpIstanbul = require('gulp-istanbul');

var _gulpIstanbul2 = _interopRequireDefault(_gulpIstanbul);

var _isparta = require('isparta');

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies will be run prior to the default task
var dependencies = exports.dependencies = [];

// default task
;