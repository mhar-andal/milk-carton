import gulp from 'gulp';
import milk from 'milk-carton';
import mochaGlobals from './test/setup/.globals';
import manifest from './package.json';

milk(gulp, {

  // name of project
  name: manifest.name,

  // version of project
  version: manifest.version,

  // destination
  mainFile: manifest.main,

  // initial build file
  entryFileName: 'main',

  // production file name
  exportFileName: manifest.name,

  // create filename from manifest
  mainVarName: manifest.name.charAt(0).toUpperCase() + manifest.name.slice(1),

  // directories and files to clean
  clean: ['dist', 'tmp']
  // accepted globals to be ignored
  globals: mochaGlobals

});
