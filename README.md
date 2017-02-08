[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

Cross-platform api of finding pid under specified conditions.

[npm-image]: https://img.shields.io/npm/v/find-pid.svg?style=flat-square
[npm-url]: https://npmjs.org/package/find-pid
[travis-image]: https://img.shields.io/travis/luckydrq/find-pid/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckydrq/find-pid
[codecov-image]: https://codecov.io/gh/luckydrq/find-pid/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/luckydrq/find-pid
[david-image]: https://img.shields.io/david/luckydrq/find-pid.svg?style=flat-square
[david-url]: https://david-dm.org/luckydrq/find-pid
[snyk-image]: https://snyk.io/test/npm/find-pid/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/find-pid
[download-image]: https://img.shields.io/npm/dm/find-pid.svg?style=flat-square
[download-url]: https://npmjs.org/package/find-pid

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
