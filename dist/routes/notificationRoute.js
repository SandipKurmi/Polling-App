"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _NotificationController = _interopRequireDefault(require("../controllers/NotificationController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import auth from '../middleware/auth.middleware';
var _default = function _default(router) {
  //Public Route
  router.post("/api/notification", _NotificationController["default"].insert);
  router.get("/api/notification", _NotificationController["default"].getAll);
};

exports["default"] = _default;