'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mergeDefaultQueries = exports.mergeDefaultQueries = function mergeDefaultQueries(defaultQueries, requestQueries) {
  var queries = '';

  for (var i in requestQueries) {
    if (requestQueries[i]) defaultQueries[i] = requestQueries[i];
  }for (var _i in defaultQueries) {
    queries += '&' + _i + '=' + defaultQueries[_i];
  }return queries;
};

exports.default = {
  mergeDefaultQueries: mergeDefaultQueries
};