'use strict';

var AWS = require('aws-sdk');
var memoize = require('./lib/util/memoizeWithOptions');
var promisifyAll = require('./lib/util/promisifyAll');

function elasticTranscoder(options) {
  return promisifyAll(new AWS.ElasticTranscoder(options));
}

/**
 * Returns an instance of AWS.ElasticTranscoder which has Promise methods
 * suffixed by "Promised"
 *
 * e.g.
 * createPipeline : createPipelinePromised
 *
 * @param options
 */
module.exports = memoize(elasticTranscoder);
