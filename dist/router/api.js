'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Portfolios = require('../controller/Portfolios');

var _Portfolios2 = _interopRequireDefault(_Portfolios);

var _News = require('../controller/News');

var _News2 = _interopRequireDefault(_News);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//INIT
var app = _express2.default.Router(); //MODULES

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
  next();
});

//ROUTER
app.use('/portfolios', _Portfolios2.default);
app.use('/news', _News2.default);

exports.default = app;