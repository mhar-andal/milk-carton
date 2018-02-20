import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import program from 'commander';
import defaults from './config';
import {version} from '../package.json';

/*
 * Helpers
 */
program.version(version, '-v, --version')

/*
 * Build
 */
program
  .command('build')
  .alias('b')
  .description('Build this project')
  .action(() => {
    gulp.start('build');
  });

/*
 * Watch
 */
program
  .command('watch')
  .alias('w')
  .description('Watch for changes, and rebuild')
  .action(() => {
    gulp.start('watch');
  });

/*
 * Server
 */
program
  .command('server')
  .alias('s')
  .description('Run a local server to test code')
  .action(() => {
    gulp.start('server');
  });

/*
 * Run Lint
 */
program
  .command('lint')
  .alias('l')
  .description('Runs JSLint against the code')
  .action(() => {
    gulp.start('lint');
  });

/*
 * Test Browser
 */
program
  .command('test-browser')
  .alias('tb')
  .description('Runs tests in the browser')
  .action(() => {
    gulp.start('lint');
  });

/*
 * Clean all directories
 */
program
  .command('clean')
  .alias('c')
  .description('Cleans all directories specified in the configuration')
  .action(() => {
    gulp.start('lint');
  });

/*
 * Setup gulp
 */

// get the local milk config file if it exists
let configPath = `${process.cwd()}/milk.json`;
let overrides = false;
if (fs.existsSync(configPath)) {
  overrides = require(configPath);
}

// merge configuration if we have overrides
let config = overrides ? Object.assign(defaults, overrides || {}) : defaults;

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


// parse the program at this point
program.parse(process.argv)

