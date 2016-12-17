import istanbul from 'gulp-istanbul';
import {Instrumenter} from 'isparta';
import test from './test';

// dependencies will be run prior to the default task
export let dependencies = [];

// default task
export default function(gulp, config, done) {
  return gulp.src([`${config.paths.src}/**/*.js`])
    .pipe(istanbul({ instrumenter: Instrumenter }))
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      return test(gulp, config)
        .pipe(istanbul.writeReports())
        .on('end', done);
    });
};