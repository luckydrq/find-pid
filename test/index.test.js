'use strict';

const http = require('http');
const assert = require('assert');
const detect = require('detect-port');
const byPort = require('..').byPort;

describe('test/index.test.js', () => {
  let port = 7777;

  beforeEach(done => {
    detect(port, (err, _port) => {
      if (err) {
        return done(err);
      }

      // may be occupied
      port = _port;
      http.createServer(() => {}).listen(port, done);
    });
  });

  it('should find pid by port', done => {
    byPort(port, (err, pid) => {
      if (err) {
        return done(err);
      }

      try {
        assert(typeof pid === 'string');
        assert(isNaN(parseInt(pid, 10)) === false);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
