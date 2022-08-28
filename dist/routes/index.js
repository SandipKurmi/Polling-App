"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoute = _interopRequireDefault(require("./userRoute"));

var _notificationRoute = _interopRequireDefault(require("./notificationRoute"));

var _questionRoute = _interopRequireDefault(require("./questionRoute"));

var _countryRoute = _interopRequireDefault(require("./countryRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

(0, _userRoute["default"])(router);
(0, _notificationRoute["default"])(router);
(0, _questionRoute["default"])(router);
(0, _countryRoute["default"])(router);
var _default = router;
exports["default"] = _default;