'use strict'

var explain = require('overload-protection/lib/explain')
var OverloadProtectionStats = require('overload-protection/lib/stats')

module.exports = generic

function generic (opts, protect) {
  var clientRetrySecs = opts.clientRetrySecs
  var sendRetryHeader = clientRetrySecs > 0
  var logStatsOnReq = opts.logStatsOnReq
  var logging = opts.logging
  var loggingOn = typeof logging === 'string' || typeof logging === 'function'
  var log4jLogging = typeof logging === 'string'
  var errorPropagationMode = opts.errorPropagationMode
  var production = opts.production
  var expose = !production

  return overloadProtection

  function overloadProtection() {
    const stats = new OverloadProtectionStats(
      protect.overload,
      protect.eventLoopOverload,
      protect.heapUsedOverload,
      protect.rssOverload,
      protect.eventLoopDelay,
      protect.maxEventLoopDelay,
      protect.maxHeapUsedBytes,
      protect.maxRssBytes
    )
    return stats
  }
}
