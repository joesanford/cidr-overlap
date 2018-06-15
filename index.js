const IPCidr = require('ip-cidr'),
  Addr = require('netaddr').Addr

module.exports = function(cidrs) {
  const overlaps = []

  while (cidrs.length) {
    const currentCidr = cidrs.shift(),
      cidrSubnet = Addr(currentCidr)

    cidrs.forEach(function(cidr) {
      const restCidrSubnet = Addr(cidr),
        subnetIntersection = restCidrSubnet.intersect(cidrSubnet)

      if (subnetIntersection) {
        const overlapCidr = new IPCidr(subnetIntersection.toString())

        overlaps.push({
          startAddress: overlapCidr.start(),
          endAddress: overlapCidr.end(),
          cidr1: currentCidr,
          cidr2: cidr,
          overlapCidr: overlapCidr.toString()
        })
      }
    })
  }

  return overlaps
}
