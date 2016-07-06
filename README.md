# simple-soap

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/simple-soap
[travis-image]: https://img.shields.io/travis/tlvince/simple-soap.svg
[npm-url]: https://www.npmjs.com/package/simple-soap
[npm-image]: https://img.shields.io/npm/v/simple-soap.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/simple-soap.svg

> Simplified soap client

```js
const simpleSoap = require('simple-soap')
const config = {
  url: 'https://example.com/soap/server',
  username: 'test',
  password: 'test',
  method: 'Method'
}
simpleSoap(config)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

Wrapper over the [node-soap][] client using a promise interface.

[node-soap]: https://github.com/vpulim/node-soap

## Installation

```shell
npm install --save simple-soap
```

## Usage

### `simpleSoap(config[, params])`

#### `config`

Configuration object. Required properties:

* `url`: SOAP endpoint
* `username`: Basic auth username
* `password`: Basic auth password
* `method`: SOAP action/method

Optional properties:

* `request`: [request][] options

[request]: https://github.com/request/request#requestoptions-callback

#### `params`

Optional object of params to passed to the method call.

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
