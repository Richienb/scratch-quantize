/**
Quantize a HEX colour to the closest colour that is supported by Scratch.
@param input The HEX code to quantize.
@example
```
const scratchQuantize = require("scratch-quantize");

scratchQuantize("#FFD800");
//=> "FFE600"
```
*/
declare function scratchQuantize(input: string): string

export = scratchQuantize
