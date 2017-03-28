'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>', '</title>\n    <link rel="stylesheet" href="', '/css/style.css">\n  </head>\n  <body>\n    <h1>', '</h1>\n  </body>\n</html>\n'], ['<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>', '</title>\n    <link rel="stylesheet" href="', '/css/style.css">\n  </head>\n  <body>\n    <h1>', '</h1>\n  </body>\n</html>\n']);

var _commonTags = require('common-tags');

var _config = require('../shared/config');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var renderApp = function renderApp(title) {
  return (0, _commonTags.html)(_templateObject, title, _config.STATIC_PATH, title);
};

exports.default = renderApp;