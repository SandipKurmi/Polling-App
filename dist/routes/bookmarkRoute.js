"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BookmarkController = _interopRequireDefault(require("../controllers/BookmarkController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  //Public Route
  router.post("/api/bookmark", _auth["default"], _BookmarkController["default"].insert);
  router.get("/api/bookmark", _auth["default"], _BookmarkController["default"].getAllBookmark);
  router.get("/api/bookmark/:id", _auth["default"], _BookmarkController["default"].get);
  router.put("/api/bookmark/:id", _auth["default"], _BookmarkController["default"].update);
  router["delete"]("/api/bookmark/:id", _auth["default"], _BookmarkController["default"]["delete"]);
};

exports["default"] = _default;