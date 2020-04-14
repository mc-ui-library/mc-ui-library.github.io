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

/***/ "./projects/mc-ui/src/lib/components/base.component.ts":
/*!*************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/base.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom-utils */ "./projects/mc-ui/src/lib/utils/dom-utils.ts");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/data-utils */ "./projects/mc-ui/src/lib/utils/data-utils.ts");





/**
 * Angular Change Detection
 * https://www.mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/
 * It checks all the values or property of a value that are used by the component template.
 * If a property of an object is used for the template, it checks only the property value even if the obejct is changed.
 * The object is changed, but the property value of the object that is used by the template is not changed,
 * it will not trigger the change detection.
 * If you don't want to check the property that is used by the template, you can use "changeDetection: ChangeDetectionStrategy.OnPush".
 * If you change the property of an object that is used by the template.
 * The detector only check the object is changed or not when using OnPush.
 * If you use "OnPush", you may need immutable.js library for immutable object.
 */
/**
 * Design Concept
 * - "config" property for static configuration. It helps to reduce one time properties.
 * - You can add other properties for change detection for updating the component template,
 *    but the default values are from the "config" after that you can update the property for the change detection.
 * - it has only one Output that is an "action" event for easy to type the events and management.
 * - The "state" variable for managing the properties that are used for the template.
 *    It is mutable since the Angular default change detection strategy supports to check the properties also.
 *    If you use the OnPush strategy, we don't use state property for triggering the change detection.
 *    If you want to mutate the "state" for updating the template after setting the "config", you can use a property for that.
 */
class BaseComponent {
    constructor(er) {
        this.er = er;
        // internal state
        this._subscriptions = [];
        // you can add default config properties.
        this.defaultConfig = {};
        // you can add default state properties for the template. state has all the properties that are used by the template
        this.defaultState = {};
        this.initialized = false;
        this.rendered = false;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.el = this.er.nativeElement;
        this.componentName = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__["getComponentNameByElement"])(this.el);
    }
    set config(config) {
        if (config) {
            // copy the default config values and update config.
            if (!this._config) {
                this._config = Object(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["setState"])(this.defaultConfig, config);
            }
            else {
                this._config = Object(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["setState"])(this._config, config);
            }
            this.init(this._config);
        }
    }
    get config() {
        return this._config;
    }
    ngOnInit() {
        this.initCmp();
    }
    ngAfterViewInit() {
        this.afterInitCmp();
        if (this._config && this._config.themes) {
            this.applyThemes(this._config.themes);
        }
        this.afterRenderCmp();
        this.rendered = true;
        this.emitRenderedActionEvent();
    }
    ngOnDestroy() {
        this.unsubscribeAll();
        this.destroyCmp();
        this.el = null;
        this._config = null;
        this.state = null;
    }
    set subscriptions(value) {
        if (value) {
            this._subscriptions.push(value);
        }
    }
    init(config) {
        this.initThemes(config.themes);
        this.applyConfig(config);
        this.applyConfigToState(config);
        this.applyState(config);
        this.initialized = true;
    }
    applyConfig(config) {
        // for mutating the config before using that for the state. after this, this._config is readonly value.
    }
    applyConfigToState(config) {
        // copy some config values that are used for the template.
        if (!this.state) {
            this.state = Object(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["setStateIf"])(this.defaultState, config);
        }
        else {
            this.state = Object(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["setStateIf"])(this.state, config);
        }
    }
    applyState(config) { }
    setState(state) {
        // it mutates the state since Angular default change detection checks the property also.
        Object.assign(this.state, state);
    }
    initThemes(themes) {
        this.applyThemes(themes);
    }
    applyThemes(themes) {
        if (this.rendered) {
            if (this.appliedThemeClasses) {
                this.el.classList.remove(...this.appliedThemeClasses);
            }
        }
        this.beforeThemeInit();
        if (themes) {
            themes = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__["getThemeClasses"])(this.componentName, themes);
            this.el.classList.add(...themes);
            this.appliedThemeClasses = themes;
        }
        this.afterThemeInit();
    }
    beforeThemeInit() { }
    afterThemeInit() { }
    initCmp() { }
    afterInitCmp() { }
    afterRenderCmp() { }
    unsubscribeAll() {
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    emitRenderedActionEvent() {
        const action = {
            target: this,
            action: _shared_models__WEBPACK_IMPORTED_MODULE_2__["ComponentAction"].RENDERED
        };
        this.action.emit(action);
    }
    destroyCmp() {
        // to remove dom elements reference etc.
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseComponent, inputs: { config: "config" }, outputs: { action: "action" } });


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/drawer/drawer.component.ts":
/*!**********************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/drawer/drawer.component.ts ***!
  \**********************************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _mask_mask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mask/mask.component */ "./projects/mc-ui/src/lib/components/mask/mask.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["drawerEr"];
function DrawerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c1 = function (a1) { return { visible: true, transparent: a1 }; };
/**
- Add drawer.component: This is almost the same as the Popup.component, but it is sliding from the top/left/bottom/right with animation effect. The popup and drawer components are dynamic container components for adding them to the body element.
- mask.component: This is used by drawer.component or some components that needs a mask. When drawer component has a smaller content component than the drawer, the empty part will be the mask component. It can have a opacity valued or transparent background.
 */
class DrawerComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultConfig = {
            from: 'top',
            tpl: null,
            mask: true
        };
        this.defaultState = {
            mask: true,
            tpl: null
        };
    }
    // after rendering, measure the size and hide and show.
    show() {
        this.el.style.visibility = 'hidden';
        this.el.style.display = '';
        // after the targetEl is changed.
        setTimeout(() => {
            const drawerEl = this.drawerEr.nativeElement;
            const width = drawerEl.clientWidth;
            const height = drawerEl.clientHeight;
            let translateY = null;
            let translateX = null;
            let top = 'unset';
            let right = 'unset';
            let bottom = 'unset';
            let left = 'unset';
            switch (this._config.from) {
                case 'top':
                    translateY = `-${height}px`;
                    top = '0';
                    break;
                case 'bottom':
                    translateY = `${height}px`;
                    bottom = '0';
                    break;
                case 'left':
                    translateX = `-${width}px`;
                    left = '0';
                    break;
                case 'right':
                    translateX = `${width}px`;
                    right = '0';
                    break;
            }
            const style = drawerEl.style;
            style.transform = translateY === null ? `translateX(${translateX})` : `translateY(${translateY})`;
            style.opacity = '0';
            style.left = left;
            style.right = right;
            style.bottom = bottom;
            style.top = top;
            if (translateY) {
                style.width = '100%';
            }
            else {
                style.height = '100%';
            }
            this.el.style.visibility = '';
            // animation
            setTimeout(() => {
                drawerEl.classList.add('drawer-anim');
                style.transform = translateY === null ? `translateX(0)` : `translateY(0)`;
                style.opacity = '1';
                setTimeout(() => drawerEl.classList.remove('drawer-anim'), 300);
            }, 100);
        });
    }
    hide() {
        this.el.style.display = 'none';
        const action = {
            action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["ComponentAction"].HID,
            target: this
        };
        this.action.emit(action);
    }
    onClickMask() {
        this.hide();
    }
}
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
DrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DrawerComponent, selectors: [["mc-drawer"]], viewQuery: function DrawerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drawerEr = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "config", "click"], [1, "drawer"], ["drawerEr", ""], [4, "ngTemplateOutlet"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-mask", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DrawerComponent_Template_mc_mask_click_0_listener() { return ctx.onClickMask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DrawerComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, !(ctx.state == null ? null : ctx.state.mask)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.state == null ? null : ctx.state.tpl);
    } }, directives: [_mask_mask_component__WEBPACK_IMPORTED_MODULE_3__["MaskComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 99;\n}\n[_nghost-%COMP%]   .drawer[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  opacity: 0;\n  background-color: white;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n[_nghost-%COMP%]   .drawer-anim[_ngcontent-%COMP%] {\n  transition: transform 0.3s, opacity ease-in-out 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQUk7RUFDRSxvREFBQTtBQ0VOIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5O1xuXG4gIC5kcmF3ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICAgICYtYW5pbSB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSBlYXNlLWluLW91dCAwLjNzO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5O1xufVxuOmhvc3QgLmRyYXdlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cbjpob3N0IC5kcmF3ZXItYW5pbSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IGVhc2UtaW4tb3V0IDAuM3M7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-drawer',
                styleUrls: ['drawer.component.scss'],
                templateUrl: 'drawer.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { drawerEr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['drawerEr']
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/form/fields/text/text.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/form/fields/text/text.component.ts ***!
  \******************************************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");






const _c0 = ["inputEr"];
class TextComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultConfig = {
            type: _shared_models__WEBPACK_IMPORTED_MODULE_4__["InputType"].text,
            name: 'text',
            value: '',
            placeholder: ''
        };
        this.defaultState = {
            type: _shared_models__WEBPACK_IMPORTED_MODULE_4__["InputType"].text,
            name: '',
            value: '',
            placeholder: ''
        };
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    applyConfig(config) {
        if (!config.placeholder) {
            config.placeholder = config.name;
        }
    }
    afterRenderCmp() {
        const el = this.inputEr.nativeElement;
        this.subscriptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(el, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300))
            .subscribe((e) => this.onKeyUp(e));
        if (this._config.value) {
            this.action.emit({
                target: this,
                action: _shared_models__WEBPACK_IMPORTED_MODULE_4__["InputAction"].CHANGE,
                name: this._config.name,
                el: this.inputEr.nativeElement,
                value: this._config.value,
                oldValue: ''
            });
        }
    }
    onKeyUp(e) {
        const inputEl = e.target;
        const value = inputEl.value;
        if (value !== this._config.value) {
            const oldValue = this._config.value;
            this._config.value = value;
            this.action.emit({
                target: this,
                action: _shared_models__WEBPACK_IMPORTED_MODULE_4__["InputAction"].CHANGE,
                name: this._config.name,
                el: inputEl,
                event: e,
                value,
                oldValue
            });
        }
        this.action.emit({
            target: this,
            action: _shared_models__WEBPACK_IMPORTED_MODULE_4__["InputAction"].KEY_UP,
            name: this._config.name,
            el: inputEl,
            event: e,
            value
        });
    }
}
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
TextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TextComponent, selectors: [["mc-text"]], viewQuery: function TextComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputEr = _t.first);
    } }, outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 4, consts: [[3, "type", "name", "value", "placeholder"], ["inputEr", ""]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.state == null ? null : ctx.state.type)("name", ctx.state == null ? null : ctx.state.name)("value", ctx.state == null ? null : ctx.state.value)("placeholder", ctx.state == null ? null : ctx.state.placeholder);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9mb3JtL2ZpZWxkcy90ZXh0L3RleHQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9maWVsZHMvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9mb3JtL2ZpZWxkcy90ZXh0L3RleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-text',
                styleUrls: ['text.component.scss'],
                templateUrl: './text.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { inputEr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inputEr']
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/grid/grid-body.component.ts":
/*!***********************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/grid/grid-body.component.ts ***!
  \***********************************************************************/
/*! exports provided: GridBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function() { return GridBodyComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom-utils */ "./projects/mc-ui/src/lib/utils/dom-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/icon.component */ "./projects/mc-ui/src/lib/components/icon/icon.component.ts");








function GridBodyComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function GridBodyComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GridBodyComponent_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r14 = ctx.$implicit;
    const c_r15 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const r_r10 = ctx_r17.index;
    const row_r9 = ctx_r17.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r11.getGridCellClassName(r_r10, c_r15, column_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", column_r14.width, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r11.getTitle(column_r14.field, row_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-field", column_r14.field)("data-id", row_r9[ctx_r11.state.idField])("data-row_index", r_r10 + ctx_r11.state.startRowIndex)("data-cell_index", c_r15)("data-action", column_r14.selectable === false ? "" : ctx_r11.GridAction.SELECT_CELL);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.state.tpls[column_r14.field])("ngTemplateOutletContext", ctx_r11.getTplContext(row_r9, column_r14, r_r10, c_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r11.state.tpls[column_r14.field] ? "" : row_r9[column_r14.field] || "\u00A0", " ");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0, a1) { return { icon: a0, themes: a1 }; };
function GridBodyComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mc-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("flip", ctx_r12.isSelectedRow(row_r9[ctx_r12.state.idField]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c1, ctx_r12.Icon.chevron, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r12.Theme.gridBodyAccordion)));
} }
function GridBodyComponent_div_0_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
function GridBodyComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GridBodyComponent_div_0_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r13.isSelectedRow(row_r9[ctx_r13.state.idField]) ? ctx_r13.getAccordionContentHeight(row_r9) : 0, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r13.getAccordionContentHeight(row_r9), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.state.accordionContentTpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, row_r9));
} }
function GridBodyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GridBodyComponent_div_0_div_2_Template, 3, 13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, GridBodyComponent_div_0_div_3_Template, 2, 8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, GridBodyComponent_div_0_div_4_Template, 3, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const r_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r8.getGridRowClassName(r_r10, row_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r8.state.rowHeight - ctx_r8.rowBordersWidth, "px")("line-height", ctx_r8.state.rowHeight - ctx_r8.rowBordersWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-id", row_r9[ctx_r8.state.idField])("data-action", ctx_r8.GridAction.SELECT_ROW)("data-row_data_index", r_r10)("data-row_index", r_r10 + ctx_r8.state.startRowIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.state.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.state.hasAccordionRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.state.hasAccordionRow);
} }
class GridBodyComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er, cd) {
        super(er);
        this.er = er;
        this.cd = cd;
        this.selectedRowsOfGridBody = [];
        this.Theme = _shared_models__WEBPACK_IMPORTED_MODULE_0__["ComponentTheme"];
        this.Icon = _shared_models__WEBPACK_IMPORTED_MODULE_0__["Icon"];
        this.rowBordersWidth = 2;
        this.GridAction = _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"];
        this.defaultState = {
            data: [],
            rowHeight: 30,
            columns: [],
            idField: 'id',
            startRowIndex: 0,
            tpls: {},
            hasAccordionRow: false,
            selectedCell: null,
            accordionContentTpl: null,
            selectedRowsMap: new Map()
        };
        this.defaultConfig = {
            rowHeight: 30,
            idField: 'id',
            tpls: {},
            selectCellByMouseOver: false,
            data: [],
            columns: [],
            startRowIndex: 0,
            selectableCell: false,
            selectedCell: null,
            // accordion
            hasAccordionRow: false,
            accordionContentTpl: null,
            accordionContentHeight: 300,
            selectedRows: null,
            multiSelectRow: false,
            pageIndex: null
        };
    }
    set selectedCell(selectedCell) {
        this.setState({ selectedCell });
    }
    set selectedRows(selectedRows) {
        this.selectedRowsOfGridBody = [];
        const selectedRowsMap = selectedRows.reduce((map, row) => map.set(this.getStringRowID(row), row), new Map());
        this.setState({ selectedRowsMap });
    }
    onPress(e) {
        // TODO: when there is no theme, this is not working. it may need to be added a unique theme id.
        // When a grid contains a grid as a accordion content, it has same ".cell", we need to check this cell is in this grid or not.
        const theme = this._config.themes.length ? this._config.themes[0] : '';
        if (this._config.selectableCell) {
            const cellClass = theme ? '.' + theme + '-cell' : '.cell';
            const cellEl = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_3__["findParentDom"])(e.target, cellClass);
            if (cellEl) {
                this.onSelectCell(e, cellEl);
            }
        }
        const rowClass = theme ? '.' + theme + '-row' : '.row';
        const rowEl = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_3__["findParentDom"])(e.target, rowClass);
        if (rowEl) {
            this.onSelectRow(e, rowEl.children[0]); // .cells
        }
    }
    afterInitCmp() {
        this.bindEvents();
    }
    bindEvents() {
        // separate mouseover event for the performance of change detection
        if (this._config.selectCellByMouseOver) {
            this.el.addEventListener('mouseover', this.onMouseover.bind(this));
        }
    }
    applyState(config) {
        this.selectedRows = config.selectedRows;
        // TODO: state is not updated....
        this.cd.detectChanges();
    }
    getAccordionContentHeight(row) {
        const meta = row && row.__meta__ ? row.__meta__ : {};
        return meta.accordionContentHeight || this._config.accordionContentHeight;
    }
    getStringRowID(row) {
        return '' + row[this._config.idField];
    }
    getGridRowClassName(rowIndex, row) {
        const config = this._config;
        const startRowIndex = config.startRowIndex;
        const rowMeta = row.__meta__;
        const cls = ['row'];
        if (rowIndex + startRowIndex === 0) {
            cls.push('is-first-row');
        }
        cls.push((rowIndex + startRowIndex) % 2 ? 'row-odd' : 'row-even');
        if (rowMeta && rowMeta.class) {
            cls.push(rowMeta.class);
        }
        if (this.isSelectedRow(this.getStringRowID(row))) {
            this.selectedRowsOfGridBody.push(row);
            cls.push('selected');
        }
        if (config.themes && config.themes.length) {
            cls.push(...config.themes.map(t => t + '-row'));
        }
        return cls.join(' ');
    }
    getGridCellClassName(rowIndex, colIndex, column) {
        const cls = ['cell'];
        const config = this._config;
        const selectedCell = config.selectedCell;
        const startRowIndex = config.startRowIndex;
        if (column.align) {
            cls.push('align-' + column.align.toLowerCase());
        }
        if (!column.noOverflowMask) {
            cls.push('overflow-mask');
        }
        if (column.selectable === false) {
            cls.push('unselectable');
        }
        if (column.selectable &&
            selectedCell &&
            selectedCell.row === rowIndex + startRowIndex &&
            selectedCell.col === colIndex) {
            cls.push('selected');
        }
        if (column.class) {
            cls.push(column.class);
        }
        if (config.themes && config.themes.length) {
            cls.push(...config.themes.map(t => t + '-cell'));
        }
        return cls.join(' ');
    }
    getTplContext(row, column, rowIndex, colIndex) {
        const config = this._config;
        const fieldMeta = row.__meta__ && row.__meta__.fieldMeta ? row.__meta__.fieldMeta[column.field] : null;
        return {
            $implicit: row,
            column: column,
            rowIndex: rowIndex + config.startRowIndex,
            cellData: row[column.field],
            cellMetaData: fieldMeta,
            colIndex,
            rowCount: config.data.length,
            colCount: config.columns.length
        };
    }
    getTitle(field, row) {
        const fieldMeta = row.__meta__ && row.__meta__.fieldMeta ? row.__meta__.fieldMeta[field] : {};
        const title = fieldMeta.title || row[field];
        return typeof title === 'string' ? title : '';
    }
    isSelectedRow(id) {
        return this.state.selectedRowsMap && this.state.selectedRowsMap.has('' + id);
    }
    getSelectedRowsOfGridBody() {
        return this.selectedRowsOfGridBody;
    }
    onSelectRow(event, el) {
        const dataset = el.dataset;
        switch (dataset.action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SELECT_ROW:
                const selectedRowsMap = this.state.selectedRowsMap;
                const id = dataset.id;
                const rowIndex = +dataset.row_index;
                const rowDataIndex = +dataset.row_data_index;
                const rowData = this.state.data[rowDataIndex];
                let action = _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SELECT_ROW;
                let accordionContentEl;
                if (this.state.hasAccordionRow) {
                    accordionContentEl = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_3__["findParentDom"])(el, '.row').querySelector('.row--content--container');
                }
                if (selectedRowsMap.has(id)) {
                    action = _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].UNSELECT_ROW;
                }
                this.action.emit({
                    target: this,
                    event,
                    rowEl: el,
                    action,
                    id,
                    rowIndex,
                    rowData,
                    accordionContentEl,
                    pageIndex: this._config.pageIndex
                });
                break;
        }
    }
    onSelectCell(event, el, action = null) {
        const dataset = el.dataset;
        action = action || dataset.action;
        const config = this._config;
        switch (dataset.action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SELECT_CELL:
                const rowIndex = +dataset.row_index;
                const cellIndex = +dataset.cell_index;
                const field = dataset.field;
                const rowData = config.data[rowIndex - config.startRowIndex];
                const cellData = rowData ? rowData[field] : null;
                let selectedCell = null;
                if (action !== _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].MOUSEOVER_CELL) {
                    selectedCell = {
                        row: rowIndex,
                        col: cellIndex,
                        data: cellData
                    };
                }
                const actionEvent = {
                    event,
                    cellEl: el,
                    action,
                    target: this,
                    id: dataset.id,
                    rowIndex,
                    cellIndex,
                    field,
                    rowData,
                    cellData,
                    selectedCell,
                    pageIndex: this._config.pageIndex
                };
                this.action.emit(actionEvent);
                break;
        }
    }
    onMouseover(e) {
        const el = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_3__["findParentDom"])(e.target, '.cell');
        if (el) {
            this.onSelectCell(e, el, _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].MOUSEOVER_CELL);
        }
    }
}
GridBodyComponent.ɵfac = function GridBodyComponent_Factory(t) { return new (t || GridBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
GridBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GridBodyComponent, selectors: [["mc-grid-body"]], hostBindings: function GridBodyComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GridBodyComponent_click_HostBindingHandler($event) { return ctx.onPress($event); });
    } }, inputs: { selectedCell: "selectedCell", selectedRows: "selectedRows" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "cells"], [3, "class", "width", "title", 4, "ngFor", "ngForOf"], ["class", "cell-accordion", 4, "ngIf"], ["class", "row--content", 3, "height", 4, "ngIf"], [3, "title"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cell-accordion"], [3, "config"], [1, "row--content"], [1, "row--content--container"]], template: function GridBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GridBodyComponent_div_0_Template, 5, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.state == null ? null : ctx.state.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell.overflow-mask[_ngcontent-%COMP%] {\n  -webkit-mask-image: linear-gradient(to right, #fff 75%, transparent 100%);\n          mask-image: linear-gradient(to right, #fff 75%, transparent 100%);\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell.unselectable[_ngcontent-%COMP%] {\n  cursor: default;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell.unselectable[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell.align-right.overflow-mask[_ngcontent-%COMP%] {\n  -webkit-mask-image: linear-gradient(to left, #fff 75%, transparent 100%);\n          mask-image: linear-gradient(to left, #fff 75%, transparent 100%);\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell-accordion[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 0;\n}\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .cells[_ngcontent-%COMP%]   .cell-accordion[_ngcontent-%COMP%]   mc-icon[_ngcontent-%COMP%] {\n  height: 10px;\n}\n[_nghost-%COMP%]   .row--content[_ngcontent-%COMP%] {\n  height: 0px;\n  transition: transform 0.3s, height ease-in-out 0.3s;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .row--content--container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.is-scroll-page.is-last-page[_nghost-%COMP%]   .row[_ngcontent-%COMP%]:last-child {\n  border-bottom-color: transparent;\n}\n.is-loading[_nghost-%COMP%] {\n  opacity: 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2dyaWQtYm9keS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2dyaWQtYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtBQ0NKO0FETUk7RUFDRSxtQkFBQTtBQ0pOO0FES007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURLUTtFQUNFLHlFQUFBO1VBQUEsaUVBQUE7QUNIVjtBRFVRO0VBQ0UsZUFBQTtBQ1JWO0FEVVU7RUFDRSxnQkFBQTtBQ1JaO0FEWVE7RUFDRSxpQkFBQTtBQ1ZWO0FEWVU7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0FDVlo7QURrQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FDaEJSO0FEaUJRO0VBQ0UsWUFBQTtBQ2ZWO0FEbUJJO0VBQ0UsV0FBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURrQk07RUFDRSxjQUFBO0FDaEJSO0FEd0JRO0VBQ0UsZ0NBQUE7QUN0QlY7QUQ0QkU7RUFDRSxZQUFBO0FDMUJKIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2dyaWQtYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5yb3cge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLW9kZCB7fVxuXG4gICAgJi1ldmVuIHtcbiAgICAgIC8vIGFzc2lnbiBhIGNvbG9yIGluIHRoZSBjb21wb25lbnQudGhlbWVzLnNjc3MgZmlsZS5cbiAgICB9XG4gICAgLmNlbGxzIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAuY2VsbCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICYub3ZlcmZsb3ctbWFzayB7XG4gICAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDc1JSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAvLyB5b3UgY2FuIGFzc2lnbiBzcGVjaWZpYyBjc3MgdG8gY29tcG9uZW50LnRoZW1lcy5zY3NzLiBsaWtlIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYudW5zZWxlY3RhYmxlIHtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5hbGlnbi1yaWdodCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAmLm92ZXJmbG93LW1hc2sge1xuICAgICAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmYgNzUlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAvLyBuZWVkIHRvIGJlIGRlZmluZWQgYnkgY29tcG9uZW50LnRoZW1lcy5zY3NzIGxpa2UgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2VsbC1hY2NvcmRpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA2cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbWMtaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYtLWNvbnRlbnQge1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgaGVpZ2h0IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgJi0tY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5pcy1zY3JvbGwtcGFnZSB7XG4gICAgJi5pcy1sYXN0LXBhZ2Uge1xuICAgICAgLnJvdyB7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmlzLWxvYWRpbmcge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAucm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG46aG9zdCAucm93IC5jZWxscyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdCAucm93IC5jZWxscyAuY2VsbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuOmhvc3QgLnJvdyAuY2VsbHMgLmNlbGwub3ZlcmZsb3ctbWFzayB7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiA3NSUsIHRyYW5zcGFyZW50IDEwMCUpO1xufVxuOmhvc3QgLnJvdyAuY2VsbHMgLmNlbGwudW5zZWxlY3RhYmxlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3QgLnJvdyAuY2VsbHMgLmNlbGwudW5zZWxlY3RhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbjpob3N0IC5yb3cgLmNlbGxzIC5jZWxsLmFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAucm93IC5jZWxscyAuY2VsbC5hbGlnbi1yaWdodC5vdmVyZmxvdy1tYXNrIHtcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmYgNzUlLCB0cmFuc3BhcmVudCAxMDAlKTtcbn1cbjpob3N0IC5yb3cgLmNlbGxzIC5jZWxsLWFjY29yZGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDZweDtcbiAgdG9wOiAwO1xufVxuOmhvc3QgLnJvdyAuY2VsbHMgLmNlbGwtYWNjb3JkaW9uIG1jLWljb24ge1xuICBoZWlnaHQ6IDEwcHg7XG59XG46aG9zdCAucm93LS1jb250ZW50IHtcbiAgaGVpZ2h0OiAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBoZWlnaHQgZWFzZS1pbi1vdXQgMC4zcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5yb3ctLWNvbnRlbnQtLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOmhvc3QuaXMtc2Nyb2xsLXBhZ2UuaXMtbGFzdC1wYWdlIC5yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QuaXMtbG9hZGluZyB7XG4gIG9wYWNpdHk6IDAuMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GridBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mc-grid-body',
                styleUrls: ['grid-body.component.scss'],
                templateUrl: './grid-body.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { selectedCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/grid/grid-header.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/grid/grid-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: GridHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function() { return GridHeaderComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom-utils */ "./projects/mc-ui/src/lib/utils/dom-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/icon.component */ "./projects/mc-ui/src/lib/components/icon/icon.component.ts");








function GridHeaderComponent_tr_1_th_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0, a1) { return { icon: a0, themes: a1 }; };
function GridHeaderComponent_tr_1_th_1_mc_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mc-icon", 9);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("flip", ctx_r32.state.sortItem.direction === ctx_r32.SortDirection.ASC);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c1, ctx_r32.Icon.chevron, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r32.Theme.gridHeaderSort)));
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
function GridHeaderComponent_tr_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, GridHeaderComponent_tr_1_th_1_ng_container_4_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, GridHeaderComponent_tr_1_th_1_mc_icon_6_Template, 1, 8, "mc-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r29.getGridCellClassName(cell_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r29.state.selectedColumnsMap.has(cell_r30.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", cell_r30.colspan || 1)("rowSpan", cell_r30.rowspan || 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-field", cell_r30.field)("data-action", ctx_r29.GridAction.SELECT_CELL);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r29.getGridCellContentClassName(cell_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", cell_r30.width, "px")("height", ctx_r29.state.rowHeight * (cell_r30.rowspan || 1), "px")("line-height", ctx_r29.state.rowHeight * (cell_r30.rowspan || 1) - 2, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", cell_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r29.state.tpls[cell_r30.name])("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c2, cell_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r29.state.tpls[cell_r30.name] ? "" : cell_r30.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.state.sortItem.fieldName === cell_r30.field);
} }
function GridHeaderComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GridHeaderComponent_tr_1_th_1_Template, 7, 23, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cells_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r27.getGridRowClassName(cells_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r27.state == null ? null : ctx_r27.state.rowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", cells_r28);
} }
class GridHeaderComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.nextSortDirection = {
            ASC: _shared_models__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].DESC,
            DESC: _shared_models__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC
        };
        this.Theme = _shared_models__WEBPACK_IMPORTED_MODULE_0__["ComponentTheme"];
        this.Icon = _shared_models__WEBPACK_IMPORTED_MODULE_0__["Icon"];
        this.GridAction = _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"];
        this.SortDirection = _shared_models__WEBPACK_IMPORTED_MODULE_0__["SortDirection"];
        this.fieldColumnMap = new Map();
        this.defaultConfig = {
            rowHeight: 30,
            tpls: {},
            data: null,
            atLeastOneSelectedColumnRequired: false,
            selectedColumns: [],
            sortItem: {
                fieldName: '',
                direction: _shared_models__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC
            }
        };
        this.defaultState = {
            data: [],
            rowHeight: 30,
            tpls: {},
            sortItem: {
                fieldName: '',
                direction: _shared_models__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC
            },
            selectedColumnsMap: new Map()
        };
    }
    onPress(e) {
        const el = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_3__["findParentDom"])(e.target, '.grid-header--row--cell');
        if (el) {
            const dataset = el.dataset;
            switch (dataset.action) {
                case _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SELECT_CELL:
                    const column = this.fieldColumnMap.get(dataset.field);
                    if (el.classList.contains('is-sortable')) {
                        this.onSort(el, column, e);
                    }
                    if (!el.classList.contains('unselectable')) {
                        this.onSelect(column, el, e);
                    }
                    break;
            }
        }
    }
    set columns(columns) {
        if (columns) {
            this._columns = columns;
            columns.forEach(column => this.fieldColumnMap.set(column.field, column));
            if (!this._config.data) {
                this.setState({ data: this.getBasicHeaderData() });
            }
            else {
                this.setState({ data: this.getHeaderData(this._config.data) });
            }
        }
    }
    get columns() {
        return this._columns;
    }
    applyState(config) {
        if (config.selectedColumns) {
            const selectedColumnsMap = new Map();
            config.selectedColumns.forEach(d => selectedColumnsMap.set(d.field, d));
            this.setState({ selectedColumnsMap });
        }
        this.showHeader();
    }
    showHeader() {
        // for hiding the header before calculating the columns' width.
        setTimeout(() => (this.el.style.visibility = 'visible'));
    }
    getSelectedColumns() {
        const columns = [];
        this.state.selectedColumnsMap.forEach(value => columns.push(value));
        return columns;
    }
    selectColumn(id, item) {
        this.state.selectedColumnsMap.set(id, item);
    }
    unselectColumn(id) {
        if (this._config.atLeastOneSelectedColumnRequired && this.state.selectedColumnsMap.size === 1) {
            return false;
        }
        this.state.selectedColumnsMap.delete(id);
        return true;
    }
    getBasicHeaderData() {
        const lastColIndex = this.columns.length - 1;
        return [
            this.columns.map((column, i) => {
                if (column.sortDirection) {
                    this.state.sortItem = {
                        direction: column.sortDirection,
                        fieldName: column.field
                    };
                }
                return Object.assign({
                    name: column.name || column.field,
                    isLastRow: true,
                    isFirstRow: true,
                    isFirstCol: i === 0,
                    isLastCol: i === lastColIndex
                }, column);
            })
        ];
    }
    getHeaderData(data) {
        const headerData = data.concat();
        const columns = this.columns;
        const lastColIndex = columns.length - 1;
        const rows = [];
        // calc col width
        const lastIndex = headerData.length - 1;
        headerData.forEach((row, r) => {
            rows[r] = rows[r] || [];
            let c = 0;
            row.forEach(cell => {
                while (rows[r][c] === -1) {
                    c++;
                }
                const column = columns[c];
                cell = Object.assign(cell, column);
                const colspan = cell.colspan || 1;
                const rowspan = cell.rowspan || 1;
                if (r === lastIndex || r + rowspan - 1 === lastIndex) {
                    cell.isLastRow = true;
                }
                let width = 0;
                for (let i = 0; i < colspan; i++) {
                    width += columns[c + i].width;
                }
                cell.width = width;
                // flag the empty cells
                for (let i = 1; i < rowspan; i++) {
                    for (let j = 0; j < colspan; j++) {
                        rows[r + i] = rows[r + i] || [];
                        rows[r + i][c + j] = -1;
                    }
                }
                cell.sort = null;
                cell.field = null;
                if (cell.isLastRow) {
                    cell.sort = column.sort;
                    cell.field = column.field;
                    // if it has the existing sort field, keeps it
                    if (column.sortDirection) {
                        this.setState({
                            sortItem: {
                                direction: column.sortDirection,
                                fieldName: column.field
                            }
                        });
                    }
                }
                cell.isFirstRow = r === 0;
                cell.isFirstCol = c === 0;
                cell.isLastCol = c === lastColIndex;
                c += colspan;
            });
        });
        return headerData;
    }
    getGridRowClassName(row) {
        const cls = ['grid-header--row'];
        return cls.join(' ');
    }
    getGridCellClassName(cell) {
        const cls = ['grid-header--row--cell'];
        if (cell.isFirstRow) {
            cls.push('is-first-row');
        }
        if (cell.isLastRow) {
            cls.push('is-last-row');
        }
        if (cell.isFirstCol) {
            cls.push('is-first-col');
        }
        if (cell.isLastCol) {
            cls.push('is-last-col');
        }
        if (cell.sort) {
            cls.push('is-sortable');
        }
        if (cell.selectableHeader !== true) {
            cls.push('unselectable');
        }
        if (cell.align) {
            cls.push('align-' + cell.align.toLowerCase());
        }
        if (cell.class) {
            cls.push(cell.class);
        }
        return cls.join(' ');
    }
    getGridCellContentClassName(cell) {
        const cls = ['grid-header--row--cell--content'];
        if (cell.class) {
            const classes = cell.class.split(' ');
            classes.forEach(c => {
                if (c) {
                    cls.push(c + '--content');
                }
            });
        }
        return cls.join(' ');
    }
    onSort(el, column, event = null) {
        let dir = _shared_models__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC;
        if (this.state.sortItem.fieldName === column.field) {
            dir = this.nextSortDirection[this.state.sortItem.direction];
        }
        const sortItem = {
            fieldName: column.field,
            direction: dir
        };
        this.setState({ sortItem });
        const actionEvent = {
            event,
            el,
            action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SORT,
            column,
            target: this,
            sort: this.state.sortItem
        };
        this.action.emit(actionEvent);
    }
    onSelect(column, el, event) {
        const field = column.field;
        if (this.state.selectedColumnsMap.has(field)) {
            if (this.unselectColumn(field)) {
                const actionEvent = {
                    event,
                    el,
                    action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SELECT_COLUMN,
                    column,
                    selectedColumns: this.getSelectedColumns(),
                    target: this
                };
                this.action.emit(actionEvent);
            }
        }
        else {
            this.selectColumn(field, column);
            const actionEvent = {
                event,
                el,
                action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SELECT_COLUMN,
                column,
                selectedColumns: this.getSelectedColumns(),
                target: this
            };
            this.action.emit(actionEvent);
        }
    }
}
GridHeaderComponent.ɵfac = function GridHeaderComponent_Factory(t) { return new (t || GridHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
GridHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GridHeaderComponent, selectors: [["mc-grid-header"]], hostBindings: function GridHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GridHeaderComponent_click_HostBindingHandler($event) { return ctx.onPress($event); });
    } }, inputs: { columns: "columns" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "grid-header"], [3, "class", "height", 4, "ngFor", "ngForOf"], [3, "class", "selected", "colSpan", "rowSpan", 4, "ngFor", "ngForOf"], [3, "colSpan", "rowSpan"], [3, "title"], [1, "content-outer"], [1, "content-inner"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "config", "flip", 4, "ngIf"], [3, "config"]], template: function GridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GridHeaderComponent_tr_1_Template, 2, 5, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.state == null ? null : ctx.state.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: auto;\n  overflow-x: visible;\n  border: 0;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .grid-header[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n[_nghost-%COMP%]   .grid-header--row[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .grid-header--row--cell[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .grid-header--row--cell--content[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .grid-header--row--cell--content[_ngcontent-%COMP%]   .content-outer[_ngcontent-%COMP%] {\n  height: 100%;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n}\n[_nghost-%COMP%]   .grid-header--row--cell--content[_ngcontent-%COMP%]   .content-outer[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .grid-header--row--cell--content[_ngcontent-%COMP%]   .content-outer[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]   mc-icon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 9px;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .grid-header[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .grid-header[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2dyaWQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL2dyaWQvZ3JpZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRE1FO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0pKO0FES0k7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0hOO0FESU07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0ZSO0FER1E7RUFFRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRlY7QURHVTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FDRFo7QURFWTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBZDtBRENjO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ2hCO0FEYU07RUFDRSxpQkFBQTtBQ1hSO0FEZU07RUFDRSxrQkFBQTtBQ2JSIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2dyaWQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGpvdXJuYWwtcm93LWE6IDAuMztcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICBib3JkZXI6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAvLyBjb2xzcGFuIGJvcmRlciBjb2xvciBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvaXNzdWVzLzkxNDlcbiAgLy8gY2hyb21lIGJ1ZywgeW91IHNob3VsZCBub3QgdXNlIHJnYmEuIHlvdSBjYW4ndCB1c2UgYSBib3JkZXIgY29sb3Igd2l0aCBhbHBoYSB2YWx1ZS5cbiAgLy8gY29udmVydCB0aGUgY29sb3IgZnJvbSByZ2JhKDAsMCwwLDAuMikgdG8gIzQ1NTg3MlxuICAvLyBkb24ndCB1c2UgdGhlIHRkL3RoIGJvcmRlciwgaXQgc2hvdWxkIGJlIDAgYWx3YXlzLiBJdCBoYXMgYSBidWcgd2l0aCB0aGF0LlxuICAuZ3JpZC1oZWFkZXIge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgJi0tcm93IHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAmLS1jZWxsIHtcbiAgICAgICAgYm9yZGVyOiAwOyAvLyBkb24ndCB1c2UgdHIvdGgvdGQgYm9yZGVyIG9yIHNpemUsIHRoZXkgaGF2ZSBhIHNpemUgYnVnLiBhbGwgc2l6aW5nIHNob3VsZCBiZSBtYWRlIGJ5IGRpdi5cbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgJi0tY29udGVudCB7XG4gICAgICAgICAgLy8gY29udGVudCBzaXppbmcuXG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC5jb250ZW50LW91dGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC5jb250ZW50LWlubmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBtYy1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5pcy1maXJzdC1yb3cge1xuICAgICAgICAgIC5ncmlkLWhlYWRlci0tcm93LS1jZWxsLS1jb250ZW50IHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5pcy1zb3J0YWJsZSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFsaWduLXJpZ2h0IHtcbiAgICAgIC5jb250ZW50LWlubmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5hbGlnbi1jZW50ZXIge1xuICAgICAgLmNvbnRlbnQtaW5uZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3cteDogdmlzaWJsZTtcbiAgYm9yZGVyOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG46aG9zdCAuZ3JpZC1oZWFkZXIge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbjpob3N0IC5ncmlkLWhlYWRlci0tcm93IHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmdyaWQtaGVhZGVyLS1yb3ctLWNlbGwge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCAuZ3JpZC1oZWFkZXItLXJvdy0tY2VsbC0tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmdyaWQtaGVhZGVyLS1yb3ctLWNlbGwtLWNvbnRlbnQgLmNvbnRlbnQtb3V0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLmdyaWQtaGVhZGVyLS1yb3ctLWNlbGwtLWNvbnRlbnQgLmNvbnRlbnQtb3V0ZXIgLmNvbnRlbnQtaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuZ3JpZC1oZWFkZXItLXJvdy0tY2VsbC0tY29udGVudCAuY29udGVudC1vdXRlciAuY29udGVudC1pbm5lciBtYy1pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogOXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG46aG9zdCAuZ3JpZC1oZWFkZXIgLmFsaWduLXJpZ2h0IC5jb250ZW50LWlubmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAuZ3JpZC1oZWFkZXIgLmFsaWduLWNlbnRlciAuY29udGVudC1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GridHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mc-grid-header',
                styleUrls: ['grid-header.component.scss'],
                templateUrl: './grid-header.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { onPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['click', ['$event']]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/grid/grid.component.ts":
/*!******************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/grid/grid.component.ts ***!
  \******************************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _grid_body_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-body.component */ "./projects/mc-ui/src/lib/components/grid/grid-body.component.ts");
/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../scroll/scroll.component */ "./projects/mc-ui/src/lib/components/scroll/scroll.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./projects/mc-ui/src/lib/utils/utils.ts");
/* harmony import */ var _utils_grid_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/grid-utils */ "./projects/mc-ui/src/lib/utils/grid-utils.ts");
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/dom-utils */ "./projects/mc-ui/src/lib/utils/dom-utils.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared.service */ "./projects/mc-ui/src/lib/shared.service.ts");
/* harmony import */ var _grid_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid-header.component */ "./projects/mc-ui/src/lib/components/grid/grid-header.component.ts");














/**
 * Only one accordion content can be opened.
 * When scrolling and the page is removed, the opened accordion will be closed.
 * The before remove page event will be fired for giving a chance to clean up the accordion contents.
 * The parent component should remove the dynamic component for the accordion content before removing the container page.
 */
const ACCORDION_ARROW_COLUMN = {
    field: '__arrow__',
    name: '',
    width: 50,
    fixedWidth: true,
    align: _shared_models__WEBPACK_IMPORTED_MODULE_3__["Align"].CENTER,
    noOverflowMask: true
};
class GridComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(er, service) {
        super(er);
        this.er = er;
        this.service = service;
        this.defaultColumnWidth = 100;
        this.sortItem = {
            fieldName: '',
            direction: _shared_models__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].ASC
        };
        this.renderedBodyComponentMetaMap = new Map();
        this.emptyPageIndexes = [];
        this.idRowIndexMap = new Map();
        this.renderedPagesMap = new Set();
        this.selectedRowsMap = new Map();
        this.defaultState = {
            scrollConfig: null,
            headerConfig: null,
            bodyHeight: 0,
            bodyWidth: '100%'
        };
        this.defaultConfig = {
            columns: [],
            columnTpls: {},
            startRowIndex: 0,
            selectableCell: false,
            selectedCell: null,
            columnWidthIsRatio: true,
            selectCellByMouseOver: false,
            emptyText: 'No Data',
            idField: 'id',
            rowHeight: 30,
            displayLoader: true,
            data: null,
            // header
            headerRowHeight: 0,
            headerTpls: {},
            headerData: null,
            atLeastOneSelectedColumnRequired: false,
            selectedColumns: [],
            // scroll
            loadingText: null,
            minPageRowCount: 20,
            // body accordion
            hasAccordionRow: false,
            accordionContentTpl: null,
            accordionContentHeight: 300,
            selectedRows: [],
            multiSelectRow: false,
            adjustHeight: true
        };
        this.subscriptions = service.windowResize.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(() => this.onResizeWindow());
    }
    set data(data) {
        if (!data) {
            return;
        }
        const newData = data;
        const action = newData.action
            ? newData.action
            : newData.startRowIndex
                ? _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].APPEND
                : _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].INIT;
        const oldData = this._data || {};
        let rowCount;
        let rows;
        // Update Data
        switch (action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].INIT:
                this.renderedPagesMap = new Set();
                rows = newData.rows;
                rows.forEach((row, rowIndex) => this.idRowIndexMap.set(this.getStringRowID(row), rowIndex));
                rowCount = newData.rowCount ? newData.rowCount : rows ? rows.length : null;
                this.selectedRows = [];
                if (this.rendered) {
                    this.removeGridBodyAll();
                    this.updateBodySize(rowCount);
                }
                // rerender scroll component
                this.scrollCmp.rowCount = rowCount;
                break;
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].RELOAD:
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].APPEND:
                rowCount = newData.rowCount ? newData.rowCount : oldData.rowCount;
                rows = oldData.rows.concat();
                const startRowIndex = newData.startRowIndex;
                newData.rows.forEach((d, i) => {
                    rows[startRowIndex + i] = d;
                    this.idRowIndexMap.set(this.getStringRowID(d), startRowIndex + i);
                });
                break;
        }
        this.scrollCmp.isLoading = false;
        this._data = {
            rows,
            rowCount
        };
        // Render Pages. This can be different from the added data since the added data can be async.
        switch (action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].INIT:
                break;
            // neededData is async so it needs to be reloaded all pages.
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].APPEND:
                this.renderPages(this.emptyPageIndexes);
                break;
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollDataAction"].RELOAD:
                this.rerenderPages();
                break;
        }
    }
    get data() {
        return this._data;
    }
    set selectedRows(selectedRows) {
        if (selectedRows) {
            this.selectedRowsMap = selectedRows.reduce((map, row) => map.set(this.getStringRowID(row), row), new Map());
            this.applySelectedRows();
        }
    }
    applyConfig(config) {
        this.initColumns(config);
    }
    applyState(config) {
        this.selectedRows = this._config.selectedRows;
        this.setHeaderConfig(this._config);
        this.setScrollConfig(this._config);
        this.sortItem = this.getSortItem(config.columns);
        // this.data = config.data;
        this.initSize(this._config);
    }
    afterRenderCmp() {
        // after scroll component is rendered we can bind a data
        setTimeout(() => this.data = this._config.data);
    }
    initColumns(config) {
        const columns = config.columns;
        const len = columns.length;
        config.selectedColumns = columns.reduce((selectedColumns, column) => {
            if (column.selected) {
                selectedColumns.push(column);
            }
            return selectedColumns;
        }, []);
        if (config.hasAccordionRow && columns.length && columns[len - 1].field !== '__arrow__') {
            columns.push(ACCORDION_ARROW_COLUMN);
            config.columns = columns;
        }
    }
    applySelectedRows(removed = false) {
        // after rendering the grid body, the accordion can be opened.
        // the grid body can report it has a opened accordion.
        // then the scroll component can notice the body height change and it will update the page container height.
        // only the rendered page containers can have the extra height that from the body component.
        this.renderedBodyComponentMetaMap.forEach((bodyComponentMeta, pageIndex) => {
            const ref = bodyComponentMeta.gridBodyComponentRef;
            ref.instance.selectedRows = this.getSelectedRows();
            // after rendering grid body
            if (!removed) {
                setTimeout(() => this.addExtraHeight(pageIndex, ref));
            }
        });
    }
    addExtraHeight(pageIndex, bodyCmpRef) {
        if (this._config && this._config.hasAccordionRow) {
            // need to know the selected row's page index
            const selectedRows = bodyCmpRef.instance.getSelectedRowsOfGridBody();
            if (selectedRows.length) {
                const accordionHeight = this.getAccordionContentHeight(selectedRows[0]);
                const extraHeightPages = [];
                if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(this.openedAccordionPageIndex)) {
                    extraHeightPages.push({
                        pageIndex: this.openedAccordionPageIndex,
                        extraHeight: 0
                    });
                }
                extraHeightPages.push({
                    pageIndex,
                    extraHeight: accordionHeight
                });
                this.scrollCmp.updateExtraHeight(extraHeightPages);
                this.openedAccordionPageIndex = pageIndex;
            }
        }
    }
    applySelectedCell() {
        this.renderedBodyComponentMetaMap.forEach(bodyComponentMeta => (bodyComponentMeta.gridBodyComponentRef.instance.selectedCell = this._config.selectedCell));
    }
    setScrollConfig(config) {
        const scrollConfig = {
            themes: config.themes,
            loadingText: config.loadingText,
            emptyText: config.emptyText,
            rowHeight: config.rowHeight,
            displayLoader: config.displayLoader,
            minPageRowCount: config.minPageRowCount
        };
        this.setState({ scrollConfig });
    }
    setHeaderConfig(config) {
        const headerConfig = {
            themes: config.themes,
            rowHeight: config.headerRowHeight || config.rowHeight,
            tpls: config.headerTpls,
            data: config.headerData,
            atLeastOneSelectedColumnRequired: config.atLeastOneSelectedColumnRequired,
            selectedColumns: config.selectedColumns
        };
        this.setState({ headerConfig });
    }
    getStringRowID(row) {
        return '' + row[this._config.idField];
    }
    getSortItem(columns) {
        if (columns) {
            const sortCol = columns.find(col => !!col.sortDirection);
            if (sortCol) {
                return {
                    fieldName: sortCol.field,
                    direction: sortCol.sortDirection
                };
            }
        }
        return null;
    }
    updateColumnWidth(config) {
        if (this.lastContainerWidth !== this.resizedContainerWidth) {
            config.columns = Object(_utils_grid_utils__WEBPACK_IMPORTED_MODULE_7__["getAutoColumnWidth"])(config.columns, this.resizedContainerWidth, config.columnWidthIsRatio, this.defaultColumnWidth);
            this.lastContainerWidth = this.resizedContainerWidth;
            this.setState({ columns: config.columns });
        }
        else {
            if (!this.state.columns) {
                this.setState({ columns: config.columns });
            }
        }
    }
    initSize(config, resize = false) {
        this.resizedContainerWidth = Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_8__["getContainerWidth"])(this.el.parentElement);
        if (!this.state.columns || resize) {
            this.updateColumnWidth(config);
        }
        const rowCount = this.data ? this.data.rowCount : this._config.rowCount;
        this.updateBodySize(rowCount);
        if (resize) {
            // after rendering header and body
            this.rerenderPages();
        }
        else {
            if (rowCount) {
                this.scrollCmp.rowCount = rowCount;
            }
        }
    }
    updateBodySize(rowCount) {
        const config = this._config;
        const rowHeight = config.rowHeight;
        this.el.style.height = '100%';
        const headerEl = this.el.querySelector('mc-grid-header');
        const headerHeight = headerEl.clientHeight;
        let bodyHeight = this.el.clientHeight - headerHeight;
        if (config.adjustHeight && !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(rowCount)) {
            const dataHeight = !rowCount ? rowHeight : rowHeight * rowCount;
            if (bodyHeight > dataHeight) {
                bodyHeight = dataHeight;
                this.el.style.height = 'auto';
            }
        }
        this.setState({ bodyHeight });
    }
    resize() {
        this.initSize(this._config, true);
    }
    getBodyConfig(config, data, pageIndex) {
        return {
            themes: config.themes,
            rowHeight: config.rowHeight,
            tpls: config.columnTpls,
            idField: config.idField,
            selectCellByMouseOver: config.selectCellByMouseOver,
            columns: config.columns,
            startRowIndex: pageIndex * this.pageRowCount,
            selectableCell: config.selectableCell,
            selectedCell: config.selectedCell,
            hasAccordionRow: config.hasAccordionRow,
            accordionContentTpl: config.accordionContentTpl,
            accordionContentHeight: config.accordionContentHeight,
            selectedRows: this.getSelectedRows(),
            multiSelectRow: config.multiSelectRow,
            data,
            pageIndex
        };
    }
    renderGridBody(pageIndex, el, data) {
        this.renderedPagesMap.add(pageIndex);
        const gridBodyComponentRef = this.service.addComponent(_grid_body_component__WEBPACK_IMPORTED_MODULE_0__["GridBodyComponent"], el);
        const instance = gridBodyComponentRef.instance;
        instance.config = this.getBodyConfig(this._config, data, pageIndex);
        const subscription = instance.action.subscribe((e) => {
            this.onGridBodyAction(e);
        });
        this.renderedBodyComponentMetaMap.set(pageIndex, {
            subscription,
            gridBodyComponentRef
        });
        // after rendering grid
        setTimeout(() => this.addExtraHeight(pageIndex, gridBodyComponentRef));
        return gridBodyComponentRef;
    }
    removeGridBody(pageIndex) {
        // remove the extra height of the page container
        this.renderedPagesMap.delete(pageIndex);
        const meta = this.renderedBodyComponentMetaMap.get(pageIndex);
        if (meta) {
            this.emitAction({ action: _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].REMOVE_PAGE, pageIndex });
            meta.subscription.unsubscribe();
            this.service.removeComponent(meta.gridBodyComponentRef);
            this.renderedBodyComponentMetaMap.delete(pageIndex);
        }
    }
    removeGridBodyAll() {
        this.renderedBodyComponentMetaMap.forEach((bodyComponentMeta, pageIndex) => this.removeGridBody(pageIndex));
    }
    emitAction(config) {
        this.action.emit(Object.assign(this.getBasicGridActionEvent(), config));
    }
    getSelectedRows() {
        return [...this.selectedRowsMap.values()];
    }
    getBasicGridActionEvent() {
        return {
            target: this,
            selectedColumns: this._config.selectedColumns.concat(),
            sort: Object.assign({}, this.sortItem),
            selectedRows: this.getSelectedRows(),
            pageRowCount: this.pageRowCount * 2 // basically 2 pages need to be loaded at once
        };
    }
    getAccordionContentHeight(row) {
        const meta = row && row.__meta__ ? row.__meta__ : {};
        return meta.accordionContentHeight || this._config.accordionContentHeight;
    }
    scrollById(id) {
        id = '' + id;
        const rowIndex = this.idRowIndexMap.get(id);
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(rowIndex)) {
            this.scrollCmp.scrollByRowIndex(rowIndex);
        }
        else {
            console.warn('There is no row data, Please get the row data first.');
        }
        return rowIndex;
    }
    scrollByIdAndSelectRow(id) {
        const rowIndex = this.scrollById(id);
        const rowEl = this.el.querySelector(`[data-id="${id}"]`);
        if (rowEl) {
            rowEl.click();
            const accordionAnimationDuration = 400;
            // adjust scroll
            setTimeout(() => this.scrollCmp.scrollByRowIndex(rowIndex), accordionAnimationDuration);
            return true;
        }
        return false;
    }
    selectRow(rowData) {
        const config = this._config;
        if (!config.multiSelectRow || config.hasAccordionRow) {
            this.selectedRowsMap.clear();
        }
        this.selectedRowsMap.set(this.getStringRowID(rowData), rowData);
        this.applySelectedRows();
    }
    unselectRow(id, pageIndex) {
        this.selectedRowsMap.delete(id);
        if (this._config.hasAccordionRow) {
            this.scrollCmp.updateExtraHeight([{ pageIndex, extraHeight: 0 }]);
            this.openedAccordionPageIndex = null;
        }
        this.applySelectedRows(true);
    }
    renderPages(pageIndexes) {
        const pages = this.pages;
        const pageElements = this.pageElements;
        const emptyPageIndexes = [];
        let neededStartRowIndex = Infinity;
        let neededEndRowIndex = -Infinity;
        const rows = this.data.rows;
        pageIndexes.forEach(pageIndex => {
            const page = pages[pageIndex];
            if (rows[page.startRowIndex] && rows[page.endRowIndex]) {
                if (!this.renderedPagesMap.has(pageIndex)) {
                    this.renderGridBody(pageIndex, pageElements[pageIndex], rows.slice(page.startRowIndex, page.endRowIndex + 1));
                }
            }
            else {
                emptyPageIndexes.push(pageIndex);
                neededStartRowIndex = Math.min(neededStartRowIndex, page.startRowIndex);
                neededEndRowIndex = Math.max(neededEndRowIndex, page.endRowIndex);
            }
        });
        this.emptyPageIndexes = emptyPageIndexes;
        if (neededStartRowIndex !== Infinity) {
            this.scrollCmp.isLoading = true;
            this.emitAction({ action: _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].GET_DATA, neededStartRowIndex, neededEndRowIndex });
        }
    }
    rerenderPages() {
        this.removeGridBodyAll();
        this.renderPages(this.currentPageIndexes);
    }
    getRemovingPageIndexes(oldIndexes, newIndexes) {
        return oldIndexes.filter(i => !newIndexes.includes(i));
    }
    onResizeWindow() {
        this.resize();
    }
    onHeaderAction(e) {
        const action = e.action;
        switch (action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].SELECT_COLUMN:
                this._config.selectedColumns = e.selectedColumns;
                this.scrollCmp.isLoading = true;
                this.emitAction({ action });
                break;
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].SORT:
                this.sortItem = e.sort;
                this.scrollCmp.isLoading = true;
                this.emitAction({ action });
                break;
        }
    }
    onScrollAction(e) {
        const action = e.action;
        switch (action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollAction"].UPDATE_PAGES:
                this.pages = e.pages;
                this.pageElements = e.pageElements;
                this.pageRowCount = e.pageRowCount;
                const oldPageIndexes = this.currentPageIndexes;
                this.currentPageIndexes = e.currentPageIndexes;
                if (action === _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollAction"].UPDATE_PAGES) {
                    const removePageIndexes = this.getRemovingPageIndexes(oldPageIndexes || [], this.currentPageIndexes);
                    removePageIndexes.forEach(pageIndex => this.removeGridBody(pageIndex));
                    this.renderPages(this.currentPageIndexes);
                }
                else {
                    this.rerenderPages();
                }
                break;
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollAction"].GET_ROW_COUNT:
                this.scrollCmp.isLoading = true;
                this.pageRowCount = e.pageRowCount;
                this.emitAction({ action: _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].GET_DATA, neededStartRowIndex: 0 });
                break;
        }
    }
    onGridBodyAction(e) {
        const config = this._config;
        switch (e.action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].SELECT_ROW:
                this.selectRow(e.rowData);
                this.emitAction(e);
                break;
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].UNSELECT_ROW:
                this.unselectRow(e.id, e.pageIndex);
                this.emitAction(e);
                break;
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].SELECT_CELL:
            case _shared_models__WEBPACK_IMPORTED_MODULE_3__["GridAction"].MOUSEOVER_CELL:
                config.selectedCell = e.selectedCell;
                this.applySelectedCell();
                this.emitAction(e);
                break;
        }
    }
    destroyCmp() {
        this.pageElements = null;
        this.removeGridBodyAll();
        this.renderedBodyComponentMetaMap = null;
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["mc-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_1__["ScrollComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollCmp = _t.first);
    } }, inputs: { data: "data", selectedRows: "selectedRows" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 7, consts: [[3, "config", "columns", "action"], [3, "config", "action"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mc-grid-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function GridComponent_Template_mc_grid_header_action_0_listener($event) { return ctx.onHeaderAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mc-scroll", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function GridComponent_Template_mc_scroll_action_1_listener($event) { return ctx.onScrollAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.state == null ? null : ctx.state.headerConfig)("columns", ctx.state == null ? null : ctx.state.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.state == null ? null : ctx.state.bodyHeight, "px")("width", ctx.state == null ? null : ctx.state.bodyWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.state == null ? null : ctx.state.scrollConfig);
    } }, directives: [_grid_header_component__WEBPACK_IMPORTED_MODULE_10__["GridHeaderComponent"], _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_1__["ScrollComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'mc-grid',
                styleUrls: ['grid.component.scss'],
                templateUrl: './grid.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], selectedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], scrollCmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_1__["ScrollComponent"]]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/icon/icon.component.ts":
/*!******************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/icon/icon.component.ts ***!
  \******************************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");



class IconComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultConfig = {
            icon: ''
        };
    }
    beforeThemeInit() {
        if (this._config.icon) {
            this.el.classList.add('icon', 'icon-' + this._config.icon);
        }
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["mc-icon"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function IconComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  position: relative;\n  cursor: pointer;\n}\n[_nghost-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background-position: center center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  \n  font-family: \"icons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: 1;\n  cursor: pointer;\n}\n.flip[_nghost-%COMP%] {\n  transform: scaleY(-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUdBLCtFQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtBQ0pKO0FEb0JFO0VBQ0UscUJBQUE7QUNsQkoiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6YmVmb3JlIHtcbiAgICAvLyAqKioqIGZvciBpY29uIHN2ZyBmaWxlICoqKipcbiAgICBjb250ZW50OiAnICc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgLy8gKioqKiBmb3IgaWNvbnMgZm9udCBmaWxlICoqKipcbiAgICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvbnMnICFpbXBvcnRhbnQ7XG4gICAgc3BlYWs6IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cbiAgICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLy8gZXhhbXBsZSwgaWNvbnMgYXJlIHVzdWFsbHkgcHJvamVjdCByZXNvdXJjZXMsIHNvIHRoZXkgc2hvdWxkIGJlIGRlZmluZWQgaW4gdGhlIHN0eWxlcy9jb21wb25lbnRzLnRoZW1lcy5zY3NzIGZpbGUuXG4gIC8vICYuaWNvbiB7XG4gIC8vICAgJi1hcnJvdy1kb3duIHtcbiAgLy8gICAgICY6YmVmb3JlIHtcbiAgLy8gICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1hcnJvdy1kb3duLnN2ZycpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGZvbnQgaWNvbiBtYXliZSBuZWVkIGEgZGlmZmVyZW50IHN0eWxlcy5cblxuICAvLyAqKioqKioqIGVmZmVjdCAqKioqKioqKlxuXG4gICYuZmxpcCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogXCJpY29uc1wiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QuZmxpcCB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-icon',
                styleUrls: ['icon.component.scss'],
                templateUrl: './icon.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/index.ts":
/*!****************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/index.ts ***!
  \****************************************************/
/*! exports provided: IconComponent, ListComponent, ListItemComponent, MaskComponent, DrawerComponent, ScrollbarComponent, PopupComponent, GridComponent, GridBodyComponent, GridHeaderComponent, ScrollComponent, LoaderComponent, VisualizerComponent, TextComponent, BarComponent, LineComponent, AxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/icon.component */ "./projects/mc-ui/src/lib/components/icon/icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__["IconComponent"]; });

/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./projects/mc-ui/src/lib/components/list/list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]; });

/* harmony import */ var _list_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list-item.component */ "./projects/mc-ui/src/lib/components/list/list-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return _list_list_item_component__WEBPACK_IMPORTED_MODULE_2__["ListItemComponent"]; });

/* harmony import */ var _mask_mask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask/mask.component */ "./projects/mc-ui/src/lib/components/mask/mask.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function() { return _mask_mask_component__WEBPACK_IMPORTED_MODULE_3__["MaskComponent"]; });

/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawer/drawer.component */ "./projects/mc-ui/src/lib/components/drawer/drawer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"]; });

/* harmony import */ var _scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar/scrollbar.component */ "./projects/mc-ui/src/lib/components/scrollbar/scrollbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarComponent", function() { return _scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_5__["ScrollbarComponent"]; });

/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup/popup.component */ "./projects/mc-ui/src/lib/components/popup/popup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopupComponent"]; });

/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid/grid.component */ "./projects/mc-ui/src/lib/components/grid/grid.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"]; });

/* harmony import */ var _grid_grid_body_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/grid-body.component */ "./projects/mc-ui/src/lib/components/grid/grid-body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function() { return _grid_grid_body_component__WEBPACK_IMPORTED_MODULE_8__["GridBodyComponent"]; });

/* harmony import */ var _grid_grid_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid/grid-header.component */ "./projects/mc-ui/src/lib/components/grid/grid-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function() { return _grid_grid_header_component__WEBPACK_IMPORTED_MODULE_9__["GridHeaderComponent"]; });

/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll/scroll.component */ "./projects/mc-ui/src/lib/components/scroll/scroll.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_10__["ScrollComponent"]; });

/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader/loader.component */ "./projects/mc-ui/src/lib/components/loader/loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]; });

/* harmony import */ var _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./visualizer/visualizer.component */ "./projects/mc-ui/src/lib/components/visualizer/visualizer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_12__["VisualizerComponent"]; });

/* harmony import */ var _form_fields_text_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form/fields/text/text.component */ "./projects/mc-ui/src/lib/components/form/fields/text/text.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return _form_fields_text_text_component__WEBPACK_IMPORTED_MODULE_13__["TextComponent"]; });

/* harmony import */ var _visualizer_bar_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visualizer/bar/bar.component */ "./projects/mc-ui/src/lib/components/visualizer/bar/bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return _visualizer_bar_bar_component__WEBPACK_IMPORTED_MODULE_14__["BarComponent"]; });

/* harmony import */ var _visualizer_line_line_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./visualizer/line/line.component */ "./projects/mc-ui/src/lib/components/visualizer/line/line.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return _visualizer_line_line_component__WEBPACK_IMPORTED_MODULE_15__["LineComponent"]; });

/* harmony import */ var _visualizer_axis_axis_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./visualizer/axis/axis.component */ "./projects/mc-ui/src/lib/components/visualizer/axis/axis.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxisComponent", function() { return _visualizer_axis_axis_component__WEBPACK_IMPORTED_MODULE_16__["AxisComponent"]; });




















/***/ }),

/***/ "./projects/mc-ui/src/lib/components/list/list-item.component.ts":
/*!***********************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/list/list-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./projects/mc-ui/src/lib/utils/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ListItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
class ListItemComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor() {
        super(...arguments);
        this.defaultConfig = {
            tpl: null,
            data: {},
            idField: 'id',
            nameField: 'name',
            toggleSelect: false,
            height: 0,
            horizontal: false
        };
        this.defaultState = {
            tpl: null,
            data: {},
            nameField: 'name'
        };
        this.height = '';
        this.lineHeight = '';
        this.selected = false;
        this.horizontal = false;
    }
    onPress(e) {
        // selected state is made by config.
        const selected = this._config.toggleSelect ? !this.selected : true;
        const actionEvent = {
            target: this,
            action: selected ? _shared_models__WEBPACK_IMPORTED_MODULE_0__["ListAction"].SELECT_ITEM : _shared_models__WEBPACK_IMPORTED_MODULE_0__["ListAction"].UNSELECT_ITEM,
            event: e,
            selected,
            data: this.state.data
        };
        this.action.emit(actionEvent);
    }
    applyState(config) {
        if (config.height) {
            this.height = config.height + 'px';
            this.lineHeight = config.height + 'px';
        }
        this.horizontal = config.horizontal;
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(config.selected)) {
            this.selected = config.selected;
        }
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return ɵListItemComponent_BaseFactory(t || ListItemComponent); };
ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["mc-list-item"]], hostVars: 8, hostBindings: function ListItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListItemComponent_click_HostBindingHandler($event) { return ctx.onPress($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.height)("line-height", ctx.lineHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected)("horizontal", ctx.horizontal);
    } }, inputs: { selected: "selected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 5, consts: [[1, "list-item--body"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListItemComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.state == null ? null : ctx.state.tpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.state == null ? null : ctx.state.data));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx.state == null ? null : ctx.state.tpl) ? "" : ctx.state == null ? null : ctx.state.data[ctx.state.nameField], "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  width: 100%;\n}\n.horizontal[_nghost-%COMP%] {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDRjtBRElFO0VBQ0UsV0FBQTtBQ0ZKIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJi5zZWxlY3RlZCB7XG4gIH1cblxuICAmLmhvcml6b250YWwge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */"] });
const ɵListItemComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ListItemComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-list-item',
                styleUrls: ['list-item.component.scss'],
                templateUrl: 'list-item.component.html'
            }]
    }], null, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
        }], lineHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.lineHeight']
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.selected']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.horizontal']
        }], onPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/list/list.component.ts":
/*!******************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/list/list.component.ts ***!
  \******************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item.component */ "./projects/mc-ui/src/lib/components/list/list-item.component.ts");






const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { data: a0, themes: a1, height: a2, idField: a3, nameField: a4, horizontal: a5, toggleSelect: a6, tpl: a7 }; };
function ListComponent_mc_list_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mc-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("action", function ListComponent_mc_list_item_0_Template_mc_list_item_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onListItemAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](2, _c0, item_r1, ctx_r0.getItemThemes(item_r1), ctx_r0._config.rowHeight, ctx_r0._config.idField, ctx_r0._config.nameField, ctx_r0._config.horizontal, ctx_r0._config.toggleSelect, ctx_r0._config.itemTpl))("selected", ctx_r0.state == null ? null : ctx_r0.state.selectedItemsMap.has(ctx_r0.getStringId(item_r1)));
} }
class ListComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor() {
        super(...arguments);
        this._selectedItems = [];
        this._data = [];
        this.defaultState = {
            data: [],
            selectedItemsMap: new Map()
        };
        this.defaultConfig = {
            rowHeight: 0,
            multiSelect: false,
            toggleSelect: false,
            itemTpl: null,
            idField: 'id',
            nameField: 'name',
            horizontal: false
        };
        this.horizontal = false;
        this.hasSelectedItem = false;
    }
    set selectedItems(selectedItems) {
        if (selectedItems) {
            const idField = this._config.idField;
            const selectedItemsMap = new Map();
            this.hasSelectedItem = selectedItems.length > 0;
            selectedItems.forEach(d => selectedItemsMap.set('' + d[idField], d));
            this.setState({ selectedItemsMap });
            this._selectedItems = selectedItems;
        }
    }
    get selectedItems() {
        return this._selectedItems;
    }
    set data(data) {
        if (data) {
            this.setState({ data });
            this._data = data;
        }
    }
    get data() {
        return this._data;
    }
    afterRenderCmp() {
        // if it has the selected item.
        if (this.selectedItems.length) {
            this.emitAction(_shared_models__WEBPACK_IMPORTED_MODULE_0__["ListAction"].SELECT_ITEM, this.selectedItems[0]);
        }
    }
    applyState(config) {
        this.horizontal = config.horizontal;
        this.selectedItems = config.selectedItems;
    }
    getStringId(data) {
        return '' + data[this._config.idField];
    }
    getItemThemes(data) {
        const themes = [...this._config.themes];
        if (data.theme) {
            themes.push(data.theme);
        }
        return themes;
    }
    getSelectedItems() {
        const items = [];
        this.state.selectedItemsMap.forEach(value => items.push(value));
        return items;
    }
    selectItem(item) {
        const config = this._config;
        let selectedItems = this.selectedItems.concat();
        if (!config.multiSelect) {
            selectedItems = [];
        }
        selectedItems.push(item);
        this.selectedItems = selectedItems;
    }
    unselectItem(item) {
        const config = this._config;
        if (config.multiSelect || config.toggleSelect) {
            const idField = config.idField;
            this.selectedItems = this.selectedItems.filter(d => d[idField] !== item[idField]);
        }
    }
    emitAction(actionType, selectedItem, event = null) {
        const action = {
            target: this,
            action: actionType,
            event,
            selectedItem,
            selectedItems: this.getSelectedItems()
        };
        this.action.emit(action);
    }
    onListItemAction(e) {
        switch (e.action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_0__["ListAction"].UNSELECT_ITEM:
            case _shared_models__WEBPACK_IMPORTED_MODULE_0__["ListAction"].SELECT_ITEM:
                if (e.action === _shared_models__WEBPACK_IMPORTED_MODULE_0__["ListAction"].SELECT_ITEM) {
                    this.selectItem(e.data);
                }
                else {
                    this.unselectItem(e.data);
                }
                this.emitAction(e.action, e.data, e.event);
                break;
        }
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return ɵListComponent_BaseFactory(t || ListComponent); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["mc-list"]], hostVars: 4, hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("horizontal", ctx.horizontal)("has-selected-item", ctx.hasSelectedItem);
    } }, inputs: { selectedItems: "selectedItems", data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config", "selected", "action", 4, "ngFor", "ngForOf"], [3, "config", "selected", "action"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ListComponent_mc_list_item_0_Template, 1, 11, "mc-list-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.state == null ? null : ctx.state.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _list_item_component__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n.horizontal[_nghost-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgJi5ob3Jpem9udGFsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOmhvc3QuaG9yaXpvbnRhbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"] });
const ɵListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ListComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mc-list',
                styleUrls: ['list.component.scss'],
                templateUrl: './list.component.html'
            }]
    }], null, { selectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.horizontal']
        }], hasSelectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.has-selected-item']
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/loader/loader.component.ts":
/*!**********************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/loader/loader.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LoaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoaderComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultConfig = {
            themes: [_shared_models__WEBPACK_IMPORTED_MODULE_0__["ComponentTheme"].horizontal]
        };
    }
    applyState(config) {
        this.setState({ theme: config.themes[0] });
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["mc-loader"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "ngSwitch"], ["class", "loader", 4, "ngSwitchCase"], [1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoaderComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.state == null ? null : ctx.state.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "horizontal");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: grid;\n  place-items: center center;\n  height: 100%;\n  width: 100%;\n  z-index: 9;\n}\n.loader-horizontal[_nghost-%COMP%] {\n  display: block;\n  top: auto;\n  bottom: 0;\n  height: 4px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7QURFSTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FOIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG5cbiAgJi5sb2FkZXIge1xuICAgICYtaG9yaXpvbnRhbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGRpdiB7XG4gICAgICAgIC8vIEBpbmNsdWRlIGhvcml6b250YWxMb2FkZXIoJGMtY3lhbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbn1cbjpob3N0LmxvYWRlci1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-loader',
                styleUrls: ['loader.component.scss'],
                templateUrl: 'loader.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/mask/mask.component.ts":
/*!******************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/mask/mask.component.ts ***!
  \******************************************************************/
/*! exports provided: MaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function() { return MaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./projects/mc-ui/src/lib/utils/utils.ts");




class MaskComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultConfig = {
            visible: false,
            transparent: false
        };
        this.visible = false;
        this.transparent = false;
    }
    applyState(config) {
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(config.visible)) {
            this.visible = config.visible;
        }
        this.transparent = config.transparent;
    }
}
MaskComponent.ɵfac = function MaskComponent_Factory(t) { return new (t || MaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaskComponent, selectors: [["mc-mask"]], hostVars: 4, hostBindings: function MaskComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.visible)("transparent", ctx.transparent);
    } }, inputs: { visible: "visible" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MaskComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: none;\n}\n.visible[_nghost-%COMP%] {\n  display: block;\n}\n.transparent[_nghost-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9tYXNrL21hc2suY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvbWFzay9tYXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURFRTtFQUNFLDZCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL21hc2svbWFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgJi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICYudHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QudmlzaWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QudHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-mask',
                styleUrls: ['mask.component.scss'],
                templateUrl: 'mask.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.visible']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transparent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.transparent']
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/popup/popup.component.ts":
/*!********************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/popup/popup.component.ts ***!
  \********************************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared.service */ "./projects/mc-ui/src/lib/shared.service.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/icon.component */ "./projects/mc-ui/src/lib/components/icon/icon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function PopupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0, a1) { return { icon: a0, themes: a1 }; };
class PopupComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er, service) {
        super(er);
        this.er = er;
        this.service = service;
        // for body press event, it is triggered after clicking the target. We need to ignore the body event when visible = true;
        this.bodyEventLock = false;
        this.indicatorHeight = 10;
        this.Icon = _shared_models__WEBPACK_IMPORTED_MODULE_0__["Icon"];
        this.Theme = _shared_models__WEBPACK_IMPORTED_MODULE_0__["ComponentTheme"];
        this.defaultConfig = {
            checkTargetLocation: true,
            startFrom: _shared_models__WEBPACK_IMPORTED_MODULE_0__["PopupStartFrom"].BOTTOM,
            offsetX: 0,
            offsetY: 0,
            tpl: null,
            targetEl: null,
            hasIndicator: true,
            center: false,
            hasBorder: true,
            hasCloseButton: true
        };
        this.defaultState = {
            tpl: null
        };
        this.center = false;
        this.hasBorder = true;
        this.hasCloseButton = true;
        this.hasIndicator = true;
        this.subscriptions = service.bodyPress.subscribe(this.onPressBody.bind(this));
    }
    applyState(config) {
        this.center = config.center;
        this.hasBorder = config.hasBorder;
        this.hasCloseButton = config.hasCloseButton;
        this.hasIndicator = config.hasIndicator;
        if (config.targetEl) {
            this.lastTargetElCoord = config.targetEl.getBoundingClientRect();
        }
    }
    show(resizeOnly = false) {
        const config = this._config;
        this.holdBodyEvent();
        if (config.center) {
            this.el.style.display = '';
            return;
        }
        // renew check.
        if (!resizeOnly) {
            this.uncheckTargetLocation();
            this.checkTargetElLocation();
        }
        // for updating the last size;
        this.lastTargetElCoord = config.targetEl.getBoundingClientRect();
        if (!resizeOnly) {
            this.el.style.visibility = 'hidden';
            this.el.style.display = '';
        }
        // after the targetEl is changed.
        setTimeout(() => {
            // it can be removed
            if (!this.el) {
                return;
            }
            const coords = this.getCoords(config);
            this.el.style.left = coords.left + 'px';
            this.el.style.top = coords.top + 'px';
            // remove the prev indicator and add the new indicator
            let classNames = this.el.className.split(' ');
            classNames = classNames.filter(d => !d.includes('popup-indicator-'));
            classNames.push('popup-indicator-' +
                (coords.indicatorIsTop ? 'top' : 'bottom') +
                '-' +
                (coords.indicatorIsLeft ? 'left' : 'right'));
            this.el.className = classNames.join(' ');
            if (!resizeOnly) {
                this.el.style.visibility = '';
            }
        });
    }
    getCoords(config) {
        const targetSize = this.lastTargetElCoord;
        // when the popup overflow the window size, we need to move into the window.
        const indicatorHeight = config.hasIndicator ? this.indicatorHeight : 0;
        const popupSize = this.el.getBoundingClientRect();
        const windowSize = this.getWindowSize();
        const indicatorIsLeft = targetSize.left + targetSize.width / 2 + popupSize.width + config.offsetX <= windowSize.width;
        const left = indicatorIsLeft
            ? targetSize.left + targetSize.width / 2 + config.offsetX
            : targetSize.left - popupSize.width + targetSize.width / 2 - config.offsetX;
        let indicatorIsTop = true;
        let top = 0;
        switch (config.startFrom) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_0__["PopupStartFrom"].BOTTOM:
                indicatorIsTop =
                    targetSize.top + targetSize.height + popupSize.height + config.offsetY + indicatorHeight <= windowSize.height;
                break;
            case _shared_models__WEBPACK_IMPORTED_MODULE_0__["PopupStartFrom"].TOP:
                indicatorIsTop = targetSize.top - popupSize.height + config.offsetY - indicatorHeight <= 0;
                break;
        }
        top = indicatorIsTop
            ? targetSize.top + targetSize.height + config.offsetY + indicatorHeight
            : targetSize.top - popupSize.height - config.offsetY - indicatorHeight;
        return {
            top,
            left,
            indicatorIsTop,
            indicatorIsLeft
        };
    }
    resize() {
        this.show(true);
    }
    hide() {
        this.uncheckTargetLocation();
        this.el.style.display = 'none';
        const action = {
            action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["ComponentAction"].HID,
            target: this
        };
        this.action.emit(action);
    }
    // the body click event is triggered after clicking the target and it closes the popup, so need to prevent it.
    holdBodyEvent() {
        this.bodyEventLock = true;
        setTimeout(() => (this.bodyEventLock = false));
    }
    checkTargetElLocation() {
        const config = this._config;
        if (config.targetEl && config.checkTargetLocation) {
            this.checkTargetElLocationIntervalId = window.setInterval(() => {
                const info = config.targetEl.getBoundingClientRect();
                const lastInfo = this.lastTargetElCoord;
                if (lastInfo) {
                    if (info.top !== lastInfo.top || info.left !== lastInfo.left) {
                        this.hide();
                    }
                }
                else {
                    this.lastTargetElCoord = info;
                }
            }, 500);
        }
    }
    uncheckTargetLocation() {
        if (this.checkTargetElLocationIntervalId) {
            clearInterval(this.checkTargetElLocationIntervalId);
            delete this.checkTargetElLocationIntervalId;
        }
    }
    getWindowSize() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return { width, height };
    }
    onPressBody(e) {
        if (!this.bodyEventLock && !this.el.contains(e.target)) {
            const pos = this.el.compareDocumentPosition(e.target);
            // console.log('compareDocumentPosition:' + pos);
            // some overlay items can't be in the container. it returns 35 or 37.
            if (pos < 33) {
                this.hide();
            }
        }
    }
    onClickCloseButton() {
        this.hide();
    }
    destroyCmp() {
        this.uncheckTargetLocation();
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["mc-popup"]], hostVars: 8, hostBindings: function PopupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("center", ctx.center)("has-border", ctx.hasBorder)("has-close-button", ctx.hasCloseButton)("popup-indicator", ctx.hasIndicator);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 7, consts: [[1, "close-button"], [3, "config", "click"], [4, "ngTemplateOutlet"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mc-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopupComponent_Template_mc_icon_click_1_listener() { return ctx.onClickCloseButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PopupComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c1, ctx.Icon.close, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx.Theme.popup)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.state == null ? null : ctx.state.tpl);
    } }, directives: [_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%] {\n  top: 0;\n  left: 0;\n  position: absolute;\n  display: inline-block;\n}\n[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  z-index: 10;\n}\n.has-border[_nghost-%COMP%] {\n  border: 1px solid;\n  border-radius: 4px;\n}\n.has-close-button[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  display: block;\n}\n.popup-basic[_nghost-%COMP%] {\n  padding: 25px 15px 15px;\n  border: solid 1px;\n  border-radius: 4px;\n}\n.popup-indicator[_nghost-%COMP%]:before {\n  content: \"\";\n  width: 17px;\n  height: 4px;\n  position: absolute;\n  z-index: 2;\n}\n.popup-indicator[_nghost-%COMP%]:after {\n  content: \"\";\n  width: 16px;\n  height: 12px;\n  position: absolute;\n  z-index: 1;\n}\n.popup-indicator-top-right[_nghost-%COMP%]:before {\n  border-top: solid 1px;\n  border-right: solid 1px;\n  transform: rotate(-35deg);\n  top: -6px;\n  right: -2px;\n  border-radius: 0 4px 0 0;\n}\n.popup-indicator-top-right[_nghost-%COMP%]:after {\n  border-right: solid 1px;\n  border-radius: 0 4px 0 0;\n  top: -9px;\n  right: -1px;\n}\n.popup-indicator-top-left[_nghost-%COMP%]:before {\n  border-top: solid 1px;\n  border-left: solid 1px;\n  transform: rotate(35deg);\n  top: -6px;\n  left: -2px;\n  border-radius: 4px 0 0 0;\n}\n.popup-indicator-top-left[_nghost-%COMP%]:after {\n  border-left: solid 1px;\n  border-radius: 4px 0 0 0;\n  top: -9px;\n  left: -1px;\n}\n.popup-indicator-bottom-right[_nghost-%COMP%]:before {\n  transform: scale(-1, 1) rotate(-35deg);\n  right: -2px;\n  bottom: -6px;\n  border-bottom: solid 1px;\n  border-left: solid 1px;\n  border-radius: 0 0 0 4px;\n}\n.popup-indicator-bottom-right[_nghost-%COMP%]:after {\n  transform: scale(-1, 1);\n  right: -1px;\n  bottom: -9px;\n  border-left: solid 1px;\n  border-radius: 0 0 0 4px;\n}\n.popup-indicator-bottom-left[_nghost-%COMP%]:before {\n  bottom: -6px;\n  left: -2px;\n  transform: rotate(-35deg);\n  border-bottom: solid 1px;\n  border-left: solid 1px;\n  border-radius: 0 0 0 4px;\n}\n.popup-indicator-bottom-left[_nghost-%COMP%]:after {\n  bottom: -9px;\n  left: -1px;\n  border-left: solid 1px;\n  border-radius: 0 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGO0FERUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjtBREtJO0VBQ0UsY0FBQTtBQ0hOO0FEUUk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7QUNQTjtBRFdNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0FDVlI7QURhTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsVUFBQTtBQ1pSO0FEaUJRO0VBRUUscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ2hCVjtBRG1CUTtFQUVFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2xCVjtBRHVCUTtFQUVFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUN0QlY7QUR5QlE7RUFFRSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUN4QlY7QUQ2QlE7RUFDRSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUVBLHdCQUFBO0FDNUJWO0FEK0JRO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0VBQ0Esd0JBQUE7QUM5QlY7QURtQ1E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUVBLHdCQUFBO0FDbENWO0FEcUNRO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFFQSxzQkFBQTtFQUNBLHdCQUFBO0FDcENWIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gYmFja2dyb3VuZDogJGMtYmctcGFuZWwtMztcblxuICAuY2xvc2UtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgJi5oYXMtYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmLmhhcy1jbG9zZS1idXR0b24ge1xuICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgJi5wb3B1cCB7XG4gICAgJi1iYXNpYyB7XG4gICAgICBwYWRkaW5nOiAyNXB4IDE1cHggMTVweDtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgICAgLy8gQGluY2x1ZGUgbGluZWFyR3JhZGllbnQoMTM1ZGVnLCAkYy1iZy1wYW5lbC0zIDAlLCAkYy1iZy1wYW5lbC0zIDYwJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgJi1pbmRpY2F0b3Ige1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICRjLWJnLXBhbmVsLTM7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYy1iZy1wYW5lbC0zO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgaW5kaWNhdG9yIGxvY2F0aW9uIGlzIHRvcC1yaWdodFxuICAgICAgJi10b3AtcmlnaHQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogJGMtYmctcGFuZWwtMztcbiAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IC0ycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgLy8gQGluY2x1ZGUgbGluZWFyR3JhZGllbnQoMzI1ZGVnLCAkYy1iZy1wYW5lbC0zIDAlLCAkYy1iZy1wYW5lbC0zIDUwJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XG4gICAgICAgICAgdG9wOiAtOXB4O1xuICAgICAgICAgIHJpZ2h0OiAtMXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtdG9wLWxlZnQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogJGMtYmctcGFuZWwtMztcbiAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNWRlZyk7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgLy8gQGluY2x1ZGUgbGluZWFyR3JhZGllbnQoMzVkZWcsICRjLWJnLXBhbmVsLTMgMCUsICRjLWJnLXBhbmVsLTMgNTAlLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHg7IC8vICRjLWJvcmRlci0yO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgMDtcbiAgICAgICAgICB0b3A6IC05cHg7XG4gICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWJvdHRvbS1yaWdodCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKSByb3RhdGUoLTM1ZGVnKTtcbiAgICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgICBib3R0b206IC02cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4OyAvLyAkYy1ib3JkZXItMjtcbiAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4OyAvLyAkYy1ib3JkZXItMjtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYy1iZy1wYW5lbC0zO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgICAgICAgIHJpZ2h0OiAtMXB4O1xuICAgICAgICAgIGJvdHRvbTogLTlweDtcbiAgICAgICAgICAvLyBAaW5jbHVkZSBsaW5lYXJHcmFkaWVudCgxMzVkZWcsICRjLWJnLXBhbmVsLTMgMCUsICRjLWJnLXBhbmVsLTMgNTAlLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHg7IC8vICRjLWJvcmRlci0yO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWJvdHRvbS1sZWZ0IHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJvdHRvbTogLTZweDtcbiAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4OyAvLyAkYy1ib3JkZXItMjtcbiAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4OyAvLyAkYy1ib3JkZXItMjtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYy1iZy1wYW5lbC0zO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGJvdHRvbTogLTlweDtcbiAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgIC8vIEBpbmNsdWRlIGxpbmVhckdyYWRpZW50KDEzNWRlZywgJGMtYmctcGFuZWwtMyAwJSwgJGMtYmctcGFuZWwtMyA1MCUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDsgLy8gJGMtYm9yZGVyLTI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCAuY2xvc2UtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuOmhvc3QuaGFzLWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46aG9zdC5oYXMtY2xvc2UtYnV0dG9uIC5jbG9zZS1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0LnBvcHVwLWJhc2ljIHtcbiAgcGFkZGluZzogMjVweCAxNXB4IDE1cHg7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46aG9zdC5wb3B1cC1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG59XG46aG9zdC5wb3B1cC1pbmRpY2F0b3I6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG46aG9zdC5wb3B1cC1pbmRpY2F0b3ItdG9wLXJpZ2h0OmJlZm9yZSB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XG4gIHRvcDogLTZweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDAgMDtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci10b3AtcmlnaHQ6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAwO1xuICB0b3A6IC05cHg7XG4gIHJpZ2h0OiAtMXB4O1xufVxuOmhvc3QucG9wdXAtaW5kaWNhdG9yLXRvcC1sZWZ0OmJlZm9yZSB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IC0ycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgMDtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci10b3AtbGVmdDphZnRlciB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgMDtcbiAgdG9wOiAtOXB4O1xuICBsZWZ0OiAtMXB4O1xufVxuOmhvc3QucG9wdXAtaW5kaWNhdG9yLWJvdHRvbS1yaWdodDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKSByb3RhdGUoLTM1ZGVnKTtcbiAgcmlnaHQ6IC0ycHg7XG4gIGJvdHRvbTogLTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICBib3JkZXItbGVmdDogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0cHg7XG59XG46aG9zdC5wb3B1cC1pbmRpY2F0b3ItYm90dG9tLXJpZ2h0OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3R0b206IC05cHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci1ib3R0b20tbGVmdDpiZWZvcmUge1xuICBib3R0b206IC02cHg7XG4gIGxlZnQ6IC0ycHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4O1xufVxuOmhvc3QucG9wdXAtaW5kaWNhdG9yLWJvdHRvbS1sZWZ0OmFmdGVyIHtcbiAgYm90dG9tOiAtOXB4O1xuICBsZWZ0OiAtMXB4O1xuICBib3JkZXItbGVmdDogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mc-popup',
                styleUrls: ['popup.component.scss'],
                templateUrl: 'popup.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, { center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.center']
        }], hasBorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.has-border']
        }], hasCloseButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.has-close-button']
        }], hasIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.popup-indicator']
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/scroll/scroll.component.ts":
/*!**********************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/scroll/scroll.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../scrollbar/scrollbar.component */ "./projects/mc-ui/src/lib/components/scrollbar/scrollbar.component.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/utils */ "./projects/mc-ui/src/lib/utils/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.component */ "./projects/mc-ui/src/lib/components/loader/loader.component.ts");










function ScrollComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function ScrollComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ScrollComponent_div_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", page_r24.height + page_r24.extraHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-index", i_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.state == null ? null : ctx_r21.state.tpl);
} }
function ScrollComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("line-height", ctx_r22.state == null ? null : ctx_r22.state.rowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r22.state.isLoading ? ctx_r22.state == null ? null : ctx_r22.state.loadingText : ctx_r22.state == null ? null : ctx_r22.state.emptyText, "\n");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { themes: a0 }; };
function ScrollComponent_mc_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mc-loader", 8);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r23.Theme.horizontal)));
} }
class ScrollComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.currentPageIndexes = [];
        this.scrollTop = 0;
        this.oldScrollTop = 0;
        this.ticking = false;
        this.Theme = _shared_models__WEBPACK_IMPORTED_MODULE_0__["ComponentTheme"];
        this.defaultConfig = {
            loadingText: 'loading...',
            emptyText: 'No Data',
            rowHeight: 35,
            displayLoader: true,
            minPageRowCount: 5
        };
        this.defaultState = {
            tpl: null,
            pages: [],
            rowHeight: 0,
            loadingText: '',
            emptyText: '',
            displayLoader: false,
            rowCount: null,
            isLoading: true
        };
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    set rowCount(rowCount) {
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(rowCount)) {
            // change row count and resize height
            this._rowCount = rowCount;
            const pages = this.initPages();
            this.setState({ pages, rowCount });
            if (this.rendered) {
                // need to wait to render the page elements by state.pages
                setTimeout(() => this.updatePages());
            }
        }
    }
    get rowCount() {
        return this._rowCount;
    }
    set isLoading(isLoading) {
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(isLoading)) {
            this.setState({ isLoading });
        }
    }
    afterRenderCmp() {
        this.pageRowCount = this.getPageRowCount(this._config);
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(this.rowCount)) {
            this.requestRowCount();
        }
        else {
            this.updatePages();
        }
    }
    applyState(config) {
        this.rowCount = config.rowCount;
    }
    initPages() {
        this.scrollTop = 0;
        this.oldScrollTop = 0;
        this.pageElements = null;
        this.currentPageIndexes = [];
        return this.getPages(this._config);
    }
    requestRowCount() {
        const actionEvent = {
            target: this,
            action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["ScrollAction"].GET_ROW_COUNT,
            pageRowCount: this.pageRowCount
        };
        this.action.emit(actionEvent);
    }
    getPageElements() {
        if (this.pageElements) {
            return this.pageElements;
        }
        const el = this.el.querySelector('.scroll--content');
        this.pageElements = Array.from(el.children);
        return this.pageElements;
    }
    getPageRowCount(config) {
        if (this.pageRowCount) {
            return this.pageRowCount;
        }
        const BUFFER = 1.5;
        this.containerHeight = this.el.offsetHeight;
        const pageRowCount = Math.floor((this.containerHeight / config.rowHeight) * BUFFER);
        return pageRowCount < config.minPageRowCount ? config.minPageRowCount : pageRowCount;
    }
    getPages(config) {
        let remainRowCount = this.rowCount;
        const rowHeight = config.rowHeight;
        const pageRowCount = this.getPageRowCount(config);
        const pages = [];
        let startRowIndex = -1;
        let endRowIndex = -1;
        let currentRowCount;
        let index = 0;
        let height = 0;
        let top = 0;
        while (remainRowCount > 0) {
            startRowIndex = endRowIndex + 1;
            currentRowCount = pageRowCount > remainRowCount ? remainRowCount : pageRowCount;
            endRowIndex = startRowIndex + currentRowCount - 1;
            height = currentRowCount * rowHeight;
            pages.push({
                top,
                startRowIndex,
                endRowIndex,
                height,
                index,
                extraHeight: 0
            });
            remainRowCount -= currentRowCount;
            top += height;
            index++;
        }
        this.pageRowCount = pageRowCount;
        return pages;
    }
    getCurrentPageIndexes() {
        const pageElements = this.getPageElements();
        const oldScrollTop = this.oldScrollTop;
        const scrollTop = this.scrollTop;
        const isDown = oldScrollTop <= scrollTop;
        const currentPageIndexes = [];
        const containerHeight = this.el.offsetHeight;
        const pageCount = pageElements.length;
        let prevPagesHeightSum = 0;
        // down, prev pages height sum < scroll top current page + 1 page
        // up, scroll top + container height <= page bottom (height) => page - 1
        pageElements.some((el, i) => {
            const pageHeight = el.offsetHeight;
            if (isDown) {
                if (prevPagesHeightSum <= scrollTop && scrollTop < prevPagesHeightSum + pageHeight) {
                    currentPageIndexes.push(i);
                    if (i + 1 < pageCount) {
                        currentPageIndexes.push(i + 1);
                    }
                    else {
                        if (i - 1 > 0) {
                            currentPageIndexes.unshift(i - 1);
                        }
                    }
                    return true;
                }
            }
            else {
                if (scrollTop + containerHeight <= prevPagesHeightSum + pageHeight &&
                    prevPagesHeightSum < scrollTop + containerHeight) {
                    currentPageIndexes.push(i);
                    if (i - 1 >= 0) {
                        currentPageIndexes.unshift(i - 1);
                    }
                    else {
                        if (i + 1 < pageCount) {
                            currentPageIndexes.push(i + 1);
                        }
                    }
                    return true;
                }
            }
            prevPagesHeightSum += pageHeight;
            return false;
        });
        this.oldScrollTop = scrollTop;
        return currentPageIndexes;
    }
    getPageHeight() {
        return this.pageRowCount * this._config.rowHeight;
    }
    getPageIndexByRowIndex(rowIndex) {
        return Math.floor(rowIndex / this.pageRowCount);
    }
    getApproxPageIndex(scrollTop) {
        // some pages can have the extra page height
        const pageHeight = this.getPageHeight();
        return Math.floor(scrollTop / pageHeight);
    }
    updateExtraHeight(extraHeightPages) {
        const pages = this.state.pages.concat();
        extraHeightPages.forEach(extraHeightPage => {
            pages[extraHeightPage.pageIndex].extraHeight = extraHeightPage.extraHeight;
        });
        this.setState(pages);
    }
    getScrollTopByRowIndex(rowIndex) {
        let scrollTop = 0;
        this.state.pages.some(page => {
            if (page.startRowIndex <= rowIndex && page.endRowIndex >= rowIndex) {
                scrollTop += (rowIndex - page.startRowIndex + 1) * this.state.rowHeight;
                return true;
            }
            else {
                scrollTop += page.height;
                return false;
            }
        });
        // move to the top of the row
        return scrollTop - this.state.rowHeight;
    }
    hasEnoughSpaceToDisplay() {
        return this.el.offsetHeight >= this._config.rowHeight;
    }
    hasDifferentPage(pageIndexes) {
        // the page indexes are ordered by number;
        const currentPageIndexes = this.currentPageIndexes;
        if (currentPageIndexes.length < pageIndexes.length) {
            return true;
        }
        return pageIndexes.some(pageIndex => !currentPageIndexes.includes(pageIndex));
    }
    updatePages() {
        if (!this.hasEnoughSpaceToDisplay()) {
            console.warn(`ScrollComponent: it doesn't enough space to scroll the content`);
            return;
        }
        const currentPageIndexes = this.getCurrentPageIndexes();
        // console.warn(this.currentPageIndexes, currentPageIndexes);
        if (this.hasDifferentPage(currentPageIndexes)) {
            this.currentPageIndexes = currentPageIndexes;
            const action = {
                target: this,
                action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["ScrollAction"].UPDATE_PAGES,
                pages: this.state.pages,
                pageElements: this.getPageElements(),
                currentPageIndexes: this.currentPageIndexes,
                pageRowCount: this.pageRowCount
            };
            this.action.emit(action);
        }
    }
    scrollByRowIndex(rowIndex) {
        const scrollTop = this.getScrollTopByRowIndex(rowIndex);
        this.scrollBarCmp.scrollToY(scrollTop);
    }
    onScrollAction(e) {
        switch (e.action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_0__["ScrollbarAction"].SCROLL_Y:
                const el = e.event.target;
                this.scrollTop = el.scrollTop;
                if (!this.ticking) {
                    requestAnimationFrame(() => {
                        // don't use debounce since sometimes it renders incorrectly.
                        this.updatePages();
                        this.ticking = false;
                    });
                    this.ticking = true;
                }
                break;
        }
    }
}
ScrollComponent.ɵfac = function ScrollComponent_Factory(t) { return new (t || ScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
ScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ScrollComponent, selectors: [["mc-scroll"]], viewQuery: function ScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__["ScrollbarComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scrollBarCmp = _t.first);
    } }, inputs: { rowCount: "rowCount", isLoading: "isLoading" }, outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[1, "scroll", 3, "action"], [1, "scroll--content"], ["class", "page", 3, "height", 4, "ngFor", "ngForOf"], ["class", "scroll--empty", 3, "lineHeight", 4, "ngIf"], [3, "config", 4, "ngIf"], [1, "page"], [4, "ngTemplateOutlet"], [1, "scroll--empty"], [3, "config"]], template: function ScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mc-scrollbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("action", function ScrollComponent_Template_mc_scrollbar_action_0_listener($event) { return ctx.onScrollAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ScrollComponent_div_2_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ScrollComponent_div_3_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ScrollComponent_mc_loader_4_Template, 1, 5, "mc-loader", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.state == null ? null : ctx.state.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.state == null ? null : ctx.state.rowCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.state == null ? null : ctx.state.displayLoader) && (ctx.state == null ? null : ctx.state.isLoading));
    } }, directives: [_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__["ScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n[_nghost-%COMP%]   .scroll--content[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .scroll--content[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  position: relative;\n  transition: transform 0.3s, height ease-in-out 0.3s;\n}\n[_nghost-%COMP%]   .scroll--empty[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL3Njcm9sbC9zY3JvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURHSTtFQUNFLGtCQUFBO0FDRE47QURFTTtFQUNFLGtCQUFBO0VBQ0EsbURBQUE7QUNBUjtBREdJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ROIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLy8gYmFzaWMgcGVyZmVjdCBzY3JvbGwgYmFyIHN0eWxlIGlzIGZyb20gc3JjL3N0eWxlcy9wZXJmZWN0LXNjcm9sbGJhci5zY3NzXG4gIC5zY3JvbGwge1xuICAgICYtLWNvbnRlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLnBhZ2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBoZWlnaHQgZWFzZS1pbi1vdXQgMC4zczsgXG4gICAgICB9XG4gICAgfVxuICAgICYtLWVtcHR5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLnNjcm9sbC0tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5zY3JvbGwtLWNvbnRlbnQgLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBoZWlnaHQgZWFzZS1pbi1vdXQgMC4zcztcbn1cbjpob3N0IC5zY3JvbGwtLWVtcHR5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mc-scroll',
                styleUrls: ['scroll.component.scss'],
                templateUrl: './scroll.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, { scrollBarCmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__["ScrollbarComponent"]]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/scrollbar/scrollbar.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/scrollbar/scrollbar.component.ts ***!
  \****************************************************************************/
/*! exports provided: ScrollbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarComponent", function() { return ScrollbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");






const _c0 = ["*"];
// Wrapping Third party components for providing encapsulated API and styles etc.
// They can be replaced with a new good third party components in the future, but we can still use the exsiting APIs.
class ScrollbarComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultConfig = {
            suppressScrollX: true
        };
        this.defaultState = {
            suppressScrollX: true
        };
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    scrollToTop() {
        this.scrollBarCmp.directiveRef.scrollToTop();
    }
    scrollToBottom() {
        this.scrollBarCmp.directiveRef.scrollToBottom();
    }
    scrollToElement(query, offset = null) {
        this.scrollBarCmp.directiveRef.scrollToElement(query, offset);
    }
    scrollToY(y) {
        this.scrollBarCmp.directiveRef.scrollToY(y);
    }
    emitActionEvent(action, event) {
        const actionEvent = {
            action,
            target: this,
            event
        };
        this.action.emit(actionEvent);
    }
    onScrollY(e) {
        this.emitActionEvent(_shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollbarAction"].SCROLL_Y, e);
    }
    onScrollYEnd(e) {
        this.emitActionEvent(_shared_models__WEBPACK_IMPORTED_MODULE_3__["ScrollbarAction"].SCROLL_Y_END, e);
    }
}
ScrollbarComponent.ɵfac = function ScrollbarComponent_Factory(t) { return new (t || ScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollbarComponent, selectors: [["mc-scrollbar"]], viewQuery: function ScrollbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollBarCmp = _t.first);
    } }, outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "config", "psScrollY", "psYReachEnd"]], template: function ScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("psScrollY", function ScrollbarComponent_Template_perfect_scrollbar_psScrollY_0_listener($event) { return ctx.onScrollY($event); })("psYReachEnd", function ScrollbarComponent_Template_perfect_scrollbar_psYReachEnd_0_listener($event) { return ctx.onScrollYEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.state);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGxiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGxiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-scrollbar',
                styleUrls: ['scrollbar.component.scss'],
                templateUrl: './scrollbar.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { scrollBarCmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"]]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/visualizer/axis/axis.component.ts":
/*!*****************************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/visualizer/axis/axis.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisComponent", function() { return AxisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/viz-utils */ "./projects/mc-ui/src/lib/utils/viz-utils.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");






class AxisComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultConfig = {
            type: _shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerType"].BAR,
            labelField: '',
            dataFields: null,
            data2Fields: null,
            hasGrid: true,
            ticks: 8,
            scalePadding: 1,
            scalePaddingInner: 0.2,
            scalePaddingOuter: 0,
            data: null,
            decorationMaxRate: 1.1
        };
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    afterInitCmp() {
        this.render(this._config);
    }
    applyConfig(config) {
        if (!config.labelField && config.data && config.data.columns) {
            config.labelField = config.data.columns[0].field;
        }
        if (!config.dataFields && config.data && config.data.columns) {
            config.dataFields = config.data.columns.reduce((fields, column) => {
                if (column.field !== config.labelField) {
                    fields.push(column.field);
                }
                return fields;
            }, []);
        }
    }
    getLabels() {
        const data = this._config.data;
        if (data) {
            const labelField = this._config.labelField || data.columns[0].field;
            return data.data.map(d => d[labelField]);
        }
        return [];
    }
    getUnit(config, visualizerSize) {
        const minMax = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["getMinMax"])(config.dataFields, config.data.data, config.decorationMaxRate);
        // y scale
        const yScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]()
            .domain([minMax.min, minMax.max])
            .rangeRound([visualizerSize.chart.height, 0]);
        const yAxis = d3__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](yScale).ticks(config.ticks);
        let y2Scale;
        let y2Axis;
        let minMax2;
        if (config.data2Fields) {
            minMax2 = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["getMinMax"])(config.data2Fields, config.data.data, config.decorationMaxRate);
            y2Scale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]()
                .domain([minMax2.min, minMax2.max])
                .rangeRound([visualizerSize.chart.height, 0]);
            y2Axis = d3__WEBPACK_IMPORTED_MODULE_4__["axisRight"](y2Scale).ticks(config.ticks);
        }
        // x scale
        const labels = this.getLabels();
        let xScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleBand"]()
            .domain(labels)
            .rangeRound([0, visualizerSize.chart.width])
            .padding(config.scalePadding)
            .paddingInner(config.scalePaddingInner)
            .paddingOuter(config.scalePaddingOuter);
        // apply barWidth if needed
        if (this._config.barConfig && this._config.barConfig.barWidth) {
            const barWidth = this._config.barConfig.barWidth;
            const barGroupWidth = xScale.bandwidth();
            const newBarGroupWidth = barWidth * config.dataFields.length;
            if (barGroupWidth < newBarGroupWidth) {
                const widthGap = newBarGroupWidth - barGroupWidth;
                const extraWidth = widthGap * labels.length;
                visualizerSize.width += extraWidth;
                visualizerSize.chart.width += extraWidth;
                xScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleBand"]()
                    .domain(labels)
                    .rangeRound([0, visualizerSize.chart.width])
                    .padding(config.scalePadding)
                    .paddingInner(config.scalePaddingInner)
                    .paddingOuter(config.scalePaddingOuter);
            }
        }
        const xAxis = d3__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](xScale);
        // TODO: you can have a color array instead of "schemeCategory10".
        const colorScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_4__["schemeCategory10"]);
        return {
            yScale,
            yAxis,
            xScale,
            xAxis,
            y2Scale,
            y2Axis,
            labels,
            colorScale,
            fields: config.dataFields,
            fields2: config.data2Fields,
            minMax,
            minMax2
        };
    }
    getSize(visualizerSize, unit) {
        // *** render for measuring size ***
        const svg = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderChartContainer"])(this.el, visualizerSize);
        // left / right margin
        visualizerSize = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["getAxisSize"])(this.el, svg, _shared_models__WEBPACK_IMPORTED_MODULE_2__["Location"].LEFT, unit.yAxis, visualizerSize, [
            'y-axis'
        ]);
        if (this._config.data2Fields) {
            visualizerSize = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["getAxisSize"])(this.el, svg, _shared_models__WEBPACK_IMPORTED_MODULE_2__["Location"].RIGHT, unit.y2Axis, visualizerSize, [
                'y2-axis'
            ]);
        }
        visualizerSize = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["getAxisSize"])(this.el, svg, _shared_models__WEBPACK_IMPORTED_MODULE_2__["Location"].BOTTOM, unit.xAxis, visualizerSize, [
            'x-axis'
        ]);
        // save for re-use the chart drawing area
        visualizerSize.chart.height =
            visualizerSize.height - visualizerSize.margin.top - visualizerSize.margin.bottom;
        visualizerSize.chart.width =
            visualizerSize.width - visualizerSize.margin.left - visualizerSize.margin.right;
        // *** re-render with correct size ***
        this.el.innerHTML = '';
        return visualizerSize;
    }
    render(config) {
        let visualizerSize = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["initVisualizerSize"])(this.el);
        let unit = this.getUnit(config, visualizerSize);
        visualizerSize = this.getSize(visualizerSize, unit);
        // update unit by the correct size
        unit = this.getUnit(config, visualizerSize);
        // *** re-render with correct size ***
        const svg = Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderChartContainer"])(this.el, visualizerSize);
        Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderAxis"])(svg, _shared_models__WEBPACK_IMPORTED_MODULE_2__["Location"].LEFT, unit.yAxis, visualizerSize.chart, ['y-axis']);
        if (config.data2Fields) {
            Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderAxis"])(svg, _shared_models__WEBPACK_IMPORTED_MODULE_2__["Location"].RIGHT, unit.y2Axis, visualizerSize.chart, [
                'y2-axis'
            ]);
        }
        Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderAxis"])(svg, _shared_models__WEBPACK_IMPORTED_MODULE_2__["Location"].BOTTOM, unit.xAxis, visualizerSize.chart, ['x-axis']);
        // render grid
        if (config.hasGrid) {
            Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderGrid"])(svg, 'y', unit.yAxis, visualizerSize.chart, ['y-grid']);
        }
        this.renderInfo = {
            svg,
            unit,
            size: visualizerSize
        };
    }
    emitRenderedActionEvent() {
        const action = {
            target: this,
            action: _shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerAction"].RENDERED,
            config: this._config,
            renderInfo: this.renderInfo
        };
        this.action.emit(action);
    }
}
AxisComponent.ɵfac = function AxisComponent_Factory(t) { return new (t || AxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AxisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AxisComponent, selectors: [["mc-axis"]], outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function AxisComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy92aXN1YWxpemVyL2F4aXMvYXhpcy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy92aXN1YWxpemVyL2F4aXMvYXhpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL3Zpc3VhbGl6ZXIvYXhpcy9heGlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AxisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-axis',
                styleUrls: ['axis.component.scss'],
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/visualizer/bar/bar.component.ts":
/*!***************************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/visualizer/bar/bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/viz-utils */ "./projects/mc-ui/src/lib/utils/viz-utils.ts");
/* harmony import */ var _axis_axis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axis/axis.component */ "./projects/mc-ui/src/lib/components/visualizer/axis/axis.component.ts");






class BarComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultState = {
            axisConfig: null
        };
        this.defaultConfig = {
            type: _shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerType"].BAR,
            barConfig: {
                barWidth: 20
            },
            labelField: '',
            dataFields: null,
            data2Fields: null,
            hasGrid: true,
            ticks: 8,
            scalePadding: 1,
            scalePaddingInner: 0.2,
            scalePaddingOuter: 0,
            data: null
        };
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    applyState(config) {
        this.setState({ axisConfig: config });
    }
    onAxisAction(e) {
        switch (e.action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerAction"].RENDERED:
                Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderRects"])(e.config, e.renderInfo);
                break;
        }
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarComponent, selectors: [["mc-bar"]], outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config", "action"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-axis", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function BarComponent_Template_mc_axis_action_0_listener($event) { return ctx.onAxisAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.state.axisConfig);
    } }, directives: [_axis_axis_component__WEBPACK_IMPORTED_MODULE_4__["AxisComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy92aXN1YWxpemVyL2Jhci9iYXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvdmlzdWFsaXplci9iYXIvYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvdmlzdWFsaXplci9iYXIvYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-bar',
                styleUrls: ['bar.component.scss'],
                templateUrl: 'bar.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/visualizer/line/line.component.ts":
/*!*****************************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/visualizer/line/line.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/viz-utils */ "./projects/mc-ui/src/lib/utils/viz-utils.ts");
/* harmony import */ var _axis_axis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axis/axis.component */ "./projects/mc-ui/src/lib/components/visualizer/axis/axis.component.ts");






class LineComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(er) {
        super(er);
        this.er = er;
        this.defaultState = {
            axisConfig: null
        };
        this.defaultConfig = {
            type: _shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerType"].LINE,
            labelField: '',
            dataFields: null,
            data2Fields: null,
            hasGrid: true,
            ticks: 8,
            scalePadding: 1,
            scalePaddingInner: 0.2,
            scalePaddingOuter: 0,
            data: null
        };
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    applyState(config) {
        this.setState({ axisConfig: config });
    }
    onAxisAction(e) {
        switch (e.action) {
            case _shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerAction"].RENDERED:
                Object(_utils_viz_utils__WEBPACK_IMPORTED_MODULE_3__["renderLines"])(e.config, e.renderInfo);
                break;
        }
    }
}
LineComponent.ɵfac = function LineComponent_Factory(t) { return new (t || LineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineComponent, selectors: [["mc-line"]], outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config", "action"]], template: function LineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-axis", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function LineComponent_Template_mc_axis_action_0_listener($event) { return ctx.onAxisAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.state.axisConfig);
    } }, directives: [_axis_axis_component__WEBPACK_IMPORTED_MODULE_4__["AxisComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy92aXN1YWxpemVyL2xpbmUvbGluZS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy92aXN1YWxpemVyL2xpbmUvbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnRzL3Zpc3VhbGl6ZXIvbGluZS9saW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-line',
                styleUrls: ['line.component.scss'],
                templateUrl: 'line.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/components/visualizer/visualizer.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/mc-ui/src/lib/components/visualizer/visualizer.component.ts ***!
  \******************************************************************************/
/*! exports provided: VisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return VisualizerComponent; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/components/base.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid/grid.component */ "./projects/mc-ui/src/lib/components/grid/grid.component.ts");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar/bar.component */ "./projects/mc-ui/src/lib/components/visualizer/bar/bar.component.ts");
/* harmony import */ var _line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line/line.component */ "./projects/mc-ui/src/lib/components/visualizer/line/line.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.service */ "./projects/mc-ui/src/lib/shared.service.ts");








class VisualizerComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(er, sharedService) {
        super(er);
        this.er = er;
        this.sharedService = sharedService;
        this.compSubs = [];
        this.defaultConfig = {
            type: _shared_models__WEBPACK_IMPORTED_MODULE_0__["VisualizerType"].GRID,
            gridConfig: {},
            labelField: '',
            dataFields: null,
            data2Fields: null,
            hasGrid: true,
            ticks: 8,
            scalePadding: 1,
            scalePaddingInner: 0.2,
            scalePaddingOuter: 0,
            data: null
        };
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set data(data) {
        if (data) {
            this._config.data = data;
            if (this.rendered) {
                this.render(this._config);
            }
        }
    }
    afterInitCmp() {
        this.render(this._config);
    }
    render(config) {
        if (config.data) {
            switch (config.type) {
                case _shared_models__WEBPACK_IMPORTED_MODULE_0__["VisualizerType"].GRID:
                    this.rednerGrid(config);
                    break;
                case _shared_models__WEBPACK_IMPORTED_MODULE_0__["VisualizerType"].BAR:
                    this.renderBar(config);
                    break;
                case _shared_models__WEBPACK_IMPORTED_MODULE_0__["VisualizerType"].LINE:
                    this.renderLine(config);
                    break;
            }
        }
    }
    renderBar(config) {
        this.removeContent();
        const cr = this.sharedService.addComponent(_bar_bar_component__WEBPACK_IMPORTED_MODULE_4__["BarComponent"], this.el);
        const instance = cr.instance;
        instance.config = config;
        this.cr = cr;
    }
    renderLine(config) {
        this.removeContent();
        const cr = this.sharedService.addComponent(_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"], this.el);
        const instance = cr.instance;
        instance.config = config;
        this.cr = cr;
    }
    rednerGrid(config) {
        this.removeContent();
        const cr = this.sharedService.addComponent(_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], this.el);
        const instance = cr.instance;
        const { columns, data } = config.data;
        const cfg = Object.assign({
            themes: ['visualizer', ...config.themes],
            rowHeight: 42,
            columns,
            data: {
                rows: data,
                rowCount: data.length
            }
        }, config.gridConfig);
        instance.config = cfg;
        this.compSubs.push(instance.action.subscribe((e) => {
            switch (e.action) {
                case _shared_models__WEBPACK_IMPORTED_MODULE_0__["GridAction"].SELECT_ROW:
                    this.action.emit({
                        target: this,
                        event: e,
                        action: _shared_models__WEBPACK_IMPORTED_MODULE_0__["VisualizerAction"].SELECT_ITEM,
                        data: e.rowData,
                        el: e.rowEl
                    });
                    break;
            }
        }));
        this.cr = cr;
    }
    removeContent() {
        if (this.cr) {
            this.compSubs.forEach(s => s.unsubscribe());
            this.sharedService.removeComponent(this.cr);
            this.cr = null;
        }
    }
    destroyCmp() {
        this.removeContent();
    }
}
VisualizerComponent.ɵfac = function VisualizerComponent_Factory(t) { return new (t || VisualizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"])); };
VisualizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisualizerComponent, selectors: [["mc-visualizer"]], inputs: { data: "data" }, outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function VisualizerComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy92aXN1YWxpemVyL3Zpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudHMvdmlzdWFsaXplci92aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50cy92aXN1YWxpemVyL3Zpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisualizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-visualizer',
                styleUrls: ['visualizer.component.scss'],
                templateUrl: 'visualizer.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/mc-ui.module.ts":
/*!************************************************!*\
  !*** ./projects/mc-ui/src/lib/mc-ui.module.ts ***!
  \************************************************/
/*! exports provided: McUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McUiModule", function() { return McUiModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./projects/mc-ui/src/lib/shared.service.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./projects/mc-ui/src/lib/components/index.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class McUiModule {
}
McUiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: McUiModule });
McUiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function McUiModule_Factory(t) { return new (t || McUiModule)(); }, providers: [
        _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](McUiModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["MaskComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["ScrollbarComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["GridBodyComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["GridHeaderComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["ScrollComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["VisualizerComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["BarComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["TextComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["AxisComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["LineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]], exports: [_components__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["MaskComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["ScrollbarComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["GridBodyComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["GridHeaderComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["ScrollComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["VisualizerComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["BarComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["TextComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["AxisComponent"],
        _components__WEBPACK_IMPORTED_MODULE_4__["LineComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McUiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]],
                declarations: [
                    _components__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["MaskComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["ScrollbarComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["GridBodyComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["GridHeaderComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["ScrollComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["VisualizerComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["BarComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["TextComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["AxisComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["LineComponent"]
                ],
                exports: [
                    _components__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["MaskComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["ScrollbarComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["GridBodyComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["GridHeaderComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["ScrollComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["VisualizerComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["BarComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["TextComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["AxisComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_4__["LineComponent"]
                ],
                providers: [
                    _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/shared.models.ts":
/*!*************************************************!*\
  !*** ./projects/mc-ui/src/lib/shared.models.ts ***!
  \*************************************************/
/*! exports provided: Align, SortDirection, Icon, ComponentTheme, PopupStartFrom, Location, InputType, DataType, ListAction, ScrollDataAction, ScrollbarAction, ComponentAction, GridAction, GridAccordionAction, ScrollAction, InputAction, VisualizerAction, VisualizerType, VisualizerScaleType, VisualizerMetaField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Align", function() { return Align; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentTheme", function() { return ComponentTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupStartFrom", function() { return PopupStartFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAction", function() { return ListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDataAction", function() { return ScrollDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarAction", function() { return ScrollbarAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentAction", function() { return ComponentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridAction", function() { return GridAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridAccordionAction", function() { return GridAccordionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollAction", function() { return ScrollAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAction", function() { return InputAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerAction", function() { return VisualizerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerType", function() { return VisualizerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerScaleType", function() { return VisualizerScaleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerMetaField", function() { return VisualizerMetaField; });
// ************* common component enums **************
var Align;
(function (Align) {
    Align["LEFT"] = "LEFT";
    Align["RIGHT"] = "RIGHT";
    Align["CENTER"] = "CENTER";
    Align["TOP"] = "TOP";
    Align["BOTTOM"] = "BOTTOM";
})(Align || (Align = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["DESC"] = "DESC";
    SortDirection["ASC"] = "ASC";
})(SortDirection || (SortDirection = {}));
var Icon;
(function (Icon) {
    Icon["menu"] = "menu";
    Icon["logo"] = "logo";
    Icon["user"] = "user";
    Icon["list"] = "list";
    Icon["downloadGreen"] = "download-green";
    Icon["download"] = "download";
    Icon["arrowLeft"] = "arrow-left";
    Icon["close"] = "close";
    Icon["arrowDown"] = "arrow-down";
    Icon["chevron"] = "chevron";
})(Icon || (Icon = {}));
var ComponentTheme;
(function (ComponentTheme) {
    ComponentTheme["gridBodyAccordion"] = "grid-body-accordion,";
    ComponentTheme["gridHeaderSort"] = "grid-header-sort";
    ComponentTheme["horizontal"] = "horizontal";
    ComponentTheme["popup"] = "popup";
})(ComponentTheme || (ComponentTheme = {}));
var PopupStartFrom;
(function (PopupStartFrom) {
    PopupStartFrom[PopupStartFrom["TOP"] = 0] = "TOP";
    PopupStartFrom[PopupStartFrom["BOTTOM"] = 1] = "BOTTOM";
})(PopupStartFrom || (PopupStartFrom = {}));
var Location;
(function (Location) {
    Location["LEFT"] = "LEFT";
    Location["RIGHT"] = "RIGHT";
    Location["CENTER"] = "CENTER";
    Location["TOP"] = "TOP";
    Location["BOTTOM"] = "BOTTOM";
})(Location || (Location = {}));
var InputType;
(function (InputType) {
    InputType["text"] = "text";
    InputType["number"] = "number";
    InputType["search"] = "search";
    InputType["email"] = "email";
    InputType["tel"] = "tel";
    InputType["url"] = "url";
    InputType["range"] = "range";
    InputType["datetimeLocal"] = "datetime-local";
    InputType["month"] = "month";
    InputType["time"] = "time";
    InputType["week"] = "week";
    InputType["date"] = "date";
    InputType["color"] = "color";
})(InputType || (InputType = {}));
var DataType;
(function (DataType) {
    DataType[DataType["STRING"] = 0] = "STRING";
    DataType[DataType["NUMBER"] = 1] = "NUMBER";
    DataType[DataType["DATE"] = 2] = "DATE";
})(DataType || (DataType = {}));
// ***** Component Action ****** Action need to have a string, since they can be 'data-action'.
var ListAction;
(function (ListAction) {
    ListAction["UNSELECT_ITEM"] = "UNSELECT_ITEM";
    ListAction["SELECT_ITEM"] = "SELECT_ITEM";
})(ListAction || (ListAction = {}));
var ScrollDataAction;
(function (ScrollDataAction) {
    ScrollDataAction["INIT"] = "INIT";
    ScrollDataAction["APPEND"] = "APPEND";
    ScrollDataAction["RELOAD"] = "RELOAD";
    ScrollDataAction["INSERT"] = "INSERT";
    ScrollDataAction["SORT"] = "SORT";
})(ScrollDataAction || (ScrollDataAction = {}));
var ScrollbarAction;
(function (ScrollbarAction) {
    ScrollbarAction["SCROLL_Y"] = "SCROLL_Y";
    ScrollbarAction["SCROLL_Y_END"] = "SCROLL_Y_END";
})(ScrollbarAction || (ScrollbarAction = {}));
var ComponentAction;
(function (ComponentAction) {
    ComponentAction["RENDERED"] = "RENDERED";
    ComponentAction["HID"] = "HID";
})(ComponentAction || (ComponentAction = {}));
var GridAction;
(function (GridAction) {
    GridAction["SELECT_CELL"] = "SELECT_CELL";
    GridAction["SORT"] = "SORT";
    GridAction["MOUSEOVER_CELL"] = "MOUSEOVER_CELL";
    GridAction["UPDATE_WIDTH"] = "UPDATE_WIDTH";
    GridAction["LOADED"] = "LOADED";
    GridAction["SELECT_COLUMN"] = "SELECT_COLUMN";
    GridAction["GET_DATA"] = "GET_DATA";
    GridAction["SELECT_ROW"] = "SELECT_ROW";
    GridAction["UNSELECT_ROW"] = "UNSELECT_ROW";
    GridAction["REMOVE_PAGE"] = "REMOVE_PAGE";
})(GridAction || (GridAction = {}));
var GridAccordionAction;
(function (GridAccordionAction) {
    GridAccordionAction["UNSELECT_ROW"] = "UNSELECT_ROW";
    GridAccordionAction["SELECT_ROW"] = "SELECT_ROW";
    GridAccordionAction["SELECT_CELL"] = "SELECT_CELL";
    GridAccordionAction["SORT"] = "SORT";
})(GridAccordionAction || (GridAccordionAction = {}));
var ScrollAction;
(function (ScrollAction) {
    ScrollAction["UPDATE_PAGES"] = "UPDATE_PAGES";
    ScrollAction["GET_ROW_COUNT"] = "GET_ROW_COUNT";
})(ScrollAction || (ScrollAction = {}));
var InputAction;
(function (InputAction) {
    InputAction["CHANGE"] = "CHANGE";
    InputAction["KEY_UP"] = "KEY_UP";
})(InputAction || (InputAction = {}));
var VisualizerAction;
(function (VisualizerAction) {
    VisualizerAction["SELECT_ITEM"] = "SELECT_ITEM";
    VisualizerAction["RENDERED"] = "RENDERED";
})(VisualizerAction || (VisualizerAction = {}));
var VisualizerType;
(function (VisualizerType) {
    VisualizerType[VisualizerType["GRID"] = 0] = "GRID";
    VisualizerType[VisualizerType["BAR"] = 1] = "BAR";
    VisualizerType[VisualizerType["HORIZONTAL_BAR"] = 2] = "HORIZONTAL_BAR";
    VisualizerType[VisualizerType["LINE"] = 3] = "LINE";
    VisualizerType[VisualizerType["BAR_LINE"] = 4] = "BAR_LINE";
})(VisualizerType || (VisualizerType = {}));
var VisualizerScaleType;
(function (VisualizerScaleType) {
    VisualizerScaleType[VisualizerScaleType["LINEAR"] = 0] = "LINEAR";
    VisualizerScaleType[VisualizerScaleType["BAND"] = 1] = "BAND";
})(VisualizerScaleType || (VisualizerScaleType = {}));
var VisualizerMetaField;
(function (VisualizerMetaField) {
    VisualizerMetaField["total"] = "__total__";
})(VisualizerMetaField || (VisualizerMetaField = {}));


/***/ }),

/***/ "./projects/mc-ui/src/lib/shared.service.ts":
/*!**************************************************!*\
  !*** ./projects/mc-ui/src/lib/shared.service.ts ***!
  \**************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);



/**
 * App Level shared services e.g) Dynamic Components or EventEmitters for sending message between UI Page Componensts, window resize etc.
 */
class SharedService {
    constructor(_resolver, injector, appRef) {
        this._resolver = _resolver;
        this.injector = injector;
        this.appRef = appRef;
        this._message = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ from: '', to: '', action: '' });
        this.message = this._message.asObservable();
        this.data = new Map();
        this.bodyPress = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.getBody(), 'click');
        this.windowResize = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize');
    }
    // for global data
    setData(key, value) {
        this.data.set(key, value);
    }
    getData(key) {
        return this.data.get(key);
    }
    // Sending a message between components that can't be accessed by Input/Output
    sendMessage(message) {
        this._message.next(message);
    }
    addComponent(cmpType, parentEl = document.body) {
        // https://malcoded.com/posts/angular-dynamic-components/
        const factory = this._resolver.resolveComponentFactory(cmpType);
        const cmp = factory.create(this.injector);
        this.appRef.attachView(cmp.hostView);
        parentEl.appendChild(cmp.location.nativeElement);
        return cmp;
    }
    removeComponent(cmp) {
        this.appRef.detachView(cmp.hostView);
        cmp.destroy();
        cmp = null;
    }
    getBody() {
        return document.body;
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }]; }, null); })();


/***/ }),

/***/ "./projects/mc-ui/src/lib/utils/data-utils.ts":
/*!****************************************************!*\
  !*** ./projects/mc-ui/src/lib/utils/data-utils.ts ***!
  \****************************************************/
/*! exports provided: sortObjectArray, setStateIf, setState, convertCsvToJson, convertKeysToColumns, convertCsvToVisualizerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortObjectArray", function() { return sortObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateIf", function() { return setStateIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCsvToJson", function() { return convertCsvToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertKeysToColumns", function() { return convertKeysToColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCsvToVisualizerData", function() { return convertCsvToVisualizerData; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./projects/mc-ui/src/lib/utils/utils.ts");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);



function sortObjectArray(data, sort) {
    data = data.concat();
    data.sort((a, b) => {
        let valA = a[sort.fieldName];
        let valB = b[sort.fieldName];
        if (sort.direction === _shared_models__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].DESC) {
            [valA, valB] = [valB, valA];
        }
        return typeof valA === 'string' ? valA.localeCompare(valB) : valA - valB;
    });
    return data;
}
function setStateIf(target, source) {
    // if source has target keys, then apply them to target
    source = Object.assign({}, source);
    return Object.keys(target).reduce((t, key) => {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(source[key])) {
            t[key] = source[key];
        }
        else {
            t[key] = target[key];
        }
        return t;
    }, {});
}
function setState(target, source) {
    // copy source to target
    source = Object.assign({}, source);
    Object.keys(source).forEach(key => {
        target[key] = source[key];
    });
    return target;
}
function convertCsvToJson(text) {
    const result = papaparse__WEBPACK_IMPORTED_MODULE_2__["parse"](text, { header: true });
    if (result.error) {
        console.warn('CSV parsing Error: ' + result.error);
    }
    return result.data;
}
function convertKeysToColumns(obj) {
    return Object.keys(obj).reduce((columns, key) => {
        columns.push({ field: key, name: key });
        return columns;
    }, []);
}
function convertCsvToVisualizerData(text, filters = null) {
    let data = convertCsvToJson(text);
    const columns = convertKeysToColumns(data[0] || {});
    if (filters) {
        data = data.filter((item) => filters.some(filter => {
            const value = item[filter.field];
            const keyword = filter.keyword;
            switch (filter.type) {
                case _shared_models__WEBPACK_IMPORTED_MODULE_0__["DataType"].DATE:
                case _shared_models__WEBPACK_IMPORTED_MODULE_0__["DataType"].NUMBER:
                    // TODO: compare conditions
                    return value === keyword;
                default:
                    // string
                    return (value + '').toLowerCase().includes(keyword.toLowerCase());
            }
        }));
    }
    return {
        columns,
        data
    };
}


/***/ }),

/***/ "./projects/mc-ui/src/lib/utils/dom-utils.ts":
/*!***************************************************!*\
  !*** ./projects/mc-ui/src/lib/utils/dom-utils.ts ***!
  \***************************************************/
/*! exports provided: getComponentNameByElement, getThemeClasses, getContainerWidth, findParentDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentNameByElement", function() { return getComponentNameByElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeClasses", function() { return getThemeClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerWidth", function() { return getContainerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParentDom", function() { return findParentDom; });
function getComponentNameByElement(el) {
    const items = el.tagName.toLowerCase().split('-');
    items.shift();
    return items.join('-');
}
function getThemeClasses(compName, themes) {
    // normalize themes
    themes = !Array.isArray(themes) ? [themes] : themes.concat();
    return themes.reduce((agg, d) => {
        // d can be empty
        if (d) {
            agg.push(compName + '-' + d);
        }
        return agg;
    }, []);
}
function getContainerWidth(conEl) {
    const stylePosition = conEl.style.position;
    conEl.style.position = 'relative';
    const children = Array.from(conEl.children);
    children.forEach((el) => (el.style.display = 'none'));
    const width = conEl.clientWidth;
    conEl.style.position = stylePosition;
    children.forEach((el) => (el.style.display = ''));
    return width;
}
// selector: class name(.class-name) or tag name (mc-componentname)
function findParentDom(dom, selector, stopClassName = '', depth = 10) {
    let cls = '';
    let resultDom;
    if (!dom || !dom.nodeName) {
        return null;
    }
    if (selector.startsWith('.')) {
        cls = selector.slice(1);
    }
    while (depth--) {
        if (!dom ||
            !dom.classList ||
            dom.nodeName === 'BODY' ||
            (stopClassName ? dom.classList.contains(stopClassName) : false)) {
            resultDom = null;
            break;
        }
        if (cls) {
            if (dom.classList.contains(cls)) {
                resultDom = dom;
                break;
            }
        }
        else {
            if (dom.nodeName.toLowerCase() === selector.toLowerCase()) {
                resultDom = dom;
                break;
            }
        }
        dom = dom.parentNode;
    }
    return resultDom;
}


/***/ }),

/***/ "./projects/mc-ui/src/lib/utils/grid-utils.ts":
/*!****************************************************!*\
  !*** ./projects/mc-ui/src/lib/utils/grid-utils.ts ***!
  \****************************************************/
/*! exports provided: getAutoColumnWidth, getEvenColumnWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutoColumnWidth", function() { return getAutoColumnWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvenColumnWidth", function() { return getEvenColumnWidth; });
function getAutoColumnWidth(columns, containerWidth, columnWidthIsRatio = false, minWidth = 0) {
    const hasColWidth = columns && columns[0].width;
    if (columnWidthIsRatio) {
        if (hasColWidth) {
            let totalFixedWidth = 0;
            const totalWidth = columns.reduce((tot, col) => {
                if (col.fixedWidth) {
                    totalFixedWidth += col.width;
                }
                else {
                    tot = tot + col.width;
                }
                return tot;
            }, 0);
            const adjustContainerWidth = containerWidth - totalFixedWidth;
            let adjustTotalWidth = 0;
            columns = columns.map(column => {
                // Use Math.floor since the cell width has x.xx, the web browser doesn't display correctly. so, we need integer. If there is a gap, we need to spread it to the columns.
                column.width = column.fixedWidth
                    ? column.width
                    : Math.floor((column.width / totalWidth) * adjustContainerWidth);
                adjustTotalWidth += column.width;
                return column;
            });
            // if it remains the width, spread it
            let remainWidth = adjustContainerWidth - adjustTotalWidth;
            while (remainWidth > 0) {
                columns.forEach(column => {
                    if (remainWidth > 0) {
                        column.width++;
                        remainWidth--;
                    }
                });
            }
        }
        else {
            columns = getEvenColumnWidth(columns, containerWidth, minWidth);
        }
    }
    else {
        columns = getEvenColumnWidth(columns, containerWidth, minWidth);
    }
    return columns;
}
function getEvenColumnWidth(columns, containerWidth, minWidth = 0) {
    // auto column width
    let colWidth = containerWidth / columns.length;
    colWidth = colWidth < minWidth ? minWidth : colWidth;
    // update state
    return columns.map(column => {
        column.width = colWidth;
        return column;
    });
}


/***/ }),

/***/ "./projects/mc-ui/src/lib/utils/utils.ts":
/*!***********************************************!*\
  !*** ./projects/mc-ui/src/lib/utils/utils.ts ***!
  \***********************************************/
/*! exports provided: isEmpty, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function isEmpty(val) {
    return val === null || val === '' || val === undefined;
}
function debounce(callback, wait, context = this) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            callback.apply(context, args);
        }, wait);
    };
}


/***/ }),

/***/ "./projects/mc-ui/src/lib/utils/viz-utils.ts":
/*!***************************************************!*\
  !*** ./projects/mc-ui/src/lib/utils/viz-utils.ts ***!
  \***************************************************/
/*! exports provided: getMinMax, renderChartContainer, renderAxis, getSVGSize, renderGrid, getAxisSize, initVisualizerSize, applyXAxisTextSize, getTranslateX, renderRects, renderLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinMax", function() { return getMinMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderChartContainer", function() { return renderChartContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAxis", function() { return renderAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSVGSize", function() { return getSVGSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGrid", function() { return renderGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisSize", function() { return getAxisSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initVisualizerSize", function() { return initVisualizerSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyXAxisTextSize", function() { return applyXAxisTextSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslateX", function() { return getTranslateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRects", function() { return renderRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLines", function() { return renderLines; });
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");


function getMinMax(fields, data, decorationMaxRate = 1) {
    const mm = data.reduce((minMax, d) => {
        fields.forEach(field => {
            const val = +d[field];
            if (typeof val === 'number' && !isNaN(val)) {
                minMax.min = Math.min(minMax.min, val);
                minMax.max = Math.max(minMax.max, val);
            }
        });
        return minMax;
    }, { min: Infinity, max: -Infinity });
    mm.max = mm.max * decorationMaxRate;
    return mm;
}
function renderChartContainer(el, visualizerSize) {
    // apply margin
    const svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](el)
        .append('svg')
        .attr('class', 'container')
        .attr('width', visualizerSize.width)
        .attr('height', visualizerSize.height);
    return svg
        .append('g')
        .attr('transform', `translate(${visualizerSize.margin.left},${visualizerSize.margin.top})`);
}
function renderAxis(svg, location, axis, size, themeClass = []) {
    svg = svg.append('g').attr('class', themeClass.join(' '));
    switch (location) {
        case _shared_models__WEBPACK_IMPORTED_MODULE_0__["Location"].BOTTOM:
            svg = svg.attr('transform', `translate(0,${size.height})`).call(axis);
            if (size.rotateXAxisText) {
                svg
                    .selectAll('.tick text')
                    .attr('style', 'transform: rotate(-45deg) translate(-4px,-6px);text-anchor:end;');
            }
            break;
        case _shared_models__WEBPACK_IMPORTED_MODULE_0__["Location"].RIGHT:
            svg.attr('transform', `translate(${size.width},0)`).call(axis);
            break;
        case _shared_models__WEBPACK_IMPORTED_MODULE_0__["Location"].LEFT:
            svg.call(axis);
            break;
    }
}
function getSVGSize(el, selector) {
    const svg = el.querySelector(selector);
    return svg.getBBox();
}
function renderGrid(svg, direction, axis, visualizerSize, themeClass = []) {
    svg = svg.append('g').attr('class', themeClass.join(' '));
    let tickSize;
    switch (direction) {
        case 'x':
            svg = svg.attr('transform', `translate(0,${visualizerSize.height})`);
            tickSize = -visualizerSize.height;
            break;
        case 'y':
            tickSize = -visualizerSize.width;
            break;
    }
    svg.call(axis.tickSize(tickSize).tickFormat(''));
}
function getAxisSize(el, svg, location, axis, visualizerSize, themeClass = []) {
    renderAxis(svg, location, axis, visualizerSize, themeClass);
    const boxSize = getSVGSize(el, '.' + themeClass[0]);
    switch (location) {
        case _shared_models__WEBPACK_IMPORTED_MODULE_0__["Location"].BOTTOM:
            visualizerSize = applyXAxisTextSize(el, visualizerSize, themeClass[0]);
            break;
        case _shared_models__WEBPACK_IMPORTED_MODULE_0__["Location"].LEFT:
            visualizerSize.margin.left = boxSize.width;
            break;
        case _shared_models__WEBPACK_IMPORTED_MODULE_0__["Location"].RIGHT:
            visualizerSize.margin.right = boxSize.width;
    }
    return visualizerSize;
}
function initVisualizerSize(el) {
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    return {
        width,
        height,
        chart: {
            width,
            height,
            rotateXAxisText: false // when overlapping the x axis text
        },
        margin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    };
}
function applyXAxisTextSize(el, size, cls) {
    const els = el.querySelectorAll(`.${cls} .tick`);
    const tickWidth = els.length > 1 ? getTranslateX(els[1]) - getTranslateX(els[0]) : -1;
    let lastTextSize;
    const maxWidth = Array.from(els).reduce((max, _el) => {
        lastTextSize = _el.getBBox();
        return Math.max(lastTextSize.width, max);
    }, -Infinity);
    let textHeight = lastTextSize.height;
    if (tickWidth < maxWidth) {
        size.chart.rotateXAxisText = true;
        textHeight = maxWidth;
    }
    size.margin.top = lastTextSize.height / 2;
    size.margin.right = maxWidth / 2;
    size.margin.bottom = size.chart.rotateXAxisText
        ? textHeight + 5
        : lastTextSize.height;
    return size;
}
function getTranslateX(el) {
    const t = el.getAttribute('transform');
    const val = t.split('translate(')[1].split(',')[0];
    return +val;
}
function renderRects(config, renderInfo) {
    const { svg, unit, size } = renderInfo;
    const data = config.data.data;
    const animDuration = 1000;
    unit.xScaleInner = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
        .domain(unit.fields)
        .rangeRound([0, unit.xScale.bandwidth()])
        .padding(0);
    let rects = svg
        .append('g')
        .selectAll('g')
        .data(unit.labels)
        .enter()
        .append('g')
        .attr('class', 'group rects')
        .attr('transform', (label) => `translate(${unit.xScale(label)},0)`);
    rects = rects
        .selectAll('rect')
        .data((d, i) => unit.fields.map(field => ({ field, value: +data[i][field] })));
    // for updating data
    rects
        .exit()
        .transition()
        .duration(animDuration)
        .remove();
    rects = rects.enter().append('rect');
    rects
        .attr('class', 'item rect')
        .attr('width', d => unit.xScaleInner.bandwidth(d.field))
        .attr('x', d => unit.xScaleInner(d.field))
        .attr('fill', d => unit.colorScale(d.field))
        .attr('title', d => `${d.field}: ${d.value}`)
        .attr('y', unit.minMax.min < 0 ? size.height - size.margin.bottom : unit.yScale(0))
        .attr('height', 0)
        .transition()
        .duration(animDuration)
        .ease(d3__WEBPACK_IMPORTED_MODULE_1__["easeQuadIn"])
        .attr('y', d => (d.value > 0 ? unit.yScale(d.value) : unit.yScale(0)))
        .attr('height', d => {
        const h = unit.minMax.min < 0
            ? Math.abs(unit.yScale(d.value) - unit.yScale(0))
            : size.chart.height - unit.yScale(d.value);
        return h < 0 ? 0 : h;
    });
}
function renderLines(config, renderInfo) {
    const { svg, unit, size } = renderInfo;
    const data = config.data.data;
    const animDuration = 1000;
    const fieldLabelValueMap = unit.labels.reduce((map, label, rowIndex) => {
        unit.fields.forEach(field => {
            const labelValues = map.get(field) || [];
            labelValues.push({ field, label, value: data[rowIndex][field] });
            map.set(field, labelValues);
        });
        return map;
    }, new Map());
    const lineData = [...fieldLabelValueMap.values()];
    unit.line = d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
        .x((d) => unit.xScale(d.label))
        .y((d) => unit.yScale(d.value));
    const line = svg
        .selectAll('.lines')
        .data(lineData)
        .enter()
        .append('g')
        .attr('class', 'lines')
        .attr('transform', d => `translate(${unit.xScale.bandwidth() / 2},0)`);
    const path = line
        .append('path')
        .attr('class', 'line')
        .attr('d', d => unit.line(d))
        .style('stroke', d => unit.colorScale(d[0].field))
        .style('stroke-width', 1.5)
        .style('stroke-linejoin', 'round')
        .style('stroke-linecap', 'round')
        .style('fill', 'none')
        .attr('stroke-dasharray', function () {
        const totalLength = this.getTotalLength();
        return totalLength + ' ' + totalLength;
    })
        .attr('stroke-dashoffset', function () {
        const totalLength = this.getTotalLength();
        return totalLength;
    })
        .transition()
        .duration(animDuration)
        .ease(d3__WEBPACK_IMPORTED_MODULE_1__["easeLinear"])
        .attr('stroke-dashoffset', 0);
    const circle = svg
        .selectAll('.circles')
        .data(lineData)
        .enter()
        .append('g')
        .attr('class', 'circles')
        .attr('transform', d => `translate(${unit.xScale.bandwidth() / 2},0)`);
    const circles = circle
        .selectAll('circle')
        .data(d => d)
        .enter()
        .append('circle');
    circles
        .attr('class', 'circle')
        .attr('cx', d => unit.xScale(d.label))
        .attr('cy', d => unit.yScale(d.value))
        .attr('r', '2')
        .attr('onmouseover', 'this.setAttribute("r", 4)')
        .attr('onmouseout', 'this.setAttribute("r", 2)')
        .style('stroke', d => unit.colorScale(d.field))
        .style('fill', '#fff');
}


/***/ }),

/***/ "./projects/mc-ui/src/public-api.ts":
/*!******************************************!*\
  !*** ./projects/mc-ui/src/public-api.ts ***!
  \******************************************/
/*! exports provided: SharedService, McUiModule, Align, SortDirection, Icon, ComponentTheme, PopupStartFrom, Location, InputType, DataType, ListAction, ScrollDataAction, ScrollbarAction, ComponentAction, GridAction, GridAccordionAction, ScrollAction, InputAction, VisualizerAction, VisualizerType, VisualizerScaleType, VisualizerMetaField, IconComponent, ListComponent, ListItemComponent, MaskComponent, DrawerComponent, ScrollbarComponent, PopupComponent, GridComponent, GridBodyComponent, GridHeaderComponent, ScrollComponent, LoaderComponent, VisualizerComponent, TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared.service */ "./projects/mc-ui/src/lib/shared.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return _lib_shared_service__WEBPACK_IMPORTED_MODULE_0__["SharedService"]; });

/* harmony import */ var _lib_mc_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mc-ui.module */ "./projects/mc-ui/src/lib/mc-ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "McUiModule", function() { return _lib_mc_ui_module__WEBPACK_IMPORTED_MODULE_1__["McUiModule"]; });

/* harmony import */ var _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/shared.models */ "./projects/mc-ui/src/lib/shared.models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Align", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["Align"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["SortDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentTheme", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["ComponentTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupStartFrom", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["PopupStartFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["InputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["DataType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["ListAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDataAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["ScrollDataAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["ScrollbarAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["ComponentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["GridAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridAccordionAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["GridAccordionAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["ScrollAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["InputAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerAction", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerType", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerScaleType", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerScaleType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerMetaField", function() { return _lib_shared_models__WEBPACK_IMPORTED_MODULE_2__["VisualizerMetaField"]; });

/* harmony import */ var _lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/icon/icon.component */ "./projects/mc-ui/src/lib/components/icon/icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]; });

/* harmony import */ var _lib_components_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/list/list.component */ "./projects/mc-ui/src/lib/components/list/list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _lib_components_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]; });

/* harmony import */ var _lib_components_list_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/list/list-item.component */ "./projects/mc-ui/src/lib/components/list/list-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return _lib_components_list_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ListItemComponent"]; });

/* harmony import */ var _lib_components_mask_mask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/mask/mask.component */ "./projects/mc-ui/src/lib/components/mask/mask.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function() { return _lib_components_mask_mask_component__WEBPACK_IMPORTED_MODULE_6__["MaskComponent"]; });

/* harmony import */ var _lib_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/drawer/drawer.component */ "./projects/mc-ui/src/lib/components/drawer/drawer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return _lib_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_7__["DrawerComponent"]; });

/* harmony import */ var _lib_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/components/scrollbar/scrollbar.component */ "./projects/mc-ui/src/lib/components/scrollbar/scrollbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollbarComponent", function() { return _lib_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_8__["ScrollbarComponent"]; });

/* harmony import */ var _lib_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/components/popup/popup.component */ "./projects/mc-ui/src/lib/components/popup/popup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return _lib_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]; });

/* harmony import */ var _lib_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/components/grid/grid.component */ "./projects/mc-ui/src/lib/components/grid/grid.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return _lib_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"]; });

/* harmony import */ var _lib_components_grid_grid_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/components/grid/grid-body.component */ "./projects/mc-ui/src/lib/components/grid/grid-body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function() { return _lib_components_grid_grid_body_component__WEBPACK_IMPORTED_MODULE_11__["GridBodyComponent"]; });

/* harmony import */ var _lib_components_grid_grid_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/components/grid/grid-header.component */ "./projects/mc-ui/src/lib/components/grid/grid-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function() { return _lib_components_grid_grid_header_component__WEBPACK_IMPORTED_MODULE_12__["GridHeaderComponent"]; });

/* harmony import */ var _lib_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/components/scroll/scroll.component */ "./projects/mc-ui/src/lib/components/scroll/scroll.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return _lib_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_13__["ScrollComponent"]; });

/* harmony import */ var _lib_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/components/loader/loader.component */ "./projects/mc-ui/src/lib/components/loader/loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _lib_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]; });

/* harmony import */ var _lib_components_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/components/visualizer/visualizer.component */ "./projects/mc-ui/src/lib/components/visualizer/visualizer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return _lib_components_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_15__["VisualizerComponent"]; });

/* harmony import */ var _lib_components_form_fields_text_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/components/form/fields/text/text.component */ "./projects/mc-ui/src/lib/components/form/fields/text/text.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return _lib_components_form_fields_text_text_component__WEBPACK_IMPORTED_MODULE_16__["TextComponent"]; });

/*
 * Public API Surface of mc-ui
 */



















/***/ }),

/***/ "./src/app/app-base.component.ts":
/*!***************************************!*\
  !*** ./src/app/app-base.component.ts ***!
  \***************************************/
/*! exports provided: AppBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function() { return AppBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppBaseComponent {
    constructor(vcr) {
        this.vcr = vcr;
        this._subscriptions = [];
        this.el = vcr.element.nativeElement;
    }
    set subscriptions(value) {
        if (value) {
            this._subscriptions.push(value);
        }
    }
    ngOnInit() {
        this.initCmp();
    }
    ngAfterViewInit() {
        setTimeout(_ => this.afterInitCmp());
    }
    ngOnDestroy() {
        this.unsubscribeAll();
        this.destroyCmp();
    }
    initCmp() {
        // empty
    }
    afterInitCmp() {
        // for Input() properties that are initialized after initCmp. e.g) "config" property for entryComponents
    }
    unsubscribeAll() {
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    destroyCmp() {
        // to remove dom elements reference etc.
    }
}
AppBaseComponent.ɵfac = function AppBaseComponent_Factory(t) { return new (t || AppBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
AppBaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppBaseComponent, inputs: { subscriptions: "subscriptions" } });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
/* harmony import */ var _app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-base.component */ "./src/app/app-base.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _projects_mc_ui_src_lib_components_form_fields_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/mc-ui/src/lib/components/form/fields/text/text.component */ "./projects/mc-ui/src/lib/components/form/fields/text/text.component.ts");
/* harmony import */ var _projects_mc_ui_src_lib_components_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/mc-ui/src/lib/components/visualizer/visualizer.component */ "./projects/mc-ui/src/lib/components/visualizer/visualizer.component.ts");







const _c0 = function () { return { name: "company", value: "ASTC" }; };
const _c1 = function () { return ["companies"]; };
const _c2 = function () { return { idField: "symbol" }; };
const _c3 = function (a0, a1) { return { themes: a0, gridConfig: a1 }; };
const _c4 = function () { return ["daily"]; };
const _c5 = function () { return { idField: "Date" }; };
const _c6 = function () { return ["Open", "High", "Low", "Close", "Adj Close", "Volume"]; };
const _c7 = function (a0, a1, a3) { return { themes: a0, type: a1, labelField: "Date", dataFields: a3 }; };
class AppComponent extends _app_base_component__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"] {
    constructor(vcr, appService) {
        super(vcr);
        this.vcr = vcr;
        this.appService = appService;
        this.VisualizerType = projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_1__["VisualizerType"];
    }
    loadCompanies(keyword) {
        if (keyword) {
            this.appService
                .getNasdaqCompanies(keyword)
                .subscribe(data => (this.data = data));
        }
    }
    loadDailyDataBySymbol(symbol) {
        this.appService
            .getDailyDataBySymbol(symbol)
            .subscribe(data => {
            this.dailyData = data;
            // Test data
            this.barData = {
                columns: data.columns,
                data: data.data.slice(0, 10)
            };
            this.lineData = {
                columns: data.columns,
                data: data.data.slice(0, 10)
            };
        });
    }
    onTextAction(e) {
        switch (e.action) {
            case projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_1__["InputAction"].CHANGE:
                this.loadCompanies(e.value);
                break;
        }
    }
    onCompanyVizAction(e) {
        switch (e.action) {
            case projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_1__["VisualizerAction"].SELECT_ITEM:
                const data = e.data;
                this.loadDailyDataBySymbol(data.Symbol);
                break;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 40, consts: [[3, "config", "action"], [1, "body"], [1, "left"], [3, "config", "data", "action"], [3, "config", "data"], [1, "right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-text", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function AppComponent_Template_mc_text_action_0_listener($event) { return ctx.onTextAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mc-visualizer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function AppComponent_Template_mc_visualizer_action_3_listener($event) { return ctx.onCompanyVizAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mc-visualizer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mc-visualizer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mc-visualizer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 350, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2)))("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 350, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5)))("data", ctx.dailyData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 350, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](30, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c4), ctx.VisualizerType.BAR, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c6)))("data", ctx.barData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 350, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](36, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c4), ctx.VisualizerType.LINE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c6)))("data", ctx.lineData);
    } }, directives: [_projects_mc_ui_src_lib_components_form_fields_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"], _projects_mc_ui_src_lib_components_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_5__["VisualizerComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n[_nghost-%COMP%]   .body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL21jLXVpLWFuZ3VsYXIvc3JjL2Nzcy9fdmFycy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUN3QkUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN4QkY7QUZBSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FFRU47QUZBSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FFRU4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uL2Nzcy92YXJzJztcblxuOmhvc3Qge1xuICBAaW5jbHVkZSBjb250YWluZXI7XG4gIC5ib2R5IHtcbiAgICAubGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5yaWdodCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG59XG4iLCIvLyAqKioqKiogY29sb3JzICoqKioqKioqXG5cbiRjLWdyYXk6ICNmOGY5ZmE7XG4kYy1ncmF5LTEwOiAjZGVlMmU2O1xuJGMtZ3JheS0yMDogI2Q5ZDlkOTtcblxuJGMtYmxhY2s6ICMzNDNhNDA7XG4kYy1ibGFjay0xMDogIzQ5NTA1NztcblxuJGMtYmx1ZTogIzU1YTZmODtcblxuLy8gZWxlbWVudCBjb2xvcnNcblxuJGMtYm9yZGVyOiAkYy1ncmF5LTEwO1xuJGMtYm9yZGVyLTI6ICRjLWdyYXktMjA7XG5cbiRjLXRleHQ6ICRjLWJsYWNrO1xuJGMtdGV4dC0yOiAkYy1ibGFjay0xMDtcblxuJGMtYmc6ICRjLWdyYXk7XG5cbi8vIHNlbWFudGljXG5cbiRjLWFjdGl2ZTogJGMtYmx1ZTtcblxuQG1peGluIGNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuYm9keSAubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuOmhvc3QgLmJvZHkgLnJpZ2h0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["McUiModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["McUiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["McUiModule"]
                ],
                providers: [
                    _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var projects_mc_ui_src_lib_utils_data_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/mc-ui/src/lib/utils/data-utils */ "./projects/mc-ui/src/lib/utils/data-utils.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AppService {
    constructor(http) {
        this.http = http;
    }
    getNasdaqCompanies(symbol = '') {
        return this.http
            .get('../test/data/nasdaqlisted.txt', { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => Object(projects_mc_ui_src_lib_utils_data_utils__WEBPACK_IMPORTED_MODULE_2__["convertCsvToVisualizerData"])(data, [
            { field: 'Symbol', keyword: symbol }
        ])));
    }
    getDailyDataBySymbol(symbol) {
        return this.http
            .get(`../test/data/${symbol}.csv`, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => Object(projects_mc_ui_src_lib_utils_data_utils__WEBPACK_IMPORTED_MODULE_2__["convertCsvToVisualizerData"])(data)));
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mc/mc-ui-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map