'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

exports.default = function (gulp, config) {
  return gulp.src(config.paths.testFiles, { read: false }).pipe((0, _gulpMocha2.default)({
    reporter: config.reporter,
    globals: config.globals,
    ignoreLeaks: false
  }));
};

var _gulpMocha = require('gulp-mocha');

var _gulpMocha2 = _interopRequireDefault(_gulpMocha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies tasks will be run prior to the default task
var dependencies = exports.dependencies = [];

// default task
;