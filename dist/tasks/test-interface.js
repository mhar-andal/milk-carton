'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, config, done) {

  // install selenium
  _seleniumStandalone2.default.install({

    // debugging information about the installation process
    logger: function logger(message) {
      process.stdout.write(message + ' \n');
    },


    // creates a progress bar in command line
    progressCb: function progressCb(totalLength, progressLength) {
      process.stdout.write('Downloading drivers ' + Math.round(progressLength / totalLength * 100) + '% \r');
    }

    // on install complete

  }, function (error) {
    if (error) {
      return done(error);
    }

    // start the selenium server
    _seleniumStandalone2.default.start(function (error, child) {
      _seleniumStandalone2.default.child = child;

      // run selenium tests
      seleniumTests();

      // complete task
      done(error);
    });
  });
};

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _gulpWebdriver = require('gulp-webdriver');

var _gulpWebdriver2 = _interopRequireDefault(_gulpWebdriver);

var _seleniumStandalone = require('selenium-standalone');

var _seleniumStandalone2 = _interopRequireDefault(_seleniumStandalone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// command arguments
var argv = _yargs2.default.argv;

function seleniumTests() {
  var spec = argv.spec;

  return gulp.src('wdio.conf.js').pipe((0, _gulpWebdriver2.default)({
    spec: spec ? './test/interface/scenarios/' + spec + '/test.js' : null,
    spawnOptions: {
      stdio: 'ignore'
    }
  })).once('end', function () {
    _seleniumStandalone2.default.child.kill();
  });
}

// default task
;