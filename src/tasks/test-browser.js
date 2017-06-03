import glob from 'glob';
import webpack from 'webpack';
import plumber from 'gulp-plumber';
import connect from 'gulp-connect';
import webpackStream from 'webpack-stream';

// dependencies will be run prior to the default task
export let dependencies = [];

let firstBuild = true;

// default task
export default function(gulp, config) {
  // Our testing bundle is made up of our unit tests, which
  // should individually load up pieces of our application.
  // We also include the browser setup file.
  const allFiles = ['./test/setup/browser.js'].concat(glob.sync('./test/unit/**/*.js'));

  // start server
  connect.server({
    root: './',
    livereload: true
  });

  // This empty stream might seem like a hack, but we need to specify all of our files through
  // the `entry` option of webpack. Otherwise, it ignores whatever file(s) are placed in here.
  return gulp.src('')
    .pipe(plumber({
      errorHandler(error) {
        console.log(error);
        this.emit('end');
      }
    }))
    .pipe(webpackStream({
      watch: true,
      verbose: true,
      entry: allFiles,
      output: {
        filename: '__spec-build.js',
      },
      module: {
        loaders: [
          // This is what allows us to author in future JavaScript
          { test: /\.js$/, exclude: /(node_modules|src\/workers)/, loader: 'babel-loader' },
          // This allows the test setup scripts to load `package.json`
          { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader' },
          // This allows the test setup scripts to load `package.json`
          { test: /src\/workers\/.js$/, exclude: /node_modules/, loader: 'worker-loader' }
        ]
      },
      plugins: [
        // By default, webpack does `n=>n` compilation with entry files. This concatenates
        // them into a single chunk.
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
      ],
      devtool: 'inline-source-map'
    }, null))
    .pipe(gulp.dest('./tmp'));
}