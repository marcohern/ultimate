(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/marcohern/ultimate-core-ui/fesm5/marcohern-ultimate-core-ui.js":
/*!*****************************************************************************!*\
  !*** ./dist/marcohern/ultimate-core-ui/fesm5/marcohern-ultimate-core-ui.js ***!
  \*****************************************************************************/
/*! exports provided: CheckboxesComponent, InviteComponent, LoginComponent, MenuComponent, PagerComponent, ParamEditableComponent, RegisterComponent, ParamForm, InvitePage, LoginPage, NotFoundPage, PrivatePage, PublicPage, RegisterPage, ParamRow, ParamTable, UltimateCoreUiModule, ɵb, ɵc, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxesComponent", function() { return CheckboxesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamEditableComponent", function() { return ParamEditableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamForm", function() { return ParamForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePage", function() { return InvitePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePage", function() { return PrivatePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPage", function() { return PublicPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamRow", function() { return ParamRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamTable", function() { return ParamTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateCoreUiModule", function() { return UltimateCoreUiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ParamsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxesComponent = /** @class */ (function () {
    function CheckboxesComponent() {
        this.changes = new _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["CheckboxChanged"]();
        this.checkboxes = [];
        this.source = [];
        this.label = 'label';
        this.value = 'value';
        this.selected = [];
        this.checkboxChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    CheckboxesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CheckboxesComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkboxes = this.source.map(function (s, i) { return new _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"](s[_this.label], s[_this.value], false, s); });
        if (this.selected) {
            if (this.selected.length > 0)
                this.changes.noneSelected = false;
            else
                this.changes.noneSelected = true;
            this.selected.forEach(function (s) {
                /** @type {?} */
                var checkbox = _this.checkboxes.find(function (c) { return c.value === s[_this.value]; });
                if (checkbox)
                    checkbox.checked = true;
            });
        }
    };
    /**
     * @param {?} $event
     * @param {?} target
     * @return {?}
     */
    CheckboxesComponent.prototype.changed = /**
     * @param {?} $event
     * @param {?} target
     * @return {?}
     */
    function ($event, target) {
        target.checked = (!target.checked);
        target.status = (target.status) ? null :
            (target.checked) ? 'added' : 'removed';
        if (target.checked) {
            if (target.status === 'added')
                this.changes.added.push(target);
            else {
                /** @type {?} */
                var i = this.changes.removed.indexOf(target);
                this.changes.removed.splice(i, 1);
            }
        }
        if (!target.checked) {
            if (target.status === 'removed')
                this.changes.removed.push(target);
            else {
                /** @type {?} */
                var i = this.changes.added.indexOf(target);
                this.changes.added.splice(i, 1);
            }
        }
        this.changes.noneSelected = (this.checkboxes.find(function (c) { return c.checked; })) ? false : true;
        this.checkboxChanged.emit(this.changes);
    };
    CheckboxesComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ult-checkboxes',
                    template: "<div class=\"form-check\" *ngFor=\"let c of checkboxes\">\n  <input class=\"form-check-input\" type=\"checkbox\" [value]=\"c.value\" (click)=\"changed($event, c)\" [checked]=\"c.checked\">\n  <label class=\"form-check-label\" >{{c.label}}</label>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CheckboxesComponent.ctorParameters = function () { return []; };
    CheckboxesComponent.propDecorators = {
        source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        checkboxChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return CheckboxesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthService = /** @class */ (function () {
    function AuthService(req) {
        this.req = req;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        return this.req.login(username, password);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return this.req.logout();
    };
    /**
     * @param {?} user
     * @return {?}
     */
    AuthService.prototype.invite = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.req.post('/users', user);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AuthService.prototype.getUser = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.get('/users', id);
    };
    AuthService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["RequestService"] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"])({ factory: function AuthService_Factory() { return new AuthService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"])(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["RequestService"])); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InviteComponent = /** @class */ (function () {
    function InviteComponent(as, route) {
        this.as = as;
        this.route = route;
        this.user = { email: '', name: '' };
    }
    /**
     * @return {?}
     */
    InviteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var user_id = this.route.snapshot.params.id;
        this.as.getUser(user_id).subscribe(function (result) {
            console.log(result);
            _this.user = result;
        });
        /*
        this.as.invite({email:'jcusack@mail.com',name:'John Cusack'}).subscribe(result => {
          console.log(result);
        });*/
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    InviteComponent.prototype.invite = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        //console.log("invite",$event, this.user);
        /** @type {?} */
        var user = {
            id: this.user.id,
            email: this.user.email,
            name: this.user.name
        };
        this.as.invite(user).subscribe(function (result) {
            console.log(result);
        });
    };
    InviteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ult-auth-invite',
                    template: "<div class=\"card\" style=\"width: 100%\">\r\n  <div class=\"card-body\">\r\n    <form id=\"registerForm\">\r\n      <p class=\"h5 card-title\">Invite a User</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"johndoe@mail.com\" [(ngModel)]=\"user.email\" name=\"email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"John Doe\" [(ngModel)]=\"user.name\" name=\"name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"invite($event)\">Invite</button>\r\n    </form>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InviteComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    return InviteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(LoginComponent, _super);
    function LoginComponent(_req, router, ass) {
        var _this = _super.call(this, ass) || this;
        _this._req = _req;
        _this.router = router;
        _this.email = '';
        _this.password = '';
        _this.errorMsg = '';
        return _this;
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.req = /**
     * @return {?}
     */
    function () {
        get: {
            return this._req;
        }
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.requestLogin = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.errorAlert = false;
        this.errorMsg = '';
        this._req.login(this.email, this.password).subscribe(function (result) {
            _this._req.setToken(result.access_token);
            _this.router.navigate(['/private']);
        }, function (error) {
            if (error.error) {
                if (error.error.message) {
                    _this.errorMsg = error.error.message;
                }
            }
            else {
                if (error.message) {
                    _this.errorMsg = error.message;
                }
            }
            _this.errorAlert = true;
        });
    };
    LoginComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ult-auth-login',
                    template: "<div class=\"card\" style=\"width: 100%\">\r\n  <div class=\"card-body\">\r\n    <form (ngSubmit)=\"requestLogin()\">\r\n      <p class=\"h5 card-title\">Login</p>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"johndoe@mail.com\" name=\"email\" [(ngModel)]=\"email\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required>\r\n      </div>\r\n      <div class=\"form-group form-check\">\r\n        <input type=\"checkbox\" class=\"form-check-input\">\r\n        <label class=\"form-check-label\">Remember me</label>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"req().isRequesting()\">Login</button>\r\n        <img [attr.src]=\"assets('loading.svg')\" alt=\"Loading\" width=\"38px\" *ngIf=\"req().isRequesting()\" >\r\n      </div>\r\n      <div>\r\n        <a href=\"#\">Forgot password?</a>\r\n      </div>\r\n    </form>\r\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorAlert\">\r\n      <span>{{errorMsg}}</span>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["AssetsService"] }
    ]; };
    return LoginComponent;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["ComponentBase"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuComponent = /** @class */ (function () {
    function MenuComponent(_req, http, router) {
        this._req = _req;
        this.http = http;
        this.router = router;
        this.title = '[Title]';
        this.items = [];
        this.options = {
            search: false
        };
        this.menu = [];
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.req = /**
     * @return {?}
     */
    function () {
        get: {
            return this._req;
        }
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createMenu(this.items);
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._req.logout().subscribe(function (result) {
            _this._req.clearToken();
            _this.router.navigate(['/login']);
        }, function (error) {
            if (error.status == 401) {
                _this.router.navigate(['/login']);
            }
        });
    };
    /**
     * @param {?} sparent
     * @param {?} dparent
     * @return {?}
     */
    MenuComponent.prototype.createSubMenu = /**
     * @param {?} sparent
     * @param {?} dparent
     * @return {?}
     */
    function (sparent, dparent) {
        var e_1, _a;
        dparent.dropdown = (sparent.children.length > 0) ? true : false;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(sparent.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var k = _c.value;
                /** @type {?} */
                var c = {
                    label: k.label,
                    divider: false,
                    enabled: false,
                    dropdown: false,
                    path: k.path,
                    query: k.query,
                    disableClass: ''
                };
                c.divider = (k.label == '-') ? true : false;
                dparent.children.push(c);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    MenuComponent.prototype.createMenu = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_2, _a;
        /** @type {?} */
        var j = 1;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                /** @type {?} */
                var m = {
                    id: j,
                    label: i.label,
                    enabled: false,
                    dropdown: false,
                    children: [],
                    path: null,
                    disableClass: ''
                };
                m.path = (i.path) ? i.path : null;
                m.enabled = (typeof i.enabled === 'undefined') ? true : (i.enabled === true) ? true : false;
                m.disableClass = (m.enabled) ? '' : 'disabled';
                if (i.children) {
                    this.createSubMenu(i, m);
                }
                this.menu.push(m);
                j++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MenuComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ultimate-menu',
                    template: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">{{title}}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <ng-container *ngIf=\"req().isAuthenticated()\" >\r\n          <ng-container *ngFor=\"let item of menu\">\r\n            <li *ngIf=\"item.dropdown\" class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" [ngClass]=\"item.disableClass\"\r\n                [id]=\"'navDrop'+item.id\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                {{item.label}}\r\n              </a>\r\n              <div class=\"dropdown-menu\" *ngIf=\"item.children\" [attr.aria-labelledby]=\"'navDrop'+item.id\">\r\n                <ng-container *ngFor=\"let child of item.children\">\r\n                  <a *ngIf=\"!child.divider\" class=\"dropdown-item\" [routerLink]=\"child.path\" [queryParams]=\"child.query\">{{child.label}}</a>\r\n                  <div *ngIf=\"child.divider\" class=\"dropdown-divider\"></div>\r\n                </ng-container>\r\n              </div>\r\n            </li>\r\n            <li *ngIf=\"!item.dropdown\" class=\"nav-item\">\r\n              <a class=\"nav-link\" [ngClass]=\"item.disableClass\" [routerLink]=\"item.path\" [queryParams]=\"item.query\">{{item.label}}</a>\r\n            </li>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ul>\r\n      <form *ngIf=\"options.search\" class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"!req().isAuthenticated()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"req().isAuthenticated()\">\r\n          <button class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MenuComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.pages = [];
        this.paged = new _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["Paged"]();
        this.path = ['/non/existent/path'];
    }
    /**
     * @param {?} last_page
     * @return {?}
     */
    PagerComponent.prototype.arr = /**
     * @param {?} last_page
     * @return {?}
     */
    function (last_page) {
        /** @type {?} */
        var arr = [];
        for (var i = 1; i <= last_page; i++) {
            arr[i - 1] = i;
        }
        return arr;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.pages = [];
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.isDataAvailabla = /**
     * @return {?}
     */
    function () {
        if (typeof this.paged === 'undefined')
            return false;
        return true;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.isDataAvailabla())
            return;
        this.pages = this.arr(this.paged.last_page);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PagerComponent.prototype.activate = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (!this.isDataAvailabla())
            ;
        return (page == this.paged.current_page) ? 'active' : '';
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PagerComponent.prototype.disable = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (!this.isDataAvailabla())
            return 'disabled';
        return (page < 1 || page > this.paged.last_page) ? 'disabled' : '';
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.disablePrev = /**
     * @return {?}
     */
    function () {
        if (!this.isDataAvailabla())
            return 'disabled';
        return this.disable(this.paged.current_page - 1);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.disableNext = /**
     * @return {?}
     */
    function () {
        if (!this.isDataAvailabla())
            return 'disabled';
        return this.disable(this.paged.current_page + 1);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.moreThanOnePage = /**
     * @return {?}
     */
    function () {
        if (!this.isDataAvailabla())
            return false;
        if (this.paged.last_page <= 1)
            return false;
        return true;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        if (!this.isDataAvailabla())
            return {};
        return { page: this.paged.current_page - 1 };
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (!this.isDataAvailabla())
            return {};
        return { page: this.paged.current_page + 1 };
    };
    PagerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ultimate-pager',
                    template: "<nav aria-label=\"Page navigation\" *ngIf=\"moreThanOnePage()\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\" [ngClass]=\"disablePrev()\">\n      <a class=\"page-link\" [routerLink]=\"path\" [queryParams]=\"prevPage()\" aria-label=\"Anterior\">\n        <span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Anterior</span>\n      </a>\n    </li>\n    <li class=\"page-item\" *ngFor=\"let p of pages\" [ngClass]=\"activate(p)\">\n      <a class=\"page-link\" [routerLink]=\"path\" [queryParams]=\"{page:p}\">{{p}}</a>\n    </li>\n    <li class=\"page-item\" [ngClass]=\"disableNext()\">\n      <a class=\"page-link\" [routerLink]=\"path\" [queryParams]=\"nextPage()\" aria-label=\"Siguiente\">\n        <span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Siguiente</span>\n      </a>\n    </li>\n  </ul>\n</nav>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return []; };
    PagerComponent.propDecorators = {
        paged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return PagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParamEditableComponent = /** @class */ (function () {
    function ParamEditableComponent(ps) {
        this.ps = ps;
        this.isEditing = false;
    }
    /**
     * @return {?}
     */
    ParamEditableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ParamEditableComponent.prototype.editing = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.isEditing = true;
        console.log("ParamEditableComponent.editing", this.parameter);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ParamEditableComponent.prototype.save = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        console.log("ParamEditableComponent.save", this.parameter);
        this.ps.saveParameter(this.parameter).subscribe(function (result) {
            console.log("ParamEditableComponent.save", "ps.saveParameter", _this.parameter, result);
            _this.isEditing = false;
        });
    };
    ParamEditableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ultimate-param-editable',
                    template: "<ultimate-param-row *ngIf=\"!isEditing\" [parameter]=\"parameter\" (editing)=\"editing($event)\"></ultimate-param-row>\n<ultimate-param-form *ngIf=\"isEditing\" [parameter]=\"parameter\" (save)=\"save($event)\"></ultimate-param-form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ParamEditableComponent.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["ParameterService"] }
    ]; };
    ParamEditableComponent.propDecorators = {
        parameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return ParamEditableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    RegisterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ult-auth-register',
                    template: "<div class=\"card\" style=\"width: 100%\">\r\n  <div class=\"card-body\">\r\n    <form id=\"registerForm\">\r\n      <p class=\"h5 card-title\">Register</p>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"johndoe@mail.com\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"John Doe\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Confirm Password</label>\r\n        <input type=\"password\" class=\"form-control\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return []; };
    return RegisterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParamForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ParamForm, _super);
    function ParamForm(ass, fb) {
        var _this = _super.call(this, ass) || this;
        _this.fb = fb;
        _this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"];
        _this.group = _this.fb.group({
            name: _this.fb.control(''),
            group: _this.fb.control(''),
            value: _this.fb.control(''),
        });
        return _this;
    }
    /**
     * @return {?}
     */
    ParamForm.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /*console.log("ParamForm.ngOnInit", this.parameter);
        if (this.parameter) {
          this.group.setValue({
            name: this.parameter.name,
            group: this.parameter.group,
            value: this.parameter.value,
          });
        }*/
    };
    /**
     * @return {?}
     */
    ParamForm.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.parameter) {
            this.group.setValue({
                name: this.parameter.name,
                group: this.parameter.group,
                value: this.parameter.value,
            });
        }
    };
    /**
     * @return {?}
     */
    ParamForm.prototype.saving = /**
     * @return {?}
     */
    function () {
        this.parameter.value = this.group.value.value;
        this.save.emit(this.parameter);
    };
    ParamForm.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ultimate-param-form',
                    template: "<form [formGroup]=\"group\" (ngSubmit)=\"submit($event)\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"group\" formControlName=\"group\" class=\"form-control\" readonly />\n      </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"name\" formControlName=\"name\" class=\"form-control\" readonly />\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"value\" formControlName=\"value\" class=\"form-control\" />\n      </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary form-control\">Guardar</button>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ParamForm.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["AssetsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    ParamForm.propDecorators = {
        parameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        save: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return ParamForm;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["FormBase"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InvitePage = /** @class */ (function () {
    function InvitePage() {
    }
    /**
     * @return {?}
     */
    InvitePage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InvitePage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'invite-page',
                    template: "<div class=\"container\">\r\n    <ult-auth-invite></ult-auth-invite>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InvitePage.ctorParameters = function () { return []; };
    return InvitePage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    /**
     * @return {?}
     */
    LoginPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoginPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'login-page',
                    template: "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n        <ult-auth-login></ult-auth-login>\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = function () { return []; };
    return LoginPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NotFoundPage = /** @class */ (function () {
    function NotFoundPage() {
    }
    /**
     * @return {?}
     */
    NotFoundPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NotFoundPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'not-found-page',
                    template: "<div class=\"container\">\r\n<p class=\"text-center\">La ruta especificada no existe.</p>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NotFoundPage.ctorParameters = function () { return []; };
    return NotFoundPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PrivatePage = /** @class */ (function () {
    function PrivatePage() {
    }
    /**
     * @return {?}
     */
    PrivatePage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PrivatePage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'private-page',
                    template: "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n      <h2>Bienvenido a Ultimate</h2>\r\n      <p>Ultimate es un CMS (Sistema de Administracion de Contenido)... mas o menos.</p>\r\n      <p>Actualmente estas logueado, navega la aplicacion en el menu arriba.</p>\r\n    </div>\r\n  </div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PrivatePage.ctorParameters = function () { return []; };
    return PrivatePage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PublicPage = /** @class */ (function () {
    function PublicPage() {
    }
    /**
     * @return {?}
     */
    PublicPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PublicPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'public-page',
                    template: "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h2>Bienvenido a Ultimate</h2>\r\n    <p>Ultimate es un CMS (Sistema de Administracion de Contenido)... mas o menos.</p>\r\n    <p>\r\n      Click <a [routerLink]=\"['/login']\">aqui</a> Para hacer login.\r\n      Si estas logueado podras navegar el menu en la cima de la pagina.\r\n    </p>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PublicPage.ctorParameters = function () { return []; };
    return PublicPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
    }
    /**
     * @return {?}
     */
    RegisterPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    RegisterPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'register-page',
                    template: "<div class=\"row\">\r\n  <div class=\"col-md-3\"></div>\r\n  <div class=\"col-md-6\">\r\n    <ult-auth-register></ult-auth-register>\r\n  </div>\r\n  <div class=\"col-md-3\"></div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    RegisterPage.ctorParameters = function () { return []; };
    return RegisterPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParamRow = /** @class */ (function () {
    function ParamRow() {
        this.editing = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ParamRow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ParamRow.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.editing.emit(this.parameter);
    };
    ParamRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ultimate-param-row',
                    template: "<div class=\"row\">\n  <div class=\"col-sm-2\">{{parameter?.group}}</div>\n  <div class=\"col-sm-2\">{{parameter?.name}}</div>\n  <div class=\"col-sm-6\">{{parameter?.value}}</div>\n  <div class=\"col-sm-2\">\n    <button class=\"btn btn-warning form-control\" (click)=\"edit()\">Editar</button>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ParamRow.ctorParameters = function () { return []; };
    ParamRow.propDecorators = {
        parameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        editing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return ParamRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParamTable = /** @class */ (function () {
    function ParamTable(ps) {
        this.ps = ps;
        this.parameters = [];
    }
    /**
     * @return {?}
     */
    ParamTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ps.getAllParameters().subscribe(function (result) {
            _this.parameters = result;
        });
    };
    ParamTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'ultimate-param-table',
                    template: "<div class=\"row\">\n  <div class=\"col-sm-2\"><b>Grupo</b></div>\n  <div class=\"col-sm-2\"><b>Nombre</b></div>\n  <div class=\"col-sm-6\"><b>Valor</b></div>\n  <div class=\"col-sm-2\">\n  </div>\n</div>\n<ng-container *ngFor=\"let p of parameters\">\n  <ultimate-param-editable [parameter]=\"p\"></ultimate-param-editable>\n</ng-container>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ParamTable.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["ParameterService"] }
    ]; };
    return ParamTable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParamsPage = /** @class */ (function () {
    function ParamsPage() {
    }
    /**
     * @return {?}
     */
    ParamsPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ParamsPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'params-page',
                    template: "<div class=\"container\">\n  <h1>Parametros</h1>\n  <ultimate-param-table></ultimate-param-table>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ParamsPage.ctorParameters = function () { return []; };
    return ParamsPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    { path: 'notfound', component: NotFoundPage },
    { path: 'private', component: PrivatePage },
    { path: 'public', component: PublicPage },
    { path: 'login', component: LoginPage },
    { path: 'register', component: RegisterPage },
    { path: 'invite', component: InvitePage },
    { path: 'params', component: ParamsPage }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UltimateCoreUiModule = /** @class */ (function () {
    function UltimateCoreUiModule() {
    }
    UltimateCoreUiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [
                        CheckboxesComponent, MenuComponent, PagerComponent, ParamEditableComponent,
                        InviteComponent, LoginComponent, RegisterComponent,
                        ParamForm,
                        ParamRow, ParamTable,
                        InvitePage, LoginPage, NotFoundPage, PrivatePage,
                        PublicPage, RegisterPage, ParamsPage
                    ],
                    imports: [
                        _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["UltimateCoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                    ],
                    exports: [
                        CheckboxesComponent, MenuComponent, PagerComponent, ParamEditableComponent,
                        InviteComponent, LoginComponent, RegisterComponent,
                        ParamForm,
                        ParamRow, ParamTable,
                        InvitePage, LoginPage, NotFoundPage, PrivatePage,
                        PublicPage, RegisterPage, ParamsPage
                    ],
                    providers: [
                        AuthService
                    ]
                },] }
    ];
    return UltimateCoreUiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=marcohern-ultimate-core-ui.js.map

/***/ }),

/***/ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js":
/*!***********************************************************************!*\
  !*** ./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js ***!
  \***********************************************************************/
/*! exports provided: FormBase, ComponentBase, Category, Checkbox, CheckboxChanged, LoginRequest, LoginResult, MenuItem, MenuOptions, Paged, Product, SaveResult, User, UserCreate, Parameter, RequestService, AssetsService, ParameterService, UltimateCoreModule, ɵa, ɵd, ɵf, ɵg, ɵe, ɵc, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBase", function() { return FormBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentBase", function() { return ComponentBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxChanged", function() { return CheckboxChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResult", function() { return LoginResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptions", function() { return MenuOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paged", function() { return Paged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveResult", function() { return SaveResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreate", function() { return UserCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return Parameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return AssetsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterService", function() { return ParameterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateCoreModule", function() { return UltimateCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AssetsBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return QueryStringBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return RequestServiceBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TokenServiceBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TimedEntity; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Contains mathods that assist in finding the correct assets folder.
 */
var  /**
 * Contains mathods that assist in finding the correct assets folder.
 */
AssetsBase = /** @class */ (function () {
    function AssetsBase(ass) {
        this.ass = ass;
    }
    /**
     * Retrieves soft filepath to a file in the assets folder
     *
     * @param uri file path from within the assets/ folder
     */
    /**
     * Retrieves soft filepath to a file in the assets folder
     *
     * @param {?} uri file path from within the assets/ folder
     * @return {?}
     */
    AssetsBase.prototype.assets = /**
     * Retrieves soft filepath to a file in the assets folder
     *
     * @param {?} uri file path from within the assets/ folder
     * @return {?}
     */
    function (uri) {
        return this.ass.assets(uri);
    };
    return AssetsBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Form Base.
 * Base behavior for form component. A form component is a component that
 * is a form (is encapsulated in <form> tags)
 * @abstract
 */
var FormBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FormBase, _super);
    /**
     * Fprm Base Constructor
     *
     * @param ass AssetsService
     */
    function FormBase(ass) {
        var _this = _super.call(this, ass) || this;
        _this._loading = false;
        _this._editing = false;
        /**
         * Emitted when a cancel button is pressed
         */
        _this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        return _this;
    }
    /**
     * loading helper. the intention is that,
     * if its true, the form is in a loading state, which usually
     * means that all fields are disabled (cant edit while it loads data)
     */
    /**
     * loading helper. the intention is that,
     * if its true, the form is in a loading state, which usually
     * means that all fields are disabled (cant edit while it loads data)
     * @return {?}
     */
    FormBase.prototype.loading = /**
     * loading helper. the intention is that,
     * if its true, the form is in a loading state, which usually
     * means that all fields are disabled (cant edit while it loads data)
     * @return {?}
     */
    function () {
        get: {
            return this._loading;
        }
    };
    /**
     * Editing helper. If true, the form is editing an existing record.
     * if false, the form will be creating a new record
     */
    /**
     * Editing helper. If true, the form is editing an existing record.
     * if false, the form will be creating a new record
     * @return {?}
     */
    FormBase.prototype.editing = /**
     * Editing helper. If true, the form is editing an existing record.
     * if false, the form will be creating a new record
     * @return {?}
     */
    function () {
        get: {
            return this._editing;
        }
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    FormBase.prototype.creating = /**
     *
     * @return {?}
     */
    function () {
        get: {
            return !this._editing;
        }
    };
    /**
     * Called when the submit button is clicked
     */
    /**
     * Called when the submit button is clicked
     * @param {?} $event
     * @return {?}
     */
    FormBase.prototype.submit = /**
     * Called when the submit button is clicked
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.group.valid) {
            this.saving($event, this.group.value);
        }
        else {
            console.error(this.group);
        }
    };
    /**
     * @template T
     * @param {?} obs
     * @param {?} callback
     * @return {?}
     */
    FormBase.prototype.fill = /**
     * @template T
     * @param {?} obs
     * @param {?} callback
     * @return {?}
     */
    function (obs, callback) {
        var _this = this;
        this._editing = true;
        this._loading = true;
        obs.subscribe(function (result) {
            callback(result);
            _this._loading = false;
        }, function (error) {
            _this.handleLoadError(error);
        });
    };
    /**
     * Called when the cancel button is clicked
     */
    /**
     * Called when the cancel button is clicked
     * @return {?}
     */
    FormBase.prototype.cancel = /**
     * Called when the cancel button is clicked
     * @return {?}
     */
    function () {
        this.canceled.emit();
    };
    /**
     * Form Error handler
     * @param error
     */
    /**
     * Form Error handler
     * @param {?} error
     * @return {?}
     */
    FormBase.prototype.handleLoadError = /**
     * Form Error handler
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this._loading = false;
    };
    /**
     * Disabled helper
     * use it to disable inputs while loading
     */
    /**
     * Disabled helper
     * use it to disable inputs while loading
     * @return {?}
     */
    FormBase.prototype.disable = /**
     * Disabled helper
     * use it to disable inputs while loading
     * @return {?}
     */
    function () {
        return this._loading ? '' : null;
    };
    /**
     * Disable submit button
     * use to disable the submit button if data is invalid
     */
    /**
     * Disable submit button
     * use to disable the submit button if data is invalid
     * @return {?}
     */
    FormBase.prototype.disabelSubmit = /**
     * Disable submit button
     * use to disable the submit button if data is invalid
     * @return {?}
     */
    function () {
        return (this._loading || !this.group.valid) ? '' : null;
    };
    FormBase.propDecorators = {
        canceled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return FormBase;
}(AssetsBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Combonent Base
 * Behavior for components. Contains some usefull methods
 */
var  /**
 * Combonent Base
 * Behavior for components. Contains some usefull methods
 */
ComponentBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ComponentBase, _super);
    function ComponentBase(ass) {
        return _super.call(this, ass) || this;
    }
    return ComponentBase;
}(AssetsBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimedEntity = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(TimedEntity, _super);
    function TimedEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TimedEntity;
}(Entity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Category = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Category, _super);
    function Category() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        _this.slug = '';
        _this.ord = 0;
        _this.lvl = 0;
        return _this;
    }
    return Category;
}(TimedEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Checkbox = /** @class */ (function () {
    function Checkbox(label, value, checked, source) {
        this.label = '';
        this.value = '';
        this.checked = false;
        this.source = null;
        this.status = null;
        this.parent = null;
        this.label = label;
        this.value = value;
        this.checked = checked;
        this.source = source;
        this.status = null;
        this.parent = null;
    }
    return Checkbox;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxChanged = /** @class */ (function () {
    function CheckboxChanged() {
        this.added = null;
        this.removed = null;
        this.noneSelected = true;
        this.added = [];
        this.removed = [];
        this.noneSelected = true;
    }
    return CheckboxChanged;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginRequest = /** @class */ (function () {
    function LoginRequest() {
        this.email = '';
        this.password = '';
        this.rememberMe = false;
    }
    return LoginRequest;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginResult = /** @class */ (function () {
    function LoginResult() {
    }
    return LoginResult;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuItem = /** @class */ (function () {
    function MenuItem() {
        this.label = '';
        this.enabled = true;
        this.path = [];
        this.query = {};
        this.children = [];
    }
    return MenuItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuOptions = /** @class */ (function () {
    function MenuOptions() {
        this.search = false;
    }
    return MenuOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
Paged = /** @class */ (function () {
    function Paged() {
        this.current_page = 1;
        this.last_page = 1;
        this.per_page = 50;
        this.total = 0;
        this.data = [];
        this.from = 1;
        this.to = 1;
        this.path = '';
        this.first_page_url = '';
        this.last_page_url = '';
        this.next_page_url = '';
        this.prev_page_url = '';
    }
    return Paged;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Product = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Product, _super);
    function Product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.add_categories = [];
        _this.del_categories = [];
        _this.images = [];
        _this.delete = false;
        return _this;
    }
    return Product;
}(TimedEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SaveResult = /** @class */ (function () {
    function SaveResult() {
    }
    return SaveResult;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var User = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verified = false;
        _this.scope = [];
        return _this;
    }
    return User;
}(TimedEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserCreate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UserCreate, _super);
    function UserCreate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.password = '';
        _this.confirmPassword = '';
        return _this;
    }
    return UserCreate;
}(User));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Parameter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Parameter, _super);
    function Parameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Parameter;
}(TimedEntity));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base utility methods for the request service
 */
var  /**
 * Base utility methods for the request service
 */
RequestServiceBase = /** @class */ (function () {
    function RequestServiceBase() {
        this._requestCount = 0;
        this._apiRoot = '';
        this._oauthRoot = '';
    }
    /**
     * @param {?} apiRoot
     * @return {?}
     */
    RequestServiceBase.prototype.setApiRoot = /**
     * @param {?} apiRoot
     * @return {?}
     */
    function (apiRoot) {
        this._apiRoot = apiRoot;
    };
    /**
     * @return {?}
     */
    RequestServiceBase.prototype.getApiRoot = /**
     * @return {?}
     */
    function () {
        return this._apiRoot;
    };
    /**
     * @param {?} oauthRoot
     * @return {?}
     */
    RequestServiceBase.prototype.setOauthRoot = /**
     * @param {?} oauthRoot
     * @return {?}
     */
    function (oauthRoot) {
        this._oauthRoot = oauthRoot;
    };
    /**
     * True if there is a request currently running, false otherwise.
     */
    /**
     * True if there is a request currently running, false otherwise.
     * @return {?}
     */
    RequestServiceBase.prototype.isRequesting = /**
     * True if there is a request currently running, false otherwise.
     * @return {?}
     */
    function () {
        get: {
            return (this._requestCount > 0);
        }
    };
    /**
     * @return {?}
     */
    RequestServiceBase.prototype.requestCount = /**
     * @return {?}
     */
    function () {
        get: {
            return this._requestCount;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    RequestServiceBase.prototype.increaseRequestCount = /**
     * @protected
     * @return {?}
     */
    function () {
        this._requestCount++;
    };
    /**
     * @protected
     * @return {?}
     */
    RequestServiceBase.prototype.decreaseRequestCount = /**
     * @protected
     * @return {?}
     */
    function () {
        this._requestCount--;
    };
    /**
     * Generate the fully qualified URL to the API
     * @param endpoint Local Url Endpoint
     */
    /**
     * Generate the fully qualified URL to the API
     * @protected
     * @param {?} endpoint Local Url Endpoint
     * @return {?}
     */
    RequestServiceBase.prototype.url = /**
     * Generate the fully qualified URL to the API
     * @protected
     * @param {?} endpoint Local Url Endpoint
     * @return {?}
     */
    function (endpoint) {
        return this._apiRoot + endpoint;
    };
    /**
     * Generate the fully qualified URL to the OAUTH (Passport)
     * @param endpoint Local Url Endpoint
     */
    /**
     * Generate the fully qualified URL to the OAUTH (Passport)
     * @protected
     * @param {?} endpoint Local Url Endpoint
     * @return {?}
     */
    RequestServiceBase.prototype.oauth = /**
     * Generate the fully qualified URL to the OAUTH (Passport)
     * @protected
     * @param {?} endpoint Local Url Endpoint
     * @return {?}
     */
    function (endpoint) {
        return this._oauthRoot + endpoint;
    };
    /**
     * Executed when an error occurs during a remote call
     * @param operation Reference to operation being executed
     * @param result Result required
     */
    /**
     * Executed when an error occurs during a remote call
     * @protected
     * @param {?} reference
     * @param {?} error
     * @return {?}
     */
    RequestServiceBase.prototype.handleError = /**
     * Executed when an error occurs during a remote call
     * @protected
     * @param {?} reference
     * @param {?} error
     * @return {?}
     */
    function (reference, error) {
        console.error(reference, error);
    };
    /**
     * Executes whenever an a request is complete, regardless of error
     */
    /**
     * Executes whenever an a request is complete, regardless of error
     * @protected
     * @return {?}
     */
    RequestServiceBase.prototype.completed = /**
     * Executes whenever an a request is complete, regardless of error
     * @protected
     * @return {?}
     */
    function () {
        //console.log("completed");
        this.decreaseRequestCount();
    };
    /**
     * Executes before a request is about to begin.
     */
    /**
     * Executes before a request is about to begin.
     * @protected
     * @return {?}
     */
    RequestServiceBase.prototype.beforeBegin = /**
     * Executes before a request is about to begin.
     * @protected
     * @return {?}
     */
    function () {
        this.increaseRequestCount();
    };
    return RequestServiceBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Behavior for managing security token
 */
var TokenServiceBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(TokenServiceBase, _super);
    /**
     * Constructor
     */
    function TokenServiceBase() {
        var _this = _super.call(this) || this;
        /**
         * Token Being Stored
         */
        _this.token = null;
        return _this;
    }
    /**
     * @return {?}
     */
    TokenServiceBase.prototype.isAuthenticated = /**
     * @return {?}
     */
    function () {
        get: {
            return (!(this.token == null));
        }
    };
    /**
     * Save the state to Session Storage
     */
    /**
     * Save the state to Session Storage
     * @private
     * @return {?}
     */
    TokenServiceBase.prototype.saveToken = /**
     * Save the state to Session Storage
     * @private
     * @return {?}
     */
    function () {
        window.sessionStorage.setItem(TokenServiceBase.tokenId, this.token);
    };
    /**
     * Remove the state to Session Storage
     */
    /**
     * Remove the state to Session Storage
     * @private
     * @return {?}
     */
    TokenServiceBase.prototype.deleteToken = /**
     * Remove the state to Session Storage
     * @private
     * @return {?}
     */
    function () {
        window.sessionStorage.removeItem(TokenServiceBase.tokenId);
    };
    /**
     * Retrieve the token from session storage into the state if it exists
     */
    /**
     * Retrieve the token from session storage into the state if it exists
     * @return {?}
     */
    TokenServiceBase.prototype.retrieveToken = /**
     * Retrieve the token from session storage into the state if it exists
     * @return {?}
     */
    function () {
        /** @type {?} */
        var t = window.sessionStorage.getItem(TokenServiceBase.tokenId);
        if (t) {
            this.token = t;
        }
        //console.log("TokenServiceBase.retrieveToken", this.token);
    };
    /**
     * Set the token and save it in Session Storage
     * @param token Token value
     */
    /**
     * Set the token and save it in Session Storage
     * @param {?} token Token value
     * @return {?}
     */
    TokenServiceBase.prototype.setToken = /**
     * Set the token and save it in Session Storage
     * @param {?} token Token value
     * @return {?}
     */
    function (token) {
        this.token = token;
        this.saveToken();
    };
    /**
     * Clear token from state and session storage
     */
    /**
     * Clear token from state and session storage
     * @return {?}
     */
    TokenServiceBase.prototype.clearToken = /**
     * Clear token from state and session storage
     * @return {?}
     */
    function () {
        this.deleteToken();
        this.token = null;
    };
    /**
     * @return {?}
     */
    TokenServiceBase.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.token;
    };
    /**
     * Set headers for a request
     */
    /**
     * Set headers for a request
     * @protected
     * @return {?}
     */
    TokenServiceBase.prototype.headers = /**
     * Set headers for a request
     * @protected
     * @return {?}
     */
    function () {
        //console.log("TokenServiceBase.headers",this.token);
        /** @type {?} */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        if (this.token != null) {
            //console.log("Setting Auth header");
            headers.set('Authorization', 'Bearer ' + this.token);
        }
        return headers;
    };
    /**
     * Session Storage Item Name
     */
    TokenServiceBase.tokenId = 'com.marcohern.ultimate.auth.token';
    return TokenServiceBase;
}(RequestServiceBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QueryStringBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(QueryStringBase, _super);
    function QueryStringBase() {
        return _super.call(this) || this;
    }
    /**
     * @protected
     * @param {?} object
     * @return {?}
     */
    QueryStringBase.prototype.getQueryString = /**
     * @protected
     * @param {?} object
     * @return {?}
     */
    function (object) {
        /** @type {?} */
        var qs = '';
        /** @type {?} */
        var i = 0;
        for (var key in object) {
            if (i > 0)
                qs += '&';
            qs += key + '=' + encodeURI(object[key]);
            i++;
        }
        return qs;
    };
    return QueryStringBase;
}(TokenServiceBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RequestService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(RequestService, _super);
    function RequestService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.retrieveToken();
        return _this;
    }
    /**
     * @param {?} apiId
     * @return {?}
     */
    RequestService.prototype.setApiId = /**
     * @param {?} apiId
     * @return {?}
     */
    function (apiId) {
        this._apiId = apiId;
    };
    /**
     * @param {?} apiSecret
     * @return {?}
     */
    RequestService.prototype.setApiSecret = /**
     * @param {?} apiSecret
     * @return {?}
     */
    function (apiSecret) {
        this._apiSecret = apiSecret;
    };
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    RequestService.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        var _this = this;
        this.beforeBegin();
        return this.http.post(this.oauth('/token'), {
            grant_type: "password",
            client_id: this._apiId,
            client_secret: this._apiSecret,
            username: username,
            password: password
        }, {
            headers: this.headers()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () { _this.completed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () { }, function (error) { return _this.handleError("RequestService.login", error); }));
    };
    /**
     * @return {?}
     */
    RequestService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.beforeBegin();
        return this.http.post(this.url('/logout'), {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () { _this.completed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () { }, function (error) { return _this.handleError("RequestService.logout", error); }));
    };
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} filters
     * @return {?}
     */
    RequestService.prototype.browse = /**
     * @template T
     * @param {?} endpoint
     * @param {?} filters
     * @return {?}
     */
    function (endpoint, filters) {
        var _this = this;
        this.beforeBegin();
        /** @type {?} */
        var qs = this.getQueryString(filters);
        return this.http.get(this.url(endpoint) + '?' + qs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () { _this.completed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () { }, function (error) { return _this.handleError("RequestService.browse", error); }));
    };
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} id
     * @return {?}
     */
    RequestService.prototype.get = /**
     * @template T
     * @param {?} endpoint
     * @param {?} id
     * @return {?}
     */
    function (endpoint, id) {
        var _this = this;
        this.beforeBegin();
        return this.http.get(this.url(endpoint) + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () { _this.completed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () { }, function (error) { return _this.handleError("RequestService.get", error); }));
    };
    /**
     * @template T
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    RequestService.prototype.post = /**
     * @template T
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    function (endpoint, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.beforeBegin();
        return this.http.post(this.url(endpoint), data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () { _this.completed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () { }, function (error) { return _this.handleError("RequestService.post", error); }));
    };
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} id
     * @param {?=} data
     * @return {?}
     */
    RequestService.prototype.put = /**
     * @template T
     * @param {?} endpoint
     * @param {?} id
     * @param {?=} data
     * @return {?}
     */
    function (endpoint, id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.beforeBegin();
        return this.http.put(this.url(endpoint) + '/' + id, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () { _this.completed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () { }, function (error) { return _this.handleError("RequestService.put", error); }));
    };
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} id
     * @return {?}
     */
    RequestService.prototype.delete = /**
     * @template T
     * @param {?} endpoint
     * @param {?} id
     * @return {?}
     */
    function (endpoint, id) {
        var _this = this;
        this.beforeBegin();
        /** @type {?} */
        var url = this.url(endpoint) + '/' + id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () { _this.completed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function () { }, function (error) { return _this.handleError("RequestService.delete", error); }));
    };
    RequestService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RequestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    /** @nocollapse */ RequestService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"])({ factory: function RequestService_Factory() { return new RequestService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); }, token: RequestService, providedIn: "root" });
    return RequestService;
}(QueryStringBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AssetsService = /** @class */ (function () {
    function AssetsService() {
        this._assetsDir = '';
    }
    /**
     * Set the assets directory
     *
     * @param uri absolute path to assets
     */
    /**
     * Set the assets directory
     *
     * @param {?} uri absolute path to assets
     * @return {?}
     */
    AssetsService.prototype.setAssetsDir = /**
     * Set the assets directory
     *
     * @param {?} uri absolute path to assets
     * @return {?}
     */
    function (uri) {
        this._assetsDir = uri;
    };
    /**
     * Retrieves soft filepath to a file in the assets folder
     *
     * @param uri file path from within the assets/ folder
     */
    /**
     * Retrieves soft filepath to a file in the assets folder
     *
     * @param {?} uri file path from within the assets/ folder
     * @return {?}
     */
    AssetsService.prototype.assets = /**
     * Retrieves soft filepath to a file in the assets folder
     *
     * @param {?} uri file path from within the assets/ folder
     * @return {?}
     */
    function (uri) {
        return this._assetsDir + uri;
    };
    AssetsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AssetsService.ctorParameters = function () { return []; };
    /** @nocollapse */ AssetsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"])({ factory: function AssetsService_Factory() { return new AssetsService(); }, token: AssetsService, providedIn: "root" });
    return AssetsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParameterService = /** @class */ (function () {
    function ParameterService(req) {
        this.req = req;
    }
    /**
     * @return {?}
     */
    ParameterService.prototype.getAllParameters = /**
     * @return {?}
     */
    function () {
        return this.req.browse('/parameters', {});
    };
    /**
     * @param {?} group
     * @return {?}
     */
    ParameterService.prototype.getParametersByGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        return this.req.browse('/parameters', { group: group });
    };
    /**
     * @param {?} parameter
     * @return {?}
     */
    ParameterService.prototype.createParameter = /**
     * @param {?} parameter
     * @return {?}
     */
    function (parameter) {
        return this.req.post('/parameters', parameter);
    };
    /**
     * @param {?} parameter
     * @return {?}
     */
    ParameterService.prototype.updateParameter = /**
     * @param {?} parameter
     * @return {?}
     */
    function (parameter) {
        return this.req.put('/parameters', parameter.id, parameter);
    };
    /**
     * @param {?} parameter
     * @return {?}
     */
    ParameterService.prototype.saveParameter = /**
     * @param {?} parameter
     * @return {?}
     */
    function (parameter) {
        if (parameter.id)
            return this.updateParameter(parameter);
        else
            return this.createParameter(parameter);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ParameterService.prototype.deleteParameter = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.delete('/parameters', id);
    };
    ParameterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ParameterService.ctorParameters = function () { return [
        { type: RequestService }
    ]; };
    /** @nocollapse */ ParameterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"])({ factory: function ParameterService_Factory() { return new ParameterService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"])(RequestService)); }, token: ParameterService, providedIn: "root" });
    return ParameterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(req) {
        this.req = req;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    TokenInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        //console.log("TokenInterceptor.intercept");
        if (this.req.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.req.getToken()
                }
            });
        }
        request = request.clone({
            setHeaders: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        return next.handle(request);
    };
    TokenInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    TokenInterceptor.ctorParameters = function () { return [
        { type: RequestService }
    ]; };
    return TokenInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UltimateCoreModule = /** @class */ (function () {
    function UltimateCoreModule() {
    }
    UltimateCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ],
                    providers: [
                        RequestService,
                        AssetsService,
                        ParameterService,
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: TokenInterceptor, multi: true }
                    ],
                    exports: []
                },] }
    ];
    return UltimateCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=marcohern-ultimate-core.js.map

/***/ }),

/***/ "./dist/marcohern/ultimate-products-ui/fesm5/marcohern-ultimate-products-ui.js":
/*!*************************************************************************************!*\
  !*** ./dist/marcohern/ultimate-products-ui/fesm5/marcohern-ultimate-products-ui.js ***!
  \*************************************************************************************/
/*! exports provided: ProductDetailComponent, ProductsQueryComponent, ProductForm, ProductDetailPage, ProductEditPage, ProductListPage, ProductRow, ProductTable, UltimateProductsUiModule, ɵa, ɵd, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsQueryComponent", function() { return ProductsQueryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductForm", function() { return ProductForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditPage", function() { return ProductEditPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRow", function() { return ProductRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTable", function() { return ProductTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateProductsUiModule", function() { return UltimateProductsUiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CategoryListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CategoryRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CategoryTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _marcohern_ultimate_core_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @marcohern/ultimate-core-ui */ "./dist/marcohern/ultimate-core-ui/fesm5/marcohern-ultimate-core-ui.js");
/* harmony import */ var _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @marcohern/ultimate-products */ "./dist/marcohern/ultimate-products/fesm5/marcohern-ultimate-products.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductDetailComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProductDetailComponent, _super);
    function ProductDetailComponent(ps, route, ass) {
        var _this = _super.call(this, ass) || this;
        _this.ps = ps;
        _this.route = route;
        _this.product = {
            name: '[Product Name]',
            slug: 'product-slug',
            org_price: 199.95,
            dct_price: 149.95,
            description: '',
        };
        _this.images = [
            {
                url: _this.assets("htc-vive-01.jpg"),
                altText: 'HTC Vive',
                title: 'HTC Vive',
                thumbnailUrl: _this.assets("htc-vive-01-t.jpg"),
            },
            {
                url: _this.assets("htc-vive-02.jpg"),
                altText: 'HTC Vive',
                title: 'HTC Vive',
                thumbnailUrl: _this.assets("htc-vive-02-t.jpg"),
            },
            {
                url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260",
                altText: 'woman-in-black-blazer-holding-blue-cup',
                title: 'woman-in-black-blazer-holding-blue-cup',
                thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
            },
            {
                url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260",
                altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
                title: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
                //extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
                thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
            },
            {
                url: "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                altText: 'three-jars-of-fruits-and-veggies',
                title: 'three-jars-of-fruits-and-veggies',
                //extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
                thumbnailUrl: "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?w=60"
            },
        ];
        _this.conf = {
            imageOffset: '0px',
            showDeleteControl: false,
            showImageTitle: false,
            showCloseControl: false,
            inline: true,
            backdropColor: "rgba(0,0,0,0)"
        };
        return _this;
    }
    /**
     * @return {?}
     */
    ProductDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var id = this.route.snapshot.params.id;
        this.ps.getProduct(id).subscribe(function (product) {
            var e_1, _a;
            _this.product = product;
            _this.images = [];
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(product.images), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var image = _c.value;
                    _this.images.push({
                        url: image
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    // open gallery
    // open gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    ProductDetailComponent.prototype.openGallery = 
    // open gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.open(index);
    };
    // close gallery
    // close gallery
    /**
     * @return {?}
     */
    ProductDetailComponent.prototype.closeGallery = 
    // close gallery
    /**
     * @return {?}
     */
    function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    // set new active(visible) image in gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    ProductDetailComponent.prototype.newImage = 
    // set new active(visible) image in gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    // next image in gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    ProductDetailComponent.prototype.nextImage = 
    // next image in gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    // prev image in gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    ProductDetailComponent.prototype.prevImage = 
    // prev image in gallery
    /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.prev();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ProductDetailComponent.prototype.galleryOpened = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    // callback on gallery closed
    /**
     * @return {?}
     */
    ProductDetailComponent.prototype.galleryClosed = 
    // callback on gallery closed
    /**
     * @return {?}
     */
    function () {
        console.info('Gallery closed.');
    };
    // callback on gallery image clicked
    // callback on gallery image clicked
    /**
     * @param {?} index
     * @return {?}
     */
    ProductDetailComponent.prototype.galleryImageClicked = 
    // callback on gallery image clicked
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.info('Gallery image clicked with index ', index);
    };
    // callback on gallery image changed
    // callback on gallery image changed
    /**
     * @param {?} index
     * @return {?}
     */
    ProductDetailComponent.prototype.galleryImageChanged = 
    // callback on gallery image changed
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    // callback on user clicked delete button
    /**
     * @param {?} index
     * @return {?}
     */
    ProductDetailComponent.prototype.deleteImage = 
    // callback on user clicked delete button
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        console.info('Delete image at index ', index);
    };
    ProductDetailComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'ult-product-detail',
                    template: "<h2>{{product.name}}</h2>\r\n<div class=\"col-md-12\" style=\"z-index: 0\">\r\n  <!--ngx-image-gallery [images]=\"images\" [conf]=\"conf\"\r\n    (onOpen)=\"galleryOpened($event)\"\r\n    (onClose)=\"galleryClosed()\"\r\n    (onImageClicked)=\"galleryImageClicked($event)\"\r\n    (onImageChange)=\"galleryImageChanged($event)\"\r\n    (onDelete)=\"deleteImage($event)\"></ngx-image-gallery-->\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <p>{{product.overview}}</p>\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <section [innerHTML]=\"product.description\"></section>\r\n</div>\r\n\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["AssetsService"] }
    ]; };
    ProductDetailComponent.propDecorators = {
        product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        ngxImageGallery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: [ngx_image_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxImageGalleryComponent"],] }]
    };
    return ProductDetailComponent;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["ComponentBase"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductsQueryComponent = /** @class */ (function () {
    function ProductsQueryComponent(ps, route) {
        this.ps = ps;
        this.route = route;
        this.paged = new _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["Paged"]();
    }
    /**
     * @return {?}
     */
    ProductsQueryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            /** @type {?} */
            var page = 1;
            if (params['page'])
                page = params['page'];
            _this.ps.browseProducts(page).subscribe(function (result) {
                console.log(result);
                _this.paged = result;
            });
        });
    };
    ProductsQueryComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'ultimate-products-query',
                    template: "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <ultimate-pager [paged]=\"paged\" [path]=\"['/products']\"></ultimate-pager>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <product-table [products]=\"paged.data\"></product-table>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <ultimate-pager [paged]=\"paged\" [path]=\"['/products']\"></ultimate-pager>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductsQueryComponent.ctorParameters = function () { return [
        { type: _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    return ProductsQueryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProductForm, _super);
    function ProductForm(_req, ps, fb, route, router, ass) {
        var _this = _super.call(this, ass) || this;
        _this._req = _req;
        _this.ps = ps;
        _this.fb = fb;
        _this.route = route;
        _this.router = router;
        _this.bucket = '';
        _this.imageids = [];
        _this.ckbAdded = [];
        _this.ckbRemoved = [];
        _this.product = new _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        _this.categories = [];
        _this.discounted = false;
        _this.apiroot = '';
        _this.group = _this.fb.group({
            name: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], []),
            slug: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], []),
            overview: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], []),
            description: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\d+(\.(\d{0,2})?)?/)], []),
            org_price: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\d+(\.(\d{0,2})?)?/)], []),
            dct_price: _this.fb.control('', [], []),
        });
        _this.apiroot = _this._req.getApiRoot();
        return _this;
    }
    /**
     * @return {?}
     */
    ProductForm.prototype.req = /**
     * @return {?}
     */
    function () {
        get: {
            return this._req;
        }
    };
    /**
     * @return {?}
     */
    ProductForm.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.bucket = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.fill(this.ps.categories(), function (cats) { return _this.fillCategories(cats); });
        /** @type {?} */
        var product_id = this.route.snapshot.params.id;
        if (product_id) {
            this.fill(this.ps.getProduct(product_id), function (prods) { return _this.fillProduct(prods); });
        }
    };
    /**
     * @return {?}
     */
    ProductForm.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._req.delete('/uploads/bucket', this.bucket).subscribe(function (result) {
            console.log(result);
        });
    };
    /**
     * @param {?} categories
     * @return {?}
     */
    ProductForm.prototype.fillCategories = /**
     * @param {?} categories
     * @return {?}
     */
    function (categories) {
        this.categories = categories;
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductForm.prototype.fillProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        this.product = product;
        this.group.setValue({
            name: this.product.name,
            slug: this.product.slug,
            overview: this.product.overview,
            description: this.product.description,
            org_price: this.product.org_price,
            dct_price: this.product.dct_price,
        });
        if (this.product.dct_price)
            this.discounted = true;
    };
    /**
     * @param {?} $events
     * @param {?} values
     * @return {?}
     */
    ProductForm.prototype.saving = /**
     * @param {?} $events
     * @param {?} values
     * @return {?}
     */
    function ($events, values) {
        var _this = this;
        this.product.name = values.name;
        this.product.slug = values.slug;
        this.product.overview = values.overview;
        this.product.description = values.description;
        this.product.org_price = values.org_price;
        this.product.dct_price = values.dct_price;
        this.product.add_categories = this.ckbAdded.map(function (c) { return c.source.id; });
        this.product.del_categories = this.ckbRemoved.map(function (c) { return c.source.id; });
        this.product.image_bucket = this.bucket;
        console.log(this.product);
        this.ps.saveProduct(this.product).subscribe(function (result) {
            console.log(result);
            _this.router.navigate(['/products']);
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ProductForm.prototype.onUploadFinished = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var response = JSON.parse($event.serverResponse.response._body);
        $event.image_id = response.id;
        this.imageids.push(response.id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ProductForm.prototype.onRemoved = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.image_id) {
            this._req.delete('/uploads', $event.image_id).subscribe(function (result) {
                console.log(result);
            });
        }
        else {
            /** @type {?} */
            var url = $event.file.name;
            /** @type {?} */
            var filename = url.replace(/^.*[\\\/]/, '');
            this._req.post('/product/delete_image/' + this.product.id, { filename: filename }).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ProductForm.prototype.checkboxChanged = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.ckbAdded = $event.added;
        this.ckbRemoved = $event.removed;
    };
    ProductForm.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'ultimate-product-form',
                    template: "<form [formGroup]=\"group\" (ngSubmit)=\"submit($event)\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label>Upload Image</label>\n        <image-upload name=\"file\" url=\"{{apiroot}}/uploads?bucket={{bucket}}\"\n          [headers]=\"{Authorization: 'Bearer ' + req().getToken()}\"\n          [uploadedFiles]=\"product.images\"\n          (uploadFinished)=\"onUploadFinished($event)\"\n          (removed)=\"onRemoved($event)\"></image-upload>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Nombre</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Slug</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"slug\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label>Resumen</label>\n        <textarea class=\"form-control\" formControlName=\"overview\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label>Description</label>\n        <textarea class=\"form-control tall\" formControlName=\"description\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Sell Price</label>\n        <input type=\"text\" formControlName=\"org_price\" class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Discount Price</label>\n        <input type=\"text\" formControlName=\"dct_price\" class=\"form-control\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <label>Categorias</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <ult-checkboxes [source]=\"categories\" label=\"name\" value=\"id\" [selected]=\"product?.categories\" (checkboxChanged)=\"checkboxChanged($event)\"></ult-checkboxes>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"button-group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductForm.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
        { type: _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["AssetsService"] }
    ]; };
    return ProductForm;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["FormBase"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage() {
    }
    /**
     * @return {?}
     */
    ProductDetailPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ProductDetailPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'product-detail-page',
                    template: "<div class=\"container\">\r\n  <ult-product-detail></ult-product-detail>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductDetailPage.ctorParameters = function () { return []; };
    return ProductDetailPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductEditPage = /** @class */ (function () {
    function ProductEditPage() {
    }
    /**
     * @return {?}
     */
    ProductEditPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ProductEditPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'product-edit-page',
                    template: "<div class=\"container\">\r\n  <ultimate-product-form></ultimate-product-form>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductEditPage.ctorParameters = function () { return []; };
    return ProductEditPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage() {
        this.products = [
            {
                id: 1,
                name: 'QuietComfort 35 wireless headphones II',
                slug: 'quietcomfort-35-wireless-headphones-ii',
                org_price: 349.95, dct_price: 299.95
            },
            {
                id: 2,
                name: 'Custom QuietComfort 35 wireless headphones II',
                slug: 'custom-quietcomfort-35-wireless-headphones-ii',
                org_price: 399.95,
            },
            {
                id: 3,
                name: 'QC25 noise cancelling headphones Apple devices',
                slug: 'qc25-noise-cancelling-headphones-apple-devices',
                org_price: 179.95,
            },
            {
                id: 4,
                name: 'QuietControl 30 wireless headphones',
                slug: 'quietcontrol-30-wireless-headphones',
                org_price: 299.95,
            },
            {
                id: 1,
                name: 'QuietComfort 35 wireless headphones II',
                slug: 'quietcomfort-35-wireless-headphones-ii',
                org_price: 349.95, dct_price: 299.95
            },
            {
                id: 2,
                name: 'Custom QuietComfort 35 wireless headphones II',
                slug: 'custom-quietcomfort-35-wireless-headphones-ii',
                org_price: 399.95,
            },
            {
                id: 3,
                name: 'QC25 noise cancelling headphones Apple devices',
                slug: 'qc25-noise-cancelling-headphones-apple-devices',
                org_price: 179.95,
            },
            {
                id: 4,
                name: 'QuietControl 30 wireless headphones',
                slug: 'quietcontrol-30-wireless-headphones',
                org_price: 299.95,
            },
        ];
    }
    /**
     * @return {?}
     */
    ProductListPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ProductListPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'product-list-page',
                    template: "<div class=\"container\">\r\n  <ultimate-products-query></ultimate-products-query>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductListPage.ctorParameters = function () { return []; };
    return ProductListPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductRow = /** @class */ (function () {
    function ProductRow(ps) {
        this.ps = ps;
        this.product = {
            id: 0,
            name: '',
            slug: ''
        };
        this.deleting = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ProductRow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.deleting.subscribe(function (product) {
            if (product.delete) {
                _this.ps.deleteProduct(product.id).subscribe(function (result) {
                    _this.deleted.emit(product);
                });
            }
        });
    };
    /**
     * @param {?} $event
     * @param {?} product
     * @return {?}
     */
    ProductRow.prototype.delete = /**
     * @param {?} $event
     * @param {?} product
     * @return {?}
     */
    function ($event, product) {
        product.delete = true;
        this.deleting.emit(product);
    };
    ProductRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[product-row]',
                    template: "<td>\n  <img [attr.data-piio]=\"product.image_cover\" \n    width=\"64px\" height=\"48px\" data-piio-sizing=\"auto\" \n    src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+f9vPQAJZAN2rlRQVAAAAABJRU5ErkJggg==\" />\n</td>\n<td><a [routerLink]=\"['/product', product.id]\">{{product.name}}</a></td>\n<td>{{product.org_price | currency}}</td>\n<td>{{product.dct_price | currency}}</td>\n<td>\n  <a class=\"btn btn-warning\" [routerLink]=\"['/product',product.id]\">Edit</a>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete($event, product)\">Delete</button>\n</td>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductRow.ctorParameters = function () { return [
        { type: _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }
    ]; };
    ProductRow.propDecorators = {
        product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        deleting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }],
        deleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }]
    };
    return ProductRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductTable = /** @class */ (function () {
    function ProductTable(modal, ps) {
        this.modal = modal;
        this.ps = ps;
        this.products = [];
    }
    /**
     * @return {?}
     */
    ProductTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductTable.prototype.deleting = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        product.delete = false;
        this.deletingProduct = product;
        this.dlgConfirmDelete = this.modal.show(this.dlgConfirmDeleteTemplate, {});
    };
    /**
     * @return {?}
     */
    ProductTable.prototype.deleteConfirmed = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ps.deleteProduct(this.deletingProduct.id).subscribe(function (result) {
            /** @type {?} */
            var index = _this.products.indexOf(_this.deletingProduct);
            _this.products.splice(index, 1);
            _this.dlgConfirmDelete.hide();
        });
    };
    ProductTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'product-table',
                    template: "<table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Name</th>\n      <th>O.P.</th>\n      <th>D.P.</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr product-row *ngFor=\"let product of products\" [product]=\"product\"\n      (deleting)=\"deleting($event)\"></tr>\n  </tbody>\n</table>\n<ng-template #dlgConfirmDeleteTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Eliminar Producto</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dlgConfirmDelete.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    Desea eliminar el producto '<span>{{deletingProduct.name}}</span>'?\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"dlgConfirmDelete.hide()\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteConfirmed()\">Eliminar</button>\n  </div>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProductTable.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
        { type: _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }
    ]; };
    ProductTable.propDecorators = {
        products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
        dlgConfirmDeleteTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['dlgConfirmDeleteTemplate',] }]
    };
    return ProductTable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryListPage = /** @class */ (function () {
    function CategoryListPage() {
    }
    /**
     * @return {?}
     */
    CategoryListPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CategoryListPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'category-list-page',
                    template: "<div class=\"container\">\n  <ultimate-category-table></ultimate-category-table>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CategoryListPage.ctorParameters = function () { return []; };
    return CategoryListPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryRow = /** @class */ (function () {
    function CategoryRow() {
    }
    /**
     * @return {?}
     */
    CategoryRow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CategoryRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: '[ultimate-category-row]',
                    template: "<td>1</td>\n<td>Categoria</td>\n<td>categoria</td>\n<td>\n  <button class=\"btn btn-warn\">Editar</button>\n</td>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CategoryRow.ctorParameters = function () { return []; };
    return CategoryRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryTable = /** @class */ (function () {
    function CategoryTable() {
    }
    /**
     * @return {?}
     */
    CategoryTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CategoryTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'ultimate-category-table',
                    template: "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Nombre</th>\n      <th>Slug</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ultimate-category-row></tr>\n    <tr ultimate-category-row></tr>\n    <tr ultimate-category-row></tr>\n    <tr ultimate-category-row></tr>\n  </tbody>\n</table>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CategoryTable.ctorParameters = function () { return []; };
    return CategoryTable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    { path: 'products', component: ProductListPage },
    { path: 'product/add', component: ProductEditPage },
    { path: 'product/:id', component: ProductEditPage },
    { path: 'product/preview/:id', component: ProductDetailPage },
    { path: 'categories', component: CategoryListPage },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UltimateProductsUiModule = /** @class */ (function () {
    function UltimateProductsUiModule() {
    }
    UltimateProductsUiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    declarations: [
                        ProductDetailComponent, ProductsQueryComponent,
                        ProductForm,
                        ProductDetailPage, ProductEditPage, ProductListPage,
                        CategoryListPage,
                        ProductRow, CategoryRow,
                        ProductTable, CategoryTable,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["UltimateCoreModule"],
                        _marcohern_ultimate_core_ui__WEBPACK_IMPORTED_MODULE_6__["UltimateCoreUiModule"],
                        _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__["UltimateProductsModule"],
                        ngx_image_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxImageGalleryModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        angular2_image_upload__WEBPACK_IMPORTED_MODULE_9__["ImageUploadModule"].forRoot(),
                    ],
                    exports: [
                        ProductDetailComponent, ProductsQueryComponent,
                        ProductForm,
                        ProductDetailPage, ProductEditPage, ProductListPage,
                        CategoryListPage,
                        ProductRow, CategoryRow,
                        ProductTable, CategoryTable,
                    ]
                },] }
    ];
    return UltimateProductsUiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=marcohern-ultimate-products-ui.js.map

/***/ }),

/***/ "./dist/marcohern/ultimate-products/fesm5/marcohern-ultimate-products.js":
/*!*******************************************************************************!*\
  !*** ./dist/marcohern/ultimate-products/fesm5/marcohern-ultimate-products.js ***!
  \*******************************************************************************/
/*! exports provided: ProductService, UltimateProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateProductsModule", function() { return UltimateProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductService = /** @class */ (function () {
    function ProductService(req) {
        this.req = req;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    ProductService.prototype.browseProducts = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return this.req.browse('/products', params);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ProductService.prototype.getProduct = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.get('/products', id);
    };
    /**
     * @param {?} id
     * @param {?} product
     * @return {?}
     */
    ProductService.prototype.updateProduct = /**
     * @param {?} id
     * @param {?} product
     * @return {?}
     */
    function (id, product) {
        return this.req.put('/products', id, product);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductService.prototype.createProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return this.req.post('/products', product);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductService.prototype.saveProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        return (product.id) ?
            this.updateProduct(product.id, product) :
            this.createProduct(product);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ProductService.prototype.deleteProduct = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.delete('/products', id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ProductService.prototype.hitProduct = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.post('/product/hit', id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ProductService.prototype.clickProduct = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.post('/product/click', id);
    };
    /**
     * @return {?}
     */
    ProductService.prototype.categories = /**
     * @return {?}
     */
    function () {
        return this.req.browse('/product/categories', {});
    };
    /**
     * @return {?}
     */
    ProductService.prototype.getHotProducts = /**
     * @return {?}
     */
    function () {
        return this.req.browse('/product/hot', {});
    };
    /**
     * @return {?}
     */
    ProductService.prototype.getFfeaturedProductsPerCategory = /**
     * @return {?}
     */
    function () {
        return this.req.browse('/products/niu', {});
    };
    /**
     * @return {?}
     */
    ProductService.prototype.getProductsMostSold = /**
     * @return {?}
     */
    function () {
        return this.req.browse('/products/sold_most', {});
    };
    ProductService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_2__["RequestService"] }
    ]; };
    /** @nocollapse */ ProductService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ProductService_Factory() { return new ProductService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_2__["RequestService"])); }, token: ProductService, providedIn: "root" });
    return ProductService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UltimateProductsModule = /** @class */ (function () {
    function UltimateProductsModule() {
    }
    UltimateProductsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_2__["UltimateCoreModule"],
                    ],
                    exports: [], providers: [
                        ProductService
                    ]
                },] }
    ];
    return UltimateProductsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=marcohern-ultimate-products.js.map

/***/ }),

/***/ "./dist/marcohern/ultimate-users/fesm5/marcohern-ultimate-users.js":
/*!*************************************************************************!*\
  !*** ./dist/marcohern/ultimate-users/fesm5/marcohern-ultimate-users.js ***!
  \*************************************************************************/
/*! exports provided: UserForm, UserQuery, UserRow, UserTable, UltimateUsersModule, ɵb, ɵc, ɵa, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return UserForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserQuery", function() { return UserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRow", function() { return UserRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTable", function() { return UserTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateUsersModule", function() { return UltimateUsersModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return UserEditPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return UserListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function () {
    function UserService(req) {
        this.req = req;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    UserService.prototype.browseUsers = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.req.browse('/users', { page: page });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UserService.prototype.getUser = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.get('/users', id);
    };
    /**
     * @param {?} user
     * @return {?}
     */
    UserService.prototype.createUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.req.post('/users', user);
    };
    /**
     * @param {?} user
     * @return {?}
     */
    UserService.prototype.updateUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.req.put('/users', user.id, user);
    };
    /**
     * @param {?} user
     * @return {?}
     */
    UserService.prototype.saveUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        if (user.id)
            return this.updateUser(user);
        else
            return this.createUser(user);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UserService.prototype.deleteUser = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.req.delete('/users', id);
    };
    UserService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"])({ factory: function UserService_Factory() { return new UserService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__["RequestService"])); }, token: UserService, providedIn: "root" });
    return UserService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserForm, _super);
    function UserForm(fb, us, router, ass) {
        var _this = _super.call(this, ass) || this;
        _this.fb = fb;
        _this.us = us;
        _this.router = router;
        _this.user = {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        };
        _this.acceptPassword = false;
        _this.completeRoute = [];
        _this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        _this.cancelling = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        return _this;
    }
    /**
     * @return {?}
     */
    UserForm.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.acceptPassword = false;
        this.group = this.fb.group({
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], []),
            name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], []),
            password: this.fb.control('', [], []),
            confirmPassword: this.fb.control('', [], []),
        });
        this.group.setValue(this.user);
        if (this.user_id) {
            this.fill(this.us.getUser(this.user_id), function (user) { return _this.fillUser(user); });
        }
        else {
            this.group.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.group.get('confirmPassword').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.acceptPassword = true;
        }
    };
    /**
     * @param {?} user
     * @return {?}
     */
    UserForm.prototype.fillUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        console.log(this);
        this.user = user;
        this.group.setValue({
            email: user.email,
            name: user.name,
            password: '',
            confirmPassword: ''
        });
    };
    /**
     * @param {?} $event
     * @param {?} values
     * @return {?}
     */
    UserForm.prototype.saving = /**
     * @param {?} $event
     * @param {?} values
     * @return {?}
     */
    function ($event, values) {
        var _this = this;
        this.user.email = values.email;
        this.user.name = values.name;
        this.user.password = values.password;
        this.us.saveUser(this.user).subscribe(function (result) {
            _this.saved.emit(_this.user);
            if (_this.completeRoute.length > 0) {
                _this.router.navigate(_this.completeRoute);
            }
        });
    };
    /**
     * @return {?}
     */
    UserForm.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.cancelling.emit();
        if (this.completeRoute.length > 0) {
            this.router.navigate(this.completeRoute);
        }
    };
    UserForm.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'ultimate-user-form',
                    template: "<form [formGroup]=\"group\" (ngSubmit)=\"submit($event)\" class=\"needs-validation\" novalidate>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <h2>Formulario de Usuario</h2>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input class=\"form-control\" formControlName=\"email\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Email obligatorio, formato: <b>xxxxxx@yyyyy.zzz</b>.</small>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Nombre</label>\n        <input class=\"form-control\" formControlName=\"name\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Nombre obligatorio.</small>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\" *ngIf=\"acceptPassword\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Contrase\u00F1a</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Contrase\u00F1a obligatoria.</small>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Confirmar Contrase\u00F1a</label>\n        <input  type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Debe ser igual a la contrase\u00F1a.</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n          <button class=\"btn btn-primary\" type=\"submit\" [attr.disabled]=\"disabelSubmit()\">Guardar</button>\n          &nbsp;\n          <button class=\"btn btn-warning\" type=\"button\" (click)=\"cancel()\" [attr.disabled]=\"disable()\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UserForm.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: UserService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__["AssetsService"] }
    ]; };
    UserForm.propDecorators = {
        user_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        completeRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        saved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        cancelling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
    return UserForm;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__["FormBase"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserQuery = /** @class */ (function () {
    function UserQuery(us) {
        this.us = us;
    }
    /**
     * @return {?}
     */
    UserQuery.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.us.browseUsers(1).subscribe(function (result) {
            _this.usersPaged = result;
        });
    };
    UserQuery.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'ultimate-user-query',
                    template: "<ultimate-user-table [users]=\"usersPaged?.data\"></ultimate-user-table>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UserQuery.ctorParameters = function () { return [
        { type: UserService }
    ]; };
    return UserQuery;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserRow = /** @class */ (function () {
    function UserRow() {
        this.editRoute = [];
        this.editing = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.deleting = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    UserRow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.user) ;
    };
    /**
     * @return {?}
     */
    UserRow.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.user) ;
    };
    /**
     * @param {?} user
     * @param {?} index
     * @return {?}
     */
    UserRow.prototype.delete = /**
     * @param {?} user
     * @param {?} index
     * @return {?}
     */
    function (user, index) {
        this.deleting.emit(user);
    };
    UserRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: '[ultimate-user-row]',
                    template: "<td>{{user.name}}</td>\n<td>{{user.email}}</td>\n<td>\n  <a class=\"btn btn-warning\" [routerLink]=\"['/user/edit',user.id]\">Edit</a>\n  <button class=\"btn btn-danger\" (click)=\"delete(user, index)\">Delete</button>\n</td>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UserRow.ctorParameters = function () { return []; };
    UserRow.propDecorators = {
        user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        editRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        editing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        deleting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
    return UserRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserTable = /** @class */ (function () {
    function UserTable(us, route) {
        this.us = us;
        this.route = route;
        this.users = [];
    }
    /**
     * @return {?}
     */
    UserTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} user
     * @param {?} index
     * @return {?}
     */
    UserTable.prototype.onDeleting = /**
     * @param {?} user
     * @param {?} index
     * @return {?}
     */
    function (user, index) {
        var _this = this;
        console.log("UserTable.onDeleting", user, index);
        this.us.deleteUser(user.id).subscribe(function (result) {
            console.log(result);
            _this.users.splice(index, 1);
        });
    };
    UserTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'ultimate-user-table',
                    template: "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Email</th>\n      <th>&nbsp;</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ultimate-user-row *ngFor=\"let user of users;let i=index;\"\n      [user]=\"user\" [index]=\"i\" (deleting)=\"onDeleting($event, i)\"></tr>\n  </tbody>\n</table>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UserTable.ctorParameters = function () { return [
        { type: UserService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    UserTable.propDecorators = {
        users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
    return UserTable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserEditPage = /** @class */ (function () {
    function UserEditPage(route) {
        this.route = route;
    }
    /**
     * @return {?}
     */
    UserEditPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.user_id = this.route.snapshot.params.id;
    };
    UserEditPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'user-edit-page',
                    template: "<div class=\"container\">\n  <ultimate-user-form [user_id]=\"user_id\" [completeRoute]=\"['/users']\"></ultimate-user-form>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UserEditPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    return UserEditPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserListPage = /** @class */ (function () {
    function UserListPage() {
    }
    /**
     * @return {?}
     */
    UserListPage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UserListPage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'user-list-page',
                    template: "<div class=\"container\">\n    <ultimate-user-query></ultimate-user-query>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    UserListPage.ctorParameters = function () { return []; };
    return UserListPage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    { path: 'user/edit/:id', component: UserEditPage },
    { path: 'users/create', component: UserEditPage },
    { path: 'users', component: UserListPage }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UltimateUsersModule = /** @class */ (function () {
    function UltimateUsersModule() {
    }
    UltimateUsersModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"], args: [{
                    declarations: [
                        UserQuery, UserTable, UserRow, UserForm, UserEditPage, UserListPage
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__["UltimateCoreModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    exports: [
                        UserQuery, UserForm, UserEditPage, UserListPage
                    ],
                    providers: [
                        UserService
                    ]
                },] }
    ];
    return UltimateUsersModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=marcohern-ultimate-users.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marcohern_ultimate_core_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @marcohern/ultimate-core-ui */ "./dist/marcohern/ultimate-core-ui/fesm5/marcohern-ultimate-core-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _marcohern_ultimate_core_ui__WEBPACK_IMPORTED_MODULE_2__["PublicPage"] },
    { path: '*', redirectTo: '/notfound' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ultimate-menu [items]=\"menu\" title=\"Panditas\"></ultimate-menu>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/app/menu.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @marcohern/ultimate-products */ "./dist/marcohern/ultimate-products/fesm5/marcohern-ultimate-products.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(req, ass, prs) {
        this.req = req;
        this.ass = ass;
        this.prs = prs;
        this.title = 'ultimate';
        this.test = '[TEST]';
        this.menu = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        //console.log(menu);
        this.menu = _menu__WEBPACK_IMPORTED_MODULE_2__["menu"];
        this.options = _menu__WEBPACK_IMPORTED_MODULE_2__["menuOptions"];
        this.ass.setAssetsDir(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assets);
        this.req.setApiRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.root);
        this.req.setOauthRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.oauth);
        this.req.setApiId(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.id);
        this.req.setApiSecret(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.secret);
        this.req.retrieveToken();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["RequestService"], _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["AssetsService"], _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _marcohern_ultimate_core_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @marcohern/ultimate-core-ui */ "./dist/marcohern/ultimate-core-ui/fesm5/marcohern-ultimate-core-ui.js");
/* harmony import */ var _marcohern_ultimate_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @marcohern/ultimate-users */ "./dist/marcohern/ultimate-users/fesm5/marcohern-ultimate-users.js");
/* harmony import */ var _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @marcohern/ultimate-products */ "./dist/marcohern/ultimate-products/fesm5/marcohern-ultimate-products.js");
/* harmony import */ var _marcohern_ultimate_products_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @marcohern/ultimate-products-ui */ "./dist/marcohern/ultimate-products-ui/fesm5/marcohern-ultimate-products-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_4__["UltimateCoreModule"],
                _marcohern_ultimate_core_ui__WEBPACK_IMPORTED_MODULE_5__["UltimateCoreUiModule"],
                _marcohern_ultimate_users__WEBPACK_IMPORTED_MODULE_6__["UltimateUsersModule"],
                _marcohern_ultimate_products__WEBPACK_IMPORTED_MODULE_7__["UltimateProductsModule"],
                _marcohern_ultimate_products_ui__WEBPACK_IMPORTED_MODULE_8__["UltimateProductsUiModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu.ts":
/*!*************************!*\
  !*** ./src/app/menu.ts ***!
  \*************************/
/*! exports provided: menu, menuOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuOptions", function() { return menuOptions; });
var menu = [
    { label: 'Inicio', path: ['/'] },
    { label: 'Usuarios', children: [
            { label: 'Lista', path: ['/users'], query: { page: 1 } },
            { label: 'Nuevos', path: ['/users/create'] },
        ] },
    { label: 'Productos', children: [
            { label: 'Lista', path: ['/products'] },
            { label: 'Nuevos', path: ['/product/add'] },
        ] },
    { label: 'Parametros', path: ['/params'] },
];
var menuOptions = {
    search: false
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    assets: '/assets/',
    api: {
        root: 'http://localhost:8000/api',
        oauth: 'http://localhost:8000/oauth',
        id: 2,
        secret: 'dtH4F6RdoTtaeb9stQvxgNg6TxcWSRuZa93dlWbS'
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Src\ultimate\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map