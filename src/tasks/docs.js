import docs from 'gulp-documentation';

// dependencies tasks will be run prior to the default task
export let dependencies = [];

// default task
export default function(gulp, config) {
  return gulp.src(`${config.paths.source}/*.js`)
    .pipe(docs('html', {}, {
      name: config.name,
      version: config.version
    }))
    .pipe(gulp.dest(config.docsDir));
};