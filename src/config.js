export default {

  // initial file within the src folder
  entryFileName: 'index',

  // production file name
  exportFileName: 'build',

  // create filename from manifest
  mainVarName: 'library',

  // final destination
  mainFile: 'dist/library.js',

  // a list of file and directory paths
  paths: {
    // app source
    src: 'src',

    // production build
    build: 'dist',

    // Folder for tests
    tests: 'test',

    // start with the setup file, and exclude any test dependencies (which start with an underscore)
    testFiles: [
      './test/setup/index.js',
      '!./**/_*.js',
      './test/unit/**/*.js',
      './test/acceptance/**/*.js'
    ]
  },

  // webpack library type
  libraryTarget: 'amd',

  // test reporter
  reporter: 'dot',

  // folders to clean
  clean: ['dist', 'tmp'],

  // dependencies to be appended to existing tasks
  dependencies: [],

  // added rules to be processed
  rules: []

};