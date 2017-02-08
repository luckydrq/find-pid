[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Cross-platform api of finding pid under specified conditions.

[npm-image]: https://img.shields.io/npm/v/find-pid.svg?style=flat-square
[npm-url]: https://npmjs.org/package/find-pid
[travis-image]: https://img.shields.io/travis/luckydrq/find-pid/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckydrq/find-pid
[coveralls-image]: https://img.shields.io/coveralls/luckydrq/find-pid/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/luckydrq/find-pid?branch=master

## Install
`$ npm i find-pid`

## Example
```js
  const findByPort = require('find-pid').byPort;
  findByPort(7777, (err, pid) => {
    console.log(pid);
  });
```

## API

- byPort(port, callback)

Find pid by port.

## Contribute
Now the only api is `byPort`, other features is not planned until i
really need it. But i am very happy to accept a PR :)

## License
MIT
