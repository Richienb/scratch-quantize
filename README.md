# scratch-quantize [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/scratch-quantize/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/scratch-quantize)

Quantize a HEX colour to the closest colour that is supported by Scratch.

[![NPM Badge](https://nodei.co/npm/scratch-quantize.png)](https://npmjs.com/package/scratch-quantize)

## Install

```sh
npm install scratch-quantize
```

## Usage

```js
const scratchQuantize = require("scratch-quantize");

scratchQuantize("#FFD800");
//=> "FFE600"
```

## API

### scratchQuantize(input)

#### input

Type: `string`

The HEX code to quantize.

## Related

- [hex-csb](https://github.com/Richienb/hex-csb) - Convert a HEX colour to Scratch CSB
- [csb-hex](https://github.com/Richienb/csb-hex) - Convert a Scratch CSB colour to HEX
