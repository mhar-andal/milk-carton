import fs  from 'fs';
import path  from 'path';
import plumber from 'gulp-plumber';
import filter from 'gulp-filter';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import webpackStream from 'webpack-stream';

// dependencies will be run prior to the default task
export let dependencies = ['clean'];

// default task
export default function(gulp, config) {

  let destinationFolder = path.dirname(config.mainFile);

  return gulp.src(path.join(config.paths.src, config.entryFileName + '.js'))
    .pipe(plumber())
    .pipe(webpackStream({
      output: {
        filename: config.exportFileName + '.js',
        libraryTarget: config.libraryTarget,
        library: config.mainVarName
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader' }
        ]
      },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest(destinationFolder))
    .pipe(filter(['*', '!**/*.js.map']))
    .pipe(rename(config.exportFileName + '.min.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destinationFolder));
};