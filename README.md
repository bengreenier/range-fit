range-fit [![Build Status](https://travis-ci.org/bengreenier/range-fit.svg)](https://travis-ci.org/bengreenier/range-fit)
===============

given a number and two ranges, fit from one range to another. This is basically http://stackoverflow.com/questions/929103/convert-a-number-range-to-another-range-maintaining-ratio for node.

`npm install range-fit`


# API

## (value, lowerInitial, upperInitial, lowerNew, upperNew)

Given a `value`, within range `lowerInitial`-`upperInitial`, return a value with the same ratio, between `lowerNew`-`upperNew`. If `lowerInitial`-`upperInitial` is __0__, then we return `lowerNew`.

# Examples

```
var rangeFit = require('range-fit');

var twenty = rangeFit(10, 0, 100, 0, 200);
```

see [the tests](./test) for more.

# License

Licensed under the [MIT License](./LICENSE)