import mocha from 'gulp-mocha';

// dependencies tasks will be run prior to the default task
export let dependencies = [];

// default task
export default function(gulp, config) {
  return gulp.src(config.paths.testFiles, {read: false})
    .pipe(mocha({
      reporter: config.reporter,
      globals: config.globals,
      ignoreLeaks: false
    }));

};