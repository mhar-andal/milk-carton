import mocha from 'gulp-mocha';

// dependencies tasks will be run prior to the default task
export let dependencies = [];

// default task
export default function(gulp, config) {

  // start with the setup file, and exclude any test dependencies (which start with an underscore)
  let paths = ['test/setup/index.js', '!**/_*.js', 'test/unit/**/*.js', 'test/acceptance/**/*.js'];

  return gulp.src(paths, {read: false})
    .pipe(mocha({
      reporter: config.reporter,
      globals: config.globals,
      ignoreLeaks: false
    }));

};