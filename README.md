# cidr-overlap
> Get an array of overlaps that exist from a given array of subnets

## Installation
```
$ npm i --save cidr-overlap
```

## Example
```js
const cidrOverlap = require('cidr-overlap');

cidrOverlap(['10.0.3.0/24', '10.0.1.0/16']);
//=> [ { startAddress: '10.0.3.0',
//=>     endAddress: '10.0.3.255',
//=>     cidr1: '10.0.3.0/24',
//=>     cidr2: '10.0.1.0/16' } ]
```

## API
### cidrOverlap([cidrs])
- `cidr` {Array} Strings of CIDRs representing subnets in the format `'1.2.3.4/24'`. Required.