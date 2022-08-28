"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CountryController = _interopRequireDefault(require("../controllers/CountryController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import auth from '../middleware/auth.middleware';
var _default = function _default(router) {
  //Countrt api
  router.post("/api/country", _CountryController["default"].insert);
  router.get("/api/country", _CountryController["default"].getAllCountry);
};

exports["default"] = _default;