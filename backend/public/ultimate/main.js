(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _modules_ultimate_auth_pages_public_public_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ultimate-auth/pages/public/public.page */ "./src/app/modules/ultimate-auth/pages/public/public.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _modules_ultimate_auth_pages_public_public_page__WEBPACK_IMPORTED_MODULE_2__["PublicPage"] },
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
    function AppComponent(req, ass) {
        this.req = req;
        this.ass = ass;
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
        __metadata("design:paramtypes", [_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["RequestService"], _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["AssetsService"]])
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
/* harmony import */ var _modules_ultimate_auth_ultimate_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ultimate-auth/ultimate-auth.module */ "./src/app/modules/ultimate-auth/ultimate-auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _modules_ultimate_users_ultimate_users_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ultimate-users/ultimate-users.module */ "./src/app/modules/ultimate-users/ultimate-users.module.ts");
/* harmony import */ var _modules_ultimate_products_ultimate_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/ultimate-products/ultimate-products.module */ "./src/app/modules/ultimate-products/ultimate-products.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["UltimateCoreModule"],
                _modules_ultimate_auth_ultimate_auth_module__WEBPACK_IMPORTED_MODULE_3__["UltimateAuthModule"],
                _modules_ultimate_users_ultimate_users_module__WEBPACK_IMPORTED_MODULE_6__["UltimateUsersModule"],
                _modules_ultimate_products_ultimate_products_module__WEBPACK_IMPORTED_MODULE_7__["UltimateProductsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
    { label: 'Home', path: ['/'] },
    { label: 'Users', children: [
            { label: 'List', path: ['/users'], query: { page: 1 } },
            { label: 'New', path: ['/users/create'] },
        ] },
    { label: 'Product', children: [
            { label: 'List', path: ['/products'] },
            { label: 'New', path: ['/product/add'] },
        ] },
];
var menuOptions = {
    search: false
};


/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/invite/invite.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/invite/invite.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9jbXBzL2ludml0ZS9pbnZpdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/invite/invite.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/invite/invite.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 100%\">\r\n  <div class=\"card-body\">\r\n    <form id=\"registerForm\">\r\n      <p class=\"h5 card-title\">Invite a User</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"johndoe@mail.com\" [(ngModel)]=\"user.email\" name=\"email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"John Doe\" [(ngModel)]=\"user.name\" name=\"name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"invite($event)\">Invite</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/invite/invite.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/invite/invite.component.ts ***!
  \***********************************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _srvs_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../srvs/auth.service */ "./src/app/modules/ultimate-auth/srvs/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InviteComponent = /** @class */ (function () {
    function InviteComponent(as, route) {
        this.as = as;
        this.route = route;
        this.user = { email: '', name: '' };
    }
    InviteComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    InviteComponent.prototype.invite = function ($event) {
        //console.log("invite",$event, this.user);
        var user = {
            id: this.user.id,
            email: this.user.email,
            name: this.user.name
        };
        this.as.invite(user).subscribe(function (result) {
            console.log(result);
        });
    };
    InviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ult-auth-invite',
            template: __webpack_require__(/*! ./invite.component.html */ "./src/app/modules/ultimate-auth/cmps/invite/invite.component.html"),
            styles: [__webpack_require__(/*! ./invite.component.css */ "./src/app/modules/ultimate-auth/cmps/invite/invite.component.css")]
        }),
        __metadata("design:paramtypes", [_srvs_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InviteComponent);
    return InviteComponent;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/login/login.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/login/login.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9jbXBzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/login/login.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/login/login.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 100%\">\r\n  <div class=\"card-body\">\r\n    <form (ngSubmit)=\"requestLogin()\">\r\n      <p class=\"h5 card-title\">Login</p>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"johndoe@mail.com\" name=\"email\" [(ngModel)]=\"email\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required>\r\n      </div>\r\n      <div class=\"form-group form-check\">\r\n        <input type=\"checkbox\" class=\"form-check-input\">\r\n        <label class=\"form-check-label\">Remember me</label>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"req().isRequesting()\">Login</button>\r\n        <img [attr.src]=\"assets('loading.svg')\" alt=\"Loading\" width=\"38px\" *ngIf=\"req().isRequesting()\" >\r\n      </div>\r\n      <div>\r\n        <a href=\"#\">Forgot password?</a>\r\n      </div>\r\n    </form>\r\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorAlert\">\r\n      <span>{{errorMsg}}</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/login/login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/login/login.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(_req, router, ass) {
        var _this = _super.call(this, ass) || this;
        _this._req = _req;
        _this.router = router;
        _this.email = '';
        _this.password = '';
        _this.errorMsg = '';
        return _this;
    }
    LoginComponent.prototype.req = function () {
        get: {
            return this._req;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.requestLogin = function () {
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
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ult-auth-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/ultimate-auth/cmps/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/ultimate-auth/cmps/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["AssetsService"]])
    ], LoginComponent);
    return LoginComponent;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["ComponentBase"]));



/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/register/register.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/register/register.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9jbXBzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/register/register.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/register/register.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 100%\">\r\n  <div class=\"card-body\">\r\n    <form id=\"registerForm\">\r\n      <p class=\"h5 card-title\">Register</p>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"johndoe@mail.com\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"John Doe\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Confirm Password</label>\r\n        <input type=\"password\" class=\"form-control\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/cmps/register/register.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/cmps/register/register.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ult-auth-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/ultimate-auth/cmps/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/modules/ultimate-auth/cmps/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/invite/invite.page.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/invite/invite.page.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9wYWdlcy9pbnZpdGUvaW52aXRlLnBhZ2UuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/invite/invite.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/invite/invite.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <ult-auth-invite></ult-auth-invite>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/invite/invite.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/invite/invite.page.ts ***!
  \*******************************************************************/
/*! exports provided: InvitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePage", function() { return InvitePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvitePage = /** @class */ (function () {
    function InvitePage() {
    }
    InvitePage.prototype.ngOnInit = function () {
    };
    InvitePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite',
            template: __webpack_require__(/*! ./invite.page.html */ "./src/app/modules/ultimate-auth/pages/invite/invite.page.html"),
            styles: [__webpack_require__(/*! ./invite.page.css */ "./src/app/modules/ultimate-auth/pages/invite/invite.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvitePage);
    return InvitePage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/login/login.page.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/login/login.page.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/login/login.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/login/login.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n        <ult-auth-login></ult-auth-login>\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/login/login.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/login/login.page.ts ***!
  \*****************************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-page',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/modules/ultimate-auth/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.css */ "./src/app/modules/ultimate-auth/pages/login/login.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/not-found/not-found.page.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/not-found/not-found.page.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLnBhZ2UuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/not-found/not-found.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/not-found/not-found.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<p class=\"text-center\">La ruta especificada no existe.</p>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/not-found/not-found.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/not-found/not-found.page.ts ***!
  \*************************************************************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPage = /** @class */ (function () {
    function NotFoundPage() {
    }
    NotFoundPage.prototype.ngOnInit = function () {
    };
    NotFoundPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'not-found-page',
            template: __webpack_require__(/*! ./not-found.page.html */ "./src/app/modules/ultimate-auth/pages/not-found/not-found.page.html"),
            styles: [__webpack_require__(/*! ./not-found.page.css */ "./src/app/modules/ultimate-auth/pages/not-found/not-found.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPage);
    return NotFoundPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/private/private.page.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/private/private.page.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9wYWdlcy9wcml2YXRlL3ByaXZhdGUucGFnZS5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/private/private.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/private/private.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>\r\n    private works!\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/private/private.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/private/private.page.ts ***!
  \*********************************************************************/
/*! exports provided: PrivatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePage", function() { return PrivatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivatePage = /** @class */ (function () {
    function PrivatePage() {
    }
    PrivatePage.prototype.ngOnInit = function () {
    };
    PrivatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-private',
            template: __webpack_require__(/*! ./private.page.html */ "./src/app/modules/ultimate-auth/pages/private/private.page.html"),
            styles: [__webpack_require__(/*! ./private.page.css */ "./src/app/modules/ultimate-auth/pages/private/private.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivatePage);
    return PrivatePage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/public/public.page.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/public/public.page.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9wYWdlcy9wdWJsaWMvcHVibGljLnBhZ2UuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/public/public.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/public/public.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>\r\n    public works!\r\n  </p>\r\n\r\n  <ultimate-param-table></ultimate-param-table>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/public/public.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/public/public.page.ts ***!
  \*******************************************************************/
/*! exports provided: PublicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPage", function() { return PublicPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicPage = /** @class */ (function () {
    function PublicPage() {
    }
    PublicPage.prototype.ngOnInit = function () {
    };
    PublicPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.page.html */ "./src/app/modules/ultimate-auth/pages/public/public.page.html"),
            styles: [__webpack_require__(/*! ./public.page.css */ "./src/app/modules/ultimate-auth/pages/public/public.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicPage);
    return PublicPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/register/register.page.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/register/register.page.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtYXV0aC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/register/register.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/register/register.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\"></div>\r\n  <div class=\"col-md-6\">\r\n    <ult-auth-register></ult-auth-register>\r\n  </div>\r\n  <div class=\"col-md-3\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-auth/pages/register/register.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/pages/register/register.page.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-page',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/modules/ultimate-auth/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.css */ "./src/app/modules/ultimate-auth/pages/register/register.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/routes.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/ultimate-auth/routes.ts ***!
  \*************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_public_public_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/public/public.page */ "./src/app/modules/ultimate-auth/pages/public/public.page.ts");
/* harmony import */ var _pages_private_private_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/private/private.page */ "./src/app/modules/ultimate-auth/pages/private/private.page.ts");
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.page */ "./src/app/modules/ultimate-auth/pages/login/login.page.ts");
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register/register.page */ "./src/app/modules/ultimate-auth/pages/register/register.page.ts");
/* harmony import */ var _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.page */ "./src/app/modules/ultimate-auth/pages/not-found/not-found.page.ts");
/* harmony import */ var _pages_invite_invite_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/invite/invite.page */ "./src/app/modules/ultimate-auth/pages/invite/invite.page.ts");






var routes = [
    { path: 'notfound', component: _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_4__["NotFoundPage"] },
    { path: 'private', component: _pages_private_private_page__WEBPACK_IMPORTED_MODULE_1__["PrivatePage"] },
    { path: 'public', component: _pages_public_public_page__WEBPACK_IMPORTED_MODULE_0__["PublicPage"] },
    { path: 'login', component: _pages_login_login_page__WEBPACK_IMPORTED_MODULE_2__["LoginPage"] },
    { path: 'register', component: _pages_register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"] },
    { path: 'invite', component: _pages_invite_invite_page__WEBPACK_IMPORTED_MODULE_5__["InvitePage"] }
];


/***/ }),

/***/ "./src/app/modules/ultimate-auth/srvs/auth.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/srvs/auth.service.ts ***!
  \************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(req) {
        this.req = req;
    }
    AuthService.prototype.login = function (username, password) {
        return this.req.login(username, password);
    };
    AuthService.prototype.logout = function () {
        return this.req.logout();
    };
    AuthService.prototype.invite = function (user) {
        return this.req.post('/users', user);
    };
    AuthService.prototype.getUser = function (id) {
        return this.req.get('/users', id);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-auth/ultimate-auth.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/ultimate-auth/ultimate-auth.module.ts ***!
  \***************************************************************/
/*! exports provided: UltimateAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateAuthModule", function() { return UltimateAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/login/login.component */ "./src/app/modules/ultimate-auth/cmps/login/login.component.ts");
/* harmony import */ var _cmps_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/register/register.component */ "./src/app/modules/ultimate-auth/cmps/register/register.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/app/modules/ultimate-auth/routes.ts");
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.page */ "./src/app/modules/ultimate-auth/pages/login/login.page.ts");
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/register/register.page */ "./src/app/modules/ultimate-auth/pages/register/register.page.ts");
/* harmony import */ var _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/not-found/not-found.page */ "./src/app/modules/ultimate-auth/pages/not-found/not-found.page.ts");
/* harmony import */ var _pages_private_private_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/private/private.page */ "./src/app/modules/ultimate-auth/pages/private/private.page.ts");
/* harmony import */ var _pages_public_public_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/public/public.page */ "./src/app/modules/ultimate-auth/pages/public/public.page.ts");
/* harmony import */ var _cmps_invite_invite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/invite/invite.component */ "./src/app/modules/ultimate-auth/cmps/invite/invite.component.ts");
/* harmony import */ var _pages_invite_invite_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/invite/invite.page */ "./src/app/modules/ultimate-auth/pages/invite/invite.page.ts");
/* harmony import */ var _srvs_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./srvs/auth.service */ "./src/app/modules/ultimate-auth/srvs/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var UltimateAuthModule = /** @class */ (function () {
    function UltimateAuthModule() {
    }
    UltimateAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _cmps_invite_invite_component__WEBPACK_IMPORTED_MODULE_14__["InviteComponent"], _cmps_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _pages_private_private_page__WEBPACK_IMPORTED_MODULE_12__["PrivatePage"], _pages_public_public_page__WEBPACK_IMPORTED_MODULE_13__["PublicPage"], _pages_invite_invite_page__WEBPACK_IMPORTED_MODULE_15__["InvitePage"],
                _pages_login_login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"], _pages_register_register_page__WEBPACK_IMPORTED_MODULE_10__["RegisterPage"], _pages_not_found_not_found_page__WEBPACK_IMPORTED_MODULE_11__["NotFoundPage"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_5__["UltimateCoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_8__["routes"])
            ],
            providers: [_srvs_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]],
            exports: [
                _pages_login_login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"]
            ]
        })
    ], UltimateAuthModule);
    return UltimateAuthModule;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvY21wcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{product.name}}</h2>\r\n<div class=\"col-md-12\" style=\"z-index: 0\">\r\n  <ngx-image-gallery [images]=\"images\" [conf]=\"conf\"\r\n    (onOpen)=\"galleryOpened($event)\"\r\n    (onClose)=\"galleryClosed()\"\r\n    (onImageClicked)=\"galleryImageClicked($event)\"\r\n    (onImageChange)=\"galleryImageChanged($event)\"\r\n    (onDelete)=\"deleteImage($event)\"></ngx-image-gallery>\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <p>{{product.overview}}</p>\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <section [innerHTML]=\"product.description\"></section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _srvs_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../srvs/product.service */ "./src/app/modules/ultimate-products/srvs/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = /** @class */ (function (_super) {
    __extends(ProductDetailComponent, _super);
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
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.ps.getProduct(id).subscribe(function (product) {
            _this.product = product;
            _this.images = [];
            for (var _i = 0, _a = product.images; _i < _a.length; _i++) {
                var image = _a[_i];
                _this.images.push({
                    url: image
                });
            }
        });
    };
    // open gallery
    ProductDetailComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.open(index);
    };
    // close gallery
    ProductDetailComponent.prototype.closeGallery = function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    ProductDetailComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    ProductDetailComponent.prototype.nextImage = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    ProductDetailComponent.prototype.prevImage = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.prev();
    };
    ProductDetailComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    ProductDetailComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
    };
    // callback on gallery image clicked
    ProductDetailComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
    };
    // callback on gallery image changed
    ProductDetailComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    ProductDetailComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductDetailComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxImageGalleryComponent"]),
        __metadata("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxImageGalleryComponent"])
    ], ProductDetailComponent.prototype, "ngxImageGallery", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ult-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_srvs_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["AssetsService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["ComponentBase"]));



/***/ }),

/***/ "./src/app/modules/ultimate-products/cmps/products-query/products-query.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/cmps/products-query/products-query.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvY21wcy9wcm9kdWN0cy1xdWVyeS9wcm9kdWN0cy1xdWVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/cmps/products-query/products-query.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/cmps/products-query/products-query.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <ultimate-pager [paged]=\"paged\" [path]=\"['/products']\"></ultimate-pager>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <product-table [products]=\"paged.data\"></product-table>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <ultimate-pager [paged]=\"paged\" [path]=\"['/products']\"></ultimate-pager>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-products/cmps/products-query/products-query.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/cmps/products-query/products-query.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductsQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsQueryComponent", function() { return ProductsQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _srvs_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../srvs/product.service */ "./src/app/modules/ultimate-products/srvs/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsQueryComponent = /** @class */ (function () {
    function ProductsQueryComponent(ps, route) {
        this.ps = ps;
        this.route = route;
        this.paged = new _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["Paged"]();
    }
    ProductsQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var page = 1;
            if (params['page'])
                page = params['page'];
            _this.ps.browseProducts(page).subscribe(function (result) {
                console.log(result);
                _this.paged = result;
            });
        });
    };
    ProductsQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ultimate-products-query',
            template: __webpack_require__(/*! ./products-query.component.html */ "./src/app/modules/ultimate-products/cmps/products-query/products-query.component.html"),
            styles: [__webpack_require__(/*! ./products-query.component.css */ "./src/app/modules/ultimate-products/cmps/products-query/products-query.component.css")]
        }),
        __metadata("design:paramtypes", [_srvs_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductsQueryComponent);
    return ProductsQueryComponent;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/forms/product/product.form.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/forms/product/product.form.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvZm9ybXMvcHJvZHVjdC9wcm9kdWN0LmZvcm0uY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/forms/product/product.form.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/forms/product/product.form.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"group\" (ngSubmit)=\"submit($event)\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label>Upload Image</label>\n        <image-upload name=\"file\" url=\"{{apiroot}}/uploads?bucket={{bucket}}\"\n          [headers]=\"{Authorization: 'Bearer ' + req().getToken()}\"\n          [uploadedFiles]=\"product.images\"\n          (uploadFinished)=\"onUploadFinished($event)\"\n          (removed)=\"onRemoved($event)\"></image-upload>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Nombre</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Slug</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"slug\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label>Resumen</label>\n        <textarea class=\"form-control\" formControlName=\"overview\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <label>Description</label>\n        <textarea class=\"form-control tall\" formControlName=\"description\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Sell Price</label>\n        <input type=\"text\" formControlName=\"org_price\" class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Discount Price</label>\n        <input type=\"text\" formControlName=\"dct_price\" class=\"form-control\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <label>Categorias</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <ult-checkboxes [source]=\"categories\" label=\"name\" value=\"id\" [selected]=\"product?.categories\" (checkboxChanged)=\"checkboxChanged($event)\"></ult-checkboxes>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"button-group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/ultimate-products/forms/product/product.form.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/forms/product/product.form.ts ***!
  \*************************************************************************/
/*! exports provided: ProductForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductForm", function() { return ProductForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _srvs_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../srvs/product.service */ "./src/app/modules/ultimate-products/srvs/product.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductForm = /** @class */ (function (_super) {
    __extends(ProductForm, _super);
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
        _this.product = new _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        _this.categories = [];
        _this.discounted = false;
        _this.apiroot = '';
        _this.apiroot = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api.root;
        _this.group = _this.fb.group({
            name: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], []),
            slug: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], []),
            overview: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], []),
            description: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d+(\.(\d{0,2})?)?/)], []),
            org_price: _this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d+(\.(\d{0,2})?)?/)], []),
            dct_price: _this.fb.control('', [], []),
        });
        return _this;
    }
    ProductForm.prototype.req = function () {
        get: {
            return this._req;
        }
    };
    ProductForm.prototype.ngOnInit = function () {
        var _this = this;
        this.bucket = uuid__WEBPACK_IMPORTED_MODULE_3__["v4"]();
        this.fill(this.ps.categories(), function (cats) { return _this.fillCategories(cats); });
        var product_id = this.route.snapshot.params.id;
        if (product_id) {
            this.fill(this.ps.getProduct(product_id), function (prods) { return _this.fillProduct(prods); });
        }
    };
    ProductForm.prototype.ngOnDestroy = function () {
        this._req.delete('/uploads/bucket', this.bucket).subscribe(function (result) {
            console.log(result);
        });
    };
    ProductForm.prototype.fillCategories = function (categories) {
        this.categories = categories;
    };
    ProductForm.prototype.fillProduct = function (product) {
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
    ProductForm.prototype.saving = function ($events, values) {
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
    ProductForm.prototype.onUploadFinished = function ($event) {
        var response = JSON.parse($event.serverResponse.response._body);
        $event.image_id = response.id;
        this.imageids.push(response.id);
    };
    ProductForm.prototype.onRemoved = function ($event) {
        if ($event.image_id) {
            this._req.delete('/uploads', $event.image_id).subscribe(function (result) {
                console.log(result);
            });
        }
        else {
            var url = $event.file.name;
            var filename = url.replace(/^.*[\\\/]/, '');
            this._req.post('/product/delete_image/' + this.product.id, { filename: filename }).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    ProductForm.prototype.checkboxChanged = function ($event) {
        this.ckbAdded = $event.added;
        this.ckbRemoved = $event.removed;
    };
    ProductForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ultimate-product-form',
            template: __webpack_require__(/*! ./product.form.html */ "./src/app/modules/ultimate-products/forms/product/product.form.html"),
            styles: [__webpack_require__(/*! ./product.form.css */ "./src/app/modules/ultimate-products/forms/product/product.form.css")]
        }),
        __metadata("design:paramtypes", [_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            _srvs_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["AssetsService"]])
    ], ProductForm);
    return ProductForm;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["FormBase"]));



/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ult-product-detail></ult-product-detail>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage() {
    }
    ProductDetailPage.prototype.ngOnInit = function () {
    };
    ProductDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-detail-page',
            template: __webpack_require__(/*! ./product-detail.page.html */ "./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.html"),
            styles: [__webpack_require__(/*! ./product-detail.page.css */ "./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvcGFnZXMvcHJvZHVjdC1lZGl0L3Byb2R1Y3QtZWRpdC5wYWdlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ultimate-product-form></ultimate-product-form>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditPage", function() { return ProductEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductEditPage = /** @class */ (function () {
    function ProductEditPage() {
    }
    ProductEditPage.prototype.ngOnInit = function () {
    };
    ProductEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-edit-page',
            template: __webpack_require__(/*! ./product-edit.page.html */ "./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.html"),
            styles: [__webpack_require__(/*! ./product-edit.page.css */ "./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductEditPage);
    return ProductEditPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-list/product-list.page.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-list/product-list.page.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvcGFnZXMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-list/product-list.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-list/product-list.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ultimate-products-query></ultimate-products-query>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-products/pages/product-list/product-list.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/pages/product-list/product-list.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
    ProductListPage.prototype.ngOnInit = function () {
    };
    ProductListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-list-page',
            template: __webpack_require__(/*! ./product-list.page.html */ "./src/app/modules/ultimate-products/pages/product-list/product-list.page.html"),
            styles: [__webpack_require__(/*! ./product-list.page.css */ "./src/app/modules/ultimate-products/pages/product-list/product-list.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListPage);
    return ProductListPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/ultimate-products/routes.ts ***!
  \*****************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/product-list/product-list.page */ "./src/app/modules/ultimate-products/pages/product-list/product-list.page.ts");
/* harmony import */ var _pages_product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/product-detail/product-detail.page */ "./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.ts");
/* harmony import */ var _pages_product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product-edit/product-edit.page */ "./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.ts");



var routes = [
    { path: 'products', component: _pages_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_0__["ProductListPage"] },
    { path: 'product/add', component: _pages_product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_2__["ProductEditPage"] },
    { path: 'product/:id', component: _pages_product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_2__["ProductEditPage"] },
    { path: 'product/preview/:id', component: _pages_product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_1__["ProductDetailPage"] },
];


/***/ }),

/***/ "./src/app/modules/ultimate-products/srvs/product.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ultimate-products/srvs/product.service.ts ***!
  \*******************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(req) {
        this.req = req;
    }
    ProductService.prototype.browseProducts = function (page) {
        return this.req.browse('/products', { page: page });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.req.get('/products', id);
    };
    ProductService.prototype.updateProduct = function (id, product) {
        return this.req.put('/products', id, product);
    };
    ProductService.prototype.createProduct = function (product) {
        return this.req.post('/products', product);
    };
    ProductService.prototype.saveProduct = function (product) {
        return (product.id) ?
            this.updateProduct(product.id, product) :
            this.createProduct(product);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.req.delete('/products', id);
    };
    ProductService.prototype.hitProduct = function (id) {
        return this.req.post('/product/hit', id);
    };
    ProductService.prototype.clickProduct = function (id) {
        return this.req.post('/product/click', id);
    };
    ProductService.prototype.categories = function () {
        return this.req.browse('/product/categories', {});
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/tables/product/product.row.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/tables/product/product.row.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvdGFibGVzL3Byb2R1Y3QvcHJvZHVjdC5yb3cuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/tables/product/product.row.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/tables/product/product.row.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td>\n  <img [attr.data-piio]=\"product.image_cover\" \n    width=\"64px\" height=\"48px\" data-piio-sizing=\"auto\" \n    src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+f9vPQAJZAN2rlRQVAAAAABJRU5ErkJggg==\" />\n</td>\n<td><a [routerLink]=\"['/product', product.id]\">{{product.name}}</a></td>\n<td>{{product.org_price | currency}}</td>\n<td>{{product.dct_price | currency}}</td>\n<td>\n  <a class=\"btn btn-warning\" [routerLink]=\"['/product',product.id]\">Edit</a>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete($event, product)\">Delete</button>\n</td>"

/***/ }),

/***/ "./src/app/modules/ultimate-products/tables/product/product.row.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/tables/product/product.row.ts ***!
  \*************************************************************************/
/*! exports provided: ProductRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRow", function() { return ProductRow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _srvs_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../srvs/product.service */ "./src/app/modules/ultimate-products/srvs/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductRow = /** @class */ (function () {
    function ProductRow(ps) {
        this.ps = ps;
        this.product = {
            id: 0,
            name: '',
            slug: ''
        };
        this.deleting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductRow.prototype.ngOnInit = function () {
        var _this = this;
        this.deleting.subscribe(function (product) {
            if (product.delete) {
                _this.ps.deleteProduct(product.id).subscribe(function (result) {
                    _this.deleted.emit(product);
                });
            }
        });
    };
    ProductRow.prototype.delete = function ($event, product) {
        product.delete = true;
        this.deleting.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductRow.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductRow.prototype, "deleting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductRow.prototype, "deleted", void 0);
    ProductRow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[product-row]',
            template: __webpack_require__(/*! ./product.row.html */ "./src/app/modules/ultimate-products/tables/product/product.row.html"),
            styles: [__webpack_require__(/*! ./product.row.css */ "./src/app/modules/ultimate-products/tables/product/product.row.css")]
        }),
        __metadata("design:paramtypes", [_srvs_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductRow);
    return ProductRow;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/tables/product/product.table.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/tables/product/product.table.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtcHJvZHVjdHMvdGFibGVzL3Byb2R1Y3QvcHJvZHVjdC50YWJsZS5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/ultimate-products/tables/product/product.table.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/tables/product/product.table.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Name</th>\n      <th>O.P.</th>\n      <th>D.P.</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr product-row *ngFor=\"let product of products\" [product]=\"product\"\n      (deleting)=\"deleting($event)\"></tr>\n  </tbody>\n</table>\n<ng-template #dlgConfirmDeleteTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Eliminar Producto</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dlgConfirmDelete.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    Desea eliminar el producto '<span>{{deletingProduct.name}}</span>'?\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"dlgConfirmDelete.hide()\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteConfirmed()\">Eliminar</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/ultimate-products/tables/product/product.table.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ultimate-products/tables/product/product.table.ts ***!
  \***************************************************************************/
/*! exports provided: ProductTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTable", function() { return ProductTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _srvs_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../srvs/product.service */ "./src/app/modules/ultimate-products/srvs/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTable = /** @class */ (function () {
    function ProductTable(modal, ps) {
        this.modal = modal;
        this.ps = ps;
        this.products = [];
    }
    ProductTable.prototype.ngOnInit = function () {
    };
    ProductTable.prototype.deleting = function (product) {
        product.delete = false;
        this.deletingProduct = product;
        this.dlgConfirmDelete = this.modal.show(this.dlgConfirmDeleteTemplate, {});
    };
    ProductTable.prototype.deleteConfirmed = function () {
        var _this = this;
        this.ps.deleteProduct(this.deletingProduct.id).subscribe(function (result) {
            var index = _this.products.indexOf(_this.deletingProduct);
            _this.products.splice(index, 1);
            _this.dlgConfirmDelete.hide();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductTable.prototype, "products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dlgConfirmDeleteTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ProductTable.prototype, "dlgConfirmDeleteTemplate", void 0);
    ProductTable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-table',
            template: __webpack_require__(/*! ./product.table.html */ "./src/app/modules/ultimate-products/tables/product/product.table.html"),
            styles: [__webpack_require__(/*! ./product.table.css */ "./src/app/modules/ultimate-products/tables/product/product.table.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _srvs_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductTable);
    return ProductTable;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-products/ultimate-products.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ultimate-products/ultimate-products.module.ts ***!
  \***********************************************************************/
/*! exports provided: UltimateProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateProductsModule", function() { return UltimateProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _forms_product_product_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/product/product.form */ "./src/app/modules/ultimate-products/forms/product/product.form.ts");
/* harmony import */ var _tables_product_product_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tables/product/product.row */ "./src/app/modules/ultimate-products/tables/product/product.row.ts");
/* harmony import */ var _tables_product_product_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables/product/product.table */ "./src/app/modules/ultimate-products/tables/product/product.table.ts");
/* harmony import */ var _cmps_products_query_products_query_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/products-query/products-query.component */ "./src/app/modules/ultimate-products/cmps/products-query/products-query.component.ts");
/* harmony import */ var _cmps_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cmps/product-detail/product-detail.component */ "./src/app/modules/ultimate-products/cmps/product-detail/product-detail.component.ts");
/* harmony import */ var _pages_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/product-list/product-list.page */ "./src/app/modules/ultimate-products/pages/product-list/product-list.page.ts");
/* harmony import */ var _pages_product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/product-detail/product-detail.page */ "./src/app/modules/ultimate-products/pages/product-detail/product-detail.page.ts");
/* harmony import */ var _pages_product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/product-edit/product-edit.page */ "./src/app/modules/ultimate-products/pages/product-edit/product-edit.page.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes */ "./src/app/modules/ultimate-products/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var UltimateProductsModule = /** @class */ (function () {
    function UltimateProductsModule() {
    }
    UltimateProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _cmps_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailComponent"], _cmps_products_query_products_query_component__WEBPACK_IMPORTED_MODULE_11__["ProductsQueryComponent"],
                _forms_product_product_form__WEBPACK_IMPORTED_MODULE_8__["ProductForm"],
                _tables_product_product_row__WEBPACK_IMPORTED_MODULE_9__["ProductRow"], _tables_product_product_table__WEBPACK_IMPORTED_MODULE_10__["ProductTable"],
                _pages_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_13__["ProductListPage"], _pages_product_detail_product_detail_page__WEBPACK_IMPORTED_MODULE_14__["ProductDetailPage"], _pages_product_edit_product_edit_page__WEBPACK_IMPORTED_MODULE_15__["ProductEditPage"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_3__["UltimateCoreModule"],
                ngx_image_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxImageGalleryModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_16__["routes"]),
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_5__["ImageUploadModule"].forRoot(),
            ]
        })
    ], UltimateProductsModule);
    return UltimateProductsModule;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-users/cmps/user-list/user-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/cmps/user-list/user-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtdXNlcnMvY21wcy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/ultimate-users/cmps/user-list/user-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/cmps/user-list/user-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\"> \r\n    <div class=\"form-group\">\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/users/create']\">Crear Usuario</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\"> \r\n    <div class=\"form-group\">\r\n      <ultimate-pager [paged]=\"usersPaged\" [path]=\"['/users']\"></ultimate-pager>\r\n    </div>\r\n  </div>\r\n</div>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Email</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let user of users;let i=index\">\r\n      <td>{{user.name}}</td>\r\n      <td>{{user.email}}</td>\r\n      <td>\r\n        <a class=\"btn btn-warning\" [routerLink]=\"['/user/edit',user.id]\">Edit</a>\r\n        <button class=\"btn btn-danger\" (click)=\"delete(user, i)\">Delete</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\"> \r\n    <div class=\"form-group\">\r\n      <ultimate-pager [paged]=\"usersPaged\" [path]=\"['/users']\"></ultimate-pager>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-users/cmps/user-list/user-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/cmps/user-list/user-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _srvs_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../srvs/user.service */ "./src/app/modules/ultimate-users/srvs/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(us, route) {
        this.us = us;
        this.route = route;
        this.users = [
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
            { id: 0, email: '-------- --------', name: '-------- --------' },
        ];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            //this.users = [];
            _this.page = (params['page']) ? params["page"] : 1;
            _this.us.browseUsers(_this.page).subscribe(function (result) {
                console.log(result);
                _this.users = result.data;
                _this.usersPaged = result;
            });
        });
    };
    UserListComponent.prototype.delete = function (user, index) {
        var _this = this;
        console.log("delete", user, index);
        this.us.deleteUser(user.id).subscribe(function (result) {
            console.log(result);
            _this.users.splice(index, 1);
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ult-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/modules/ultimate-users/cmps/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/modules/ultimate-users/cmps/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_srvs_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-users/forms/user/user.form.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ultimate-users/forms/user/user.form.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtdXNlcnMvZm9ybXMvdXNlci91c2VyLmZvcm0uY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ultimate-users/forms/user/user.form.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/ultimate-users/forms/user/user.form.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"group\" (ngSubmit)=\"submit($event)\" class=\"needs-validation\" novalidate>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n        <h2>Formulario de Usuario</h2>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input class=\"form-control\" formControlName=\"email\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Email obligatorio, formato: <b>xxxxxx@yyyyy.zzz</b>.</small>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Nombre</label>\n        <input class=\"form-control\" formControlName=\"name\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Nombre obligatorio.</small>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\" *ngIf=\"acceptPassword\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Contraseña</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Contraseña obligatoria.</small>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Confirmar Contraseña</label>\n        <input  type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" [attr.disabled]=\"disable()\"/>\n        <small class=\"err-feedback\">Debe ser igual a la contraseña.</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-group\">\n          <button class=\"btn btn-primary\" type=\"submit\" [attr.disabled]=\"disabelSubmit()\">Guardar</button>\n          &nbsp;\n          <button class=\"btn btn-warning\" type=\"button\" (click)=\"cancel()\" [attr.disabled]=\"disable()\">Cancelar</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/ultimate-users/forms/user/user.form.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/ultimate-users/forms/user/user.form.ts ***!
  \****************************************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return UserForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _srvs_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../srvs/user.service */ "./src/app/modules/ultimate-users/srvs/user.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserForm = /** @class */ (function (_super) {
    __extends(UserForm, _super);
    function UserForm(fb, us, ass) {
        var _this = _super.call(this, ass) || this;
        _this.fb = fb;
        _this.us = us;
        _this.user = {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        };
        _this.acceptPassword = false;
        _this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    UserForm.prototype.ngOnInit = function () {
        var _this = this;
        this.acceptPassword = false;
        this.group = this.fb.group({
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email], []),
            name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], []),
            password: this.fb.control('', [], []),
            confirmPassword: this.fb.control('', [], []),
        });
        this.group.setValue(this.user);
        if (this.user_id) {
            this.fill(this.us.getUser(this.user_id), function (user) { return _this.fillUser(user); });
        }
        else {
            this.group.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.group.get('confirmPassword').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.acceptPassword = true;
        }
    };
    UserForm.prototype.fillUser = function (user) {
        console.log(this);
        this.user = user;
        this.group.setValue({
            email: user.email,
            name: user.name,
            password: '',
            confirmPassword: ''
        });
    };
    UserForm.prototype.saving = function ($event, values) {
        var _this = this;
        this.user.email = values.email;
        this.user.name = values.name;
        this.user.password = values.password;
        this.us.saveUser(this.user).subscribe(function (result) {
            _this.saved.emit(_this.user);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UserForm.prototype, "user_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserForm.prototype, "saved", void 0);
    UserForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ultimate-user-form',
            template: __webpack_require__(/*! ./user.form.html */ "./src/app/modules/ultimate-users/forms/user/user.form.html"),
            styles: [__webpack_require__(/*! ./user.form.css */ "./src/app/modules/ultimate-users/forms/user/user.form.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _srvs_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_2__["AssetsService"]])
    ], UserForm);
    return UserForm;
}(_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_2__["FormBase"]));



/***/ }),

/***/ "./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtdXNlcnMvcGFnZXMvdXNlci1lZGl0L3VzZXItZWRpdC5wYWdlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ultimate-user-form [user_id]=\"user_id\" (saved)=\"saved($event)\" (canceled)=\"cancel()\"></ultimate-user-form>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.ts ***!
  \**************************************************************************/
/*! exports provided: UserEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPage", function() { return UserEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEditPage = /** @class */ (function () {
    function UserEditPage(router, route) {
        this.router = router;
        this.route = route;
    }
    UserEditPage.prototype.ngOnInit = function () {
        this.user_id = this.route.snapshot.params.id;
    };
    UserEditPage.prototype.saved = function (user) {
        this.router.navigate(['/users']);
    };
    UserEditPage.prototype.cancel = function () {
        this.router.navigate(['/users']);
    };
    UserEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-edit-page',
            template: __webpack_require__(/*! ./user-edit.page.html */ "./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.html"),
            styles: [__webpack_require__(/*! ./user-edit.page.css */ "./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserEditPage);
    return UserEditPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-users/pages/user-list/user-list.page.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/pages/user-list/user-list.page.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWx0aW1hdGUtdXNlcnMvcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC5wYWdlLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/ultimate-users/pages/user-list/user-list.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/pages/user-list/user-list.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <ult-user-list></ult-user-list>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ultimate-users/pages/user-list/user-list.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ultimate-users/pages/user-list/user-list.page.ts ***!
  \**************************************************************************/
/*! exports provided: UserListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPage", function() { return UserListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListPage = /** @class */ (function () {
    function UserListPage() {
    }
    UserListPage.prototype.ngOnInit = function () {
    };
    UserListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-list-page',
            template: __webpack_require__(/*! ./user-list.page.html */ "./src/app/modules/ultimate-users/pages/user-list/user-list.page.html"),
            styles: [__webpack_require__(/*! ./user-list.page.css */ "./src/app/modules/ultimate-users/pages/user-list/user-list.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListPage);
    return UserListPage;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-users/routes.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/ultimate-users/routes.ts ***!
  \**************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_user_list_user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/user-list/user-list.page */ "./src/app/modules/ultimate-users/pages/user-list/user-list.page.ts");
/* harmony import */ var _pages_user_edit_user_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user-edit/user-edit.page */ "./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.ts");


var routes = [
    { path: 'user/edit/:id', component: _pages_user_edit_user_edit_page__WEBPACK_IMPORTED_MODULE_1__["UserEditPage"] },
    { path: 'users/create', component: _pages_user_edit_user_edit_page__WEBPACK_IMPORTED_MODULE_1__["UserEditPage"] },
    { path: 'users', component: _pages_user_list_user_list_page__WEBPACK_IMPORTED_MODULE_0__["UserListPage"] }
];


/***/ }),

/***/ "./src/app/modules/ultimate-users/srvs/user.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/ultimate-users/srvs/user.service.ts ***!
  \*************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(req) {
        this.req = req;
    }
    UserService.prototype.browseUsers = function (page) {
        return this.req.browse('/users', { page: page });
    };
    UserService.prototype.getUser = function (id) {
        return this.req.get('/users', id);
    };
    UserService.prototype.createUser = function (user) {
        return this.req.post('/users', user);
    };
    UserService.prototype.updateUser = function (user) {
        return this.req.put('/users', user.id, user);
    };
    UserService.prototype.saveUser = function (user) {
        if (user.id)
            return this.updateUser(user);
        else
            return this.createUser(user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.req.delete('/users', id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/modules/ultimate-users/ultimate-users.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ultimate-users/ultimate-users.module.ts ***!
  \*****************************************************************/
/*! exports provided: UltimateUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimateUsersModule", function() { return UltimateUsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @marcohern/ultimate-core */ "./dist/marcohern/ultimate-core/fesm5/marcohern-ultimate-core.js");
/* harmony import */ var _cmps_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/user-list/user-list.component */ "./src/app/modules/ultimate-users/cmps/user-list/user-list.component.ts");
/* harmony import */ var _pages_user_list_user_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-list/user-list.page */ "./src/app/modules/ultimate-users/pages/user-list/user-list.page.ts");
/* harmony import */ var _srvs_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./srvs/user.service */ "./src/app/modules/ultimate-users/srvs/user.service.ts");
/* harmony import */ var _forms_user_user_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/user/user.form */ "./src/app/modules/ultimate-users/forms/user/user.form.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ "./src/app/modules/ultimate-users/routes.ts");
/* harmony import */ var _pages_user_edit_user_edit_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user-edit/user-edit.page */ "./src/app/modules/ultimate-users/pages/user-edit/user-edit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UltimateUsersModule = /** @class */ (function () {
    function UltimateUsersModule() {
    }
    UltimateUsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _cmps_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _forms_user_user_form__WEBPACK_IMPORTED_MODULE_8__["UserForm"],
                _pages_user_list_user_list_page__WEBPACK_IMPORTED_MODULE_6__["UserListPage"], _pages_user_edit_user_edit_page__WEBPACK_IMPORTED_MODULE_10__["UserEditPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _marcohern_ultimate_core__WEBPACK_IMPORTED_MODULE_4__["UltimateCoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_routes__WEBPACK_IMPORTED_MODULE_9__["routes"])
            ],
            providers: [
                _srvs_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
            ]
        })
    ], UltimateUsersModule);
    return UltimateUsersModule;
}());



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