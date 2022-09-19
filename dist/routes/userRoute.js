"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  //Public Route
  router.post("/api/register", _UserController["default"].register);
  router.post("/api/login", _UserController["default"].login);
  router.post("/api/forgotpassword", _UserController["default"].forgotPassword);
  router.post("/api/reset-password/:id/:token", _UserController["default"].userPasswordReset); //Protacted Route

  router.get("/api/user", _auth["default"], _UserController["default"].getAll);
  router.get("/api/user/:id", _auth["default"], _UserController["default"].get);
  router.put("/api/user/:id", _auth["default"], _UserController["default"].update);
  router["delete"]("/api/user/:id", _auth["default"], _UserController["default"]["delete"]);
  router.put("/api/change-password/:id", _auth["default"], _UserController["default"].changePassword);
};

exports["default"] = _default;