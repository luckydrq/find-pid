'use strict';

const assert = require('assert');
const exec = require('mz/child_process').exec;
const platform = require('os').platform();

exports.byPort = (port, cb) => {
  assert(typeof cb === 'function', 'cb should be a function');

  port = Number(port);
  if (isNaN(port)) {
    return cb(new Error('port should be a number'));
  }

  if (platform === 'win32') {
    // Windows
    return winFind(port, cb);
  } else if (platform === 'darwin') {
    // OS x
    return macFind(port, cb);
  } else {
    // Linux
    return linuxFind(port, cb);
  }
};

function winFind(port, cb) {
  // @see http://stackoverflow.com/questions/15952663/find-pid-of-process-that-use-a-port-on-windows
  exec(`netstat -aon | find "${port}"`)
    .then(getPID(cb))
    .catch(cb);
}

function macFind(port, cb) {
  exec(`lsof -i tcp:${port}`)
    .then(getPID(cb))
    .catch(e => {
      // http://stackoverflow.com/questions/29841984/non-zero-exit-code-for-lsof
      if (e.code === 1) {
        // not found any results
        cb();
      } else {
        cb(e);
      }
    });
}

function linuxFind(port, cb) {
  exec(`netstat -nlp | grep :${port}`)
    .then(getPID(cb))
    .catch(cb);
}

function getPID(cb) {
  return function(output) {
    let pid;

    for (const line of output) {
      const fields = line.split(/\s+/).map(f => f.trim());
      for (const field of fields) {
        // linux: 12345/nginx
        if (/^\d+(?:\/\w+)?$/i.test(field)) {
          if (field.indexOf('/') > -1) {
            field = field.split('/')[0];
          }
          if (!isNaN(parseInt(field, 10))) {
            pid = field;
            break;
          }
        }
      }
    }

    if (pid) {
      cb(null, pid);
    } else {
      // no process listening at the specified port
      cb();
    }
  };
}
