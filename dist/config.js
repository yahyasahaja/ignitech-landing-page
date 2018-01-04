'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOG_MODE = exports.LOG_MODE = 'dev';
var GOOGLE_BLOGGER_ENDPOINT = exports.GOOGLE_BLOGGER_ENDPOINT = 'https://www.googleapis.com/blogger/v3/blogs';
var PORTFOLIO_BLOG_ID = exports.PORTFOLIO_BLOG_ID = '994425938474186801';
var GOOGLE_API_KEY = exports.GOOGLE_API_KEY = 'AIzaSyCui9a5TFXQQ1HP5gPWQBVKyebTP6jm5z0';
var DATABASE = exports.DATABASE = {
  DATABASE_NAME: 'test',
  USER: 'yahya',
  PASSWORD: 'yahya',
  HOST: 'localhost',
  DIALECT: 'mysql',
  PORT: 3306,
  POOL_SIZE: 10
};

exports.default = {
  LOG_MODE: LOG_MODE,
  DATABASE: DATABASE,
  GOOGLE_API_KEY: GOOGLE_API_KEY,
  GOOGLE_BLOGGER_ENDPOINT: GOOGLE_BLOGGER_ENDPOINT,
  PORTFOLIO_BLOG_ID: PORTFOLIO_BLOG_ID
};