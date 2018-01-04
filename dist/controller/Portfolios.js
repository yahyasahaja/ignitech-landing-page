'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//INIT


//CONFIG
//MODULES
var app = _express2.default.Router();

//UTILS

var URL = _config.GOOGLE_BLOGGER_ENDPOINT + '/' + _config.PORTFOLIO_BLOG_ID;

//ROUTE
app.get('/', function (req, res) {
  var queries = (0, _utils.mergeDefaultQueries)({
    maxResults: 6
  }, req.query);

  _axios2.default.get(URL + '/posts?key=' + _config.GOOGLE_API_KEY + queries).then(function (posts) {
    res.json(posts.data);
  }).catch(function (err) {
    var errorResponse = err.response.data;

    res.status(errorResponse.error.code).json(errorResponse);
  });
});

app.get('/:postId', function (req, res) {
  var postId = req.params.postId;

  var queries = (0, _utils.mergeDefaultQueries)({
    maxResults: 6
  }, req.query);

  _axios2.default.get(URL + '/posts/' + postId + '?key=' + _config.GOOGLE_API_KEY + queries).then(function (posts) {
    res.json(posts.data);
  }).catch(function (err) {
    var errorResponse = err.response.data;

    res.status(errorResponse.error.code).json(errorResponse);
  });
});

exports.default = app;