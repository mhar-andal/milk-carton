'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

exports.default = function (gulp, config) {
  return gulp.src(config.paths.source + '/*.js').pipe((0, _gulpDocumentation2.default)('html', {}, {
    name: config.name,
    version: config.version
  })).pipe(gulp.dest(config.docsDir));
};

var _gulpDocumentation = require('gulp-documentation');

var _gulpDocumentation2 = _interopRequireDefault(_gulpDocumentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies tasks will be run prior to the default task
var dependencies = exports.dependencies = [];

// default task
;