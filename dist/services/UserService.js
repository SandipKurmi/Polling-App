"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Service2 = _interopRequireDefault(require("./Service"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _emailConfig = _interopRequireDefault(require("../config/emailConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UserService = /*#__PURE__*/function (_Service) {
  _inherits(UserService, _Service);

  var _super = _createSuper(UserService);

  function UserService(model) {
    var _this;

    _classCallCheck(this, UserService);

    _this = _super.call(this, model);
    _this.register = _this.register.bind(_assertThisInitialized(_this));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    _this.changePassword = _this.changePassword.bind(_assertThisInitialized(_this));
    _this.forgotPassword = _this.forgotPassword.bind(_assertThisInitialized(_this));
    _this.userPasswordReset = _this.userPasswordReset.bind(_assertThisInitialized(_this));
    return _this;
  } //register user


  _createClass(UserService, [{
    key: "register",
    value: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(item) {
        var user, data, token;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.model.findOne({
                  email: item.email
                });

              case 3:
                user = _context.sent;

                if (!user) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", {
                  error: true,
                  message: 'User already exist',
                  statusCode: 200,
                  data: null
                });

              case 6:
                _context.next = 8;
                return this.model.create(item);

              case 8:
                data = _context.sent;

                if (!data) {
                  _context.next = 12;
                  break;
                }

                token = _jsonwebtoken["default"].sign({
                  id: data._id,
                  email: data.email
                }, process.env.JWT_SECRET_KEY, {
                  expiresIn: '7d'
                });
                return _context.abrupt("return", {
                  error: false,
                  message: 'user register successfullly',
                  statusCode: 200,
                  token: token,
                  data: data
                });

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", {
                  error: true,
                  message: 'user already exists',
                  statusCode: 400,
                  data: null
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function register(_x) {
        return _register.apply(this, arguments);
      }

      return register;
    }() //login user

  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(item) {
        var user, results, token;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.model.findOne({
                  email: item.email
                });

              case 3:
                user = _context2.sent;

                if (!user) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 7;
                return _bcrypt["default"].compareSync(item.password, user.password);

              case 7:
                results = _context2.sent;

                if (!results) {
                  _context2.next = 13;
                  break;
                }

                token = _jsonwebtoken["default"].sign({
                  id: user._id,
                  email: user.email
                }, process.env.JWT_SECRET_KEY, {
                  expiresIn: '7d'
                });
                return _context2.abrupt("return", {
                  error: false,
                  message: 'login successfully',
                  statusCode: 200,
                  token: token,
                  data: user
                });

              case 13:
                return _context2.abrupt("return", {
                  error: true,
                  message: 'You entered the wrong email or password',
                  statusCode: 401,
                  data: null
                });

              case 14:
                _context2.next = 17;
                break;

              case 16:
                return _context2.abrupt("return", {
                  error: true,
                  message: 'You entered the wrong email or password',
                  statusCode: 401,
                  data: null
                });

              case 17:
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", {
                  error: true,
                  message: _context2.t0.message,
                  statusCode: 400,
                  data: null
                });

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 19]]);
      }));

      function login(_x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }() //change password with current password

  }, {
    key: "changePassword",
    value: function () {
      var _changePassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(item, id) {
        var user, results, hash, update;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.model.findOne({
                  _id: id
                });

              case 3:
                user = _context3.sent;

                if (!user) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 7;
                return _bcrypt["default"].compareSync(item.currentPassword, user.password);

              case 7:
                results = _context3.sent;

                if (!results) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 11;
                return _bcrypt["default"].hashSync(item.newPassword, 10);

              case 11:
                hash = _context3.sent;
                _context3.next = 14;
                return this.model.findByIdAndUpdate(user._id, {
                  password: hash
                });

              case 14:
                update = _context3.sent;
                return _context3.abrupt("return", {
                  error: false,
                  message: 'password changed successfully',
                  statusCode: 200,
                  data: update
                });

              case 18:
                return _context3.abrupt("return", {
                  error: 'You entered wrong currant password',
                  statusCode: 400,
                  data: null
                });

              case 19:
                _context3.next = 22;
                break;

              case 21:
                return _context3.abrupt("return", {
                  error: 'You entered wrong currant password',
                  statusCode: 400,
                  data: null
                });

              case 22:
                _context3.next = 27;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", {
                  error: _context3.t0.message,
                  statusCode: 400,
                  data: null
                });

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 24]]);
      }));

      function changePassword(_x3, _x4) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
  }, {
    key: "forgotPassword",
    value: function () {
      var _forgotPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
        var user, secret, token, link, info;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.model.findOne({
                  email: req.body.email
                });

              case 3:
                user = _context4.sent;

                if (user) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", {
                  error: 'There is no user with that email',
                  statusCode: 404,
                  data: null
                });

              case 6:
                secret = user._id + process.env.JWT_SECRET_KEY;
                token = _jsonwebtoken["default"].sign({
                  userId: user._id
                }, secret, {
                  expiresIn: '15m'
                });
                link = "http://127.0.0.1:3000/api/user/reset/".concat(user._id, "/").concat(token);
                _context4.next = 11;
                return _emailConfig["default"].sendMail({
                  from: process.env.EMAIL_FROM,
                  // sender address
                  to: user.email,
                  // list of receivers
                  subject: 'Pool App passowrd reset link',
                  // Subject line
                  text: 'Hello world?',
                  // plain text body
                  html: "<a href=".concat(link, ">Click Hear</a> to Reset Your Password") // html body

                });

              case 11:
                info = _context4.sent;
                return _context4.abrupt("return", {
                  error: false,
                  message: 'Password Reset Email Sent... please Check Your Email',
                  statusCode: 200,
                  link: link
                });

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", {
                  error: _context4.t0.message,
                  statusCode: 400,
                  data: null
                });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 15]]);
      }));

      function forgotPassword(_x5, _x6) {
        return _forgotPassword.apply(this, arguments);
      }

      return forgotPassword;
    }()
  }, {
    key: "userPasswordReset",
    value: function () {
      var _userPasswordReset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var _req$body, password, password_confirmation, _req$params, id, token, user, new_secret, result, hash, update;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _req$body = req.body, password = _req$body.password, password_confirmation = _req$body.password_confirmation;
                _req$params = req.params, id = _req$params.id, token = _req$params.token;
                _context5.next = 4;
                return this.model.findById(id);

              case 4:
                user = _context5.sent;
                new_secret = user._id + process.env.JWT_SECRET_KEY;
                _context5.prev = 6;
                result = _jsonwebtoken["default"].verify(token, new_secret);

                if (!(password && password_confirmation)) {
                  _context5.next = 22;
                  break;
                }

                if (!(password !== password_confirmation)) {
                  _context5.next = 13;
                  break;
                }

                return _context5.abrupt("return", {
                  error: "Both password is not matching",
                  statusCode: 400,
                  data: null
                });

              case 13:
                _context5.next = 15;
                return _bcrypt["default"].hashSync(password, 10);

              case 15:
                hash = _context5.sent;
                _context5.next = 18;
                return this.model.findByIdAndUpdate(user._id, {
                  password: hash
                });

              case 18:
                update = _context5.sent;
                return _context5.abrupt("return", {
                  error: false,
                  message: 'password Reset successfully',
                  statusCode: 200,
                  data: update
                });

              case 20:
                _context5.next = 23;
                break;

              case 22:
                return _context5.abrupt("return", {
                  error: "All fields are required",
                  statusCode: 400,
                  data: null
                });

              case 23:
                _context5.next = 28;
                break;

              case 25:
                _context5.prev = 25;
                _context5.t0 = _context5["catch"](6);
                return _context5.abrupt("return", {
                  error: _context5.t0.message,
                  statusCode: 400,
                  data: null
                });

              case 28:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[6, 25]]);
      }));

      function userPasswordReset(_x7, _x8) {
        return _userPasswordReset.apply(this, arguments);
      }

      return userPasswordReset;
    }()
  }]);

  return UserService;
}(_Service2["default"]);

var _default = UserService;
exports["default"] = _default;