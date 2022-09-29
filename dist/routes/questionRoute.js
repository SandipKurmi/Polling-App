"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _QuestionController = _interopRequireDefault(require("../controllers/QuestionController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  //Question api
  router.post("/api/question", _auth["default"], _QuestionController["default"].createQuestions);
  router.get("/api/question", _auth["default"], _QuestionController["default"].getAllQuestions);
  router["delete"]("/api/question/:id", _auth["default"], _QuestionController["default"]["delete"]); //notification

  router.get("/api/notification", _auth["default"], _QuestionController["default"].allNotification);
};

exports["default"] = _default;