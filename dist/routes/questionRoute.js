"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _QuestionController = _interopRequireDefault(require("../controllers/QuestionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import auth from '../middleware/auth.middleware';
var _default = function _default(router) {
  //Question api
  router.post("/api/question", _QuestionController["default"].insert);
  router.get("/api/question", _QuestionController["default"].getAllQuestions);
};

exports["default"] = _default;