/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/inscripciones/CamposJugador.js":
/*!*****************************************************!*\
  !*** ./resources/js/inscripciones/CamposJugador.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataJugador__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataJugador */ "./resources/js/inscripciones/DataJugador.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * INICIO - Campos del modal
 */

// Documento

document.addEventListener('alpine:init', function () {
  Alpine.data('documento', function () {
    return {
      documento_jugador: '',
      setDocumentoJugador: _defineProperty({}, '@keyup.enter', function keyupEnter() {
        var getDatosJugador = new _DataJugador__WEBPACK_IMPORTED_MODULE_0__["default"](this.documento_jugador);
        getDatosJugador.datosJugador;
      })
      /*
      getDocumentoJugador: 
      {
          ['x-text']()
          {
              return this.documento_jugador;
          }
      }
      */
    };
  });
});

// País

//const prefijo_pais = "+";
var pais = document.getElementById('pais_residencia');
var selected = pais.selectedOptions;
var pais_defecto = selected[0].label;

//getSoloColombia(pais_defecto, (prefijo_pais + selected[0].dataset.phoneCode));
getSoloColombia(pais_defecto);
pais.addEventListener('change', function () {
  //getSoloColombia(selected[0].label, (prefijo_pais + selected[0].dataset.phoneCode));
  getSoloColombia(selected[0].label);
});
function getSoloColombia(pais) {
  var div_class_property = pais == 'Colombia' ? 'visible' : 'invisible';
  var solo_colombia = document.getElementById('solo-colombia');

  //document.getElementById('codigo_pais').innerText = codigo_pais;
  //document.getElementById('codigo_tel').value = codigo_pais;

  solo_colombia.classList.remove('visible') || solo_colombia.classList.remove('invisible');
  solo_colombia.classList.add(div_class_property);

  //console.log(pais, solo_colombia.className);
}

/***/ }),

/***/ "./resources/js/inscripciones/DataJugador.js":
/*!***************************************************!*\
  !*** ./resources/js/inscripciones/DataJugador.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataJugador)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _obtenerJugador = /*#__PURE__*/new WeakSet();
var _organizarDatosEnModal = /*#__PURE__*/new WeakSet();
var _organizarDatosJugador = /*#__PURE__*/new WeakSet();
/** 
 * Función que se usa dos veces para hacer lo mismo, se puede optimizar:
 * 
 *  1) Se usa para obtener los datos cuando da click en el botó de editar.
 *  2) Se usa cuando se consulta el jugador en el input de documento en el modal.
*/
var DataJugador = /*#__PURE__*/function () {
  function DataJugador(documento) {
    _classCallCheck(this, DataJugador);
    _classPrivateMethodInitSpec(this, _organizarDatosJugador);
    _classPrivateMethodInitSpec(this, _organizarDatosEnModal);
    _classPrivateMethodInitSpec(this, _obtenerJugador);
    _defineProperty(this, "documento", void 0);
    this.documento = documento;
  }
  _createClass(DataJugador, [{
    key: "datosJugador",
    get: function get() {
      var _this = this;
      _classPrivateMethodGet(this, _obtenerJugador, _obtenerJugador2).call(this).then(function (jugador) {
        _classPrivateMethodGet(_this, _organizarDatosEnModal, _organizarDatosEnModal2).call(_this, jugador);
      })["catch"](function (error) {
        alert(error);
        console.error(error);
      });
    }
  }]);
  return DataJugador;
}();
function _obtenerJugador2() {
  return _obtenerJugador3.apply(this, arguments);
}
function _obtenerJugador3() {
  _obtenerJugador3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(route('inscripciones.data.jugador', {
            documento: this.documento
          }));
        case 2:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", response.json().then(function (jugador) {
            return JSON.parse(jugador)[0];
          }));
        case 5:
          return _context.abrupt("return", response.json().then(function (mensaje) {
            throw new Error(mensaje.documento);
          }));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return _obtenerJugador3.apply(this, arguments);
}
function _organizarDatosEnModal2(_x) {
  return _organizarDatosEnModal3.apply(this, arguments);
}
function _organizarDatosEnModal3() {
  _organizarDatosEnModal3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(jugador) {
    var datos_jugador, targetEl, lista_inputs, lista_selects, options, modal, closeModal;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          datos_jugador = _classPrivateMethodGet(this, _organizarDatosJugador, _organizarDatosJugador2).call(this, jugador); // Esta variable debería ser global
          targetEl = document.getElementById('inscribirUsuario');
          lista_inputs = document.getElementsByClassName('formulario-input');
          lista_selects = document.getElementsByClassName('formulario-select');
          options = {
            //placement: 'bottom-right',
            backdrop: 'static',
            //backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            closable: true,
            onHide: function onHide() {
              Array.from(lista_inputs).forEach(function (elemento, key) {
                //console.log(elemento.value);
                elemento.value = '';
              });
              Array.from(lista_selects).forEach(function (elemento, key) {
                if (elemento.id != 'pais_residencia') elemento.value = 0;
              });
            },
            onShow: function onShow() {
              Array.from(lista_inputs).forEach(function (elemento, key) {
                elemento.value = datos_jugador[elemento.id];
              });
              Array.from(lista_selects).forEach(function (elemento, key) {
                elemento.value = datos_jugador[elemento.id] || 0;
              });
            }
          };
          modal = new Modal(targetEl, options);
          modal.show();
          closeModal = document.getElementsByClassName('close-modal');
          Array.from(closeModal).forEach(function (elemento, key) {
            elemento.addEventListener('click', function () {
              modal.hide();
            });
          });
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return _organizarDatosEnModal3.apply(this, arguments);
}
function _organizarDatosJugador2(jugador) {
  return {
    documento: jugador.c15_jugador_id,
    nombres: jugador.c15_jugador_nombres,
    apellidos: jugador.c15_jugador_apellidos,
    genero: jugador.c15_jugador_genero,
    nacionalidad: jugador.c15_jugador_nacionalidad,
    pais_residencia: jugador.c15_jugador_pais_id,
    departamento_residencia: jugador.c15_jugador_departamento_id,
    ciudad_residencia: jugador.c15_jugador_municipio_id,
    club: jugador.c15_jugador_club_id,
    fecha_nacimiento: jugador.c15_jugador_fecha_nacimiento
  };
}


/***/ }),

/***/ "./resources/js/inscripciones/ListaJugadores.js":
/*!******************************************************!*\
  !*** ./resources/js/inscripciones/ListaJugadores.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListaJugadores)
/* harmony export */ });
/* harmony import */ var _DataJugador__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataJugador */ "./resources/js/inscripciones/DataJugador.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _obtenerListaJugadores = /*#__PURE__*/new WeakSet();
var _createTBody = /*#__PURE__*/new WeakSet();
var _configBtnAcciones = /*#__PURE__*/new WeakSet();
var _tbodyTD = /*#__PURE__*/new WeakSet();
var _btnAcciones = /*#__PURE__*/new WeakSet();
var ListaJugadores = /*#__PURE__*/function () {
  function ListaJugadores() {
    _classCallCheck(this, ListaJugadores);
    _classPrivateMethodInitSpec(this, _btnAcciones);
    _classPrivateMethodInitSpec(this, _tbodyTD);
    _classPrivateMethodInitSpec(this, _configBtnAcciones);
    _classPrivateMethodInitSpec(this, _createTBody);
    _classPrivateMethodInitSpec(this, _obtenerListaJugadores);
    _defineProperty(this, "ruta", void 0);
    this.ruta = route('inscripciones.lista.jugadores');
  }
  _createClass(ListaJugadores, [{
    key: "listadoJugadores",
    get: function get() {
      var _this = this;
      _classPrivateMethodGet(this, _obtenerListaJugadores, _obtenerListaJugadores2).call(this, this.ruta).then(function (jugadores) {
        // Función asíncrona
        _classPrivateMethodGet(_this, _createTBody, _createTBody2).call(_this, jugadores);
        _classPrivateMethodGet(_this, _configBtnAcciones, _configBtnAcciones2).call(_this);
      })["catch"](function (error) {
        alert(error);
        console.error(error);
      });
    }
  }]);
  return ListaJugadores;
}();
function _obtenerListaJugadores2(_x) {
  return _obtenerListaJugadores3.apply(this, arguments);
}
function _obtenerListaJugadores3() {
  _obtenerListaJugadores3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ruta) {
    var response, lista_judadores, jugadores;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(ruta);
        case 2:
          response = _context.sent;
          lista_judadores = [];
          _context.next = 6;
          return response.json().then(function (jugadores) {
            return JSON.parse(jugadores);
          });
        case 6:
          jugadores = _context.sent;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", response.json().then(function (mensaje) {
            throw new Error('Error en el servidor =>' + mensaje);
          }));
        case 9:
          jugadores.forEach(function (jugador) {
            lista_judadores.push({
              documento: jugador.c15_jugador_id,
              nombres: jugador.c15_jugador_nombres,
              apellidos: jugador.c15_jugador_apellidos,
              genero: jugador.c15_jugador_genero,
              pais_residencia: jugador.c15_jugador_pais,
              departamento_residencia: jugador.c15_jugador_departamento,
              ciudad_residencia: jugador.c15_jugador_municipio,
              club: jugador.c15_club_nombre,
              fecha_nacimiento: jugador.c15_jugador_fecha_nacimiento
            });
          });
          return _context.abrupt("return", lista_judadores);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _obtenerListaJugadores3.apply(this, arguments);
}
function _createTBody2(_x2) {
  return _createTBody3.apply(this, arguments);
}
function _createTBody3() {
  _createTBody3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(judadores) {
    var _this2 = this;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          judadores.forEach(function (jugador) {
            var tabla_tbody = document.getElementById('table-tbody');
            var tbody_tr = document.createElement('tr');
            tbody_tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700', 'hover:bg-gray-50', 'dark:hover:bg-gray-600');

            // c15_jugador_id
            var tbody_th_jugador_documento = document.createElement('th');
            tbody_th_jugador_documento.classList.add('text-right', 'px-4', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white');
            tbody_th_jugador_documento.setAttribute('scope', 'row');
            tbody_th_jugador_documento.textContent = jugador.documento;
            tbody_tr.appendChild(tbody_th_jugador_documento);

            // c15_jugador_nombres
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.nombres, tbody_tr);

            // c15_jugador_apellidos
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.apellidos, tbody_tr);

            // c15_jugador_genero
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.genero, tbody_tr);

            // c15_jugador_pais_residencia
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.pais_residencia, tbody_tr);

            // c15_jugador_departamento_residencia
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.departamento_residencia, tbody_tr);

            // c15_jugador_ciudad_residencia
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.ciudad_residencia, tbody_tr);

            // c10_club_nombre
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.club, tbody_tr);

            //c15_jugador_fecha_nacimiento
            _classPrivateMethodGet(_this2, _tbodyTD, _tbodyTD2).call(_this2, jugador.fecha_nacimiento, tbody_tr);

            // Acciones
            var tbody_td_acciones = document.createElement('td');
            tbody_td_acciones.classList.add('flex', 'flex-col', 'px-5', 'py-4');

            // Editar
            _classPrivateMethodGet(_this2, _btnAcciones, _btnAcciones2).call(_this2, 'Editar', jugador.documento, tbody_td_acciones);

            // Inscribir
            _classPrivateMethodGet(_this2, _btnAcciones, _btnAcciones2).call(_this2, 'Inscribir', jugador.documento, tbody_td_acciones);

            // Eliminar
            _classPrivateMethodGet(_this2, _btnAcciones, _btnAcciones2).call(_this2, 'Eliminar', jugador.documento, tbody_td_acciones);
            tbody_tr.appendChild(tbody_td_acciones);
            tabla_tbody.appendChild(tbody_tr);
          });
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _createTBody3.apply(this, arguments);
}
function _configBtnAcciones2() {
  return _configBtnAcciones3.apply(this, arguments);
}
function _configBtnAcciones3() {
  _configBtnAcciones3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var btnEditar, btnInscribir, btnEliminar;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          btnEditar = document.getElementsByClassName('btnEditar');
          Array.from(btnEditar).forEach(function (elemento, key) {
            elemento.addEventListener('click', function () {
              /**
               * Se repite por primera vez.
               */
              var getDatosJugador = new _DataJugador__WEBPACK_IMPORTED_MODULE_0__["default"](elemento.dataset.jugadorHref);
              getDatosJugador.datosJugador;
            });
          });
          btnInscribir = document.getElementsByClassName('btnInscribir');
          Array.from(btnInscribir).forEach(function (elemento, key) {
            elemento.addEventListener('click', function () {
              var documento = elemento.dataset.jugadorHref;
              alert("jugador con documento : ".concat(documento, " inscrito correctamente."));
              /*
                  getDataJugador()
                  .then( jugador => {
                      organizarDatosModal(jugador);
                  })
                  .catch(error => {
                      alert(error);
                      console.error(error);
                  });
              */
            });
          });
          btnEliminar = document.getElementsByClassName('btnEliminar');
          Array.from(btnEliminar).forEach(function (elemento, key) {
            elemento.addEventListener('click', function () {
              var documento = elemento.dataset.jugadorHref;
              if (!confirm("\xBFEst\xE1 seguro de eliminar al jugador con el siguiente documento: ".concat(documento, "?"))) return;
              alert('eliminado');
              /*
                  getDataJugador()
                  .then( jugador => {
                      organizarDatosModal(jugador);
                  })
                  .catch(error => {
                      alert(error);
                      console.error(error);
                  });
              */
            });
          });
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _configBtnAcciones3.apply(this, arguments);
}
function _tbodyTD2() {
  var dato_judador = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tbody_tr = arguments.length > 1 ? arguments[1] : undefined;
  var tbody_td = document.createElement('td');
  tbody_td.classList.add('px-4', 'py-4');
  tbody_td.textContent = dato_judador;
  tbody_tr.appendChild(tbody_td);
}
function _btnAcciones2() {
  var accion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var documento = arguments.length > 1 ? arguments[1] : undefined;
  var tbody_td_acciones = arguments.length > 2 ? arguments[2] : undefined;
  var td_btn = document.createElement('button');
  if (accion === 'Editar') td_btn.classList.add('btn' + accion, 'mb-1', 'font-medium', 'text-blue-600', 'dark:text-blue-500', 'hover:underline');else if (accion === 'Inscribir') td_btn.classList.add('btn' + accion, 'mb-1', 'font-medium', 'text-green-600', 'dark:text-green-500', 'hover:underline');else if (accion === 'Eliminar') td_btn.classList.add('btn' + accion, 'mb-1', 'font-medium', 'text-red-600', 'dark:text-red-500', 'hover:underline');
  td_btn.textContent = accion;
  td_btn.setAttribute('data-jugador-href', documento);
  tbody_td_acciones.appendChild(td_btn);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./resources/js/inscripciones/Jugador.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaJugadores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaJugadores */ "./resources/js/inscripciones/ListaJugadores.js");
/* harmony import */ var _CamposJugador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CamposJugador */ "./resources/js/inscripciones/CamposJugador.js");


/** 
 * INICIO - Listado jugadores
*/

var jugadores = new _ListaJugadores__WEBPACK_IMPORTED_MODULE_0__["default"]();
jugadores.listadoJugadores;

/** 
 * FIN - Listado jugadores
*/
})();

/******/ })()
;