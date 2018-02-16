import yargs from 'yargs';
import webdriver from 'gulp-webdriver';
import selenium from 'selenium-standalone';

// command arguments
const argv = yargs.argv;

function seleniumTests() {
  let {spec} = argv;
  return gulp.src('wdio.conf.js')
    .pipe(webdriver({
      spec: spec ? `./test/interface/scenarios/${spec}/test.js` : null,
      spawnOptions: {
        stdio: 'ignore'
      }
    }))
    .once('end', () => {
      selenium.child.kill();
    });
}

// default task
export default function(gulp, config, done) {

  // install selenium
  selenium.install({

    // debugging information about the installation process
    logger(message) {
      process.stdout.write(`${message} \n`);
    },

    // creates a progress bar in command line
    progressCb(totalLength, progressLength) {
      process.stdout.write(`Downloading drivers ${Math.round(progressLength / totalLength * 100)}% \r`);
    }

  // on install complete
  }, (error) => {
    if (error) {
      return done(error);
    }

    // start the selenium server
    selenium.start((error, child) => {
      selenium.child = child;

      // run selenium tests
      seleniumTests();

      // complete task
      done(error);
    });
  });
};