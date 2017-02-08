# find-pid
Cross-platform api of finding pid under specified conditions.

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
