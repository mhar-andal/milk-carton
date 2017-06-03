// dependencies tasks will be run prior to the default task
export let dependencies = [];

// files to watch
const watchFiles = [
  './src/**/*',
  './objects/**/*.js',
  './test/**/*',
  './package.json',
  './**/.eslintrc',
  '.jscsrc',

  // ignore
  '!./src/objects.js'
];

// default task
export default function(gulp, config) {
  // return gulp.watch(watchFiles, ['test']);
  return gulp.watch(watchFiles, ['build']);
};