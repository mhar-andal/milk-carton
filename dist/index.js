'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, options) {

  // merge configuration
  var config = Object.assign(_config2.default, options || {});

  // Grab all the tasks
  var tasks = _fs2.default.readdirSync(_path2.default.join(__dirname, 'tasks')).map(function (file) {
    return file.replace('.js', '');
  });

  // Load all the tasks and pass in config
  tasks.forEach(function (name) {
    // require gulp task and extract and bind the task function
    var task = require('./tasks/' + name);
    var fn = task.default.bind(this, gulp, config);
    var deps = task.dependencies || [];

    // if we have custom dependencies to append to a task
    if (config.dependencies[name]) {
      deps = deps.concat(config.dependencies[name]);
    }

    // create gulp task
    gulp.task(name, deps, fn);
  });

  // Run a server to load manual or unit tests in the browser
  gulp.task('server', ['build', 'test-browser', 'start-server', 'watch']);

  // alias for server
  gulp.task('s', ['server']);

  // An alias of test
  gulp.task('default', ['test']);
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

require('babel-register');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import util from './util';

// register babel
;