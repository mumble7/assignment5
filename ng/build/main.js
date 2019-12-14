(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/quotes\">Quotes Page</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      \n    </ul>\n    \n  </div>\n  <div routerLink=\"/quotes/new\">\n    <button type=\"button\" class=\"btn btn-primary\">Add Quote</button>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  \n    <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ quote.quote }}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{ quote.author }}</h6>\n            <p class=\"card-text\">{{ quote.id }}</p>\n            <p class=\"card-text\">{{ quote.source }}</p>\n            <p class=\"card-text\">{{ quote.topic }}</p>\n            <p class=\"card-text\">{{ added_at }}</p>\n            <p class=\"card-text\">{{ updated_at }}</p>\n            <div>\n                <a routerLink=\"/quotes/{{ quote.id }}/edit\" type=\"button\" class=\"btn btn-primary float-right\">EDIT</a>\n                <a (click)=\"toggleConfirmDelete()\" type=\"button\" class=\"btn btn-danger\">DELETE</a>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"deleteModal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">Delete Confirmation</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"toggleConfirmDelete\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>Are you sure you want to delete {{ quote.quote }}?</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteQuote(quote)\">DELETE</button>\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"toggleConfirmDelete\">CANCEL</button>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote-form.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"quoteExists; then editQuote else addQuote\"></div>\n    <ng-template #editQuote>\n        <h2>Edit a quote</h2>\n    </ng-template>\n    <ng-template #addQuote>\n        <h2>Add a quote</h2>\n    </ng-template>\n\n    <form #f=\"ngForm\" [formGroup]=\"quoteForm\" (ngSubmit)=\"submitForm(f)\">\n        <div class=\"form-group\">\n            <label for=\"quote\" class=\"label\">Quote</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"quote\">\n            <p *ngIf=\"f.submitted && quote.invalid\">A quote is required</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"quote\" class=\"label\">Author</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"author\">\n            <p class=\"\" *ngIf=\"f.submitted && quote.invalid\">An author is required</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"quote\" class=\"label\">id</label>\n            <input type=\"number\" class=\"form-control\" formControlName=\"id\">\n            <p class=\"\" *ngIf=\"f.submitted && quote.invalid\">An ID is required.</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"quote\" class=\"label\">Source</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"source\">\n            <p class=\"\" *ngIf=\"f.submitted && quote.invalid\">A source is required.</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"quote\" class=\"label\">Topic</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"topic\">\n            <p class=\"\" *ngIf=\"f.submitted && quote.invalid\">A topic is required.</p>\n        </div>\n        <div>\n            <button class=\"button\">Submit</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This is where my card will go -->\n<div class=\"card quotes-card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ quote.quote }}</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{ quote.author }}</h6>\n    <p class=\"card-text\">{{ quote.id }}</p>\n    <p class=\"card-text\">{{ quote.source }}</p>\n    <p class=\"card-text\">{{ quote.topic }}</p>\n    <p class=\"card-text\">{{ quote.added_at }}</p>\n    <p class=\"card-text\">{{ quote.updated_at }}</p>\n    <a routerLink=\"/quotes/{{ quote.id }}\" class=\"btn btn-success\">View</a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quotes.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quotes.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- container and spacing-->\n<!-- <div class=\"container\">\n<div class=\"row\">\n        \n    <button (click)=\"sortQuotes()\" class=\"button\">Sort</button>\n    <div class=\"col-sm\"></div>\n\n\n<quote-el *ngFor=\"let m of quotes\" class=\"col-4\" [quote]=\"m\">\n\n</quote-el>\n\n</div>\n</div> -->\n\n<div class=\"container\">\n    <button (click)=\"sortQuotes()\" class=\"button btn btn-info\" >Sort</button>\n    <div class=\"row\" class=\"quotes-container\" >\n                    <quote-el *ngFor=\"let m of quotes\" [quote]=\"m\">\n\n                            </quote-el>\n      \n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/register-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/register-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <p class=\"title\">User registeration</p>\r\n    <p>If you already have an accound please \r\n        <a routerLink=\"/signin\" class=\"button is-success\">Sign in</a>.\r\n    </p>\r\n    <form #f=\"ngForm\" [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm(f)\">\r\n        <div class=\"field\">\r\n            <label for=\"firstName\" class=\"label\">First Name</label>\r\n            <div class=\"control\">\r\n                <input type=\"hidden\" formControlName=\"_id\">\r\n                <input type=\"text\" class=\"input\" formControlName=\"firstName\">\r\n            </div>\r\n            <p class=\"help is-danger\" *ngIf=\"f.submitted && firstName.invalid\">\r\n                First name is required.\r\n            </p>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label for=\"lastName\" class=\"label\">Last Name</label>\r\n            <div class=\"control\">\r\n                <input type=\"text\" class=\"input\" formControlName=\"lastName\">\r\n            </div>\r\n            <p class=\"help is-danger\" *ngIf=\"f.submitted && lastName.invalid\">\r\n                Last name is required.\r\n            </p>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label for=\"email\" class=\"label\">Email</label>\r\n            <div class=\"control\">\r\n                <input type=\"email\" class=\"input\" formControlName=\"email\">\r\n            </div>\r\n            <p class=\"help is-danger\" *ngIf=\"f.submitted && email.invalid\">\r\n                Email is required.\r\n            </p>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label for=\"username\" class=\"label\">Username</label>\r\n            <div class=\"control\">\r\n                <input type=\"text\" class=\"input\" formControlName=\"username\">\r\n            </div>\r\n            <p class=\"help is-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n                Username is required.\r\n            </p>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label for=\"password\" class=\"label\">Password</label>\r\n            <div class=\"control\">\r\n                <input type=\"password\" class=\"input\" formControlName=\"password\">\r\n            </div>\r\n            <p class=\"help is-danger\" *ngIf=\"f.submitted && password.invalid\">\r\n                Password is required.\r\n            </p>\r\n        </div>\r\n        <div class=\"field\">\r\n            <div class=\"control\">\r\n                <button class=\"button is-primary\">Submit</button>\r\n                <button class=\"button\" routerLink=\"/movies\">Cancel</button>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/signin-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/signin-form.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <p class=\"title\">Sign in</p>\r\n    <p>If you don't have an accound please \r\n        <a routerLink=\"/register\" class=\"button is-success\">Register</a>.\r\n    </p>\r\n    <form #f=\"ngForm\" (ngSubmit)=\"submitForm(f)\">\r\n        <div class=\"field\">\r\n            <label for=\"username\" class=\"label\">Username</label>\r\n            <div class=\"control\">\r\n                <input type=\"text\" class=\"input\" required name=\"username\" id=\"username\" #username=\"ngModel\" [(ngModel)]=\"user.username\">\r\n            </div>\r\n            <p class=\"help is-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n                Username is required.\r\n            </p>\r\n        </div>\r\n        <div class=\"field\">\r\n            <label for=\"password\" class=\"label\">Password</label>\r\n            <div class=\"control\">\r\n                <input type=\"password\" required class=\"input\" name=\"password\" id=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\">\r\n            </div>\r\n            <p class=\"help is-danger\" *ngIf=\"f.submitted && password.invalid\">\r\n                Password is required.\r\n            </p>\r\n        </div>\r\n        <div class=\"field\">\r\n            <div class=\"control\">\r\n                <button class=\"button\">Submit</button>\r\n                <button class=\"button\" routerLink=\"/quotes\">Cancel</button>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/quotes/quotes.component */ "./src/app/components/quotes/quotes.component.ts");
/* harmony import */ var _components_quotes_quote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/quotes/quote.component */ "./src/app/components/quotes/quote.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _components_quotes_quote_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/quotes/quote-details.component */ "./src/app/components/quotes/quote-details.component.ts");
/* harmony import */ var _components_quotes_quote_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/quotes/quote-form.component */ "./src/app/components/quotes/quote-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_in_memory_quote_db_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/in-memory-quote-db.service */ "./src/app/services/in-memory-quote-db.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_9__["QuotesComponent"],
            _components_quotes_quote_component__WEBPACK_IMPORTED_MODULE_10__["QuoteComponent"],
            _components_quotes_quote_details_component__WEBPACK_IMPORTED_MODULE_13__["QuoteDetailsComponent"],
            _components_quotes_quote_form_component__WEBPACK_IMPORTED_MODULE_14__["QuoteFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_12__["routes"]),
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_services_in_memory_quote_db_service__WEBPACK_IMPORTED_MODULE_16__["InMemoryQuoteDBService"], {
                dataEncapsulation: false,
                passThruUnknownUrl: true,
                put204: false
            })
        ],
        providers: [],
        bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".quotes-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.quotes-card {\n  background-color: salmon; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3eW91bmcvRG9jdW1lbnRzL1dlYiAzNDMwL0Fzc2lnbm1lbnQ1L25nL3NyYy9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDWSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUd0QztFQUNJLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVvdGVzLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgLnF1b3Rlcy1jYXJke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XG4gICAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/components/quotes/quote-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/quotes/quote-details.component.ts ***!
  \**************************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quotes.service */ "./src/app/services/quotes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let QuoteDetailsComponent = class QuoteDetailsComponent {
    constructor(quotesService, route, toastr, router) {
        this.quotesService = quotesService;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.isToConfirmDelete = false;
        this.deleteModalStyle = 'none';
    }
    ngOnInit() {
        let quoteId = this.route.snapshot.params['id'];
        this.quotesService.getQuote(quoteId).subscribe(val => this.quote = val);
    }
    /*
    ngOnInit(): void {
        this.quote$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.quotesService.getQuote(params.get('id'))
            )
        )
    }
    */
    toggleConfirmDelete() {
        this.isToConfirmDelete = !this.isToConfirmDelete;
        $('#deleteModal').modal('toggle');
    }
    deleteQuote(quote) {
        $('#deleteModal').modal('toggle');
        this.quotesService.deleteQuote(quote).subscribe(data => {
            this.toastr.success("This quote has been deleted.");
            this.router.navigate(['/quotes']);
        });
    }
};
QuoteDetailsComponent.ctorParameters = () => [
    { type: _services_quotes_service__WEBPACK_IMPORTED_MODULE_2__["QuotesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote-details.component.html")).default
    })
], QuoteDetailsComponent);



/***/ }),

/***/ "./src/app/components/quotes/quote-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/quotes/quote-form.component.ts ***!
  \***********************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/quotes.service */ "./src/app/services/quotes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let QuoteFormComponent = class QuoteFormComponent {
    constructor(quotesService, route, router, fb, toastr) {
        this.quotesService = quotesService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.quoteExists = false;
    }
    ngOnInit() {
        this.quoteForm = this.fb.group({
            quote: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            author: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            source: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            topic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        let quoteId = this.route.snapshot.params['id'];
        if (quoteId !== undefined) {
            this.quoteExists = true;
            this.quotesService.getQuote(quoteId).subscribe(quote => this.quoteForm.setValue(quote));
        }
    }
    submitForm(f) {
        if (f.valid) {
            const quote = Object.assign({}, this.quoteForm.value);
            if (this.quoteExists) {
                this.quotesService.updateQuote(quote).subscribe(data => {
                    this.toastr.success("Your Quote has been updated successfully.");
                    this.router.navigate(['/quotes']);
                });
            }
            else {
                this.quotesService.addQuote(quote).subscribe(data => {
                    this.toastr.success("A new quote has been added successfully.");
                    this.router.navigate(['/quotes']);
                });
            }
        }
    }
    get quote() { return this.quoteForm.get('quote'); }
    get author() { return this.quoteForm.get('author'); }
    get id() { return this.quoteForm.get('id'); }
    get source() { return this.quoteForm.get('source'); }
    get topic() { return this.quoteForm.get('topic'); }
    get added_at() { return this.quoteForm.get('added_at'); }
    get updated_at() { return this.quoteForm.get('updated_at'); }
};
QuoteFormComponent.ctorParameters = () => [
    { type: _services_quotes_service__WEBPACK_IMPORTED_MODULE_3__["QuotesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote-form.component.html")).default
    })
], QuoteFormComponent);



/***/ }),

/***/ "./src/app/components/quotes/quote.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/quotes/quote.component.ts ***!
  \******************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//el stands for element
let QuoteComponent = class QuoteComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuoteComponent.prototype, "quote", void 0);
QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "quote-el",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quote.component.html")).default
    })
], QuoteComponent);



/***/ }),

/***/ "./src/app/components/quotes/quotes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/quotes/quotes.component.ts ***!
  \*******************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quotes.service */ "./src/app/services/quotes.service.ts");


//import service

let QuotesComponent = class QuotesComponent {
    constructor(quotesService) {
        this.quotesService = quotesService;
    }
    ngOnInit() {
        this.quotesService.getQuotes().subscribe(data => this.quotes = data);
    }
    sortQuotes() {
        console.log("Sorting: TODO");
    }
};
QuotesComponent.ctorParameters = () => [
    { type: _services_quotes_service__WEBPACK_IMPORTED_MODULE_2__["QuotesService"] }
];
QuotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "quotes-el",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quotes/quotes.component.html")).default
    })
], QuotesComponent);



/***/ }),

/***/ "./src/app/components/users/register-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/users/register-form.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterFormComponent = class RegisterFormComponent {
    constructor(fb, toastr, router, authService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            _id: [null],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/.+@.+\..+/)]],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submitForm(f) {
        if (f.valid) {
            const user = Object.assign({}, this.registerForm.value);
            this.authService.register(user).subscribe(res => {
                this.toastr.success("Successfully registered.");
                this.router.navigate(['/quotes']);
            }, err => {
                this.toastr.error("Unable to register user.");
            });
        }
    }
    get firstName() { return this.registerForm.get('firstName'); }
    get lastName() { return this.registerForm.get('lastName'); }
    get email() { return this.registerForm.get('email'); }
    get username() { return this.registerForm.get('username'); }
    get password() { return this.registerForm.get('password'); }
};
RegisterFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/register-form.component.html")).default
    })
], RegisterFormComponent);



/***/ }),

/***/ "./src/app/components/users/signin-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/signin-form.component.ts ***!
  \***********************************************************/
/*! exports provided: SignInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function() { return SignInFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");






let SignInFormComponent = class SignInFormComponent {
    constructor(toastr, router, authService) {
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    submitForm(f) {
        if (f.valid) {
            this.authService.signin(this.user).subscribe(res => {
                this.toastr.success("Successfully signed in.");
                this.router.navigate(['/movies']);
            }, err => {
                this.toastr.error("Unable to sign in.");
            });
        }
    }
};
SignInFormComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
SignInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/signin-form.component.html")).default
    })
], SignInFormComponent);



/***/ }),

/***/ "./src/app/models/quotes.ts":
/*!**********************************!*\
  !*** ./src/app/models/quotes.ts ***!
  \**********************************/
/*! exports provided: Quotes_10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotes_10", function() { return Quotes_10; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Quotes_10 = [
    {
        "quote": "We build our computers the way we build our cities: over time, without a plan, on top of ruins.",
        "id": 1,
        "author": "Ellen Ullman",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "What one programmer can do in one month, two programmers can do in two months.",
        "id": 2,
        "author": "Fred Brooks",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        "id": 3,
        "author": "Patrick McKenzie",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.",
        "id": 4,
        "author": "Niklaus Wirth",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
        "id": 5,
        "author": "Andy Hunt",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "Java is to JavaScript as ham is to hamster.",
        "id": 6,
        "author": "Jeremy Keith",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "One of the best programming skills you can have is knowing when to walk away for awhile.",
        "id": 7,
        "author": "Oscar Godson",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "Without requirements or design, programming is the art of adding bugs to an empty text file.",
        "id": 8,
        "author": "Louis Srygley",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "A computer lets you make more mistakes faster than any other invention in human history, with the possible exception of handguns and Tequila.",
        "id": 9,
        "author": "Mitch Ratcliffe",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    },
    {
        "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        "id": 10,
        "author": "John Woods",
        "source": "Book",
        "topic": "Philosphy",
        "added_at": new Date(),
        "updated_at": new Date()
    }
];


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quotes/quotes.component */ "./src/app/components/quotes/quotes.component.ts");
/* harmony import */ var _components_quotes_quote_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quotes/quote-details.component */ "./src/app/components/quotes/quote-details.component.ts");
/* harmony import */ var _components_quotes_quote_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quotes/quote-form.component */ "./src/app/components/quotes/quote-form.component.ts");
/* harmony import */ var _components_users_register_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/register-form.component */ "./src/app/components/users/register-form.component.ts");
/* harmony import */ var _components_users_signin_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/signin-form.component */ "./src/app/components/users/signin-form.component.ts");
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.guard */ "./src/app/services/authentication.guard.ts");







const routes = [
    { path: 'quotes', component: _components_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_1__["QuotesComponent"] },
    { path: 'quotes/new', component: _components_quotes_quote_form_component__WEBPACK_IMPORTED_MODULE_3__["QuoteFormComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"]] },
    { path: 'quotes/:id', component: _components_quotes_quote_details_component__WEBPACK_IMPORTED_MODULE_2__["QuoteDetailsComponent"] },
    { path: 'quotes/:id/edit', component: _components_quotes_quote_form_component__WEBPACK_IMPORTED_MODULE_3__["QuoteFormComponent"], canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"]] },
    { path: '', redirectTo: '/quotes', pathMatch: 'full' },
    { path: 'register', component: _components_users_register_form_component__WEBPACK_IMPORTED_MODULE_4__["RegisterFormComponent"] },
    { path: 'signin', component: _components_users_signin_form_component__WEBPACK_IMPORTED_MODULE_5__["SignInFormComponent"] }
];


/***/ }),

/***/ "./src/app/services/authentication.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/services/authentication.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




let AuthenticationGuard = class AuthenticationGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"].isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AuthenticationService = class AuthenticationService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    static isAuthenticated() {
        return localStorage.getItem('auth-token') !== null;
    }
    static httpHeaders() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
            })
        };
    }
    register(user) {
        return this.http.post('/api/users/register', user, httpOptions);
    }
    signin(user) {
        let res = this.http.post('/api/users/signin', user, httpOptions);
        return res.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (data['token']) {
                localStorage.setItem('auth-token', data['token']);
                return true;
            }
            else {
                return false;
            }
        }));
    }
    signout() {
        this.cookieService.delete('token');
        localStorage.removeItem('auth-token');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/in-memory-quote-db.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/in-memory-quote-db.service.ts ***!
  \********************************************************/
/*! exports provided: InMemoryQuoteDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryQuoteDBService", function() { return InMemoryQuoteDBService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
//DO I NEED THIS PAGE?

class InMemoryQuoteDBService {
    createDb() {
        const quotes = [
        //Imports quotes json style
        ];
        return { quotes };
    }
}


/***/ }),

/***/ "./src/app/services/quotes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/quotes.service.ts ***!
  \********************************************/
/*! exports provided: QuotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesService", function() { return QuotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_quotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/quotes */ "./src/app/models/quotes.ts");





let QuotesService = class QuotesService {
    getQuotes() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_quotes__WEBPACK_IMPORTED_MODULE_4__["Quotes_10"]);
    }
    getQuote(id) {
        return this.getQuotes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((quotes) => quotes.find((quote) => quote.id == id)));
    }
    addQuote(quote) {
        this.getQuotes().subscribe((quotes) => {
            let m = quotes.find(mv => mv.id === quote.id);
            if (m === undefined) {
                quote.added_at = new Date();
                quote.updated_at = new Date();
                _models_quotes__WEBPACK_IMPORTED_MODULE_4__["Quotes_10"].push(quote);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    updateQuote(quote) {
        console.log(_models_quotes__WEBPACK_IMPORTED_MODULE_4__["Quotes_10"]);
        for (let m of _models_quotes__WEBPACK_IMPORTED_MODULE_4__["Quotes_10"]) {
            if (m.id == quote.id) {
                quote.updated_at = new Date();
                Object.assign(m, quote);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    deleteQuote(quote) {
        _models_quotes__WEBPACK_IMPORTED_MODULE_4__["Quotes_10"].splice(_models_quotes__WEBPACK_IMPORTED_MODULE_4__["Quotes_10"].indexOf(quote), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
};
QuotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], QuotesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthewyoung/Documents/Web 3430/Assignment5/ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map