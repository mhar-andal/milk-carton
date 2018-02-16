import fs from 'fs';
import path from 'path';
import defaults from './config';
// import util from './util';

// register babel
import 'babel-register';

export default function(gulp, options) {

  // merge configuration
  let config = Object.assign(defaults, options || {});

  // Grab all the tasks
  let tasks = fs
    .readdirSync(path.join(__dirname, 'tasks'))
    .map(function(file) {
      return file.replace('.js', '');
    });

  // Load all the tasks and pass in config
  tasks.forEach(function(name) {
    // require gulp task and extract and bind the task function
    let task = require('./tasks/' + name);
    let fn = task.default.bind(this, gulp, config);
    let deps = task.dependencies || [];

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