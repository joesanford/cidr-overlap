const assert = require('assert'),
  cidrOverlap = require('.')

assert(cidrOverlap(['10.0.3.0/24', '10.0.1.0/16']).length === 1)
assert(cidrOverlap(['10.0.3.0/24', '10.0.1.0/16'])[0].startAddress === '10.0.3.0')
assert(cidrOverlap(['10.0.3.0/24', '10.0.1.0/16'])[0].endAddress === '10.0.3.255')
assert(cidrOverlap(['10.0.3.0/24', '10.0.1.0/16'])[0].overlapCidr === '10.0.3.0/24')
assert(cidrOverlap(['10.0.3.0/24', '10.0.1.0/16', '10.0.3.1/24']).length === 3)
assert(cidrOverlap(['10.0.3.0/24', '10.0.1.0/16', '10.0.3.1/24'])[0].overlapCidr === '10.0.3.0/24')
assert(cidrOverlap(['10.0.3.0/24', '10.0.1.0/16'])[0].overlapCidr === '10.0.3.0/24')
