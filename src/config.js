let {name, version} = require(`${process.cwd()}/package.json`);

export default {

  // initial file within the src folder
  entryFileName: 'index',

  // version of the project
  version: version,

  // production file name
  exportFileName: name,

  // create filename from manifest
  mainVarName: name, //.charAt(0).toUpperCase() + name.slice(1),

  // final destination
  mainFile: `dist/${name}.js`,

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

  // accepted globals to be ignored
  // globals: mochaGlobals,

  // webpack library type
  libraryTarget: 'umd',

  // name the module
  umdNamedDefine: true,

  // test reporter
  reporter: 'dot',

  // folders to clean
  clean: ['dist', 'tmp'],

  // dependencies to be appended to existing tasks
  dependencies: [],

  // added webpack rules to be processed
  rules: []

};