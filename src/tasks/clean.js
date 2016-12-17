import del from 'del';
import path from 'path';
import {log} from '../utility';

// dependencies tasks will be run prior to the default task
export let dependencies = [];

// default task
export default function(gulp, config, done) {
  let count = 0;
  return del(config.clean).then((paths) => {
    log('paths', paths);
    if (count >= config.clean.lenght) {
      done();
    }
  });
};