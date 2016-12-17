import gutil from 'gulp-util';

// Generic log
export let log = function(...msg) {
  gutil.log(gutil.colors.green('[Milk Carton]'), ...msg);
};

// Generic error log
export let error = function(...msg) {
  gutil.log(gutil.colors.red('[Milk Carton]'), ...msg);
};