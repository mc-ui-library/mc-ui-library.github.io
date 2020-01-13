var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./example/example.module": "./src/app/home/example/example.module.ts"
            };
            function webpackAsyncContext(req) {
                return Promise.resolve().then(function () {
                    if (!__webpack_require__.o(map, req)) {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    }
                    var id = map[req];
                    return __webpack_require__(id);
                });
            }
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            module.exports = webpackAsyncContext;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/button/button.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/button/button.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button class=\"button--button\" [type]=\"type\" (click)=\"onClick($event)\">\n  <ng-content></ng-content>\n</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/drawer/drawer.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/drawer/drawer.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mc-mask [visible]=\"true\" [transparent]=\"!mask\" (click)=\"onClickMask()\"></mc-mask>\n<div #drawerEr class=\"drawer\"><ng-container *ngTemplateOutlet=\"tpl\"></ng-container></div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown--summary\">\n  {{summary}}\n</div>\n<div class=\"dropdown--icon\">\n  <mc-icon theme=\"down\"></mc-icon>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/field.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/field.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<label *ngIf=\"label\" class=\"field--label\" [for]=\"name\">{{label}}</label>\n<div class=\"field--field\" [ngSwitch]=\"type\">\n  <mc-textarea *ngSwitchCase=\"'textarea'\" [readonly]=\"readonly\" [name]=\"name\" [value]=\"value\" [rows]=\"rows\"\n    [theme]=\"theme\" [placeholder]=\"placeholder\" (valueChange)=\"onValueChange($event)\" class=\"textarea__field\">\n  </mc-textarea>\n  <mc-input *ngSwitchDefault [readonly]=\"readonly\" [name]=\"name\" [value]=\"value\" [placeholder]=\"placeholder\"\n    (valueChange)=\"onValueChange($event)\" [theme]=\"theme\"></mc-input>\n</div>\n<div class=\"field--error\"></div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/input/input.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/input/input.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input class=\"input--input\" [type]=\"type\" [readonly]=\"readonly\" [name]=\"name\" autocomplete=\"off\" [placeholder]=\"placeholder\" [value]=\"value\" (keyup)=\"onKeyUp($event)\">\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<textarea class=\"textarea--input\" [readonly]=\"readonly\" [name]=\"name\" [rows]=\"rows\" autocomplete=\"off\" [placeholder]=\"placeholder\" [value]=\"value\" (keyup)=\"onKeyUp($event)\"></textarea>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/form.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/form.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form--form\">\n  <ng-content></ng-content>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-basic.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-basic.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mc-grid-header\n  [columns]=\"data.columns\"\n  [data]=\"data.headerData\"\n  [rowHeight]=\"rowHeight\"\n  [style.width]=\"bodyWidth\"\n>\n</mc-grid-header>\n<div\n  class=\"grid-basic--scroll\"\n  [style.height.px]=\"bodyHeight\"\n  [style.width]=\"bodyWidth\"\n>\n  <mc-grid-body\n    [columns]=\"data.columns\"\n    [rowHeight]=\"rowHeight\"\n    [data]=\"data.rows\"\n    [idField]=\"idField\"\n    [class.is-basic]=\"true\"\n    (action)=\"onAction($event)\"\n  >\n  </mc-grid-body>\n</div>\n<mc-loader\n  [style.display]=\"isLoading ? '' : 'none'\"\n  [theme]=\"['ring', 'small']\"\n></mc-loader>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-body.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-body.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<table class=\"grid-body\">\n  <tr\n    *ngFor=\"let row of data; index as r\"\n    class=\"grid-body--row\"\n    [style.height.px]=\"rowHeight\"\n  >\n    <td\n      *ngFor=\"let column of columns; index as c\"\n      class=\"grid-body--row--cell\"\n      [attr.data-field]=\"column.field\"\n      [attr.data-id]=\"row[idField]\"\n      [attr.data-rowIndex]=\"r\"\n      [attr.data-cellIndex]=\"c\"\n      data-action=\"select-cell\"\n    >\n      <div\n        class=\"grid-body--row--cell--content\"\n        [style.lineHeight.px]=\"rowHeight - 2\"\n        [style.height.px]=\"rowHeight - 2\"\n        [style.width.px]=\"column.width\"\n        [title]=\"row[column.field]\"\n      >\n        <ng-container\n          *ngTemplateOutlet=\"tpls[column.field]; context: { $implicit: row }\"\n        ></ng-container\n        >{{ tpls[column.field] ? \"\" : row[column.field] }}\n      </div>\n    </td>\n  </tr>\n</table>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-header.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-header.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<table class=\"grid-header\">\n  <tr\n    class=\"grid-header--row\"\n    *ngFor=\"let cells of data\"\n    [style.height.px]=\"rowHeight\"\n  >\n    <th\n      class=\"grid-header--row--cell\"\n      *ngFor=\"let cell of cells\"\n      [class.is-last-row]=\"cell.isLastRow\"\n      [attr.data-id]=\"cell.id\"\n      data-action=\"select-cell\"\n      [colSpan]=\"cell.colspan || 1\"\n      [rowSpan]=\"cell.rowspan || 1\"\n    >\n      <div\n        class=\"grid-header--row--cell--content\"\n        [style.lineHeight.px]=\"rowHeight - 2\"\n        [style.height.px]=\"rowHeight - 2\"\n        [style.width.px]=\"cell.width\"\n        [title]=\"cell.name\"\n      >\n        <ng-container\n          *ngTemplateOutlet=\"tpls[cell.name]; context: { $implicit: cell }\"\n        ></ng-container\n        >{{ tpls[cell.name] ? \"\" : cell.name }}\n      </div>\n    </th>\n  </tr>\n</table>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mc-grid-header\n  [columns]=\"data.columns\"\n  [data]=\"data.headerData\"\n  [rowHeight]=\"rowHeight\"\n  [style.width]=\"bodyWidth\"\n  [tpls]=\"headerTpls\"\n>\n</mc-grid-header>\n<mc-scroll\n  [page1Tpl]=\"page1Tpl\"\n  [page2Tpl]=\"page2Tpl\"\n  [rowHeight]=\"rowHeight\"\n  [rowCount]=\"rowCount\"\n  [isLoading]=\"isLoading\"\n  [emptyText]=\"emptyText\"\n  (updatePage)=\"onUpdatePage($event)\"\n  [style.height.px]=\"bodyHeight\"\n  [style.width]=\"bodyWidth\"\n>\n  <ng-template #page1Tpl>\n    <mc-grid-body\n      [class.is-scroll-page]=\"true\"\n      [class.is-last-page]=\"page1IsLast\"\n      [columns]=\"data.columns\"\n      [rowHeight]=\"rowHeight\"\n      [data]=\"page1Data\"\n      [idField]=\"idField\"\n      [tpls]=\"columnTpls\"\n      (action)=\"onAction($event)\"\n    >\n    </mc-grid-body>\n  </ng-template>\n  <ng-template #page2Tpl>\n    <mc-grid-body\n      [class.is-scroll-page]=\"true\"\n      [class.is-last-page]=\"page2IsLast\"\n      [columns]=\"data.columns\"\n      [rowHeight]=\"rowHeight\"\n      [data]=\"page2Data\"\n      [idField]=\"idField\"\n      [tpls]=\"columnTpls\"\n      (action)=\"onAction($event)\"\n    >\n    </mc-grid-body>\n  </ng-template>\n</mc-scroll>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/icon/icon.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/icon/icon.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list-basic.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list-basic.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mc-list-item *ngFor=\"let item of data; trackBy: key\" [height]=\"rowHeight + 'px'\" [lineHeight]=\"(rowHeight - 2) + 'px'\"\n  [tpl]=\"itemTpl\" [idField]=\"idField\" [nameField]=\"nameField\" [data]=\"item\" [hasCheckBox]=\"multiSelect\"\n  [hasDeleteButton]=\"hasDelete\" [selected]=\"selectedItemsMap.has('' + item[idField])\" [horizontal]=\"horizontal\" [isScrollPageItem]=\"isScrollPage\"\n  [isFirstPageItem]=\"isFirstPage\" [isLastPageItem]=\"isLastPage\" [theme]=\"item.theme\" (action)=\"onListItemAction($event)\">\n  </mc-list-item>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list-item.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list-item.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"hasCheckBox\" class=\"list-item--header\"><input type=\"checkbox\" [attr.data-id]=\"data[idField]\" data-action=\"check-checkbox\" checked=\"selected\" (change)=\"onChangeCheckbox($event)\"></div>\n<div class=\"list-item--body\">\n  <ng-container *ngTemplateOutlet=\"tpl; context: {$implicit: data}\"></ng-container>{{tpl ? '' : data[nameField]}}\n</div>\n<div *ngIf=\"hasDeleteButton\" class=\"list-item--footer\">\n  <mc-icon theme=\"trash\"></mc-icon>\n  <div class=\"list-item--yes-no\">\n    <div class=\"list-item--yes-no--yes\" data-action=\"do-delete\"><span class=\"list-item--yes-no--yes--text\">Delete</span>\n    </div>\n    <div class=\"list-item--yes-no--no\" data-action=\"cancel-delete\"><span\n        class=\"list-item--yes-no--no--text\">Cancel</span></div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mc-scroll #scrollCmp [page1Tpl]=\"page1Tpl\" [page2Tpl]=\"page2Tpl\" [rowHeight]=\"rowHeight\" [rowCount]=\"rowCount\"\n  [isLoading]=\"isLoading\" [emptyText]=\"emptyText\" (updatePage)=\"onUpdatePage($event)\">\n  <ng-template #page1Tpl>\n    <mc-list-basic #listBasic1Cmp [itemTpl]=\"itemTpl\" [idField]=\"idField\" [nameField]=\"nameField\"\n      [rowHeight]=\"rowHeight\" [data]=\"page1Data\" [isScrollPage]=\"true\" [isFirstPage]=\"page1IsFirst\"\n      [isLastPage]=\"page1IsLast\"\n      (action)=\"onAction($event)\">\n    </mc-list-basic>\n  </ng-template>\n  <ng-template #page2Tpl>\n    <mc-list-basic #listBasic2Cmp [itemTpl]=\"itemTpl\" [idField]=\"idField\" [nameField]=\"nameField\"\n      [rowHeight]=\"rowHeight\" [data]=\"page2Data\" [isScrollPage]=\"true\" [isFirstPage]=\"page2IsFirst\" [isLastPage]=\"page2IsLast\"\n      (action)=\"onAction($event)\">\n    </mc-list-basic>\n  </ng-template>\n</mc-scroll>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/loader/loader.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/loader/loader.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"loader\">\n  <div *ngSwitchCase=\"'ring'\" class=\"loader\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n  <div *ngSwitchCase=\"'spin'\" class=\"loader\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</ng-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/mask/mask.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/mask/mask.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/message-bar/message-bar.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/message-bar/message-bar.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"message-bar--close\">\n  <mc-button theme=\"icon\" (press)=\"onPressCloseButton($event)\">\n    <mc-icon [theme]=\"['close', 'button']\"></mc-icon>\n  </mc-button>\n</div>\n<div class=\"message-bar--message\">\n  {{message}}\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/popup/popup-list.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/popup/popup-list.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"indicatorLocation[0] === 't'\" class=\"popup-list--header\">\n  <div class=\"popup-list--header--input\" [style.width.px]=\"lastTargetElCoord.width\"\n    [style.height.px]=\"lastTargetElCoord.height\">\n    <mc-input #inputCmp1 class=\"popup-list--header--input--input\" [value]=\"lastSelectedName\"\n      (valueChange)=\"onValueChange($event)\"></mc-input>\n    <div class=\"popup-list--header--input--icon\">\n      <mc-icon theme=\"down\"></mc-icon>\n    </div>\n  </div>\n  <div *ngIf=\"multiSelect\" class=\"popup-list--header--selected-items\">\n    <div *ngFor=\"let item of popupSelectedItems\" class=\"popup-list--header--selected-items--item\">\n      <div class=\"popup-list--header--selected-items--item--name\">{{item[nameField]}}</div>\n      <div class=\"popup-list--header--selected-items--item--delete\">\n        <mc-button theme=\"icon\" (click)=\"onClickUnselectButton(item)\">\n          <mc-icon [theme]=\"['close', 'button']\"></mc-icon>\n        </mc-button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"popup-list--body\" [style.height.px]=\"listHeight\" [class.popup-list--body-t]=\"indicatorLocation[0] !== 't'\" (click)=\"onClickListBody();\">\n  <mc-list #listCmp [data]=\"listData\" [itemTpl]=\"itemTpl\" [idField]=\"idField\" [nameField]=\"nameField\"\n    [rowHeight]=\"rowHeight\" [multiSelect]=\"multiSelect\" [selectedItems]=\"listSelectedItems\" (needData)=\"onListNeedData($event)\" (action)=\"onListAction($event)\"\n    [style.height.px]=\"listHeight\">\n  </mc-list>\n</div>\n<div *ngIf=\"indicatorLocation[0] !== 't'\" class=\"popup-list--header\">\n  <div *ngIf=\"multiSelect\" class=\"popup-list--header--selected-items\">\n    <div *ngFor=\"let item of popupSelectedItems\" class=\"popup-list--header--selected-items--item\">\n      <div class=\"popup-list--header--selected-items--item--name\">{{item[nameField]}}</div>\n      <div class=\"popup-list--header--selected-items--item--delete\">\n        <mc-button theme=\"icon\" (click)=\"onClickUnselectButton(item)\">\n          <mc-icon [theme]=\"['close', 'button']\"></mc-icon>\n        </mc-button>\n      </div>\n    </div>\n  </div>\n  <div class=\"popup-list--header--input\" [style.width.px]=\"lastTargetElCoord.width\"\n    [style.height.px]=\"lastTargetElCoord.height\">\n    <mc-input #inputCmp2 class=\"popup-list--header--input--input\" [value]=\"lastSelectedName\"\n      (valueChange)=\"onValueChange($event)\"></mc-input>\n    <div class=\"popup-list--header--input--icon\">\n      <mc-icon theme=\"down\"></mc-icon>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/popup/popup.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/popup/popup.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"tpl\"></ng-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/scroll/scroll.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/scroll/scroll.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"scroll\" (scroll)=\"onScroll($event)\">\n  <div class=\"scroll--content\" [style.height.px]=\"state.contentHeight\">\n    <div class=\"scroll--content--page1\" [style.top.px]=\"state.page1Top\">\n      <ng-container *ngTemplateOutlet=\"page1Tpl\"></ng-container>\n    </div>\n    <div class=\"scroll--content--page2\" [style.top.px]=\"state.page2Top\">\n      <ng-container *ngTemplateOutlet=\"page2Tpl\"></ng-container>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!rowCount\" class=\"scroll--empty\" [style.lineHeight.px]=\"rowHeight\">{{emptyText}}</div>\n<mc-loader [style.display]=\"isLoading ? '' : 'none'\" [theme]=\"['ring', 'small']\"></mc-loader>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<video src=\"../../../assets//videos/leaves.mp4\" type=\"video/mp4\" class=\"signin--video\" autoplay muted loop (canplay)=\"onCanPlay($event)\">\n</video>\n<div class=\"signin\">\n  <div class=\"signin--header\">\n    <div class=\"signin--header--title mc-logo-text\"><span class=\"mc-logo-text--1\">MC</span><span class=\"mc-logo-text--2\">UI</span></div>\n    <div class=\"signin--header--description\">Sign In to Your MC UI Account!</div>\n  </div>\n  <div class=\"signin--body\">\n    <mc-form #frm>\n      <mc-field theme=\"dark\" placeholder=\"Enter your username\" name=\"username\"></mc-field>\n      <mc-field type=\"password\" theme=\"dark\" placeholder=\"Enter your password\" name=\"username\"></mc-field>\n    </mc-form>\n    <div class=\"signin--body--forgot-password\"><a href=\"#\" (click)=\"onClickForgotPassword()\">Forgot password?</a></div>\n    <mc-button theme=\"signin\" (press)=\"onPressSignin()\">Sign In</mc-button>\n  </div>\n  <div class=\"signin--footer\">\n    Not yet a member? <a href=\"#\" (click)=\"onSignup()\">Sign Up</a>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/example/example.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/example/example.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example--header\">\n  <h4>Component Examples</h4>\n</div>\n<div class=\"example--item\">\n  <div class=\"example--item--header\">\n    <h6>Basic List - Horizontal Toggle</h6>\n  </div>\n  <div class=\"example--item--body\">\n    <mc-list-basic\n      [data]=\"listBasicToggleData\"\n      [selectedItems]=\"[listBasicToggleData[0]]\"\n      [horizontal]=\"true\"\n    ></mc-list-basic>\n    <mc-list-basic\n      [data]=\"listBasicTagsData\"\n      [horizontal]=\"true\"\n      [rowHeight]=\"20\"\n    ></mc-list-basic>\n  </div>\n</div>\n<div class=\"example--item\">\n  <div class=\"example--item--header\">\n    <h6>list with Infinity Scroll</h6>\n  </div>\n  <div class=\"example--item--body\" [style.height.px]=\"300\">\n    <mc-list [data]=\"listData\" [itemTpl]=\"itemTpl\">\n      <ng-template #itemTpl let-data>\n        {{ data.index }}: {{ data.name }}\n      </ng-template>\n    </mc-list>\n  </div>\n</div>\n<!-- <div class=\"example--item\">\n  <div class=\"example--item--header\">\n    <h6>Basic Grid</h6>\n  </div>\n  <div class=\"example--item--body\" [style.height.px]=\"300\">\n    <mc-grid-basic [data]=\"gridBasicData\"></mc-grid-basic>\n  </div>\n</div> -->\n<div class=\"example--item\">\n  <div class=\"example--item--header\">\n    <h6>Grid with Infinity Scroll | Popup | Drawer</h6>\n    <p>- Popup example: Click a cell</p>\n    <p>- Drawer example: Click the friends column cell</p>\n  </div>\n  <div class=\"example--item--body\" [style.height.px]=\"300\">\n    <mc-grid [data]=\"gridData\" (action)=\"onGridAction($event)\"></mc-grid>\n    <ng-template #popupTpl>\n      <h6>\n        {{ gridCell.name }} {{ gridCell.field }}\n        {{ gridCell.field === \"tags\" ? \"\" : gridCell.value }}\n      </h6>\n      <ng-container *ngIf=\"gridCell.field === 'tags'\">\n        <mc-list-basic\n          [data]=\"gridCell.value\"\n          [horizontal]=\"true\"\n          [rowHeight]=\"20\"\n          style=\"margin-top: 20px;white-space: normal;\"\n        ></mc-list-basic>\n      </ng-container>\n    </ng-template>\n    <ng-template #drawerTpl>\n      <div style=\"padding: 20px;padding-top: 75px;width: 240px;\">\n        <h6>{{ gridCell.name }} {{ gridCell.field }}</h6>\n        <mc-list-basic\n          [data]=\"gridCell.value\"\n          style=\"margin-top: 20px;\"\n        ></mc-list-basic>\n      </div>\n    </ng-template>\n  </div>\n</div>\n<div class=\"example--item\">\n  <div class=\"example--item--header\">\n    <h6>Grid with Custom Headers and cells</h6>\n  </div>\n  <div class=\"example--item--body\" [style.height.px]=\"300\">\n    <mc-grid\n      [data]=\"gridCustomData\"\n      [columnTpls]=\"{ isActive: isActiveTpl, eyeColor: eyeColorTpl, tags: tagsTpl }\"\n    >\n      <ng-template #isActiveTpl let-row>\n        <div [style.textAlign]=\"'center'\">\n        <div\n          [ngStyle]=\"{\n            display: 'inline-block',\n            backgroundColor: row.isActive ? 'green' : 'silver',\n            width: '20px',\n            height: '20px',\n            borderRadius: '50%',\n            verticalAlign: 'middle'\n          }\"\n        ></div>\n        </div>\n      </ng-template>\n      <ng-template #eyeColorTpl let-row>\n        <div [style.textAlign]=\"'center'\">\n          <mc-icon\n            theme=\"eye-o\"\n            [ngStyle]=\"{\n              color: row.eyeColor,\n              fontWeight: 'bold',\n              fontSize: '30px'\n            }\"\n          ></mc-icon>\n        </div>\n      </ng-template>\n      <ng-template #tagsTpl let-row>\n        <div>\n          <mc-list-basic\n            [data]=\"row.tags\"\n            [horizontal]=\"true\"\n            [rowHeight]=\"20\"\n          ></mc-list-basic>\n        </div>\n      </ng-template>\n    </mc-grid>\n  </div>\n</div>\n<div class=\"example--item\">\n  <div class=\"example--item--header\">\n    <h6>Dropdown</h6>\n  </div>\n  <div class=\"example--item--body\" [style.height.px]=\"500\">\n    <mc-dropdown\n      [data]=\"dropdownData\"\n      (needData)=\"onDropdownNeedData($event)\"\n    ></mc-dropdown>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-header/home-header.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-header/home-header.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-header--header\">\n  <a href=\"/\" class=\"home-header--header--logo\">\n    <span class=\"home-header--header--logo home-header--header--logo--1\">MC</span>\n    <span class=\"home-header--header--logo--2\">UI</span>\n  </a>\n</div>\n<div class=\"home-header--body\">\n  <mc-list-basic [data]=\"menuData\" [selectedItems]=\"[menuData[0]]\" [horizontal]=\"true\" [rowHeight]=\"55\" (action)=\"onListAction($event)\"></mc-list-basic>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mc-home-header></mc-home-header>\n<div class=\"home\">\n  <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/base.component.ts": 
        /*!************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/base.component.ts ***!
          \************************************************************/
        /*! exports provided: BaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function () { return BaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * Base Class for All UI Components
             */
            // state for rendering
            var BaseComponent = /** @class */ (function () {
                function BaseComponent(er, service) {
                    this.er = er;
                    this.service = service;
                    this._subscriptions = [];
                    this.rendered = false;
                    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.el = this.er.nativeElement;
                    this.util = this.service.util;
                    this.initState();
                }
                Object.defineProperty(BaseComponent.prototype, "subscriptions", {
                    set: function (value) {
                        if (value) {
                            this._subscriptions.push(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                BaseComponent.prototype.initState = function () {
                    // default state etc
                };
                BaseComponent.prototype.ngOnInit = function () {
                    this.initCmp();
                };
                BaseComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.afterInitCmp();
                    // theme should be the last class for priority
                    this.applyThemeClass();
                    setTimeout(function () {
                        _this.afterRenderCmp();
                        _this.rendered = true;
                        _this.action.emit({ target: _this, action: 'rendered' });
                    });
                };
                BaseComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribeAll();
                    this.destroyCmp();
                    this.el = null;
                };
                BaseComponent.prototype.applyThemeClass = function () {
                    var _a;
                    if (this.theme) {
                        var themes = !Array.isArray(this.theme) ? [this.theme] : this.theme;
                        var compName_1 = this.el.tagName.toLowerCase().split('mc-')[1];
                        (_a = this.el.classList).add.apply(_a, themes.map(function (d) { return compName_1 + '-' + d; }));
                    }
                };
                BaseComponent.prototype.initCmp = function () {
                    // empty
                };
                BaseComponent.prototype.afterInitCmp = function () { };
                BaseComponent.prototype.afterRenderCmp = function () {
                };
                // update a specific state
                BaseComponent.prototype.setState = function (state) {
                    var currState = this.util.clone(this.state);
                    Object.keys(state).forEach(function (key) { return currState[key] = state[key]; });
                    this.state = currState;
                };
                BaseComponent.prototype.unsubscribeAll = function () {
                    this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
                };
                BaseComponent.prototype.destroyCmp = function () {
                    // to remove dom elements reference etc.
                };
                return BaseComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BaseComponent.prototype, "theme", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BaseComponent.prototype, "subscriptions", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], BaseComponent.prototype, "action", void 0);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/button/button.component.scss": 
        /*!***********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/button/button.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: inline-block;\n  position: relative;\n}\n:host .button--button {\n  display: inline-block;\n  padding: 0;\n  line-height: 34px;\n  background: #fff;\n  -webkit-appearance: none;\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5idXR0b24tLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5idXR0b24tLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/button/button.component.ts": 
        /*!*********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/button/button.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ButtonComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () { return ButtonComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var ButtonComponent = /** @class */ (function (_super) {
                __extends(ButtonComponent, _super);
                function ButtonComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.type = 'button';
                    _this.press = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    return _this;
                }
                ButtonComponent.prototype.onClick = function (e) {
                    this.press.emit({
                        target: this,
                        event: e,
                        el: e.target,
                        type: this.type
                    });
                };
                return ButtonComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            ButtonComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonComponent.prototype, "type", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ButtonComponent.prototype, "press", void 0);
            ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-button',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/button/button.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button.component.scss */ "./projects/mc-ui/src/lib/component/button/button.component.scss")).default]
                })
            ], ButtonComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/drawer/drawer.component.scss": 
        /*!***********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/drawer/drawer.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n:host .drawer {\n  display: inline-block;\n  position: absolute;\n  opacity: 0;\n  background-color: white;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n:host .drawer-anim {\n  transition: transform 0.3s, opacity ease-in-out 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBQ0RKO0FERUk7RUFDRSxvREFBQTtBQ0FOIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmRyYXdlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsMC4yNik7XG4gICAgJi1hbmltIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5kcmF3ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG46aG9zdCAuZHJhd2VyLWFuaW0ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSBlYXNlLWluLW91dCAwLjNzO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/drawer/drawer.component.ts": 
        /*!*********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/drawer/drawer.component.ts ***!
          \*********************************************************************/
        /*! exports provided: DrawerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function () { return DrawerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var DrawerComponent = /** @class */ (function (_super) {
                __extends(DrawerComponent, _super);
                function DrawerComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this._visible = false;
                    _this.from = 'top';
                    _this.tpl = null;
                    _this.mask = true;
                    _this.hided = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    return _this;
                }
                Object.defineProperty(DrawerComponent.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this._visible = value;
                        if (value) {
                            this.show();
                        }
                        else {
                            this.hide();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                // after rendering, measure the size and hide and show.
                DrawerComponent.prototype.show = function () {
                    var _this = this;
                    this.el.style.visibility = 'hidden';
                    this.el.style.display = '';
                    // after the targetEl is changed.
                    setTimeout(function () {
                        var drawerEl = _this.drawerEr.nativeElement;
                        var width = drawerEl.clientWidth;
                        var height = drawerEl.clientHeight;
                        var translateY = null;
                        var translateX = null;
                        var top = 'unset';
                        var right = 'unset';
                        var bottom = 'unset';
                        var left = 'unset';
                        switch (_this.from) {
                            case 'top':
                                translateY = "-" + height + "px";
                                top = '0';
                                break;
                            case 'bottom':
                                translateY = height + "px";
                                bottom = '0';
                                break;
                            case 'left':
                                translateX = "-" + width + "px";
                                left = '0';
                                break;
                            case 'right':
                                translateX = width + "px";
                                right = '0';
                                break;
                        }
                        var style = drawerEl.style;
                        style.transform = translateY === null ? "translateX(" + translateX + ")" : "translateY(" + translateY + ")";
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
                        _this.el.style.visibility = '';
                        // animation
                        setTimeout(function () {
                            drawerEl.classList.add('drawer-anim');
                            style.transform = translateY === null ? "translateX(0)" : "translateY(0)";
                            style.opacity = '1';
                            setTimeout(function () { return drawerEl.classList.remove('drawer-anim'); }, 300);
                        }, 100);
                    });
                };
                DrawerComponent.prototype.hide = function () {
                    this.el.style.display = 'none';
                    this.hided.emit({ target: this });
                };
                DrawerComponent.prototype.onClickMask = function () {
                    this.visible = false;
                };
                return DrawerComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            DrawerComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DrawerComponent.prototype, "from", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DrawerComponent.prototype, "tpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DrawerComponent.prototype, "mask", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DrawerComponent.prototype, "visible", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DrawerComponent.prototype, "hided", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawerEr', { static: false })
            ], DrawerComponent.prototype, "drawerEr", void 0);
            DrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-drawer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drawer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/drawer/drawer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drawer.component.scss */ "./projects/mc-ui/src/lib/component/drawer/drawer.component.scss")).default]
                })
            ], DrawerComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.scss": 
        /*!**************************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  border: 1px solid #e2e6ea;\n  cursor: pointer;\n  line-height: 43px;\n  padding: 0 20px;\n  border-radius: 3px;\n}\n:host .dropdown {\n  padding-right: 20px;\n}\n:host .dropdown--icon {\n  position: absolute;\n  right: 10px;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZmllbGQvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9mb3JtL2ZpZWxkL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUY7QURDRTtFQUNFLG1CQUFBO0FDQ0o7QURDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUNDTiIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9mb3JtL2ZpZWxkL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92YXJzXCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYy1ib3JkZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAuZHJvcGRvd24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgJi0tc3VtbWFyeSB7fVxuICAgICYtLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlNmVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbjpob3N0IC5kcm9wZG93biB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG46aG9zdCAuZHJvcGRvd24tLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.ts": 
        /*!************************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.ts ***!
          \************************************************************************************/
        /*! exports provided: DropdownComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () { return DropdownComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _field_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../field-base.component */ "./projects/mc-ui/src/lib/component/form/field/field-base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _popup_popup_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../popup/popup-list.component */ "./projects/mc-ui/src/lib/component/popup/popup-list.component.ts");
            var DropdownComponent = /** @class */ (function (_super) {
                __extends(DropdownComponent, _super);
                function DropdownComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this._selectedItems = [];
                    _this.emptyText = 'Select...';
                    _this.idField = 'id';
                    _this.nameField = 'name';
                    _this.rowHeight = 45;
                    _this.multiSelect = false;
                    _this.needData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    // ***************************************
                    _this.summary = _this.emptyText;
                    return _this;
                }
                Object.defineProperty(DropdownComponent.prototype, "data", {
                    get: function () {
                        return this._data;
                    },
                    set: function (value) {
                        if (value) {
                            this._data = value;
                            this.updatePopupListData(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DropdownComponent.prototype, "selectedItems", {
                    get: function () {
                        return this._selectedItems;
                    },
                    set: function (value) {
                        if (value) {
                            this._selectedItems = value;
                            this.updateSummary(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                DropdownComponent.prototype.onPress = function (e) {
                    this.showPopupList();
                };
                DropdownComponent.prototype.updateSummary = function (value) {
                    var _this = this;
                    this.summary = value.length ? value.map(function (val) { return val[_this.nameField]; }).join(', ') : this.emptyText;
                };
                DropdownComponent.prototype.updatePopupListData = function (data) {
                    if (data && this.popupListCmp) {
                        this.popupListCmp.instance.data = data;
                    }
                };
                DropdownComponent.prototype.showPopupList = function () {
                    var _this = this;
                    var instance = this.popupListCmp ? this.popupListCmp.instance : null;
                    if (!this.popupListCmp) {
                        // add to root
                        this.popupListCmp = this.service.addComponent(_popup_popup_list_component__WEBPACK_IMPORTED_MODULE_4__["PopupListComponent"]);
                        instance = this.popupListCmp.instance;
                        instance.data = this.data;
                        instance.checkTargetLocation = true;
                        instance.itemTpl = this.itemTpl;
                        instance.idField = this.idField;
                        instance.nameField = this.nameField;
                        instance.rowHeight = this.rowHeight;
                        instance.multiSelect = this.multiSelect;
                        instance.selectedItems = this.selectedItems.concat();
                        instance.targetEl = this.el;
                        this.subscriptions = instance.needData.subscribe(function (e) {
                            e.target = _this;
                            _this.needData.emit(e);
                        });
                        this.subscriptions = instance.action.subscribe(function (e) {
                            e.target = _this;
                            switch (e.action) {
                                case 'unselect-item':
                                case 'select-item':
                                    _this.selectedItems = e.selectedItems;
                                    break;
                            }
                            _this.action.emit(e);
                        });
                    }
                    instance.visible = !instance.visible;
                };
                DropdownComponent.prototype.destroyCmp = function () {
                    if (this.popupListCmp) {
                        this.service.removeComponent(this.popupListCmp);
                    }
                };
                return DropdownComponent;
            }(_field_base_component__WEBPACK_IMPORTED_MODULE_2__["FieldBaseComponent"]));
            DropdownComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "emptyText", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "itemTpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "idField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "nameField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "multiSelect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "data", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DropdownComponent.prototype, "selectedItems", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DropdownComponent.prototype, "needData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
            ], DropdownComponent.prototype, "onPress", null);
            DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-dropdown',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.scss */ "./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.scss")).default]
                })
            ], DropdownComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/field-base.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/field-base.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: FieldBaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldBaseComponent", function () { return FieldBaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            var FieldBaseComponent = /** @class */ (function (_super) {
                __extends(FieldBaseComponent, _super);
                function FieldBaseComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this._value = '';
                    _this.valueChangedBy = '';
                    _this.readonly = false;
                    _this.label = '';
                    _this.type = 'text';
                    _this.valid = true;
                    _this.rows = 2;
                    _this.placeholder = '';
                    _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    return _this;
                }
                Object.defineProperty(FieldBaseComponent.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (value) {
                        if (JSON.stringify(this._value) !== JSON.stringify(value)) {
                            var oldValue = this._value;
                            this._value = value;
                            this.valueChange.emit({
                                target: this,
                                by: this.valueChangedBy,
                                oldValue: oldValue,
                                value: this._value
                            });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                FieldBaseComponent.prototype.focus = function () { };
                FieldBaseComponent.prototype.onValueChange = function (e) {
                    if (JSON.stringify(e.value) !== JSON.stringify(this.value)) {
                        var oldValue = this.value;
                        this.value = e.value;
                        this.valueChange.emit({ target: this, event: e, value: this.value, oldValue: oldValue });
                    }
                };
                return FieldBaseComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.readonly'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "readonly", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "label", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "name", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "type", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "validators", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "errorMessage", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "valid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "rows", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "placeholder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FieldBaseComponent.prototype, "value", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FieldBaseComponent.prototype, "valueChange", void 0);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/field.component.scss": 
        /*!**************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/field.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZmllbGQvZmllbGQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9mb3JtL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvZm9ybS9maWVsZC9maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmZpZWxkIHtcbiAgICAmLS1sYWJlbCB7fVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/field.component.ts": 
        /*!************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/field.component.ts ***!
          \************************************************************************/
        /*! exports provided: FieldComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function () { return FieldComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/input.component */ "./projects/mc-ui/src/lib/component/form/field/input/input.component.ts");
            /* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea/textarea.component */ "./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.ts");
            /* harmony import */ var _field_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-base.component */ "./projects/mc-ui/src/lib/component/form/field/field-base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            // This component covers all of the form fields
            var FieldComponent = /** @class */ (function (_super) {
                __extends(FieldComponent, _super);
                function FieldComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    return _this;
                }
                return FieldComponent;
            }(_field_base_component__WEBPACK_IMPORTED_MODULE_4__["FieldBaseComponent"]));
            FieldComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_5__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"], { static: false })
            ], FieldComponent.prototype, "fieldInputCmp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__["TextareaComponent"], { static: false })
            ], FieldComponent.prototype, "fieldTextareaCmp", void 0);
            FieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-field',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./field.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/field.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./field.component.scss */ "./projects/mc-ui/src/lib/component/form/field/field.component.scss")).default]
                })
            ], FieldComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/input/input.component.scss": 
        /*!********************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/input/input.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n}\n:host .input--input {\n  display: inline-block;\n  width: 100%;\n  padding: 0 20px;\n  line-height: 43px;\n  color: #23272b;\n  background-color: #fff;\n  border: 1px solid #e2e6ea;\n  border-radius: 3px;\n}\n:host.readonly {\n  display: inline-block;\n}\n:host.readonly .input--input {\n  cursor: default;\n  pointer-events: none;\n  border: 0;\n  width: auto;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZmllbGQvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9mb3JtL2ZpZWxkL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL21jLXVpLWFuZ3VsYXIvcHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0FGO0FEQ0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRWFVO0VGWlYsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLHFCQUFBO0FDQUo7QURDSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NOIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZmllbGQvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZhcnNcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmlucHV0LS1pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDsgLy8gc2luY2UgdGhlIGZpZWxkIGhlaWdodCBpcyA0NXB4IHdpdGggYm9yZGVyLlxuICAgIGNvbG9yOiAkYy10ZXh0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGMtYm9yZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gICYucmVhZG9ubHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAuaW5wdXQtLWlucHV0IHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmlucHV0LS1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIGNvbG9yOiAjMjMyNzJiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlNmVhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46aG9zdC5yZWFkb25seSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0LnJlYWRvbmx5IC5pbnB1dC0taW5wdXQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXI6IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xufSIsIi8vIFByaW1hcnkgY29sb3JzXG4kYy1vcmFuZ2UtYjogI2YzNjcwNTtcbiRjLW9yYW5nZTogI2Y4ODMwMDtcbiRjLW9yYW5nZS1sOiAjZmZiMzAyO1xuXG4kYy1ibHVlOiAjMDg2NkM2O1xuJGMtYmx1ZS1iOiAjMDc1M2ExO1xuXG4kYy1jeWFuLWI6ICMzOWFhYWQ7XG4kYy1jeWFuOiAjNmJjM2JkO1xuJGMtY3lhbi1sOiAjZTNmNmY4O1xuXG4kYy1ncmVlbjogIzIzQkYwODtcbiRjLWdyZWVuLWI6ICMxYzlhMDY7XG5cbiRjLXJlZDojREMzNTQ1O1xuJGMtcmVkLWI6I2M4MjMzMztcblxuJGMteWVsbG93OiAjZWVmNjZkO1xuXG4vLyBHcmF5XG4kYy1ibGFjazogIzAwMDtcbiRjLWdyYXktYmJiYjogIzIzMjcyYjtcbiRjLWdyYXktYmJiOiAjMzQzYTQwO1xuJGMtZ3JheS1iYjogIzcyN2I4NDtcbiRjLWdyYXktYjogIzg2OGU5NjtcbiRjLWdyYXk6ICNlMmU2ZWE7XG4kYy1ncmF5LWw6ICNmOGY5ZmE7XG4kYy13aGl0ZTogI2ZmZjtcblxuJGMtdGV4dDogJGMtZ3JheS1iYmJiO1xuJGMtYm9yZGVyOiAkYy1ncmF5O1xuJGMtYmc6ICRjLWdyYXktbDtcblxuJGMtc3VjY2VzczogJGMtZ3JlZW47XG4kYy13YXJuaW5nOiAkYy1vcmFuZ2U7XG4kYy1lcnJvcjogJGMtcmVkO1xuIl19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/input/input.component.ts": 
        /*!******************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/input/input.component.ts ***!
          \******************************************************************************/
        /*! exports provided: InputComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function () { return InputComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _field_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../field-base.component */ "./projects/mc-ui/src/lib/component/form/field/field-base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var InputComponent = /** @class */ (function (_super) {
                __extends(InputComponent, _super);
                function InputComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    return _this;
                }
                InputComponent.prototype.focus = function (select) {
                    if (select === void 0) { select = true; }
                    this.inputEl = this.inputEl || this.el.querySelector('.input--input');
                    this.inputEl.focus();
                    if (select) {
                        this.inputEl.select();
                    }
                };
                InputComponent.prototype.onKeyUp = function (e) {
                    // recommend strong typing, weak -> e.event.target
                    this.valueChangedBy = 'keyboard';
                    this.value = e.target.value;
                    this.valueChangedBy = '';
                };
                return InputComponent;
            }(_field_base_component__WEBPACK_IMPORTED_MODULE_2__["FieldBaseComponent"]));
            InputComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-input',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/input/input.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input.component.scss */ "./projects/mc-ui/src/lib/component/form/field/input/input.component.scss")).default]
                })
            ], InputComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.scss": 
        /*!**************************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n}\n:host .textarea--input {\n  resize: none;\n  display: inline-block;\n  width: 100%;\n}\n:host.readonly .textarea--input {\n  border: 0;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZmllbGQvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9mb3JtL2ZpZWxkL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNFSjtBREVJO0VBQ0UsU0FBQTtFQUNBLGFBQUE7QUNBTiIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9mb3JtL2ZpZWxkL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAudGV4dGFyZWEtLWlucHV0IHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJi5yZWFkb25seSB7XG4gICAgLnRleHRhcmVhLS1pbnB1dCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnRleHRhcmVhLS1pbnB1dCB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0LnJlYWRvbmx5IC50ZXh0YXJlYS0taW5wdXQge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.ts": 
        /*!************************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.ts ***!
          \************************************************************************************/
        /*! exports provided: TextareaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function () { return TextareaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _field_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../field-base.component */ "./projects/mc-ui/src/lib/component/form/field/field-base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var TextareaComponent = /** @class */ (function (_super) {
                __extends(TextareaComponent, _super);
                function TextareaComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    return _this;
                }
                TextareaComponent.prototype.onKeyUp = function (e) {
                    // recommend strong typing, weak -> e.event.target
                    var value = e.target.value;
                    if (value !== this.value) {
                        var oldValue = this.value;
                        this.value = value;
                        this.valueChange.emit({
                            target: this,
                            event: e,
                            value: this.value,
                            oldValue: oldValue
                        });
                    }
                };
                return TextareaComponent;
            }(_field_base_component__WEBPACK_IMPORTED_MODULE_2__["FieldBaseComponent"]));
            TextareaComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            TextareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-textarea',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./textarea.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./textarea.component.scss */ "./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.scss")).default]
                })
            ], TextareaComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/form.component.scss": 
        /*!*******************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/form.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmZvcm1fX2JvZHkge1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/form/form.component.ts": 
        /*!*****************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/form/form.component.ts ***!
          \*****************************************************************/
        /*! exports provided: FormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function () { return FormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field/field.component */ "./projects/mc-ui/src/lib/component/form/field/field.component.ts");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var FormComponent = /** @class */ (function (_super) {
                __extends(FormComponent, _super);
                function FormComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.inputCmps = [];
                    return _this;
                }
                Object.defineProperty(FormComponent.prototype, "readonly", {
                    get: function () {
                        return this._readonly;
                    },
                    set: function (value) {
                        this._readonly = value;
                        this.applyReadonly();
                    },
                    enumerable: true,
                    configurable: true
                });
                FormComponent.prototype.afterInitCmp = function () {
                    var _this = this;
                    this.updateFieldsInfo();
                    this.contentInputCmps.changes.subscribe(function () {
                        setTimeout(function () { return _this.updateFieldsInfo(); });
                    });
                };
                FormComponent.prototype.updateFieldsInfo = function () {
                    var _this = this;
                    this.values = {};
                    this.inputCmps = [];
                    // gathering fields
                    if (this.contentInputCmps) {
                        this.contentInputCmps.forEach(function (cmp) { return _this.inputCmps.push(cmp); });
                    }
                    this.applyReadonly();
                };
                FormComponent.prototype.applyReadonly = function () {
                    var _this = this;
                    setTimeout(function () { return _this.inputCmps.forEach(function (cmp) { return cmp.readonly = _this._readonly; }); });
                };
                FormComponent.prototype.getValues = function () {
                    var isEmpty = this.util.isEmpty;
                    this.values = this.inputCmps.reduce(function (values, cmp) {
                        values[cmp.name] = isEmpty(cmp.value) ? '' : cmp.value;
                        return values;
                    }, {});
                    return this.values;
                };
                return FormComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));
            FormComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_4__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FormComponent.prototype, "readonly", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_field_field_component__WEBPACK_IMPORTED_MODULE_2__["FieldComponent"])
            ], FormComponent.prototype, "contentInputCmps", void 0);
            FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/form/form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.scss */ "./projects/mc-ui/src/lib/component/form/form.component.scss")).default]
                })
            ], FormComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid-basic.component.scss": 
        /*!*************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid-basic.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  overflow-x: auto;\n  border: 1px solid #e2e6ea;\n  border-radius: 3px;\n}\n:host .grid-basic--scroll {\n  overflow-y: auto;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2dyaWQvZ3JpZC1iYXNpYy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2dyaWQvZ3JpZC1iYXNpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQU4iLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvZ3JpZC9ncmlkLWJhc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vY3NzL3ZhcnNcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYy1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLmdyaWQtYmFzaWMge1xuICAgICYtLXNjcm9sbCB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU2ZWE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbjpob3N0IC5ncmlkLWJhc2ljLS1zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid-basic.component.ts": 
        /*!***********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid-basic.component.ts ***!
          \***********************************************************************/
        /*! exports provided: GridBasicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBasicComponent", function () { return GridBasicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var GridBasicComponent = /** @class */ (function (_super) {
                __extends(GridBasicComponent, _super);
                function GridBasicComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.bodyWidth = '100%';
                    _this.rowHeight = 45;
                    _this.idField = 'id';
                    _this.isLoading = true;
                    return _this;
                }
                Object.defineProperty(GridBasicComponent.prototype, "data", {
                    get: function () {
                        return this._data;
                    },
                    set: function (value) {
                        if (value) {
                            var data = void 0;
                            if (Array.isArray(value)) {
                                data = {
                                    rows: value
                                };
                            }
                            else {
                                data = value;
                            }
                            if (!data.columns) {
                                data.columns = data.rows[0] ? Object.keys(data.rows[0]).map(function (key) {
                                    return {
                                        field: key
                                    };
                                }) : null;
                            }
                            this._data = data;
                            this.isLoading = false;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                GridBasicComponent.prototype.initCmp = function () {
                    // update column width
                    if (this.data.columns && !this.data.columns[0].width) {
                        var containerWidth = this.el.clientWidth;
                        var colWidth_1 = containerWidth / this.data.columns.length;
                        colWidth_1 = colWidth_1 < 100 ? 100 : colWidth_1;
                        this.data.columns.forEach(function (column) { return column.width = colWidth_1; });
                    }
                };
                GridBasicComponent.prototype.afterRenderCmp = function () {
                    var headerEl = this.el.querySelector('mc-grid-header');
                    this.bodyHeight = this.el.clientHeight - headerEl.clientHeight - 2; // header borders
                };
                GridBasicComponent.prototype.onAction = function (e) {
                    switch (e.action) {
                        case 'update-width':
                            this.bodyWidth = e.width + 'px';
                            break;
                    }
                    this.action.emit(e);
                };
                return GridBasicComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            GridBasicComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GridBasicComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GridBasicComponent.prototype, "columns", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GridBasicComponent.prototype, "headerData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GridBasicComponent.prototype, "idField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GridBasicComponent.prototype, "isLoading", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GridBasicComponent.prototype, "data", null);
            GridBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-grid-basic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-basic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-basic.component.scss */ "./projects/mc-ui/src/lib/component/grid/grid-basic.component.scss")).default]
                })
                /**
                 * This is the same as the grid except it doesn't have the infinity scroll.
                 */
            ], GridBasicComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid-body.component.scss": 
        /*!************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid-body.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n:host .grid-body {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n:host .grid-body--row {\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid #e2e6ea;\n}\n:host .grid-body--row--cell {\n  padding: 0;\n  cursor: pointer;\n}\n:host .grid-body--row--cell--content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0 10px;\n}\n:host.is-scroll-page.is-last-page .grid-body--row:last-child {\n  border-bottom-color: transparent;\n}\n:host.is-basic .grid-body--row:last-child {\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2dyaWQvZ3JpZC1ib2R5LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvZ3JpZC9ncmlkLWJvZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUY7QURDRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FERE07RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0dSO0FERlE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSVY7QURNVTtFQUNFLGdDQUFBO0FDSlo7QURjVTtFQUNFLGdCQUFBO0FDWloiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvZ3JpZC9ncmlkLWJvZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9jc3MvdmFyc1wiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5ncmlkLWJvZHkge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgJi0tcm93IHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYy1ib3JkZXI7XG4gICAgICAmLS1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmLS1jb250ZW50IHtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5pcy1zY3JvbGwtcGFnZSB7XG4gICAgJi5pcy1sYXN0LXBhZ2Uge1xuICAgICAgLmdyaWQtYm9keSB7XG4gICAgICAgICYtLXJvdyB7XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuaXMtYmFzaWMge1xuICAgIC5ncmlkLWJvZHkge1xuICAgICAgICAmLS1yb3cge1xuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5ncmlkLWJvZHkge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbjpob3N0IC5ncmlkLWJvZHktLXJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU2ZWE7XG59XG46aG9zdCAuZ3JpZC1ib2R5LS1yb3ctLWNlbGwge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuZ3JpZC1ib2R5LS1yb3ctLWNlbGwtLWNvbnRlbnQge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuOmhvc3QuaXMtc2Nyb2xsLXBhZ2UuaXMtbGFzdC1wYWdlIC5ncmlkLWJvZHktLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC5pcy1iYXNpYyAuZ3JpZC1ib2R5LS1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid-body.component.ts": 
        /*!**********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid-body.component.ts ***!
          \**********************************************************************/
        /*! exports provided: GridBodyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function () { return GridBodyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GridBodyComponent = /** @class */ (function (_super) {
                __extends(GridBodyComponent, _super);
                function GridBodyComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.columnsChangeApplied = false;
                    _this.lastWidth = 0;
                    _this.rowHeight = 45;
                    _this.idField = 'id';
                    _this.tpls = {};
                    return _this;
                }
                Object.defineProperty(GridBodyComponent.prototype, "columns", {
                    get: function () {
                        return this._columns;
                    },
                    set: function (value) {
                        this._columns = value;
                        if (value) {
                            this.columnsChangeApplied = false;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GridBodyComponent.prototype, "data", {
                    get: function () {
                        return this._data;
                    },
                    set: function (value) {
                        var _this = this;
                        this._data = value;
                        if (value && !this.columnsChangeApplied) {
                            this.columnsChangeApplied = true;
                            // check size after body rendered
                            setTimeout(function () { return _this.checkSize(); });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                GridBodyComponent.prototype.onPress = function (e) {
                    var el = this.util.dom.findParent(e.target, '.grid-body--row--cell');
                    if (el) {
                        var dataset = el.dataset;
                        switch (dataset.action) {
                            case 'select-cell':
                                this.action.emit({ event: e, el: el, action: dataset.action, target: this, id: dataset.id, rowIndex: +dataset.rowindex, cellIndex: +dataset.cellindex, field: dataset.field });
                                break;
                        }
                    }
                };
                GridBodyComponent.prototype.afterRenderCmp = function () {
                    this.checkSize();
                };
                GridBodyComponent.prototype.checkSize = function () {
                    // emit width for prevent x scroll
                    var width = this.el.querySelector('.grid-body').clientWidth;
                    if (width && this.lastWidth !== width) {
                        this.lastWidth = width;
                        this.action.emit({ action: 'update-width', target: this, width: width });
                    }
                };
                return GridBodyComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            GridBodyComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridBodyComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridBodyComponent.prototype, "columns", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridBodyComponent.prototype, "data", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridBodyComponent.prototype, "idField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridBodyComponent.prototype, "tpls", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('click', ['$event'])
            ], GridBodyComponent.prototype, "onPress", null);
            GridBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'mc-grid-body',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-body.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-body.component.scss */ "./projects/mc-ui/src/lib/component/grid/grid-body.component.scss")).default]
                })
            ], GridBodyComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid-header.component.scss": 
        /*!**************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid-header.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: auto;\n  overflow-x: visible;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid #e2e6ea;\n}\n:host .grid-header {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n:host .grid-header--row--cell {\n  padding: 0;\n  border-bottom: 1px solid #e2e6ea;\n  cursor: pointer;\n}\n:host .grid-header--row--cell--content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0 10px;\n}\n:host .grid-header--row--cell.is-last-row {\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2dyaWQvZ3JpZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9ncmlkL2dyaWQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDTTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNDUjtBREFRO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VWO0FEQVE7RUFDRSxnQkFBQTtBQ0VWIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2dyaWQvZ3JpZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vY3NzL3ZhcnNcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYy1ib3JkZXI7XG4gIC5ncmlkLWhlYWRlciB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAmLS1yb3cge1xuICAgICAgJi0tY2VsbCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYy1ib3JkZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJi0tY29udGVudCB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgfVxuICAgICAgICAmLmlzLWxhc3Qtcm93IHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3cteDogdmlzaWJsZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTZlYTtcbn1cbjpob3N0IC5ncmlkLWhlYWRlciB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuOmhvc3QgLmdyaWQtaGVhZGVyLS1yb3ctLWNlbGwge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTZlYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmdyaWQtaGVhZGVyLS1yb3ctLWNlbGwtLWNvbnRlbnQge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuOmhvc3QgLmdyaWQtaGVhZGVyLS1yb3ctLWNlbGwuaXMtbGFzdC1yb3cge1xuICBib3JkZXItYm90dG9tOiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid-header.component.ts": 
        /*!************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid-header.component.ts ***!
          \************************************************************************/
        /*! exports provided: GridHeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function () { return GridHeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GridHeaderComponent = /** @class */ (function (_super) {
                __extends(GridHeaderComponent, _super);
                function GridHeaderComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.rowHeight = 30;
                    _this.tpls = {};
                    return _this;
                }
                GridHeaderComponent.prototype.initCmp = function () {
                    var _this = this;
                    if (!this.data) {
                        // generate header data
                        // TODO: update column width for colspan
                        this.data = [this.columns.map(function (column) {
                                return { id: column.field, name: column.name || column.field, width: column.width };
                            })];
                    }
                    else {
                        var rows_1 = [];
                        // calc col width
                        var lastIndex_1 = this.data.length - 1;
                        this.data.forEach(function (row, r) {
                            rows_1[r] = rows_1[r] || [];
                            var c = 0;
                            row.forEach(function (cell) {
                                while (row[r][c] === -1) {
                                    c++;
                                }
                                var colspan = cell.colspan || 1;
                                var rowspan = cell.rowspan || 1;
                                if (r === lastIndex_1 || r + rowspan - 1 === lastIndex_1) {
                                    cell.isLastRow = true;
                                }
                                var width = 0;
                                for (var i = 0; i < colspan; i++) {
                                    width += _this.columns[c + i].width;
                                }
                                cell.width = width;
                                // flag the empty cells
                                for (var i = 1; i < rowspan; i++) {
                                    for (var j = 0; j < colspan; j++) {
                                        rows_1[r + i] = rows_1[r + i] || [];
                                        rows_1[r + i][c + j] = -1;
                                    }
                                }
                                c += colspan;
                            });
                        });
                    }
                };
                return GridHeaderComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            GridHeaderComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridHeaderComponent.prototype, "columns", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridHeaderComponent.prototype, "data", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridHeaderComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], GridHeaderComponent.prototype, "tpls", void 0);
            GridHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'mc-grid-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid-header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-header.component.scss */ "./projects/mc-ui/src/lib/component/grid/grid-header.component.scss")).default]
                })
            ], GridHeaderComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid.component.scss": 
        /*!*******************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  overflow-x: auto;\n  border: 1px solid #e2e6ea;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9jc3MvdmFyc1wiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU2ZWE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/grid/grid.component.ts": 
        /*!*****************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/grid/grid.component.ts ***!
          \*****************************************************************/
        /*! exports provided: GridComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function () { return GridComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _scroll_scroll_async_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll/scroll-async.component */ "./projects/mc-ui/src/lib/component/scroll/scroll-async.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var GridComponent = /** @class */ (function (_super) {
                __extends(GridComponent, _super);
                function GridComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.bodyWidth = '100%';
                    _this.columnTpls = {};
                    _this.headerTpls = {};
                    return _this;
                }
                GridComponent.prototype.initCmp = function () {
                    // update column width
                    if (this.data.columns && !this.data.columns[0].width) {
                        var containerWidth = this.el.clientWidth;
                        var colWidth_2 = containerWidth / this.data.columns.length;
                        colWidth_2 = colWidth_2 < 100 ? 100 : colWidth_2;
                        this.data.columns.forEach(function (column) { return column.width = colWidth_2; });
                    }
                };
                GridComponent.prototype.afterRenderCmp = function () {
                    var headerEl = this.el.querySelector('mc-grid-header');
                    this.bodyHeight = this.el.clientHeight - headerEl.clientHeight - 2; // header borders
                };
                GridComponent.prototype.onAction = function (e) {
                    switch (e.action) {
                        case 'update-width':
                            this.bodyWidth = e.width + 'px';
                            break;
                    }
                    this.action.emit(e);
                };
                return GridComponent;
            }(_scroll_scroll_async_component__WEBPACK_IMPORTED_MODULE_1__["ScrollAsyncComponent"]));
            GridComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], GridComponent.prototype, "columnTpls", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], GridComponent.prototype, "headerTpls", void 0);
            GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'mc-grid',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/grid/grid.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid.component.scss */ "./projects/mc-ui/src/lib/component/grid/grid.component.scss")).default]
                })
            ], GridComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/icon/icon.component.scss": 
        /*!*******************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/icon/icon.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: inline-block;\n  font-size: 20px;\n  color: #23272b;\n  position: relative;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2ljb24vaWNvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY3NzL192YXJzLnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9pY29uL2ljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ2tCWTtFRGpCWixrQkFBQTtFQUNBLGVBQUE7QUVBRiIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9pY29uL2ljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vY3NzL3ZhcnNcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAkYy10ZXh0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi8vIFByaW1hcnkgY29sb3JzXG4kYy1vcmFuZ2UtYjogI2YzNjcwNTtcbiRjLW9yYW5nZTogI2Y4ODMwMDtcbiRjLW9yYW5nZS1sOiAjZmZiMzAyO1xuXG4kYy1ibHVlOiAjMDg2NkM2O1xuJGMtYmx1ZS1iOiAjMDc1M2ExO1xuXG4kYy1jeWFuLWI6ICMzOWFhYWQ7XG4kYy1jeWFuOiAjNmJjM2JkO1xuJGMtY3lhbi1sOiAjZTNmNmY4O1xuXG4kYy1ncmVlbjogIzIzQkYwODtcbiRjLWdyZWVuLWI6ICMxYzlhMDY7XG5cbiRjLXJlZDojREMzNTQ1O1xuJGMtcmVkLWI6I2M4MjMzMztcblxuJGMteWVsbG93OiAjZWVmNjZkO1xuXG4vLyBHcmF5XG4kYy1ibGFjazogIzAwMDtcbiRjLWdyYXktYmJiYjogIzIzMjcyYjtcbiRjLWdyYXktYmJiOiAjMzQzYTQwO1xuJGMtZ3JheS1iYjogIzcyN2I4NDtcbiRjLWdyYXktYjogIzg2OGU5NjtcbiRjLWdyYXk6ICNlMmU2ZWE7XG4kYy1ncmF5LWw6ICNmOGY5ZmE7XG4kYy13aGl0ZTogI2ZmZjtcblxuJGMtdGV4dDogJGMtZ3JheS1iYmJiO1xuJGMtYm9yZGVyOiAkYy1ncmF5O1xuJGMtYmc6ICRjLWdyYXktbDtcblxuJGMtc3VjY2VzczogJGMtZ3JlZW47XG4kYy13YXJuaW5nOiAkYy1vcmFuZ2U7XG4kYy1lcnJvcjogJGMtcmVkO1xuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyMzI3MmI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/icon/icon.component.ts": 
        /*!*****************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/icon/icon.component.ts ***!
          \*****************************************************************/
        /*! exports provided: IconComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function () { return IconComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            var IconComponent = /** @class */ (function (_super) {
                __extends(IconComponent, _super);
                function IconComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    return _this;
                }
                return IconComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));
            IconComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_2__["MCUIService"] }
            ]; };
            IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-icon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/icon/icon.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icon.component.scss */ "./projects/mc-ui/src/lib/component/icon/icon.component.scss")).default]
                })
            ], IconComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/list/list-basic.component.scss": 
        /*!*************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/list/list-basic.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  border: 1px solid #e2e6ea;\n  border-radius: 3px;\n}\n:host.horizontal {\n  border: 0;\n  border-radius: 0;\n  white-space: nowrap;\n}\n:host.is-scroll-page {\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xpc3QvbGlzdC1iYXNpYy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xpc3QvbGlzdC1iYXNpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdFO0VBQ0UsU0FBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xpc3QvbGlzdC1iYXNpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9jc3MvdmFyc1wiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgJGMtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgJi5ob3Jpem9udGFsIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgJi5pcy1zY3JvbGwtcGFnZSB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlNmVhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46aG9zdC5ob3Jpem9udGFsIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuOmhvc3QuaXMtc2Nyb2xsLXBhZ2Uge1xuICBib3JkZXI6IDA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/list/list-basic.component.ts": 
        /*!***********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/list/list-basic.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ListBasicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBasicComponent", function () { return ListBasicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ListBasicComponent = /** @class */ (function (_super) {
                __extends(ListBasicComponent, _super);
                function ListBasicComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    // checking the selected item ids
                    _this.selectedItemsMap = new Map();
                    _this.rowHeight = 45; // horizontal ? 100% : rowHeight;
                    _this.multiSelect = false;
                    // for ListItem
                    _this.itemTpl = null;
                    _this.idField = 'id';
                    _this.nameField = 'name';
                    _this.hasDelete = false;
                    _this.isLastPage = false;
                    _this.isFirstPage = false;
                    _this.isScrollPage = false;
                    _this.horizontal = false;
                    return _this;
                }
                Object.defineProperty(ListBasicComponent.prototype, "selectedItems", {
                    get: function () {
                        return this.getSelectedItems();
                    },
                    set: function (value) {
                        var _this = this;
                        if (value) {
                            this.selectedItemsMap = new Map();
                            value.forEach(function (d) { return _this.selectedItemsMap.set('' + d[_this.idField], d); });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListBasicComponent.prototype, "data", {
                    get: function () {
                        return this._data;
                    },
                    set: function (value) {
                        // convert string array to list data format
                        if (value) {
                            if (!Array.isArray(value)) {
                                value = [value];
                            }
                            if (typeof value[0] === 'string') {
                                value = value.map(function (d, idx) {
                                    return { id: idx, name: d };
                                });
                            }
                        }
                        this._data = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ListBasicComponent.prototype.afterRenderCmp = function () {
                    // if it has the selected item.
                    var selectedItems = this.getSelectedItems();
                    if (selectedItems.length) {
                        this.emitAction('select-item', selectedItems[0]);
                    }
                };
                ListBasicComponent.prototype.key = function (index, item) {
                    return item[this.idField];
                };
                ListBasicComponent.prototype.getSelectedItems = function () {
                    var items = [];
                    this.selectedItemsMap.forEach(function (value) { return items.push(value); });
                    return items;
                };
                ListBasicComponent.prototype.selectItem = function (item) {
                    // TODO: check the list is rerendered.
                    if (!this.multiSelect) {
                        this.selectedItemsMap = new Map();
                    }
                    this.selectedItemsMap.set(item[this.idField] + '', item);
                };
                ListBasicComponent.prototype.unselectItem = function (item) {
                    // TODO: check the list is rerendered.
                    if (this.multiSelect) {
                        this.selectedItemsMap.delete(item[this.idField] + '');
                    }
                };
                ListBasicComponent.prototype.emitAction = function (actionType, selectedItem, event) {
                    if (event === void 0) { event = null; }
                    this.action.emit({ target: this, action: actionType, event: event, selectedItem: selectedItem, selectedItems: this.getSelectedItems() });
                };
                ListBasicComponent.prototype.onListItemAction = function (e) {
                    switch (e.action) {
                        case 'unselect-item':
                        case 'select-item':
                            if (e.action === 'select-item') {
                                this.selectItem(e.data);
                            }
                            else {
                                this.unselectItem(e.data);
                            }
                            this.emitAction(e.action, e.data, e.event);
                            break;
                    }
                };
                return ListBasicComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            ListBasicComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "multiSelect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "selectedItems", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "data", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "itemTpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "idField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "nameField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "hasDelete", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "isLastPage", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "isFirstPage", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.is-scroll-page'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "isScrollPage", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.horizontal'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListBasicComponent.prototype, "horizontal", void 0);
            ListBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'mc-list-basic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list-basic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-basic.component.scss */ "./projects/mc-ui/src/lib/component/list/list-basic.component.scss")).default]
                })
            ], ListBasicComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/list/list-item.component.scss": 
        /*!************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/list/list-item.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  padding: 0 20px;\n  width: 100%;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid #e2e6ea;\n}\n:host:last-child {\n  border-bottom-color: transparent;\n}\n:host.horizontal {\n  width: auto;\n  border-color: transparent;\n}\n:host.is-scroll-page-item:last-child {\n  border-bottom-color: #e2e6ea;\n}\n:host.is-scroll-page-item.is-last-page-item:last-child {\n  border-bottom-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xpc3QvbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvbGlzdC9saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWMvbWMtdWktYW5ndWxhci9wcm9qZWN0cy9tYy11aS9zcmMvbGliL2Nzcy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7QUNERjtBREdFO0VBQ0UsZ0NBQUE7QUNESjtBRE1FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FDSko7QURRSTtFQUNFLDRCRUVHO0FEUlQ7QURVTTtFQUNFLGdDQUFBO0FDUlIiLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvbGlzdC9saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi9jc3MvdmFyc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjLWJvcmRlcjtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJi5zZWxlY3RlZCB7fVxuXG4gICYuaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICYuaXMtc2Nyb2xsLXBhZ2UtaXRlbSB7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjLWJvcmRlcjtcbiAgICB9XG5cbiAgICAmLmlzLWxhc3QtcGFnZS1pdGVtIHtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlNmVhO1xufVxuOmhvc3Q6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QuaXMtc2Nyb2xsLXBhZ2UtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UyZTZlYTtcbn1cbjpob3N0LmlzLXNjcm9sbC1wYWdlLWl0ZW0uaXMtbGFzdC1wYWdlLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufSIsIi8vIFByaW1hcnkgY29sb3JzXG4kYy1vcmFuZ2UtYjogI2YzNjcwNTtcbiRjLW9yYW5nZTogI2Y4ODMwMDtcbiRjLW9yYW5nZS1sOiAjZmZiMzAyO1xuXG4kYy1ibHVlOiAjMDg2NkM2O1xuJGMtYmx1ZS1iOiAjMDc1M2ExO1xuXG4kYy1jeWFuLWI6ICMzOWFhYWQ7XG4kYy1jeWFuOiAjNmJjM2JkO1xuJGMtY3lhbi1sOiAjZTNmNmY4O1xuXG4kYy1ncmVlbjogIzIzQkYwODtcbiRjLWdyZWVuLWI6ICMxYzlhMDY7XG5cbiRjLXJlZDojREMzNTQ1O1xuJGMtcmVkLWI6I2M4MjMzMztcblxuJGMteWVsbG93OiAjZWVmNjZkO1xuXG4vLyBHcmF5XG4kYy1ibGFjazogIzAwMDtcbiRjLWdyYXktYmJiYjogIzIzMjcyYjtcbiRjLWdyYXktYmJiOiAjMzQzYTQwO1xuJGMtZ3JheS1iYjogIzcyN2I4NDtcbiRjLWdyYXktYjogIzg2OGU5NjtcbiRjLWdyYXk6ICNlMmU2ZWE7XG4kYy1ncmF5LWw6ICNmOGY5ZmE7XG4kYy13aGl0ZTogI2ZmZjtcblxuJGMtdGV4dDogJGMtZ3JheS1iYmJiO1xuJGMtYm9yZGVyOiAkYy1ncmF5O1xuJGMtYmc6ICRjLWdyYXktbDtcblxuJGMtc3VjY2VzczogJGMtZ3JlZW47XG4kYy13YXJuaW5nOiAkYy1vcmFuZ2U7XG4kYy1lcnJvcjogJGMtcmVkO1xuIl19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/list/list-item.component.ts": 
        /*!**********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/list/list-item.component.ts ***!
          \**********************************************************************/
        /*! exports provided: ListItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function () { return ListItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var ListItemComponent = /** @class */ (function (_super) {
                __extends(ListItemComponent, _super);
                function ListItemComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.data = {};
                    _this.idField = 'id';
                    _this.nameField = 'name';
                    _this.hasCheckBox = false;
                    _this.hasDeleteButton = false;
                    _this.height = '45px';
                    _this.lineHeight = '43px';
                    _this.selected = false;
                    _this.isScrollPageItem = false;
                    _this.isFirstPageItem = false;
                    _this.isLastPageItem = false;
                    _this.horizontal = false;
                    return _this;
                }
                ListItemComponent.prototype.onPress = function (e) {
                    if (!this.hasCheckBox) {
                        this.selected = true;
                        this.emitSelectAction(e);
                    }
                };
                ListItemComponent.prototype.emitSelectAction = function (e) {
                    this.action.emit({ target: this, action: this.selected ? 'select-item' : 'unselect-item', event: e, selected: this.selected, data: this.data });
                };
                ListItemComponent.prototype.onChangeCheckbox = function (e) {
                    this.selected = e.target.checked;
                    this.emitSelectAction(e);
                };
                return ListItemComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            ListItemComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "tpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "data", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "idField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "nameField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "hasCheckBox", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "hasDeleteButton", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "height", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.lineHeight'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "lineHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.selected'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "selected", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-scroll-page-item'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "isScrollPageItem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-first-page-item'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "isFirstPageItem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-last-page-item'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "isLastPageItem", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.horizontal'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListItemComponent.prototype, "horizontal", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
            ], ListItemComponent.prototype, "onPress", null);
            ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-list-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-item.component.scss */ "./projects/mc-ui/src/lib/component/list/list-item.component.scss")).default]
                })
            ], ListItemComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/list/list.component.scss": 
        /*!*******************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/list/list.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  border: 1px solid #e2e6ea;\n  border-radius: 3px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vY3NzL3ZhcnNcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYy1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlNmVhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/list/list.component.ts": 
        /*!*****************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/list/list.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function () { return ListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _scroll_scroll_async_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scroll/scroll-async.component */ "./projects/mc-ui/src/lib/component/scroll/scroll-async.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ListComponent = /** @class */ (function (_super) {
                __extends(ListComponent, _super);
                function ListComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.multiSelect = false;
                    _this.delete = false;
                    return _this;
                }
                ListComponent.prototype.unselectItem = function (item) {
                    this.listBasic1Cmp.unselectItem(item);
                    this.listBasic2Cmp.unselectItem(item);
                };
                return ListComponent;
            }(_scroll_scroll_async_component__WEBPACK_IMPORTED_MODULE_2__["ScrollAsyncComponent"]));
            ListComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('listBasic1Cmp', { static: false })
            ], ListComponent.prototype, "listBasic1Cmp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('listBasic2Cmp', { static: false })
            ], ListComponent.prototype, "listBasic2Cmp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListComponent.prototype, "itemTpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListComponent.prototype, "nameField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListComponent.prototype, "multiSelect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListComponent.prototype, "delete", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ListComponent.prototype, "selectedItems", void 0);
            ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'mc-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/list/list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./projects/mc-ui/src/lib/component/list/list.component.scss")).default]
                })
            ], ListComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/loader/loader.component.scss": 
        /*!***********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/loader/loader.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: grid;\n  place-items: center center;\n  height: 100%;\n  width: 100%;\n  z-index: 9;\n}\n:host.loader-ring .loader {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n:host.loader-ring .loader div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid #dfc;\n  border-radius: 50%;\n  -webkit-animation: loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #dfc transparent transparent transparent;\n}\n:host.loader-ring .loader div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n:host.loader-ring .loader div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n:host.loader-ring .loader div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n:host.loader-spin .loader {\n  color: #dfc;\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n:host.loader-spin .loader div {\n  transform-origin: 32px 32px;\n  -webkit-animation: loader-spin 1.2s linear infinite;\n          animation: loader-spin 1.2s linear infinite;\n}\n:host.loader-spin .loader div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 29px;\n  width: 5px;\n  height: 14px;\n  border-radius: 20%;\n  background: #fff;\n}\n:host.loader-spin .loader div:nth-child(1) {\n  transform: rotate(0deg);\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n:host.loader-spin .loader div:nth-child(2) {\n  transform: rotate(30deg);\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n:host.loader-spin .loader div:nth-child(3) {\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n:host.loader-spin .loader div:nth-child(4) {\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n:host.loader-spin .loader div:nth-child(5) {\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n:host.loader-spin .loader div:nth-child(6) {\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n:host.loader-spin .loader div:nth-child(7) {\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n:host.loader-spin .loader div:nth-child(8) {\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n:host.loader-spin .loader div:nth-child(9) {\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n:host.loader-spin .loader div:nth-child(10) {\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n:host.loader-spin .loader div:nth-child(11) {\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n}\n:host.loader-spin .loader div:nth-child(12) {\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n:host.loader-small {\n  height: 64px;\n  top: auto;\n  bottom: 0;\n}\n@-webkit-keyframes loader-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes loader-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes loader-spin {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes loader-spin {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0FGO0FESU07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGUjtBRElRO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUVBQUE7VUFBQSxpRUFBQTtFQUNBLHNEQUFBO0FDRlY7QURJVTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNGWjtBREtVO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0haO0FETVU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDSlo7QURXTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUUjtBRFdRO0VBQ0UsMkJBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDVFY7QURXVTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1RaO0FEWVU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNWWjtBRGFVO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDWFo7QURjVTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ1paO0FEZVU7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNiWjtBRGdCVTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ2RaO0FEaUJVO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDZlo7QURrQlU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNoQlo7QURtQlU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNqQlo7QURvQlU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNsQlo7QURxQlU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNuQlo7QURzQlU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNwQlo7QUR1QlU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNyQlo7QUQyQkk7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUN6Qk47QUQ4QkE7RUFDRTtJQUNFLHVCQUFBO0VDM0JGO0VEOEJBO0lBQ0UseUJBQUE7RUM1QkY7QUFDRjtBRHFCQTtFQUNFO0lBQ0UsdUJBQUE7RUMzQkY7RUQ4QkE7SUFDRSx5QkFBQTtFQzVCRjtBQUNGO0FEK0JBO0VBQ0U7SUFDRSxVQUFBO0VDN0JGO0VEZ0NBO0lBQ0UsVUFBQTtFQzlCRjtBQUNGO0FEdUJBO0VBQ0U7SUFDRSxVQUFBO0VDN0JGO0VEZ0NBO0lBQ0UsVUFBQTtFQzlCRjtBQUNGIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5O1xuXG4gICYubG9hZGVyIHtcbiAgICAmLXJpbmcge1xuICAgICAgLmxvYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDUxcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MXB4O1xuICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICNkZmM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGVyLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RmYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1zcGluIHtcbiAgICAgIC5sb2FkZXIge1xuICAgICAgICBjb2xvcjogI2RmYztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBsb2FkZXItc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcblxuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgbGVmdDogMjlweDtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoNykge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoOCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoOSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtY2hpbGQoMTApIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLWNoaWxkKDExKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1jaGlsZCgxMikge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbCB7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyLXNwaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbn1cbjpob3N0LmxvYWRlci1yaW5nIC5sb2FkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbjpob3N0LmxvYWRlci1yaW5nIC5sb2FkZXIgZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogNTFweDtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlcjogNnB4IHNvbGlkICNkZmM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsb2FkZXItcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIGJvcmRlci1jb2xvcjogI2RmYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbjpob3N0LmxvYWRlci1yaW5nIC5sb2FkZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xufVxuOmhvc3QubG9hZGVyLXJpbmcgLmxvYWRlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbn1cbjpob3N0LmxvYWRlci1yaW5nIC5sb2FkZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciB7XG4gIGNvbG9yOiAjZGZjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbjpob3N0LmxvYWRlci1zcGluIC5sb2FkZXIgZGl2IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xuICBhbmltYXRpb246IGxvYWRlci1zcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDI5cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG59XG46aG9zdC5sb2FkZXItc3BpbiAubG9hZGVyIGRpdjpudGgtY2hpbGQoMikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbn1cbjpob3N0LmxvYWRlci1zcGluIC5sb2FkZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG59XG46aG9zdC5sb2FkZXItc3BpbiAubG9hZGVyIGRpdjpudGgtY2hpbGQoNykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cbjpob3N0LmxvYWRlci1zcGluIC5sb2FkZXIgZGl2Om50aC1jaGlsZCg5KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG59XG46aG9zdC5sb2FkZXItc3BpbiAubG9hZGVyIGRpdjpudGgtY2hpbGQoMTApIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cbjpob3N0LmxvYWRlci1zcGluIC5sb2FkZXIgZGl2Om50aC1jaGlsZCgxMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xufVxuOmhvc3QubG9hZGVyLXNwaW4gLmxvYWRlciBkaXY6bnRoLWNoaWxkKDEyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG46aG9zdC5sb2FkZXItc21hbGwge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRlci1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZGVyLXNwaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/loader/loader.component.ts": 
        /*!*********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/loader/loader.component.ts ***!
          \*********************************************************************/
        /*! exports provided: LoaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () { return LoaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var LoaderComponent = /** @class */ (function (_super) {
                __extends(LoaderComponent, _super);
                function LoaderComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.theme = 'ring';
                    _this.loader = Array.isArray(_this.theme) ? _this.theme[0] : _this.theme;
                    return _this;
                }
                return LoaderComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            LoaderComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LoaderComponent.prototype, "theme", void 0);
            LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-loader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/loader/loader.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./projects/mc-ui/src/lib/component/loader/loader.component.scss")).default]
                })
            ], LoaderComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/mask/mask.component.scss": 
        /*!*******************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/mask/mask.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: none;\n}\n:host.visible {\n  display: block;\n}\n:host.transparent {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L21hc2svbWFzay5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L21hc2svbWFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUNERjtBREdFO0VBQ0UsY0FBQTtBQ0RKO0FESUU7RUFDRSw2QkFBQTtBQ0ZKIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L21hc2svbWFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuICBkaXNwbGF5OiBub25lO1xuXG4gICYudmlzaWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmLnRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0LnZpc2libGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0LnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/mask/mask.component.ts": 
        /*!*****************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/mask/mask.component.ts ***!
          \*****************************************************************/
        /*! exports provided: MaskComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function () { return MaskComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var MaskComponent = /** @class */ (function (_super) {
                __extends(MaskComponent, _super);
                function MaskComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.visible = false;
                    _this.transparent = false;
                    return _this;
                }
                return MaskComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            MaskComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.visible'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MaskComponent.prototype, "visible", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.transparent'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MaskComponent.prototype, "transparent", void 0);
            MaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-mask',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mask.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/mask/mask.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mask.component.scss */ "./projects/mc-ui/src/lib/component/mask/mask.component.scss")).default]
                })
            ], MaskComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/message-bar/message-bar.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/message-bar/message-bar.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n:host .message-bar--close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 15px 20px;\n}\n:host .message-bar--message {\n  padding: 15px 20px;\n}\n:host .message-bar-error {\n  color: red;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FEQ0k7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUNDTiIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAubWVzc2FnZS1iYXIge1xuICAgICYtLWNsb3NlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIH1cbiAgICAmLS1tZXNzYWdlIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICB9XG4gICAgJi1lcnJvciB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLm1lc3NhZ2UtYmFyLS1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuOmhvc3QgLm1lc3NhZ2UtYmFyLS1tZXNzYWdlIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuOmhvc3QgLm1lc3NhZ2UtYmFyLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/message-bar/message-bar.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/message-bar/message-bar.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: MessageBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBarComponent", function () { return MessageBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var MessageBarComponent = /** @class */ (function (_super) {
                __extends(MessageBarComponent, _super);
                function MessageBarComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.message = '';
                    _this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    return _this;
                }
                MessageBarComponent.prototype.onPressCloseButton = function (e) {
                    this.hide.emit(e);
                };
                return MessageBarComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            MessageBarComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MessageBarComponent.prototype, "message", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], MessageBarComponent.prototype, "hide", void 0);
            MessageBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-message-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/message-bar/message-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message-bar.component.scss */ "./projects/mc-ui/src/lib/component/message-bar/message-bar.component.scss")).default]
                })
            ], MessageBarComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/popup/popup-list.component.scss": 
        /*!**************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/popup/popup-list.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-color: transparent;\n}\n:host .popup-list--header--input--icon {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  line-height: 43px;\n}\n:host .popup-list--body-t {\n  background-color: transparent;\n}\n:host .popup-list--body-t mc-list {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L3BvcHVwL3BvcHVwLWxpc3QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9wb3B1cC9wb3B1cC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjtBREdRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0FDRFY7QURNTTtFQUNFLDZCQUFBO0FDSlI7QURLUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNIViIsImZpbGUiOiJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9wb3B1cC9wb3B1cC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLnBvcHVwLWxpc3Qge1xuICAgICYtLWhlYWRlciB7XG4gICAgICAmLS1pbnB1dCB7XG4gICAgICAgICYtLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi0tYm9keSB7XG4gICAgICAmLXQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWMtbGlzdCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5wb3B1cC1saXN0LS1oZWFkZXItLWlucHV0LS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAwO1xuICBsaW5lLWhlaWdodDogNDNweDtcbn1cbjpob3N0IC5wb3B1cC1saXN0LS1ib2R5LXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5wb3B1cC1saXN0LS1ib2R5LXQgbWMtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/popup/popup-list.component.ts": 
        /*!************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/popup/popup-list.component.ts ***!
          \************************************************************************/
        /*! exports provided: PopupListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupListComponent", function () { return PopupListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.component */ "./projects/mc-ui/src/lib/component/popup/popup.component.ts");
            var PopupListComponent = /** @class */ (function (_super) {
                __extends(PopupListComponent, _super);
                function PopupListComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.keyword = '';
                    // for displaying the selections.
                    _this.popupSelectedItems = [];
                    _this.listSelectedItems = [];
                    _this.lastSelectedName = '';
                    _this.listHeight = 300;
                    _this.rowHeight = 45;
                    _this.multiSelect = false;
                    // popup
                    _this.height = 350;
                    _this.startFrom = 'overlap';
                    _this.needData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    _this.filterDebounce = _this.util.debounce(_this.filter, 300, _this);
                    return _this;
                }
                Object.defineProperty(PopupListComponent.prototype, "selectedItems", {
                    // read only
                    set: function (value) {
                        if (value) {
                            this.popupSelectedItems = value.concat();
                            this.listSelectedItems = value.concat();
                            this.lastSelectedItem = value.length ? value[0] : null;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PopupListComponent.prototype, "data", {
                    get: function () {
                        return this._data;
                    },
                    set: function (value) {
                        var _this = this;
                        // input only
                        this._data = value;
                        // console.log('update popup list data', value);
                        // update list for calculating scroll height after updating header height.
                        setTimeout(function () { return _this.listData = value; });
                    },
                    enumerable: true,
                    configurable: true
                });
                PopupListComponent.prototype.getInputCmp = function () {
                    return this.indicatorLocation[0] === 't' ? this.inputCmp1 : this.inputCmp2;
                };
                PopupListComponent.prototype.show = function () {
                    var _this = this;
                    // init filter
                    if (this.keyword) {
                        this.filter('');
                    }
                    this.updateLastSelectedItemName();
                    _super.prototype.show.call(this);
                    setTimeout(function () {
                        // focus
                        var inputCmp = _this.getInputCmp();
                        inputCmp.focus();
                    });
                };
                PopupListComponent.prototype.filter = function (keyword) {
                    if (keyword !== this.keyword) {
                        this.keyword = keyword;
                        // it can assign 2 times but it is the same value, so it is not infinity loop.
                        this.lastSelectedName = keyword;
                        this.needData.emit({
                            target: this,
                            action: 'filter',
                            keyword: keyword
                        });
                    }
                };
                PopupListComponent.prototype.updateLastSelectedItemName = function () {
                    this.lastSelectedName = this.lastSelectedItem ? this.lastSelectedItem[this.nameField] : '';
                };
                PopupListComponent.prototype.onValueChange = function (e) {
                    // console.log('valueChange', e);
                    if (e.by === 'keyboard') {
                        this.filterDebounce(e.value);
                    }
                };
                PopupListComponent.prototype.onClickUnselectButton = function (item) {
                    this.listCmp.unselectItem(item);
                };
                PopupListComponent.prototype.onListAction = function (e) {
                    switch (e.action) {
                        case 'unselect-item':
                        case 'select-item':
                            // for display the selections.
                            this.popupSelectedItems = e.selectedItems.concat();
                            if (!this.multiSelect) {
                                this.visible = false;
                            }
                            this.lastSelectedItem = e.selectedItem;
                            break;
                    }
                    e.target = this;
                    this.action.emit(e);
                };
                PopupListComponent.prototype.onListNeedData = function (e) {
                    e.target = this;
                    this.needData.emit(e);
                };
                PopupListComponent.prototype.onClickListBody = function () {
                    this.visible = false;
                };
                return PopupListComponent;
            }(_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"]));
            PopupListComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_2__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listCmp', { static: false })
            ], PopupListComponent.prototype, "listCmp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputCmp1', { static: false })
            ], PopupListComponent.prototype, "inputCmp1", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputCmp2', { static: false })
            ], PopupListComponent.prototype, "inputCmp2", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "listHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "itemTpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "idField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "nameField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "multiSelect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "selectedItems", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "data", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "height", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupListComponent.prototype, "startFrom", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PopupListComponent.prototype, "needData", void 0);
            PopupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-popup-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/popup/popup-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup.component.scss */ "./projects/mc-ui/src/lib/component/popup/popup.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-list.component.scss */ "./projects/mc-ui/src/lib/component/popup/popup-list.component.scss")).default]
                })
            ], PopupListComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/popup/popup.component.scss": 
        /*!*********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/popup/popup.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  display: inline-block;\n  background-color: #fff;\n}\n:host.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host.popup-basic {\n  border: 1px solid silver;\n  padding: 20px;\n}\n:host.popup-indicator:before {\n  content: \"\";\n  width: 17px;\n  height: 4px;\n  position: absolute;\n  background: #fff;\n  z-index: 2;\n}\n:host.popup-indicator:after {\n  content: \"\";\n  width: 16px;\n  height: 12px;\n  position: absolute;\n  z-index: 1;\n  background-color: #fff;\n}\n:host.popup-indicator-top-right:before {\n  transform: rotate(-35deg);\n  top: -6px;\n  right: -1px;\n  border-radius: 0 4px 0 0;\n  border-top: solid 1px #12102e;\n  border-right: solid 1px #12102e;\n}\n:host.popup-indicator-top-right:after {\n  top: -9px;\n  right: -1px;\n  border-radius: 0 4px 0 0;\n  border-right: solid 1px #12102e;\n}\n:host.popup-indicator-top-left:before {\n  transform: scale(-1, 1) rotate(-35deg);\n  left: -1px;\n  top: -6px;\n  border-radius: 0 4px 0 0;\n  border-top: solid 1px #12102e;\n  border-right: solid 1px #12102e;\n}\n:host.popup-indicator-top-left:after {\n  transform: scale(-1, 1);\n  top: -9px;\n  left: -1px;\n  border-radius: 0 4px 0 0;\n  border-right: solid 1px #12102e;\n}\n:host.popup-indicator-bottom-right:before {\n  transform: scale(-1, 1) rotate(-35deg);\n  right: -1px;\n  bottom: -6px;\n  border-radius: 0 0 0 4px;\n  border-bottom: solid 1px #12102e;\n  border-left: solid 1px #12102e;\n}\n:host.popup-indicator-bottom-right:after {\n  transform: scale(-1, 1);\n  right: -1px;\n  bottom: -9px;\n  border-radius: 0 0 0 4px;\n  border-left: solid 1px #12102e;\n}\n:host.popup-indicator-bottom-left:before {\n  transform: rotate(-35deg);\n  bottom: -6px;\n  left: -1px;\n  border-radius: 0 0 0 4px;\n  border-bottom: solid 1px #12102e;\n  border-left: solid 1px #12102e;\n}\n:host.popup-indicator-bottom-left:after {\n  bottom: -9px;\n  left: -1px;\n  border-radius: 0 0 0 4px;\n  border-left: solid 1px #12102e;\n}\n:host.popup-audit {\n  width: 250px;\n  padding: 15px;\n  border: solid 1px #12102e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0o7QURHSTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBQ0ROO0FES007RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0hSO0FETU07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0pSO0FEU1E7RUFDRSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDUFY7QURVUTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBQ1JWO0FEYVE7RUFDRSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDWFY7QURjUTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FDWlY7QURpQlE7RUFDRSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDZlY7QURrQlE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQ2hCVjtBRHFCUTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUNuQlY7QURzQlE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7QUNwQlY7QUR5Qkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDdkJOIiwiZmlsZSI6InByb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAmLmNlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gICYucG9wdXAge1xuICAgICYtYmFzaWMge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAmLWluZGljYXRvciB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBpbmRpY2F0b3IgbG9jYXRpb24gaXMgdG9wLXJpZ2h0XG4gICAgICAmLXRvcC1yaWdodCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogLTFweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XG4gICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMxMjEwMmU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogLTlweDtcbiAgICAgICAgICByaWdodDogLTFweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLXRvcC1sZWZ0IHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMzVkZWcpO1xuICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDAgMDtcbiAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjMTIxMDJlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gICAgICAgICAgdG9wOiAtOXB4O1xuICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAwO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICMxMjEwMmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi1ib3R0b20tcmlnaHQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSkgcm90YXRlKC0zNWRlZyk7XG4gICAgICAgICAgcmlnaHQ6IC0xcHg7XG4gICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICMxMjEwMmU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICAgICAgICByaWdodDogLTFweDtcbiAgICAgICAgICBib3R0b206IC05cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWJvdHRvbS1sZWZ0IHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XG4gICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMTIxMDJlO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGJvdHRvbTogLTlweDtcbiAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICMxMjEwMmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWF1ZGl0IHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjMTIxMDJlO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbjpob3N0LmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG46aG9zdC5wb3B1cC1iYXNpYyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMjtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci10b3AtcmlnaHQ6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcbiAgdG9wOiAtNnB4O1xuICByaWdodDogLTFweDtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAwO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzEyMTAyZTtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci10b3AtcmlnaHQ6YWZ0ZXIge1xuICB0b3A6IC05cHg7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICMxMjEwMmU7XG59XG46aG9zdC5wb3B1cC1pbmRpY2F0b3ItdG9wLWxlZnQ6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSkgcm90YXRlKC0zNWRlZyk7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAwO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzEyMTAyZTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzEyMTAyZTtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci10b3AtbGVmdDphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICB0b3A6IC05cHg7XG4gIGxlZnQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDAgMDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzEyMTAyZTtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci1ib3R0b20tcmlnaHQ6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSkgcm90YXRlKC0zNWRlZyk7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3R0b206IC02cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMxMjEwMmU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzEyMTAyZTtcbn1cbjpob3N0LnBvcHVwLWluZGljYXRvci1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvdHRvbTogLTlweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4O1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICMxMjEwMmU7XG59XG46aG9zdC5wb3B1cC1pbmRpY2F0b3ItYm90dG9tLWxlZnQ6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcbiAgYm90dG9tOiAtNnB4O1xuICBsZWZ0OiAtMXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMTIxMDJlO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICMxMjEwMmU7XG59XG46aG9zdC5wb3B1cC1pbmRpY2F0b3ItYm90dG9tLWxlZnQ6YWZ0ZXIge1xuICBib3R0b206IC05cHg7XG4gIGxlZnQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjMTIxMDJlO1xufVxuOmhvc3QucG9wdXAtYXVkaXQge1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICMxMjEwMmU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/popup/popup.component.ts": 
        /*!*******************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/popup/popup.component.ts ***!
          \*******************************************************************/
        /*! exports provided: PopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function () { return PopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            var PopupComponent = /** @class */ (function (_super) {
                __extends(PopupComponent, _super);
                function PopupComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this._visible = false;
                    _this._hasIndicator = false;
                    // for body press event, it is triggered after clicking the target. We need to ignore the body event when visible = true;
                    _this.bodyEventLock = false;
                    _this.indicatorHeight = 10;
                    _this.indicatorLocation = 'bl'; // 'tl' | 'tr' | 'bl' | 'br' = 'bl'
                    _this.checkTargetLocation = false;
                    // top left is the base state.
                    _this.startFrom = 'center';
                    _this.offsetX = 0;
                    _this.offsetY = 0;
                    _this.useTargetWidth = false;
                    _this.tpl = null;
                    _this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    _this.center = false;
                    _this.subscriptions = service.bodyPress.subscribe(_this.onPressBody.bind(_this));
                    return _this;
                }
                Object.defineProperty(PopupComponent.prototype, "targetEl", {
                    get: function () {
                        return this._targetEl;
                    },
                    set: function (value) {
                        this._targetEl = value;
                        if (value) {
                            this.lastTargetElCoord = value.getBoundingClientRect();
                        }
                        this.show();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PopupComponent.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this._visible = value;
                        if (value && this.targetEl) {
                            this.show();
                        }
                        else {
                            this.doHide();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PopupComponent.prototype, "hasIndicator", {
                    get: function () {
                        return this._hasIndicator;
                    },
                    set: function (value) {
                        if (value) {
                            this.el.classList.add('popup-indicator');
                        }
                        else {
                            this.el.classList.remove('popup-indicator');
                        }
                        this._hasIndicator = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                PopupComponent.prototype.show = function (resizeOnly) {
                    var _this = this;
                    if (resizeOnly === void 0) { resizeOnly = false; }
                    if (!this.visible) {
                        return;
                    }
                    this.holdBodyEvent();
                    if (this.center) {
                        this.el.style.display = '';
                        return;
                    }
                    // renew check.
                    if (!resizeOnly) {
                        this.uncheckTargetLocation();
                        this.checkTargetElLocation();
                    }
                    // for updating the last size;
                    this.lastTargetElCoord = this.targetEl.getBoundingClientRect();
                    if (!resizeOnly) {
                        this.el.style.visibility = 'hidden';
                        this.el.style.display = '';
                    }
                    // after the targetEl is changed.
                    setTimeout(function () {
                        var targetSize = _this.lastTargetElCoord;
                        // when the popup overflow the window size, we need to move into the window.
                        var indicatorHeight = _this.hasIndicator ? _this.indicatorHeight : 0;
                        var popupSize = _this.el.getBoundingClientRect();
                        var windowSize = _this.util.dom.getWindowSize();
                        // indicator location
                        var isLeft = targetSize.left + (_this.startFrom === 'center' ? targetSize.width / 2 : 0) + popupSize.width + _this.offsetX <= windowSize.width;
                        var isTop = targetSize.top + targetSize.height + popupSize.height + _this.offsetY + indicatorHeight <= windowSize.height;
                        var left = isLeft ? targetSize.left + (_this.startFrom === 'center' ? targetSize.width / 2 : 0) + _this.offsetX : targetSize.left - popupSize.width + (_this.startFrom === 'center' ? targetSize.width / 2 : targetSize.width) - _this.offsetX;
                        var top = isTop ? targetSize.top + (_this.startFrom === 'overlap' ? 0 : targetSize.height) + _this.offsetY + indicatorHeight : targetSize.top - popupSize.height - _this.offsetY - indicatorHeight + (_this.startFrom === 'overlap' ? targetSize.height : 0);
                        _this.indicatorLocation = (isTop ? 't' : 'b') + (isLeft ? 'l' : 'r');
                        _this.el.style.left = left + 'px';
                        _this.el.style.top = top + 'px';
                        // remove the prev indicator and add the new indicator
                        var classNames = _this.el.className.split(' ');
                        classNames = classNames.filter(function (d) { return d.indexOf('popup-indicator-') === -1; });
                        classNames.push('popup-indicator-' + (isTop ? 'top' : 'bottom') + '-' + (isLeft ? 'left' : 'right'));
                        _this.el.className = classNames.join(' ');
                        if (!resizeOnly) {
                            _this.el.style.visibility = '';
                        }
                    });
                };
                PopupComponent.prototype.resize = function () {
                    this.show(true);
                };
                PopupComponent.prototype.doHide = function () {
                    this.uncheckTargetLocation();
                    this.el.style.display = 'none';
                    this.hide.emit({ target: this });
                };
                // the body click event is triggered after clicking the target and it closes the popup, so need to prevent it.
                PopupComponent.prototype.holdBodyEvent = function () {
                    var _this = this;
                    this.bodyEventLock = true;
                    setTimeout(function () { return _this.bodyEventLock = false; });
                };
                PopupComponent.prototype.checkTargetElLocation = function () {
                    var _this = this;
                    if (this.targetEl && this.checkTargetLocation) {
                        this.checkTargetElLocationIntervalId = window.setInterval(function () {
                            var info = _this.targetEl.getBoundingClientRect();
                            var lastInfo = _this.lastTargetElCoord;
                            if (lastInfo) {
                                if (info.top !== lastInfo.top || info.left !== lastInfo.left) {
                                    _this.visible = false;
                                }
                            }
                            else {
                                _this.lastTargetElCoord = info;
                            }
                        }, 500);
                    }
                };
                PopupComponent.prototype.uncheckTargetLocation = function () {
                    if (this.checkTargetElLocationIntervalId) {
                        clearInterval(this.checkTargetElLocationIntervalId);
                        delete this.checkTargetElLocationIntervalId;
                    }
                };
                PopupComponent.prototype.onPressBody = function (e) {
                    if (!this.bodyEventLock && !this.el.contains(e.target)) {
                        var pos = this.el.compareDocumentPosition(e.target);
                        // console.log('compareDocumentPosition:' + pos);
                        // some overlay items can't be in the container. it returns 35 or 37.
                        if (pos < 33) {
                            this.visible = false;
                        }
                    }
                };
                PopupComponent.prototype.destroyCmp = function () {
                    this.uncheckTargetLocation();
                };
                return PopupComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            PopupComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "checkTargetLocation", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "startFrom", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "offsetX", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "offsetY", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "useTargetWidth", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "tpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "targetEl", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "visible", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "hasIndicator", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PopupComponent.prototype, "hide", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.center'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupComponent.prototype, "center", void 0);
            PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/popup/popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup.component.scss */ "./projects/mc-ui/src/lib/component/popup/popup.component.scss")).default]
                })
            ], PopupComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/scroll/scroll-async.component.ts": 
        /*!***************************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/scroll/scroll-async.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ScrollAsyncComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollAsyncComponent", function () { return ScrollAsyncComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ScrollAsyncComponent = /** @class */ (function (_super) {
                __extends(ScrollAsyncComponent, _super);
                function ScrollAsyncComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.neededDataIndex = -1;
                    _this.neededPageIndex = 1;
                    _this.page1Indexes = {
                        start: -1,
                        end: -1
                    };
                    _this.page2Indexes = {
                        start: -1,
                        end: -1
                    };
                    _this.isLoading = true;
                    _this.page1IsFirst = false;
                    _this.page2IsFirst = false;
                    _this.page1IsLast = false;
                    _this.page2IsLast = false;
                    _this.emptyText = 'No Data';
                    _this.idField = 'id';
                    _this.rowHeight = 45;
                    // there is no data, then it triggers "needData" event.
                    _this.needData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    return _this;
                }
                Object.defineProperty(ScrollAsyncComponent.prototype, "data", {
                    get: function () {
                        return this._data;
                    },
                    set: function (value) {
                        var _this = this;
                        // console.log('update scroll data', value);
                        if (value) {
                            var data = void 0;
                            if (Array.isArray(value)) {
                                data = {
                                    rows: value
                                };
                            }
                            else {
                                data = value;
                            }
                            if (!data.columns) {
                                data.columns = data.rows[0] ? Object.keys(data.rows[0]).map(function (key) {
                                    return {
                                        field: key
                                    };
                                }) : null;
                            }
                            data.rowCount = data.rowCount ? data.rowCount : data.rows ? data.rows.length : 0;
                            data.start = data.start ? data.start : 0;
                            data.action = data.action ? data.action : 'initialize';
                            this._data = data;
                            this.rowCount = data.rowCount;
                            if (data.action === 'initialize') {
                                // init page
                                this.page1Indexes = { start: -1, end: -1 };
                                this.page2Indexes = { start: -1, end: -1 };
                                // after rendering, it need to update the scroll state manually whenever the data is updated since the scroll doesn't have data property.
                                if (this.rendered) {
                                    this.updateHeight();
                                    // update after the rowCount is applied.
                                    setTimeout(function () { return _this.scrollCmp.updateState(true); });
                                }
                            }
                            else {
                                this.updateData(this.neededPageIndex === 1 ? this.page1Indexes : this.page2Indexes, this.neededPageIndex);
                            }
                            this.isLoading = false;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ScrollAsyncComponent.prototype.afterInitCmp = function () {
                    // the content height is smaller than container height, adjust container height.
                    // this needs to run before rendering scroll.
                    this.updateHeight();
                };
                ScrollAsyncComponent.prototype.updateData = function (indexes, pageIndex) {
                    var start = indexes.start;
                    var end = indexes.end;
                    if (this.rowCount && !this.data.rows[start]) {
                        this.neededPageIndex = pageIndex;
                        // skip the same request.
                        if (this.neededDataIndex !== start) {
                            this.isLoading = true;
                            this.neededDataIndex = start;
                            this.needData.emit({
                                target: this,
                                index: this.neededDataIndex,
                                action: 'append'
                            }); // when tree, it needs to insert data
                        }
                    }
                    else {
                        var data = this.data.rows.slice(start, end + 1);
                        if (pageIndex === 1) {
                            this.page1Data = data;
                        }
                        else {
                            this.page2Data = data;
                        }
                    }
                };
                ScrollAsyncComponent.prototype.updateHeight = function () {
                    // when the items height are smaller than container height.
                    var height = this.rowCount === 0 ? this.rowHeight : this.rowHeight * this.rowCount;
                    if (!this.originHeight) {
                        this.originHeight = this.el.clientHeight;
                    }
                    if (this.originHeight > height) {
                        this.el.style.height = height + 'px';
                    }
                    else {
                        this.el.style.height = this.originHeight + 'px';
                    }
                };
                ScrollAsyncComponent.prototype.getItems = function () {
                    return this.data.rows;
                };
                ScrollAsyncComponent.prototype.onUpdatePage = function (e) {
                    if (e.page1StartIndex < 0) {
                        this.page1Indexes.start = e.page1StartIndex;
                        this.page1Indexes.end = e.page1EndIndex;
                        this.page1Data = [];
                    }
                    else {
                        if (this.page1Indexes.start !== e.page1StartIndex || this.page1Indexes.end !== e.page1EndIndex) {
                            this.page1Indexes.start = e.page1StartIndex;
                            this.page1Indexes.end = e.page1EndIndex;
                            this.updateData(this.page1Indexes, 1);
                        }
                    }
                    if (e.page2StartIndex < 0) {
                        this.page2Indexes.start = e.page2StartIndex;
                        this.page2Indexes.end = e.page2EndIndex;
                        this.page2Data = [];
                    }
                    else {
                        if (this.page2Indexes.start !== e.page2StartIndex || this.page2Indexes.end !== e.page2EndIndex) {
                            this.page2Indexes.start = e.page2StartIndex;
                            this.page2Indexes.end = e.page2EndIndex;
                            this.updateData(this.page2Indexes, 2);
                        }
                    }
                    this.page1IsLast = e.page1IsLast;
                    this.page2IsLast = e.page2IsLast;
                    this.page1IsFirst = e.page1IsFirst;
                    this.page2IsFirst = e.page2IsFirst;
                };
                ScrollAsyncComponent.prototype.onAction = function (e) {
                    this.action.emit(e);
                };
                return ScrollAsyncComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('scrollCmp', { static: false })
            ], ScrollAsyncComponent.prototype, "scrollCmp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], ScrollAsyncComponent.prototype, "emptyText", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], ScrollAsyncComponent.prototype, "idField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], ScrollAsyncComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], ScrollAsyncComponent.prototype, "data", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], ScrollAsyncComponent.prototype, "needData", void 0);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/scroll/scroll.component.scss": 
        /*!***********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/scroll/scroll.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n:host .scroll {\n  overflow-y: auto;\n  height: 100%;\n}\n:host .scroll--content--page1, :host .scroll--content--page2 {\n  position: absolute;\n  width: 100%;\n  left: 0;\n}\n:host .scroll--empty {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3Byb2plY3RzL21jLXVpL3NyYy9saWIvY29tcG9uZW50L3Njcm9sbC9zY3JvbGwuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYy11aS9zcmMvbGliL2NvbXBvbmVudC9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ0VSO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ04iLCJmaWxlIjoicHJvamVjdHMvbWMtdWkvc3JjL2xpYi9jb21wb25lbnQvc2Nyb2xsL3Njcm9sbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAmLS1jb250ZW50IHtcbiAgICAgICYtLXBhZ2UxLCAmLS1wYWdlMiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICAgICYtLWVtcHR5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLnNjcm9sbCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5zY3JvbGwtLWNvbnRlbnQtLXBhZ2UxLCA6aG9zdCAuc2Nyb2xsLS1jb250ZW50LS1wYWdlMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG46aG9zdCAuc2Nyb2xsLS1lbXB0eSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/component/scroll/scroll.component.ts": 
        /*!*********************************************************************!*\
          !*** ./projects/mc-ui/src/lib/component/scroll/scroll.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ScrollComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function () { return ScrollComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./projects/mc-ui/src/lib/component/base.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ScrollComponent = /** @class */ (function (_super) {
                __extends(ScrollComponent, _super);
                function ScrollComponent(_el, _service) {
                    var _this = _super.call(this, _el, _service) || this;
                    _this._el = _el;
                    _this._service = _service;
                    _this.scrollTop = 0;
                    _this.oldScrollTop = -1;
                    _this.page1Index = -2;
                    _this.page2Index = -1;
                    _this._rowCount = 0;
                    _this.ticking = false;
                    _this.emptyText = 'No Data';
                    _this.page1Tpl = null;
                    _this.page2Tpl = null;
                    _this.rowHeight = 45;
                    _this.isLoading = false;
                    _this.updatePage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    return _this;
                }
                Object.defineProperty(ScrollComponent.prototype, "rowCount", {
                    get: function () {
                        return this._rowCount;
                    },
                    set: function (value) {
                        if (!this.util.isEmpty(value)) {
                            this._rowCount = value;
                            // init value
                            this.page1Index = -2;
                            this.page2Index = -1;
                            this.scrollTop = 0;
                            this.oldScrollTop = -1;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ScrollComponent.prototype.afterRenderCmp = function () {
                    // update size
                    this.updateState();
                };
                ScrollComponent.prototype.initState = function () {
                    this.state = {
                        contentHeight: 0,
                        page1Top: 0,
                        page2Top: -1,
                        page1StartIndex: -1,
                        page1EndIndex: -1,
                        page2StartIndex: -1,
                        page2EndIndex: -1
                    };
                };
                ScrollComponent.prototype.updateState = function (refresh) {
                    if (refresh === void 0) { refresh = false; }
                    var scrollTop = this.scrollTop;
                    var isDown = this.oldScrollTop < scrollTop;
                    var rowHeight = this.rowHeight;
                    var rowCount = this.rowCount;
                    var containerHeight = this.el.clientHeight;
                    var page1Index = this.page1Index;
                    var page2Index = this.page2Index;
                    var pageRowCount = Math.round((containerHeight / rowHeight) * 1.5);
                    var pageHeight = pageRowCount * rowHeight;
                    var contentHeight = rowCount === 0 ? rowHeight : rowHeight * rowCount;
                    var pageLastIndex = Math.floor((contentHeight - 1) / pageHeight); // -1 for if it is the same as with the pageHeight, the page can be +1.
                    var nextPageIndex = isDown ? Math.ceil(scrollTop / pageHeight) : Math.floor(scrollTop / pageHeight);
                    // console.log(nextPageIndex, pageLastIndex, page1Index, page2Index);
                    if (refresh || (nextPageIndex <= pageLastIndex && page1Index !== nextPageIndex && page2Index !== nextPageIndex)) {
                        // It may not have two pages at all. keep the full logic for readability.
                        if (page1Index === -2) {
                            // init
                            page1Index = 0;
                            page2Index = 1;
                        }
                        else if (page1Index < page2Index) {
                            // asc and down, move page1 to the bottom of page2 and load the next page
                            // asc and up, move page2 to the top of page1 and load the next page into page2
                            page1Index = isDown ? nextPageIndex : nextPageIndex + 1;
                            page2Index = page1Index - 1;
                        }
                        else {
                            // desc and down / up, reverse upper logic.
                            page1Index = isDown ? nextPageIndex - 1 : nextPageIndex;
                            page2Index = page1Index + 1;
                        }
                        var page1StartIndex = page1Index * pageRowCount;
                        var page2StartIndex = page2Index * pageRowCount;
                        var page1EndIndex = page1StartIndex + pageRowCount - 1;
                        var page2EndIndex = page2StartIndex + pageRowCount - 1;
                        if (page1StartIndex >= rowCount) {
                            page1StartIndex = -1;
                            page1EndIndex = -1;
                            page1Index = -2;
                        }
                        else if (page1EndIndex >= rowCount) {
                            page1EndIndex = rowCount - 1;
                        }
                        if (page2StartIndex >= rowCount) {
                            page2StartIndex = -1;
                            page2EndIndex = -1;
                            page2Index = -1;
                        }
                        else if (page2EndIndex >= rowCount) {
                            page2EndIndex = rowCount - 1;
                        }
                        var page1Top = page1StartIndex * rowHeight;
                        var page2Top = page2StartIndex * rowHeight;
                        this.page1Index = page1Index;
                        this.page2Index = page2Index;
                        // It may not have two pages.
                        var state = {
                            contentHeight: contentHeight,
                            page1Top: page1Top,
                            page2Top: page2Top,
                            page1StartIndex: page1StartIndex,
                            page1EndIndex: page1EndIndex,
                            page2StartIndex: page2StartIndex,
                            page2EndIndex: page2EndIndex
                        };
                        this.state = state;
                        this.updatePage.emit({
                            target: this,
                            page1StartIndex: page1StartIndex,
                            page1EndIndex: page1EndIndex,
                            page2StartIndex: page2StartIndex,
                            page2EndIndex: page2EndIndex,
                            page1Index: page1Index,
                            page2Index: page2Index,
                            rowCount: rowCount,
                            pageLastIndex: pageLastIndex,
                            page1IsFirst: page1Index === 0,
                            page2IsFirst: page2Index === 0,
                            page1IsLast: page1Index !== -1 && page1Index === pageLastIndex,
                            page2IsLast: page2Index !== -1 && page2Index === pageLastIndex,
                            refresh: refresh
                        });
                    }
                    this.oldScrollTop = scrollTop;
                };
                ScrollComponent.prototype.onScroll = function (e) {
                    var _this = this;
                    var el = e.target;
                    this.scrollTop = el.scrollTop;
                    if (!this.ticking) {
                        requestAnimationFrame(function () {
                            // for direction: up / down
                            _this.updateState();
                            _this.ticking = false;
                        });
                        this.ticking = true;
                    }
                    // when the scroll is the end, sometimes it is not updated.
                    var scrollHeight = el.scrollHeight;
                    var height = el.offsetHeight;
                    if (this.scrollTop + height === scrollHeight) {
                        this.updateState();
                        this.ticking = false;
                    }
                };
                return ScrollComponent;
            }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));
            ScrollComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _mc_ui_service__WEBPACK_IMPORTED_MODULE_1__["MCUIService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ScrollComponent.prototype, "emptyText", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ScrollComponent.prototype, "page1Tpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ScrollComponent.prototype, "page2Tpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ScrollComponent.prototype, "rowHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ScrollComponent.prototype, "isLoading", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
            ], ScrollComponent.prototype, "rowCount", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
            ], ScrollComponent.prototype, "updatePage", void 0);
            ScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'mc-scroll',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scroll.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/mc-ui/src/lib/component/scroll/scroll.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scroll.component.scss */ "./projects/mc-ui/src/lib/component/scroll/scroll.component.scss")).default]
                })
            ], ScrollComponent);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/mc-ui.module.ts": 
        /*!************************************************!*\
          !*** ./projects/mc-ui/src/lib/mc-ui.module.ts ***!
          \************************************************/
        /*! exports provided: MCUIModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCUIModule", function () { return MCUIModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _component_form_field_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/form/field/field.component */ "./projects/mc-ui/src/lib/component/form/field/field.component.ts");
            /* harmony import */ var _component_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/form/field/textarea/textarea.component */ "./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.ts");
            /* harmony import */ var _component_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/form/field/input/input.component */ "./projects/mc-ui/src/lib/component/form/field/input/input.component.ts");
            /* harmony import */ var _component_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/form/form.component */ "./projects/mc-ui/src/lib/component/form/form.component.ts");
            /* harmony import */ var _component_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/scroll/scroll.component */ "./projects/mc-ui/src/lib/component/scroll/scroll.component.ts");
            /* harmony import */ var _component_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/list/list.component */ "./projects/mc-ui/src/lib/component/list/list.component.ts");
            /* harmony import */ var _component_list_list_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/list/list-basic.component */ "./projects/mc-ui/src/lib/component/list/list-basic.component.ts");
            /* harmony import */ var _component_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/button/button.component */ "./projects/mc-ui/src/lib/component/button/button.component.ts");
            /* harmony import */ var _component_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/icon/icon.component */ "./projects/mc-ui/src/lib/component/icon/icon.component.ts");
            /* harmony import */ var _component_list_list_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/list/list-item.component */ "./projects/mc-ui/src/lib/component/list/list-item.component.ts");
            /* harmony import */ var _component_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/loader/loader.component */ "./projects/mc-ui/src/lib/component/loader/loader.component.ts");
            /* harmony import */ var _component_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/drawer/drawer.component */ "./projects/mc-ui/src/lib/component/drawer/drawer.component.ts");
            /* harmony import */ var _component_message_bar_message_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/message-bar/message-bar.component */ "./projects/mc-ui/src/lib/component/message-bar/message-bar.component.ts");
            /* harmony import */ var _component_grid_grid_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/grid/grid-header.component */ "./projects/mc-ui/src/lib/component/grid/grid-header.component.ts");
            /* harmony import */ var _component_grid_grid_body_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/grid/grid-body.component */ "./projects/mc-ui/src/lib/component/grid/grid-body.component.ts");
            /* harmony import */ var _component_mask_mask_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/mask/mask.component */ "./projects/mc-ui/src/lib/component/mask/mask.component.ts");
            /* harmony import */ var _component_grid_grid_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/grid/grid.component */ "./projects/mc-ui/src/lib/component/grid/grid.component.ts");
            /* harmony import */ var _component_grid_grid_basic_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/grid/grid-basic.component */ "./projects/mc-ui/src/lib/component/grid/grid-basic.component.ts");
            /* harmony import */ var _component_popup_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/popup/popup.component */ "./projects/mc-ui/src/lib/component/popup/popup.component.ts");
            /* harmony import */ var _component_popup_popup_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/popup/popup-list.component */ "./projects/mc-ui/src/lib/component/popup/popup-list.component.ts");
            /* harmony import */ var _mc_ui_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony import */ var _component_form_field_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/form/field/dropdown/dropdown.component */ "./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.ts");
            var MCUIModule = /** @class */ (function () {
                function MCUIModule() {
                }
                return MCUIModule;
            }());
            MCUIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                    ],
                    declarations: [
                        _component_form_field_field_component__WEBPACK_IMPORTED_MODULE_5__["FieldComponent"],
                        _component_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_6__["TextareaComponent"],
                        _component_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"],
                        _component_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                        _component_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_9__["ScrollComponent"],
                        _component_list_list_basic_component__WEBPACK_IMPORTED_MODULE_11__["ListBasicComponent"],
                        _component_list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
                        _component_button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"],
                        _component_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"],
                        _component_list_list_item_component__WEBPACK_IMPORTED_MODULE_14__["ListItemComponent"],
                        _component_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"],
                        _component_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_16__["DrawerComponent"],
                        _component_message_bar_message_bar_component__WEBPACK_IMPORTED_MODULE_17__["MessageBarComponent"],
                        _component_grid_grid_header_component__WEBPACK_IMPORTED_MODULE_18__["GridHeaderComponent"],
                        _component_grid_grid_body_component__WEBPACK_IMPORTED_MODULE_19__["GridBodyComponent"],
                        _component_grid_grid_component__WEBPACK_IMPORTED_MODULE_21__["GridComponent"],
                        _component_grid_grid_basic_component__WEBPACK_IMPORTED_MODULE_22__["GridBasicComponent"],
                        _component_mask_mask_component__WEBPACK_IMPORTED_MODULE_20__["MaskComponent"],
                        _component_popup_popup_component__WEBPACK_IMPORTED_MODULE_23__["PopupComponent"],
                        _component_popup_popup_list_component__WEBPACK_IMPORTED_MODULE_24__["PopupListComponent"],
                        _component_form_field_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["DropdownComponent"]
                    ],
                    entryComponents: [
                        _component_popup_popup_component__WEBPACK_IMPORTED_MODULE_23__["PopupComponent"],
                        _component_popup_popup_list_component__WEBPACK_IMPORTED_MODULE_24__["PopupListComponent"],
                        _component_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_16__["DrawerComponent"]
                    ],
                    exports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                        _component_form_field_field_component__WEBPACK_IMPORTED_MODULE_5__["FieldComponent"],
                        _component_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_6__["TextareaComponent"],
                        _component_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"],
                        _component_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                        _component_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_9__["ScrollComponent"],
                        _component_list_list_basic_component__WEBPACK_IMPORTED_MODULE_11__["ListBasicComponent"],
                        _component_list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
                        _component_button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"],
                        _component_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"],
                        _component_list_list_item_component__WEBPACK_IMPORTED_MODULE_14__["ListItemComponent"],
                        _component_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"],
                        _component_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_16__["DrawerComponent"],
                        _component_message_bar_message_bar_component__WEBPACK_IMPORTED_MODULE_17__["MessageBarComponent"],
                        _component_grid_grid_header_component__WEBPACK_IMPORTED_MODULE_18__["GridHeaderComponent"],
                        _component_grid_grid_body_component__WEBPACK_IMPORTED_MODULE_19__["GridBodyComponent"],
                        _component_grid_grid_component__WEBPACK_IMPORTED_MODULE_21__["GridComponent"],
                        _component_grid_grid_basic_component__WEBPACK_IMPORTED_MODULE_22__["GridBasicComponent"],
                        _component_mask_mask_component__WEBPACK_IMPORTED_MODULE_20__["MaskComponent"],
                        _component_popup_popup_component__WEBPACK_IMPORTED_MODULE_23__["PopupComponent"],
                        _component_popup_popup_list_component__WEBPACK_IMPORTED_MODULE_24__["PopupListComponent"],
                        _component_form_field_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["DropdownComponent"]
                    ],
                    providers: [_mc_ui_service__WEBPACK_IMPORTED_MODULE_25__["MCUIService"]]
                })
            ], MCUIModule);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/mc-ui.service.ts": 
        /*!*************************************************!*\
          !*** ./projects/mc-ui/src/lib/mc-ui.service.ts ***!
          \*************************************************/
        /*! exports provided: MCUIService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCUIService", function () { return MCUIService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/util */ "./projects/mc-ui/src/lib/util/util.ts");
            /**
             * App Level shared services e.g) Dynamic Components or EventEmitters for sending message between UI Page Componensts, window resize etc.
             */
            var MCUIService = /** @class */ (function () {
                function MCUIService(_resolver, injector, appRef, hc) {
                    this._resolver = _resolver;
                    this.injector = injector;
                    this.appRef = appRef;
                    this.hc = hc;
                    this.message = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.windowResize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.bodyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.util = new _util_util__WEBPACK_IMPORTED_MODULE_3__["Util"](this.hc);
                    this.getBody().addEventListener('click', this.onClickBody.bind(this));
                    window.addEventListener('resize', this.onResizeWindow.bind(this));
                }
                MCUIService.prototype.sendMessage = function (message) {
                    this.message.emit(message);
                };
                MCUIService.prototype.addComponent = function (cmpType, parentEl) {
                    if (parentEl === void 0) { parentEl = document.body; }
                    // https://malcoded.com/posts/angular-dynamic-components/
                    var factory = this._resolver.resolveComponentFactory(cmpType);
                    var cmp = factory.create(this.injector);
                    this.appRef.attachView(cmp.hostView);
                    parentEl.appendChild(cmp.location.nativeElement);
                    return cmp;
                };
                MCUIService.prototype.removeComponent = function (cmp) {
                    this.appRef.detachView(cmp.hostView);
                    cmp.destroy();
                    cmp = null;
                };
                MCUIService.prototype.getBody = function () {
                    return document.body;
                };
                MCUIService.prototype.onClickBody = function (e) {
                    this.bodyPress.emit(e);
                };
                MCUIService.prototype.onResizeWindow = function (e) {
                    this.windowResize.emit(e);
                };
                return MCUIService;
            }());
            MCUIService.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            MCUIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], MCUIService);
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/util/data-util.ts": 
        /*!**************************************************!*\
          !*** ./projects/mc-ui/src/lib/util/data-util.ts ***!
          \**************************************************/
        /*! exports provided: DataUtil */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataUtil", function () { return DataUtil; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DataUtil = /** @class */ (function () {
                function DataUtil() {
                }
                DataUtil.prototype.search = function (items, keyword, field) {
                    if (field === void 0) { field = 'name'; }
                    if (keyword) {
                        var keywords_1 = keyword.toLowerCase().trim().split(' ');
                        items = items.filter(function (item) {
                            var text = ('' + item[field]).toLowerCase();
                            return keywords_1.find(function (k) { return text.indexOf(k) > -1; });
                        });
                    }
                    return items;
                };
                return DataUtil;
            }());
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/util/dom-util.ts": 
        /*!*************************************************!*\
          !*** ./projects/mc-ui/src/lib/util/dom-util.ts ***!
          \*************************************************/
        /*! exports provided: DomUtil */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomUtil", function () { return DomUtil; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DomUtil = /** @class */ (function () {
                function DomUtil() {
                }
                // selector: class name(.class-name) or tag name (mc-componentname)
                DomUtil.prototype.findParent = function (dom, selector, depth) {
                    if (depth === void 0) { depth = 10; }
                    var cls = '';
                    var resultDom;
                    if (!dom || !dom.nodeName) {
                        return null;
                    }
                    if (selector[0] === '.') {
                        cls = selector.split('.')[1];
                    }
                    while (depth--) {
                        if (!dom || !dom.classList || dom.nodeName === 'BODY') {
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
                };
                DomUtil.prototype.getWindowSize = function () {
                    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    return { width: width, height: height };
                };
                DomUtil.prototype.getSize = function (dom) {
                    var size = dom.getBoundingClientRect();
                    var style = dom.style;
                    if (style.display === 'none') {
                        style.visibility = 'hidden';
                        style.display = '';
                        size = dom.getBoundingClientRect();
                        style.visibility = '';
                        style.display = 'none';
                    }
                    else if (style.height === '0' || style.height === '0px') {
                        style.visibility = 'hidden';
                        var position = style.position || '';
                        style.position = 'absolute';
                        style.height = '';
                        size = dom.getBoundingClientRect();
                        style.visibility = '';
                        style.height = '0px';
                        style.position = position;
                    }
                    return size;
                };
                DomUtil.prototype.removeDom = function (dom) {
                    if (dom && dom.parentElement) {
                        dom.parentElement.removeChild(dom);
                    }
                };
                DomUtil.prototype.openUrl = function (url, target, fileName) {
                    if (target === void 0) { target = ''; }
                    if (fileName === void 0) { fileName = ''; }
                    var a = document.createElement('a');
                    a.href = url;
                    if (fileName) {
                        a.download = fileName;
                    }
                    if (target) {
                        a.target = target;
                    }
                    document.body.append(a);
                    a.click();
                    a.remove();
                };
                DomUtil.prototype.exportFile = function (fileName, content, mimeType, charset) {
                    if (mimeType === void 0) { mimeType = 'text/csv'; }
                    if (charset === void 0) { charset = 'utf-8'; }
                    var blob = new Blob([content], { type: "type:" + mimeType + ";charset=" + charset + ";" });
                    if (navigator.msSaveBlob) {
                        navigator.msSaveBlob(blob, fileName);
                    }
                    else {
                        this.openUrl(URL.createObjectURL(blob), '', fileName);
                    }
                };
                DomUtil.prototype.getClassName = function (componentName, theme, classNames) {
                    if (classNames === void 0) { classNames = []; }
                    var cls = [];
                    cls.push('mc-' + componentName.toLowerCase());
                    if (theme) {
                        if (!Array.isArray(theme)) {
                            cls.push(theme);
                        }
                        else {
                            cls.push.apply(cls, theme);
                        }
                    }
                    cls.push.apply(cls, classNames);
                    return cls.join(' ');
                };
                return DomUtil;
            }());
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/util/http-util.ts": 
        /*!**************************************************!*\
          !*** ./projects/mc-ui/src/lib/util/http-util.ts ***!
          \**************************************************/
        /*! exports provided: HttpUtil */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUtil", function () { return HttpUtil; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var HttpUtil = /** @class */ (function () {
                function HttpUtil(_http) {
                    this._http = _http;
                }
                HttpUtil.prototype.http = function (type, url, params, options) {
                    var http;
                    options = options || {};
                    options.headers = this.createHeaders();
                    switch (type) {
                        case 'get':
                            http = this._http.get(url, options);
                            break;
                        case 'post':
                            http = this._http.post(url, params, options);
                            break;
                        case 'put':
                            http = this._http.put(url, params, options);
                            break;
                        case 'delete':
                            options.body = params;
                            http = this._http.delete(url, options);
                            break;
                    }
                    return http;
                };
                HttpUtil.prototype.createHeaders = function () {
                    var csrftoken = this.getCookie('csrftoken');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrftoken
                    });
                    return headers;
                };
                HttpUtil.prototype.getCookie = function (key) {
                    return this.getQueryStringValue(document.cookie, key);
                };
                HttpUtil.prototype.getQueryStringKeyValues = function (queryString) {
                    var values = queryString.split(';');
                    var keyValues = {};
                    if (queryString) {
                        keyValues = values.reduce(function (o, d) {
                            var vals = d.split('=');
                            if (vals.length > 1) {
                                o[vals[0].trim()] = vals[1];
                            }
                            return o;
                        }, {});
                    }
                    return keyValues;
                };
                HttpUtil.prototype.getUrlParams = function (str, removeDomain) {
                    if (removeDomain === void 0) { removeDomain = true; }
                    var arr = str.split(';');
                    var url = arr.shift();
                    if (removeDomain) {
                        url = url.indexOf('#') > -1 ? url.split('#')[1] : url;
                    }
                    var keyValues = this.getQueryStringKeyValues(str);
                    return {
                        url: url,
                        params: keyValues
                    };
                };
                HttpUtil.prototype.getQueryStringValue = function (queryString, key) {
                    var values = this.getQueryStringKeyValues(queryString);
                    return values[key] || '';
                };
                return HttpUtil;
            }());
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/lib/util/util.ts": 
        /*!*********************************************!*\
          !*** ./projects/mc-ui/src/lib/util/util.ts ***!
          \*********************************************/
        /*! exports provided: Util */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function () { return Util; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _http_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-util */ "./projects/mc-ui/src/lib/util/http-util.ts");
            /* harmony import */ var _dom_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-util */ "./projects/mc-ui/src/lib/util/dom-util.ts");
            /* harmony import */ var _data_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-util */ "./projects/mc-ui/src/lib/util/data-util.ts");
            // You can add utilities like validator, date, data, visualization, etc...
            var Util = /** @class */ (function () {
                function Util(hc) {
                    this.hc = hc;
                    this.http = new _http_util__WEBPACK_IMPORTED_MODULE_1__["HttpUtil"](this.hc);
                    this.dom = new _dom_util__WEBPACK_IMPORTED_MODULE_2__["DomUtil"]();
                    this.data = new _data_util__WEBPACK_IMPORTED_MODULE_3__["DataUtil"]();
                }
                Util.prototype.isEmpty = function (val) {
                    return val === null || val === '' || val === undefined;
                };
                Util.prototype.getWindowSize = function () {
                    return {
                        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    };
                };
                Util.prototype.debounce = function (callback, wait, scope) {
                    if (scope === void 0) { scope = this; }
                    var timeout;
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        clearTimeout(timeout);
                        timeout = setTimeout(function () { return callback.apply(scope, args); }, wait);
                    };
                };
                Util.prototype.throttle = function (callback, wait, scope) {
                    if (scope === void 0) { scope = this; }
                    var timeout;
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (!timeout) {
                            timeout = setTimeout(function () {
                                callback.apply(scope, args);
                                clearTimeout(timeout);
                            }, wait);
                        }
                    };
                };
                Util.prototype.getRootUrl = function () {
                    var location = window.location;
                    return location.protocol + '//' + location.hostname + ':' + location.port + '/';
                };
                Util.prototype.getFullUrl = function (childPath) {
                    var root = this.getRootUrl();
                    if (childPath.charAt(0) === '/') {
                        childPath = childPath.substr(1);
                    }
                    return root + childPath;
                };
                Util.prototype.clone = function (o) {
                    var _this = this;
                    // skip the date object
                    if (!o || typeof o !== 'object' || (o instanceof Date && !isNaN(o.valueOf()))) {
                        return o;
                    }
                    else if (Array.isArray(o)) {
                        return o.map(function (item) { return _this.clone(item); });
                    }
                    else {
                        return Object.keys(o).reduce(function (obj, key) {
                            obj[key] = _this.clone(o[key]);
                            return obj;
                        }, {});
                    }
                };
                return Util;
            }());
            /***/ 
        }),
        /***/ "./projects/mc-ui/src/public-api.ts": 
        /*!******************************************!*\
          !*** ./projects/mc-ui/src/public-api.ts ***!
          \******************************************/
        /*! exports provided: MCUIService, MCUIModule, FieldComponent, TextareaComponent, InputComponent, DropdownComponent, FormComponent, ScrollComponent, ListComponent, ListBasicComponent, ButtonComponent, IconComponent, ListItemComponent, LoaderComponent, DrawerComponent, MessageBarComponent, GridHeaderComponent, GridBodyComponent, MaskComponent, GridComponent, PopupComponent, PopupListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_mc_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mc-ui.service */ "./projects/mc-ui/src/lib/mc-ui.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCUIService", function () { return _lib_mc_ui_service__WEBPACK_IMPORTED_MODULE_1__["MCUIService"]; });
            /* harmony import */ var _lib_mc_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/mc-ui.module */ "./projects/mc-ui/src/lib/mc-ui.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCUIModule", function () { return _lib_mc_ui_module__WEBPACK_IMPORTED_MODULE_2__["MCUIModule"]; });
            /* harmony import */ var _lib_component_form_field_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/component/form/field/field.component */ "./projects/mc-ui/src/lib/component/form/field/field.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function () { return _lib_component_form_field_field_component__WEBPACK_IMPORTED_MODULE_3__["FieldComponent"]; });
            /* harmony import */ var _lib_component_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/component/form/field/textarea/textarea.component */ "./projects/mc-ui/src/lib/component/form/field/textarea/textarea.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function () { return _lib_component_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__["TextareaComponent"]; });
            /* harmony import */ var _lib_component_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/component/form/field/input/input.component */ "./projects/mc-ui/src/lib/component/form/field/input/input.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function () { return _lib_component_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]; });
            /* harmony import */ var _lib_component_form_field_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/component/form/field/dropdown/dropdown.component */ "./projects/mc-ui/src/lib/component/form/field/dropdown/dropdown.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () { return _lib_component_form_field_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"]; });
            /* harmony import */ var _lib_component_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/component/form/form.component */ "./projects/mc-ui/src/lib/component/form/form.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function () { return _lib_component_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]; });
            /* harmony import */ var _lib_component_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/component/scroll/scroll.component */ "./projects/mc-ui/src/lib/component/scroll/scroll.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function () { return _lib_component_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_8__["ScrollComponent"]; });
            /* harmony import */ var _lib_component_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/component/list/list.component */ "./projects/mc-ui/src/lib/component/list/list.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function () { return _lib_component_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]; });
            /* harmony import */ var _lib_component_list_list_basic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/component/list/list-basic.component */ "./projects/mc-ui/src/lib/component/list/list-basic.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBasicComponent", function () { return _lib_component_list_list_basic_component__WEBPACK_IMPORTED_MODULE_10__["ListBasicComponent"]; });
            /* harmony import */ var _lib_component_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/component/button/button.component */ "./projects/mc-ui/src/lib/component/button/button.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () { return _lib_component_button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"]; });
            /* harmony import */ var _lib_component_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/component/icon/icon.component */ "./projects/mc-ui/src/lib/component/icon/icon.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function () { return _lib_component_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"]; });
            /* harmony import */ var _lib_component_list_list_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/component/list/list-item.component */ "./projects/mc-ui/src/lib/component/list/list-item.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function () { return _lib_component_list_list_item_component__WEBPACK_IMPORTED_MODULE_13__["ListItemComponent"]; });
            /* harmony import */ var _lib_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/component/loader/loader.component */ "./projects/mc-ui/src/lib/component/loader/loader.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () { return _lib_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]; });
            /* harmony import */ var _lib_component_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/component/drawer/drawer.component */ "./projects/mc-ui/src/lib/component/drawer/drawer.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function () { return _lib_component_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_15__["DrawerComponent"]; });
            /* harmony import */ var _lib_component_message_bar_message_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/component/message-bar/message-bar.component */ "./projects/mc-ui/src/lib/component/message-bar/message-bar.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarComponent", function () { return _lib_component_message_bar_message_bar_component__WEBPACK_IMPORTED_MODULE_16__["MessageBarComponent"]; });
            /* harmony import */ var _lib_component_grid_grid_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/component/grid/grid-header.component */ "./projects/mc-ui/src/lib/component/grid/grid-header.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function () { return _lib_component_grid_grid_header_component__WEBPACK_IMPORTED_MODULE_17__["GridHeaderComponent"]; });
            /* harmony import */ var _lib_component_grid_grid_body_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/component/grid/grid-body.component */ "./projects/mc-ui/src/lib/component/grid/grid-body.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function () { return _lib_component_grid_grid_body_component__WEBPACK_IMPORTED_MODULE_18__["GridBodyComponent"]; });
            /* harmony import */ var _lib_component_mask_mask_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/component/mask/mask.component */ "./projects/mc-ui/src/lib/component/mask/mask.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function () { return _lib_component_mask_mask_component__WEBPACK_IMPORTED_MODULE_19__["MaskComponent"]; });
            /* harmony import */ var _lib_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/component/grid/grid.component */ "./projects/mc-ui/src/lib/component/grid/grid.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function () { return _lib_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_20__["GridComponent"]; });
            /* harmony import */ var _lib_component_popup_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/component/popup/popup.component */ "./projects/mc-ui/src/lib/component/popup/popup.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function () { return _lib_component_popup_popup_component__WEBPACK_IMPORTED_MODULE_21__["PopupComponent"]; });
            /* harmony import */ var _lib_component_popup_popup_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/component/popup/popup-list.component */ "./projects/mc-ui/src/lib/component/popup/popup-list.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupListComponent", function () { return _lib_component_popup_popup_list_component__WEBPACK_IMPORTED_MODULE_22__["PopupListComponent"]; });
            /*
             * Public API Surface of mc-ui
             * Need to specify the components one by one
             * if not ERROR in Cannot read property 'members' of undefined
             */
            /***/ 
        }),
        /***/ "./src/app/app-base.component.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-base.component.ts ***!
          \***************************************/
        /*! exports provided: AppBaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function () { return AppBaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppBaseComponent = /** @class */ (function () {
                /**
                 * Base class for all UI page components
                 * @param er many times we needs to access container element
                 * @param service MCUIService
                 */
                function AppBaseComponent(er, service) {
                    this.er = er;
                    this.service = service;
                    this._subscriptions = [];
                    this.util = this.service.util;
                    this.el = er.element.nativeElement;
                }
                Object.defineProperty(AppBaseComponent.prototype, "subscriptions", {
                    set: function (value) {
                        if (value) {
                            this._subscriptions.push(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                AppBaseComponent.prototype.ngOnInit = function () {
                    this.initCmp();
                };
                AppBaseComponent.prototype.ngAfterViewInit = function () {
                    this.afterInitCmp();
                };
                AppBaseComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribeAll();
                    this.destroyCmp();
                };
                AppBaseComponent.prototype.initCmp = function () {
                    // empty
                };
                AppBaseComponent.prototype.afterInitCmp = function () {
                    // for Input() properties that are initialized after initCmp. e.g) "config" property for entryComponents
                };
                AppBaseComponent.prototype.unsubscribeAll = function () {
                    this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
                    this._subscriptions = [];
                };
                AppBaseComponent.prototype.destroyCmp = function () {
                    // to remove dom elements reference etc.
                };
                return AppBaseComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AppBaseComponent.prototype, "subscriptions", null);
            /***/ 
        }),
        /***/ "./src/app/app-base.service.ts": 
        /*!*************************************!*\
          !*** ./src/app/app-base.service.ts ***!
          \*************************************/
        /*! exports provided: AppBaseService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBaseService", function () { return AppBaseService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_config_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/url */ "./src/config/url.ts");
            var CONS = {};
            /**
             * Base Class for all UI Services
             * Common Utility for services e.g) RESTful HTTP Util, Handling Exceptions
             */
            var AppBaseService = /** @class */ (function () {
                function AppBaseService(service) {
                    this.service = service;
                    this.util = this.service.util;
                    this.url = new src_config_url__WEBPACK_IMPORTED_MODULE_2__["Url"](service);
                }
                AppBaseService.prototype.getCons = function (id) {
                    return this.util.clone(CONS[id]);
                };
                AppBaseService.prototype.http = function (type, url, params, options) {
                    var _this = this;
                    var http;
                    switch (type) {
                        case 'get':
                            http = this.util.http.get('get', url, null, options);
                            break;
                        case 'post':
                            http = this.util.http.post('post', url, params, options);
                            break;
                        case 'put':
                            http = this.util.http.put('put', url, params, options);
                            break;
                        case 'delete':
                            http = this.util.http.delete('delete', url, params, options);
                            break;
                    }
                    return http.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                        _this.util.log([url, data]);
                        return data;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
                        if (error === void 0) { error = {}; }
                        // show the error page
                        var msg = error.message + " (" + error.url + ", " + error.status + ", " + error.statusText + ")";
                        // prevent the duplicate error message
                        if (_this.lastErrorMsg !== msg) {
                            _this.lastErrorMsg = msg;
                            _this.service.sendMessage({ from: 'app-base', to: 'app', action: 'error', data: { message: msg } });
                            setTimeout(function (_) { return _this.lastErrorMsg = ''; }, 5000);
                        }
                        throw (error);
                    }));
                };
                AppBaseService.prototype.ngOnDestroy = function () {
                    this.destroyService();
                };
                AppBaseService.prototype.destroyService = function () {
                    // to destroy...
                };
                return AppBaseService;
            }());
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./src/app/auth/index.ts");
            var routes = [{
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'signin',
                    component: _auth__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL21jLXVpLWFuZ3VsYXIvc3JjL2Nzcy9fdmFycy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNxQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFRHJDQSxjQUFBO0FFQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9jc3MvdmFycyc7XG5cbjpob3N0IHtcbiAgQGluY2x1ZGUgY29udGFpbmVyO1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIvLyBQcmltYXJ5IGNvbG9yc1xuJGMtb3JhbmdlLWI6ICNmMzY3MDU7XG4kYy1vcmFuZ2U6ICNmODgzMDA7XG4kYy1vcmFuZ2UtbDogI2ZmYjMwMjtcblxuJGMtYmx1ZTogIzA4NjZDNjtcbiRjLWJsdWUtYjogIzA3NTNhMTtcblxuJGMtY3lhbi1iOiAjMzlhYWFkO1xuJGMtY3lhbjogIzZiYzNiZDtcbiRjLWN5YW4tbDogI2UzZjZmODtcblxuJGMtZ3JlZW46ICMyM0JGMDg7XG4kYy1ncmVlbi1iOiAjMWM5YTA2O1xuXG4kYy1yZWQ6I0RDMzU0NTtcbiRjLXJlZC1iOiNjODIzMzM7XG5cbiRjLXllbGxvdzogI2VlZjY2ZDtcblxuLy8gR3JheVxuJGMtYmxhY2s6ICMwMDA7XG4kYy1ncmF5LWJiYmI6ICMyMzI3MmI7XG4kYy1ncmF5LWJiYjogIzM0M2E0MDtcbiRjLWdyYXktYmI6ICM3MjdiODQ7XG4kYy1ncmF5LWI6ICM4NjhlOTY7XG4kYy1ncmF5OiAjZTJlNmVhO1xuJGMtZ3JheS1sOiAjZjhmOWZhO1xuJGMtd2hpdGU6ICNmZmY7XG5cbiRjLXRleHQ6ICRjLWdyYXktYmJiYjtcbiRjLWJvcmRlcjogJGMtZ3JheTtcbiRjLWJnOiAkYy1ncmF5LWw7XG5cbiRjLXN1Y2Nlc3M6ICRjLWdyZWVuO1xuJGMtd2FybmluZzogJGMtb3JhbmdlO1xuJGMtZXJyb3I6ICRjLXJlZDtcblxuQG1peGluIGNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1peGluIHJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQG1peGluIHJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbkBtaXhpbiBjZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy13aGl0ZTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(vr, service) {
                    var _this = this;
                    this.vr = vr;
                    this.service = service;
                    this.service.message.subscribe(function (msg) {
                        if (msg.to === 'app') {
                            switch (msg.action) {
                                case 'error':
                                    _this.showMessage(msg.data.message);
                                    break;
                            }
                        }
                    });
                }
                AppComponent.prototype.showMessage = function (message) {
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__["MCUIService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./src/app/auth/index.ts");
            /* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _auth__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_7__["MCUIModule"],
                        _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]
                    ],
                    providers: [_auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/auth/auth.service.ts ***!
          \**************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony import */ var _app_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-base.service */ "./src/app/app-base.service.ts");
            var AuthService = /** @class */ (function (_super) {
                __extends(AuthService, _super);
                function AuthService(service) {
                    var _this = _super.call(this, service) || this;
                    _this.service = service;
                    return _this;
                }
                return AuthService;
            }(_app_base_service__WEBPACK_IMPORTED_MODULE_3__["AppBaseService"]));
            AuthService.ctorParameters = function () { return [
                { type: projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__["MCUIService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/auth/index.ts": 
        /*!*******************************!*\
          !*** ./src/app/auth/index.ts ***!
          \*******************************/
        /*! exports provided: SigninComponent, AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function () { return _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"]; });
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });
            /***/ 
        }),
        /***/ "./src/app/auth/signin/signin.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/auth/signin/signin.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  display: grid;\n  place-items: center center;\n  color: #e2e6ea;\n}\n:host a {\n  color: #6bc3bd;\n}\n:host .signin--video {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  background-size: cover;\n}\n:host .signin {\n  width: 350px;\n  padding: 40px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 3px;\n}\n:host .signin--header .mc-logo-text {\n  font-size: 28px;\n  text-align: center;\n  color: #fff;\n  font-weight: 700;\n}\n:host .signin--header .mc-logo-text--2 {\n  color: #6bc3bd;\n}\n:host .signin--header--description {\n  text-align: center;\n}\n:host .signin--body {\n  padding-top: 60px;\n}\n:host .signin--body--forgot-password {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n:host .signin--footer {\n  margin-top: 60px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3NyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL21jLXVpLWFuZ3VsYXIvc3JjL2Nzcy9fdmFycy5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUNzQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFRHRDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQ3FCSztBQ25CVDtBRkFJO0VBQ0UsY0NDRztBQ0NUO0FGQ0k7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRUNSO0FGRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VDd0JKLGtCQUFBO0FDdkJGO0FGRVE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUVBVjtBRkVVO0VBQ0ksY0MzQkw7QUMyQlQ7QUZHUTtFQUNFLGtCQUFBO0FFRFY7QUZJTTtFQUNFLGlCQUFBO0FFRlI7QUZHUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRURWO0FGSU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FFRlIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycyc7XG46aG9zdCB7XG4gICAgQGluY2x1ZGUgY29udGFpbmVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XG4gICAgY29sb3I6ICRjLWdyYXk7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkYy1jeWFuO1xuICAgIH1cblxuICAgIC5zaWduaW4tLXZpZGVvIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHotaW5kZXg6IC0xMDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuXG4gICAgLnNpZ25pbiB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgQGluY2x1ZGUgcm91bmRlZDtcbiAgICAgICYtLWhlYWRlciB7XG4gICAgICAgIC5tYy1sb2dvLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAmLS0xIHt9XG4gICAgICAgICAgJi0tMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkYy1jeWFuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLS1ib2R5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICYtLWZvcmdvdC1wYXNzd29yZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYtLWZvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBQcmltYXJ5IGNvbG9yc1xuJGMtb3JhbmdlLWI6ICNmMzY3MDU7XG4kYy1vcmFuZ2U6ICNmODgzMDA7XG4kYy1vcmFuZ2UtbDogI2ZmYjMwMjtcblxuJGMtYmx1ZTogIzA4NjZDNjtcbiRjLWJsdWUtYjogIzA3NTNhMTtcblxuJGMtY3lhbi1iOiAjMzlhYWFkO1xuJGMtY3lhbjogIzZiYzNiZDtcbiRjLWN5YW4tbDogI2UzZjZmODtcblxuJGMtZ3JlZW46ICMyM0JGMDg7XG4kYy1ncmVlbi1iOiAjMWM5YTA2O1xuXG4kYy1yZWQ6I0RDMzU0NTtcbiRjLXJlZC1iOiNjODIzMzM7XG5cbiRjLXllbGxvdzogI2VlZjY2ZDtcblxuLy8gR3JheVxuJGMtYmxhY2s6ICMwMDA7XG4kYy1ncmF5LWJiYmI6ICMyMzI3MmI7XG4kYy1ncmF5LWJiYjogIzM0M2E0MDtcbiRjLWdyYXktYmI6ICM3MjdiODQ7XG4kYy1ncmF5LWI6ICM4NjhlOTY7XG4kYy1ncmF5OiAjZTJlNmVhO1xuJGMtZ3JheS1sOiAjZjhmOWZhO1xuJGMtd2hpdGU6ICNmZmY7XG5cbiRjLXRleHQ6ICRjLWdyYXktYmJiYjtcbiRjLWJvcmRlcjogJGMtZ3JheTtcbiRjLWJnOiAkYy1ncmF5LWw7XG5cbiRjLXN1Y2Nlc3M6ICRjLWdyZWVuO1xuJGMtd2FybmluZzogJGMtb3JhbmdlO1xuJGMtZXJyb3I6ICRjLXJlZDtcblxuQG1peGluIGNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1peGluIHJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQG1peGluIHJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbkBtaXhpbiBjZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy13aGl0ZTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcbiAgY29sb3I6ICNlMmU2ZWE7XG59XG46aG9zdCBhIHtcbiAgY29sb3I6ICM2YmMzYmQ7XG59XG46aG9zdCAuc2lnbmluLS12aWRlbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuOmhvc3QgLnNpZ25pbiB7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46aG9zdCAuc2lnbmluLS1oZWFkZXIgLm1jLWxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IC5zaWduaW4tLWhlYWRlciAubWMtbG9nby10ZXh0LS0yIHtcbiAgY29sb3I6ICM2YmMzYmQ7XG59XG46aG9zdCAuc2lnbmluLS1oZWFkZXItLWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLnNpZ25pbi0tYm9keSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuOmhvc3QgLnNpZ25pbi0tYm9keS0tZm9yZ290LXBhc3N3b3JkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgLnNpZ25pbi0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/auth/signin/signin.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/signin/signin.component.ts ***!
          \*************************************************/
        /*! exports provided: SigninComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function () { return SigninComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/app/index.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
            var SigninComponent = /** @class */ (function (_super) {
                __extends(SigninComponent, _super);
                function SigninComponent(er, service, authService, router) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.authService = authService;
                    _this.router = router;
                    return _this;
                }
                SigninComponent.prototype.onCanPlay = function (e) {
                    e.target.muted = true;
                    e.target.play();
                };
                SigninComponent.prototype.onSignup = function () { };
                SigninComponent.prototype.onPressSignin = function () { };
                SigninComponent.prototype.onClickForgotPassword = function () { };
                return SigninComponent;
            }(_index__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));
            SigninComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MCUIService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-signin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")).default]
                })
            ], SigninComponent);
            /***/ 
        }),
        /***/ "./src/app/home/example/example-routing.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/home/example/example-routing.module.ts ***!
          \********************************************************/
        /*! exports provided: ExampleRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleRoutingModule", function () { return ExampleRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example.component */ "./src/app/home/example/example.component.ts");
            var exampleRoutes = [{
                    path: '',
                    component: _example_component__WEBPACK_IMPORTED_MODULE_3__["ExampleComponent"],
                    children: []
                }];
            var ExampleRoutingModule = /** @class */ (function () {
                function ExampleRoutingModule() {
                }
                return ExampleRoutingModule;
            }());
            ExampleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                    ]
                })
            ], ExampleRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/home/example/example.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/home/example/example.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  background-color: #f8f9fa;\n}\n:host .example--header {\n  padding: 5px 0 25px 0;\n}\n:host .example--item {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.21);\n  border-radius: 3px;\n  padding: 25px;\n  background-color: #fff;\n  margin-bottom: 20px;\n}\n:host .example--item--header {\n  padding-bottom: 20px;\n}\n:host .example--item--header h6 {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3NyYy9hcHAvaG9tZS9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWMvbWMtdWktYW5ndWxhci9zcmMvY3NzL192YXJzLnNjc3MiLCJzcmMvYXBwL2hvbWUvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDcUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RURyQ0EseUJDdUJTO0FDdEJYO0FGQ0k7RUFDRSxxQkFBQTtBRUNOO0FGQ0k7RUNvREYsc0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQXJDUTtFRGpCSixtQkFBQTtBRUtOO0FGSk07RUFDRSxvQkFBQTtBRU1SO0FGTFE7RUFDRSx5QkFBQTtBRU9WIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycyc7XG5cbjpob3N0IHtcbiAgQGluY2x1ZGUgY29udGFpbmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1iZztcbiAgLmV4YW1wbGUge1xuICAgICYtLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiA1cHggMCAyNXB4IDA7XG4gICAgfVxuICAgICYtLWl0ZW0ge1xuICAgICAgQGluY2x1ZGUgY2FyZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAmLS1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgaDYge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYtLWJvZHkge1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gUHJpbWFyeSBjb2xvcnNcbiRjLW9yYW5nZS1iOiAjZjM2NzA1O1xuJGMtb3JhbmdlOiAjZjg4MzAwO1xuJGMtb3JhbmdlLWw6ICNmZmIzMDI7XG5cbiRjLWJsdWU6ICMwODY2QzY7XG4kYy1ibHVlLWI6ICMwNzUzYTE7XG5cbiRjLWN5YW4tYjogIzM5YWFhZDtcbiRjLWN5YW46ICM2YmMzYmQ7XG4kYy1jeWFuLWw6ICNlM2Y2Zjg7XG5cbiRjLWdyZWVuOiAjMjNCRjA4O1xuJGMtZ3JlZW4tYjogIzFjOWEwNjtcblxuJGMtcmVkOiNEQzM1NDU7XG4kYy1yZWQtYjojYzgyMzMzO1xuXG4kYy15ZWxsb3c6ICNlZWY2NmQ7XG5cbi8vIEdyYXlcbiRjLWJsYWNrOiAjMDAwO1xuJGMtZ3JheS1iYmJiOiAjMjMyNzJiO1xuJGMtZ3JheS1iYmI6ICMzNDNhNDA7XG4kYy1ncmF5LWJiOiAjNzI3Yjg0O1xuJGMtZ3JheS1iOiAjODY4ZTk2O1xuJGMtZ3JheTogI2UyZTZlYTtcbiRjLWdyYXktbDogI2Y4ZjlmYTtcbiRjLXdoaXRlOiAjZmZmO1xuXG4kYy10ZXh0OiAkYy1ncmF5LWJiYmI7XG4kYy1ib3JkZXI6ICRjLWdyYXk7XG4kYy1iZzogJGMtZ3JheS1sO1xuXG4kYy1zdWNjZXNzOiAkYy1ncmVlbjtcbiRjLXdhcm5pbmc6ICRjLW9yYW5nZTtcbiRjLWVycm9yOiAkYy1yZWQ7XG5cbkBtaXhpbiBjb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiByZWFkb25seSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBtaXhpbiByb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5AbWl4aW4gY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIGNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtd2hpdGU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cbjpob3N0IC5leGFtcGxlLS1oZWFkZXIge1xuICBwYWRkaW5nOiA1cHggMCAyNXB4IDA7XG59XG46aG9zdCAuZXhhbXBsZS0taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgLmV4YW1wbGUtLWl0ZW0tLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgLmV4YW1wbGUtLWl0ZW0tLWhlYWRlciBoNiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/example/example.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/home/example/example.component.ts ***!
          \***************************************************/
        /*! exports provided: ExampleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function () { return ExampleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/app/index.ts");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "./src/app/home/home.service.ts");
            var ExampleComponent = /** @class */ (function (_super) {
                __extends(ExampleComponent, _super);
                function ExampleComponent(er, service, homeService) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.homeService = homeService;
                    _this.data = _this.homeService.getUserListMock().data;
                    _this.gridCell = {};
                    _this.dropdownData = _this.data.concat();
                    _this.listBasicToggleData = _this.data.slice(0, 10);
                    _this.listBasicTagsData = _this.data.map(function (d, i) { return _this.getTagThemeItem(d, i); }).slice(0, 10);
                    _this.listData = _this.data.concat();
                    _this.gridBasicData = _this.data.slice(0, 20);
                    _this.gridData = _this.data.concat();
                    _this.gridCustomData = _this.getCustomGridData();
                    return _this;
                }
                ExampleComponent.prototype.getCustomGridData = function () {
                    var _this = this;
                    var headerData = [
                        [
                            { name: 'ID', rowspan: 2 },
                            { name: 'Active', rowspan: 2 },
                            { name: 'Balance', rowspan: 2 },
                            { name: 'Tags', rowspan: 2 },
                            { name: 'Personal Detail', colspan: 5 },
                            { name: 'Contact Info', colspan: 3 },
                        ],
                        [
                            { name: 'Age' },
                            { name: 'Eye Color' },
                            { name: 'Name' },
                            { name: 'Gender' },
                            { name: 'Company' },
                            { name: 'Email' },
                            { name: 'Mobile' },
                            { name: 'Address' },
                        ]
                    ];
                    var columns = [
                        {
                            field: 'id'
                        }, {
                            field: 'isActive'
                        }, {
                            field: 'balance'
                        }, {
                            field: 'tags'
                        }, {
                            field: 'age'
                        }, {
                            field: 'eyeColor'
                        }, {
                            field: 'name'
                        }, {
                            field: 'gender'
                        }, {
                            field: 'company'
                        }, {
                            field: 'email'
                        }, {
                            field: 'phone'
                        }, {
                            field: 'address'
                        }
                    ];
                    var data = {
                        headerData: headerData,
                        columns: columns,
                        rows: this.data.map(function (d) {
                            d.tags = d.tags ? d.tags.map(function (d, i) { return _this.getTagThemeItem(d, i); }) : null;
                            return d;
                        })
                    };
                    return data;
                };
                ExampleComponent.prototype.getTagThemeItem = function (d, i) {
                    var item = {
                        id: d.id ? d.id : d,
                        name: d.name ? d.name : d,
                        theme: ['tag']
                    };
                    if (i % 2 === 0) {
                        item.theme.push('tag-orange');
                    }
                    return item;
                };
                ExampleComponent.prototype.showPopup = function (el) {
                    var instance = this.popupCmp ? this.popupCmp.instance : null;
                    if (!this.popupCmp) {
                        // add to root
                        this.popupCmp = this.service.addComponent(projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"]);
                        instance = this.popupCmp.instance;
                        instance.tpl = this.popupTpl;
                        instance.theme = 'audit';
                        instance.hasIndicator = true;
                        instance.checkTargetLocation = true;
                    }
                    instance.targetEl = el;
                    instance.visible = true;
                };
                ExampleComponent.prototype.showDrawer = function () {
                    var instance = this.drawerCmp ? this.drawerCmp.instance : null;
                    if (!this.drawerCmp) {
                        // add to root
                        this.drawerCmp = this.service.addComponent(projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__["DrawerComponent"]);
                        instance = this.drawerCmp.instance;
                        instance.from = 'right';
                        instance.mask = false;
                        instance.tpl = this.drawerTpl;
                    }
                    instance.visible = true;
                };
                ExampleComponent.prototype.getCellValue = function (id) {
                    return this.data.find(function (d) { return id + '' === d.id + ''; });
                };
                ExampleComponent.prototype.onGridAction = function (e) {
                    var _this = this;
                    switch (e.action) {
                        case 'select-cell':
                            var rowData = this.getCellValue(e.id);
                            e.value = rowData[e.field];
                            e.name = rowData.name;
                            this.gridCell = e;
                            if (e.field !== 'friends') {
                                var value = this.gridCell.value;
                                this.gridCell.value = Array.isArray(value) ? value.map(function (d, i) { return _this.getTagThemeItem(d, i); }) : value;
                                this.showPopup(e.el);
                            }
                            else {
                                this.showDrawer();
                            }
                            break;
                    }
                };
                ExampleComponent.prototype.onDropdownNeedData = function (e) {
                    switch (e.action) {
                        case 'filter':
                            this.dropdownData = this.service.util.data.search(this.data, e.keyword, 'name');
                            // console.log('dropdown filter', this.dropdownData);
                            break;
                    }
                };
                ExampleComponent.prototype.destroyCmp = function () {
                    if (this.popupCmp) {
                        this.service.removeComponent(this.popupCmp);
                    }
                    if (this.drawerCmp) {
                        this.service.removeComponent(this.drawerCmp);
                    }
                };
                return ExampleComponent;
            }(_index__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));
            ExampleComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] },
                { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popupTpl', {
                    static: false
                })
            ], ExampleComponent.prototype, "popupTpl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawerTpl', {
                    static: false
                })
            ], ExampleComponent.prototype, "drawerTpl", void 0);
            ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-example',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/example/example.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example.component.scss */ "./src/app/home/example/example.component.scss")).default]
                })
            ], ExampleComponent);
            /***/ 
        }),
        /***/ "./src/app/home/example/example.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/home/example/example.module.ts ***!
          \************************************************/
        /*! exports provided: ExampleModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModule", function () { return ExampleModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony import */ var _example_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-routing.module */ "./src/app/home/example/example-routing.module.ts");
            /* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example.component */ "./src/app/home/example/example.component.ts");
            var ExampleModule = /** @class */ (function () {
                function ExampleModule() {
                }
                return ExampleModule;
            }());
            ExampleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__["MCUIModule"], _example_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExampleRoutingModule"]],
                    declarations: [
                        _example_component__WEBPACK_IMPORTED_MODULE_4__["ExampleComponent"]
                    ],
                    entryComponents: [],
                    providers: []
                })
            ], ExampleModule);
            /***/ 
        }),
        /***/ "./src/app/home/home-header/home-header.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/home/home-header/home-header.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 55px;\n  background-color: #fff;\n  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.16);\n}\n:host .home-header--header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0 20px;\n}\n:host .home-header--header--logo {\n  font-size: 24px;\n  letter-spacing: -1px;\n  line-height: 54px;\n  font-weight: 700;\n}\n:host .home-header--header--logo--1 {\n  color: #000;\n}\n:host .home-header--header--logo--2 {\n  color: #39aaad;\n}\n:host .home-header--body {\n  text-align: center;\n  line-height: 53px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3NyYy9hcHAvaG9tZS9ob21lLWhlYWRlci9ob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWhlYWRlci9ob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3NyYy9jc3MvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDZDQUFBO0FDREY7QURHSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVRO0VBQ0UsV0VKQTtBRElWO0FER1E7RUFDRSxjRXJCQztBRG9CWDtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWhlYWRlci9ob21lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLmhvbWUtaGVhZGVyIHtcbiAgICAmLS1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICYtLWxvZ28ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICAmLS0xIHtcbiAgICAgICAgICBjb2xvcjogJGMtYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmLS0yIHtcbiAgICAgICAgICBjb2xvcjogJGMtY3lhbi1iO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi0tYm9keSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogNTNweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG46aG9zdCAuaG9tZS1oZWFkZXItLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG46aG9zdCAuaG9tZS1oZWFkZXItLWhlYWRlci0tbG9nbyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOmhvc3QgLmhvbWUtaGVhZGVyLS1oZWFkZXItLWxvZ28tLTEge1xuICBjb2xvcjogIzAwMDtcbn1cbjpob3N0IC5ob21lLWhlYWRlci0taGVhZGVyLS1sb2dvLS0yIHtcbiAgY29sb3I6ICMzOWFhYWQ7XG59XG46aG9zdCAuaG9tZS1oZWFkZXItLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1M3B4O1xufSIsIi8vIFByaW1hcnkgY29sb3JzXG4kYy1vcmFuZ2UtYjogI2YzNjcwNTtcbiRjLW9yYW5nZTogI2Y4ODMwMDtcbiRjLW9yYW5nZS1sOiAjZmZiMzAyO1xuXG4kYy1ibHVlOiAjMDg2NkM2O1xuJGMtYmx1ZS1iOiAjMDc1M2ExO1xuXG4kYy1jeWFuLWI6ICMzOWFhYWQ7XG4kYy1jeWFuOiAjNmJjM2JkO1xuJGMtY3lhbi1sOiAjZTNmNmY4O1xuXG4kYy1ncmVlbjogIzIzQkYwODtcbiRjLWdyZWVuLWI6ICMxYzlhMDY7XG5cbiRjLXJlZDojREMzNTQ1O1xuJGMtcmVkLWI6I2M4MjMzMztcblxuJGMteWVsbG93OiAjZWVmNjZkO1xuXG4vLyBHcmF5XG4kYy1ibGFjazogIzAwMDtcbiRjLWdyYXktYmJiYjogIzIzMjcyYjtcbiRjLWdyYXktYmJiOiAjMzQzYTQwO1xuJGMtZ3JheS1iYjogIzcyN2I4NDtcbiRjLWdyYXktYjogIzg2OGU5NjtcbiRjLWdyYXk6ICNlMmU2ZWE7XG4kYy1ncmF5LWw6ICNmOGY5ZmE7XG4kYy13aGl0ZTogI2ZmZjtcblxuJGMtdGV4dDogJGMtZ3JheS1iYmJiO1xuJGMtYm9yZGVyOiAkYy1ncmF5O1xuJGMtYmc6ICRjLWdyYXktbDtcblxuJGMtc3VjY2VzczogJGMtZ3JlZW47XG4kYy13YXJuaW5nOiAkYy1vcmFuZ2U7XG4kYy1lcnJvcjogJGMtcmVkO1xuXG5AbWl4aW4gY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWl4aW4gcmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWl4aW4gcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuQG1peGluIGNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBjYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjLXdoaXRlO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/home/home-header/home-header.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/home/home-header/home-header.component.ts ***!
          \***********************************************************/
        /*! exports provided: HomeHeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function () { return HomeHeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/app/index.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home.service */ "./src/app/home/home.service.ts");
            var HomeHeaderComponent = /** @class */ (function (_super) {
                __extends(HomeHeaderComponent, _super);
                function HomeHeaderComponent(er, service, homeService, router) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    _this.homeService = homeService;
                    _this.router = router;
                    _this.menuData = _this.homeService.getMenuList();
                    return _this;
                }
                HomeHeaderComponent.prototype.onListAction = function (e) {
                    switch (e.action) {
                        case 'select-item':
                            this.router.navigate([e.selectedItem.id]);
                            break;
                    }
                };
                return HomeHeaderComponent;
            }(_index__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));
            HomeHeaderComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MCUIService"] },
                { type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            HomeHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-home-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-header/home-header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-header.component.scss */ "./src/app/home/home-header/home-header.component.scss")).default]
                })
            ], HomeHeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/home/home-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/home/index.ts");
            var homeRoutes = [{
                    path: 'home',
                    component: ___WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    children: [
                        {
                            path: 'example',
                            loadChildren: './example/example.module#ExampleModule'
                        }
                    ]
                }];
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(homeRoutes)
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                    ]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  padding: 20px;\n  padding-top: 75px;\n  background-color: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYy9tYy11aS1hbmd1bGFyL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21jL21jLXVpLWFuZ3VsYXIvc3JjL2Nzcy9fdmFycy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNxQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFRHJDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNxQlM7QUNwQlgiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3MvdmFycyc7XG5cbjpob3N0IHtcbiAgQGluY2x1ZGUgY29udGFpbmVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNzVweDsgLy8gaGVhZGVyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjLWJnO1xufVxuIiwiLy8gUHJpbWFyeSBjb2xvcnNcbiRjLW9yYW5nZS1iOiAjZjM2NzA1O1xuJGMtb3JhbmdlOiAjZjg4MzAwO1xuJGMtb3JhbmdlLWw6ICNmZmIzMDI7XG5cbiRjLWJsdWU6ICMwODY2QzY7XG4kYy1ibHVlLWI6ICMwNzUzYTE7XG5cbiRjLWN5YW4tYjogIzM5YWFhZDtcbiRjLWN5YW46ICM2YmMzYmQ7XG4kYy1jeWFuLWw6ICNlM2Y2Zjg7XG5cbiRjLWdyZWVuOiAjMjNCRjA4O1xuJGMtZ3JlZW4tYjogIzFjOWEwNjtcblxuJGMtcmVkOiNEQzM1NDU7XG4kYy1yZWQtYjojYzgyMzMzO1xuXG4kYy15ZWxsb3c6ICNlZWY2NmQ7XG5cbi8vIEdyYXlcbiRjLWJsYWNrOiAjMDAwO1xuJGMtZ3JheS1iYmJiOiAjMjMyNzJiO1xuJGMtZ3JheS1iYmI6ICMzNDNhNDA7XG4kYy1ncmF5LWJiOiAjNzI3Yjg0O1xuJGMtZ3JheS1iOiAjODY4ZTk2O1xuJGMtZ3JheTogI2UyZTZlYTtcbiRjLWdyYXktbDogI2Y4ZjlmYTtcbiRjLXdoaXRlOiAjZmZmO1xuXG4kYy10ZXh0OiAkYy1ncmF5LWJiYmI7XG4kYy1ib3JkZXI6ICRjLWdyYXk7XG4kYy1iZzogJGMtZ3JheS1sO1xuXG4kYy1zdWNjZXNzOiAkYy1ncmVlbjtcbiRjLXdhcm5pbmc6ICRjLW9yYW5nZTtcbiRjLWVycm9yOiAkYy1yZWQ7XG5cbkBtaXhpbiBjb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtaXhpbiByZWFkb25seSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBtaXhpbiByb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5AbWl4aW4gY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIGNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtd2hpdGU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/app/index.ts");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            var HomeComponent = /** @class */ (function (_super) {
                __extends(HomeComponent, _super);
                function HomeComponent(er, service) {
                    var _this = _super.call(this, er, service) || this;
                    _this.er = er;
                    _this.service = service;
                    return _this;
                }
                return HomeComponent;
            }(_index__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]));
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__["MCUIService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'mc-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/home/index.ts");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
            /* harmony import */ var _example_example_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example/example.module */ "./src/app/home/example/example.module.ts");
            /* harmony import */ var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-header/home-header.component */ "./src/app/home/home-header/home-header.component.ts");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_3__["MCUIModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _example_example_module__WEBPACK_IMPORTED_MODULE_5__["ExampleModule"]],
                    declarations: [
                        ___WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                        _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_6__["HomeHeaderComponent"],
                    ],
                    entryComponents: [],
                    providers: [
                        ___WEBPACK_IMPORTED_MODULE_2__["HomeService"],
                    ]
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/home/home.service.ts ***!
          \**************************************/
        /*! exports provided: HomeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function () { return HomeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony import */ var _app_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-base.service */ "./src/app/app-base.service.ts");
            /* harmony import */ var src_test_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/test/api */ "./src/test/api/index.ts");
            var CONS = {
                homeLeftMenu: {
                    data: {
                        menu: [
                            { id: '/home/example', name: 'Components', depth: 0 },
                        ]
                    }
                }
            };
            var HomeService = /** @class */ (function (_super) {
                __extends(HomeService, _super);
                function HomeService(service) {
                    var _this = _super.call(this, service) || this;
                    _this.service = service;
                    return _this;
                }
                HomeService.prototype.getMenuList = function () {
                    return CONS.homeLeftMenu.data.menu;
                };
                HomeService.prototype.getUserListMock = function () {
                    return src_test_api__WEBPACK_IMPORTED_MODULE_4__["user_mock"];
                };
                return HomeService;
            }(_app_base_service__WEBPACK_IMPORTED_MODULE_3__["AppBaseService"]));
            HomeService.ctorParameters = function () { return [
                { type: projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_2__["MCUIService"] }
            ]; };
            HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], HomeService);
            /***/ 
        }),
        /***/ "./src/app/home/index.ts": 
        /*!*******************************!*\
          !*** ./src/app/home/index.ts ***!
          \*******************************/
        /*! exports provided: HomeService, HomeHeaderComponent, HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });
            /* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeService", function () { return _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]; });
            /* harmony import */ var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-header/home-header.component */ "./src/app/home/home-header/home-header.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function () { return _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_3__["HomeHeaderComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/index.ts": 
        /*!**************************!*\
          !*** ./src/app/index.ts ***!
          \**************************/
        /*! exports provided: AppComponent, MCUIService, MCUIModule, FieldComponent, TextareaComponent, InputComponent, DropdownComponent, FormComponent, ScrollComponent, ListComponent, ListBasicComponent, ButtonComponent, IconComponent, ListItemComponent, LoaderComponent, DrawerComponent, MessageBarComponent, GridHeaderComponent, GridBodyComponent, MaskComponent, GridComponent, PopupComponent, PopupListComponent, AppBaseComponent, AppBaseService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]; });
            /* harmony import */ var _app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-base.component */ "./src/app/app-base.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function () { return _app_base_component__WEBPACK_IMPORTED_MODULE_2__["AppBaseComponent"]; });
            /* harmony import */ var _app_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-base.service */ "./src/app/app-base.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBaseService", function () { return _app_base_service__WEBPACK_IMPORTED_MODULE_3__["AppBaseService"]; });
            /* harmony import */ var _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/mc-ui/src/public-api */ "./projects/mc-ui/src/public-api.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCUIService", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MCUIService"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCUIModule", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MCUIModule"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FieldComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["TextareaComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ScrollComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBasicComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ListBasicComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["DrawerComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MessageBarComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["GridHeaderComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["GridBodyComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["MaskComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupListComponent", function () { return _projects_mc_ui_src_public_api__WEBPACK_IMPORTED_MODULE_4__["PopupListComponent"]; });
            /***/ 
        }),
        /***/ "./src/config/url.ts": 
        /*!***************************!*\
          !*** ./src/config/url.ts ***!
          \***************************/
        /*! exports provided: Url */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function () { return Url; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var src_test_api_user_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/test/api/user_mock */ "./src/test/api/user_mock.ts");
            var URLS = {
                user: 'api/user/',
            };
            var MOCK_URLS = {
                user: src_test_api_user_mock__WEBPACK_IMPORTED_MODULE_1__["user_mock"]
            };
            var Url = /** @class */ (function () {
                function Url(service) {
                    this.service = service;
                    this.root = '';
                    this.root = this.service.util.getRootUrl();
                }
                /**
                 *
                 * @param id url id
                 * @param extra for dynamic url e.g) id data string
                 */
                Url.prototype.getUrl = function (id, params, isMockData) {
                    if (params === void 0) { params = []; }
                    if (isMockData === void 0) { isMockData = false; }
                    var val = URLS[id];
                    if (params.length > 0) {
                        params.map(function (u, i) {
                            val = val.replace("{" + i + "}", u);
                        });
                    }
                    return !isMockData ? this.root + val : MOCK_URLS[id] || {};
                };
                return Url;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ "./src/test/api/index.ts": 
        /*!*******************************!*\
          !*** ./src/test/api/index.ts ***!
          \*******************************/
        /*! exports provided: user_mock */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _user_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_mock */ "./src/test/api/user_mock.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user_mock", function () { return _user_mock__WEBPACK_IMPORTED_MODULE_1__["user_mock"]; });
            /***/ 
        }),
        /***/ "./src/test/api/user_mock.ts": 
        /*!***********************************!*\
          !*** ./src/test/api/user_mock.ts ***!
          \***********************************/
        /*! exports provided: user_mock */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_mock", function () { return user_mock; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var user_mock = {
                data: [{
                        id: '5dca5313812afa710a41b47e',
                        index: 0,
                        guid: 'c1e6ad3c-ee37-4508-b9c8-7ff7ad98fefe',
                        isActive: false,
                        balance: '$1,679.69',
                        picture: 'http://placehold.it/32x32',
                        age: 23,
                        eyeColor: 'brown',
                        name: 'Angelica Lawson',
                        gender: 'female',
                        company: 'ZERBINA',
                        email: 'angelicalawson@zerbina.com',
                        phone: '+1 (851) 542-3455',
                        address: '931 Anthony Street, Crucible, Arkansas, 6042',
                        registered: '2014-12-22T04:55:22 +08:00',
                        latitude: -43.374519,
                        longitude: 87.490433,
                        tags: [
                            'voluptate',
                            'anim',
                            'ipsum',
                            'magna',
                            'fugiat',
                            'esse',
                            'ex'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Christa Weiss'
                            },
                            {
                                id: 1,
                                name: 'Patty Knapp'
                            },
                            {
                                id: 2,
                                name: 'Loretta Cardenas'
                            }
                        ],
                        greeting: 'Hello, Angelica Lawson! You have 7 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313ebbe88df3b3760bd',
                        index: 1,
                        guid: '94daf989-af11-4c9b-9201-b6cc5364d864',
                        isActive: true,
                        balance: '$3,131.62',
                        picture: 'http://placehold.it/32x32',
                        age: 39,
                        eyeColor: 'blue',
                        name: 'Pacheco Lott',
                        gender: 'male',
                        company: 'ARTIQ',
                        email: 'pachecolott@artiq.com',
                        phone: '+1 (858) 419-2996',
                        address: '402 Degraw Street, Vallonia, Montana, 7587',
                        registered: '2017-02-22T01:40:21 +08:00',
                        latitude: 11.900099,
                        longitude: -160.253146,
                        tags: [
                            'esse',
                            'do',
                            'qui',
                            'occaecat',
                            'velit',
                            'adipisicing',
                            'labore'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Penelope Frederick'
                            },
                            {
                                id: 1,
                                name: 'Lenore Brennan'
                            },
                            {
                                id: 2,
                                name: 'Fox Oneill'
                            }
                        ],
                        greeting: 'Hello, Pacheco Lott! You have 4 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313913ff9b15a0c2274',
                        index: 2,
                        guid: '2258435d-f528-419f-b455-f5b8a84c5ca1',
                        isActive: false,
                        balance: '$2,679.97',
                        picture: 'http://placehold.it/32x32',
                        age: 38,
                        eyeColor: 'blue',
                        name: 'Valerie Nolan',
                        gender: 'female',
                        company: 'OVERPLEX',
                        email: 'valerienolan@overplex.com',
                        phone: '+1 (964) 416-3256',
                        address: '317 Raleigh Place, Baden, Alabama, 8545',
                        registered: '2018-03-08T11:33:33 +08:00',
                        latitude: -75.77628,
                        longitude: -143.534931,
                        tags: [
                            'labore',
                            'excepteur',
                            'elit',
                            'commodo',
                            'laboris',
                            'Lorem',
                            'eiusmod'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Lyons Savage'
                            },
                            {
                                id: 1,
                                name: 'Whitaker Case'
                            },
                            {
                                id: 2,
                                name: 'Eve Martin'
                            }
                        ],
                        greeting: 'Hello, Valerie Nolan! You have 8 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53130a400cf7768f8471',
                        index: 3,
                        guid: '0f949193-346f-4c39-b865-3f039723d567',
                        isActive: false,
                        balance: '$2,408.59',
                        picture: 'http://placehold.it/32x32',
                        age: 26,
                        eyeColor: 'brown',
                        name: 'Mcgee Dyer',
                        gender: 'male',
                        company: 'SULFAX',
                        email: 'mcgeedyer@sulfax.com',
                        phone: '+1 (830) 456-3994',
                        address: '726 Cass Place, Dunnavant, Marshall Islands, 5700',
                        registered: '2014-01-12T05:44:44 +08:00',
                        latitude: 42.828831,
                        longitude: 38.822085,
                        tags: [
                            'minim',
                            'labore',
                            'laborum',
                            'veniam',
                            'officia',
                            'fugiat',
                            'occaecat'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Rene Nielsen'
                            },
                            {
                                id: 1,
                                name: 'Julia Hunter'
                            },
                            {
                                id: 2,
                                name: 'Haynes Walton'
                            }
                        ],
                        greeting: 'Hello, Mcgee Dyer! You have 9 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313a1159f68fae852f9',
                        index: 4,
                        guid: '2f3c20a2-c0ba-4a0d-9a0f-49049ceb2d4d',
                        isActive: false,
                        balance: '$1,536.25',
                        picture: 'http://placehold.it/32x32',
                        age: 26,
                        eyeColor: 'brown',
                        name: 'Millie Alford',
                        gender: 'female',
                        company: 'ISOLOGICA',
                        email: 'milliealford@isologica.com',
                        phone: '+1 (884) 486-2507',
                        address: '100 Willow Place, Ryderwood, Palau, 4838',
                        registered: '2014-04-15T12:42:47 +07:00',
                        latitude: 80.717551,
                        longitude: 119.750126,
                        tags: [
                            'duis',
                            'exercitation',
                            'ut',
                            'occaecat',
                            'mollit',
                            'dolor',
                            'laboris'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Coffey Gallegos'
                            },
                            {
                                id: 1,
                                name: 'Curtis Mcgowan'
                            },
                            {
                                id: 2,
                                name: 'Morrison Reynolds'
                            }
                        ],
                        greeting: 'Hello, Millie Alford! You have 3 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313ce651bb7a7470007',
                        index: 5,
                        guid: '3b8a640d-0469-4a6e-aa3b-fc8922240b0b',
                        isActive: false,
                        balance: '$2,068.08',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'blue',
                        name: 'Tameka Burns',
                        gender: 'female',
                        company: 'ZANITY',
                        email: 'tamekaburns@zanity.com',
                        phone: '+1 (844) 479-2165',
                        address: '626 Seigel Street, Aguila, Puerto Rico, 1159',
                        registered: '2014-02-13T07:49:30 +08:00',
                        latitude: 19.667705,
                        longitude: 134.747712,
                        tags: [
                            'consequat',
                            'cupidatat',
                            'consectetur',
                            'irure',
                            'labore',
                            'magna',
                            'duis'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Taylor Jennings'
                            },
                            {
                                id: 1,
                                name: 'Solis Vincent'
                            },
                            {
                                id: 2,
                                name: 'Craig Hood'
                            }
                        ],
                        greeting: 'Hello, Tameka Burns! You have 3 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53135f4a347da3f9b62e',
                        index: 6,
                        guid: 'd5214e50-bbed-45b2-977f-4c65dbcb7174',
                        isActive: true,
                        balance: '$1,360.38',
                        picture: 'http://placehold.it/32x32',
                        age: 28,
                        eyeColor: 'brown',
                        name: 'Acosta Hahn',
                        gender: 'male',
                        company: 'COMVERGES',
                        email: 'acostahahn@comverges.com',
                        phone: '+1 (867) 433-2865',
                        address: '841 Fillmore Avenue, Bawcomville, Vermont, 1215',
                        registered: '2017-10-16T02:27:00 +07:00',
                        latitude: -51.203896,
                        longitude: -62.353775,
                        tags: [
                            'ullamco',
                            'laboris',
                            'irure',
                            'id',
                            'esse',
                            'non',
                            'anim'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Lott Melendez'
                            },
                            {
                                id: 1,
                                name: 'Gretchen Rhodes'
                            },
                            {
                                id: 2,
                                name: 'Turner Mcintyre'
                            }
                        ],
                        greeting: 'Hello, Acosta Hahn! You have 1 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531359a86447a85e76a5',
                        index: 7,
                        guid: 'fa9ce2f1-0a0f-4c9a-932b-700fd5e97054',
                        isActive: true,
                        balance: '$3,046.14',
                        picture: 'http://placehold.it/32x32',
                        age: 23,
                        eyeColor: 'blue',
                        name: 'Mercado Sims',
                        gender: 'male',
                        company: 'ELITA',
                        email: 'mercadosims@elita.com',
                        phone: '+1 (954) 468-2308',
                        address: '967 Meeker Avenue, Hobucken, Washington, 1709',
                        registered: '2016-11-25T01:17:10 +08:00',
                        latitude: 62.231746,
                        longitude: -54.358507,
                        tags: [
                            'sunt',
                            'sunt',
                            'esse',
                            'tempor',
                            'magna',
                            'laboris',
                            'eu'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Hamilton Weaver'
                            },
                            {
                                id: 1,
                                name: 'Good Stewart'
                            },
                            {
                                id: 2,
                                name: 'Cecelia Donaldson'
                            }
                        ],
                        greeting: 'Hello, Mercado Sims! You have 6 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313aee48f7a1a78129a',
                        index: 8,
                        guid: '6111b71a-4dac-42c8-810f-364f8858041c',
                        isActive: false,
                        balance: '$3,788.76',
                        picture: 'http://placehold.it/32x32',
                        age: 39,
                        eyeColor: 'brown',
                        name: 'Patsy Watson',
                        gender: 'female',
                        company: 'FIBEROX',
                        email: 'patsywatson@fiberox.com',
                        phone: '+1 (826) 409-2296',
                        address: '133 Newkirk Placez, Turah, Idaho, 5308',
                        registered: '2018-09-24T04:21:49 +07:00',
                        latitude: 51.456968,
                        longitude: -177.670255,
                        tags: [
                            'eu',
                            'adipisicing',
                            'et',
                            'consequat',
                            'cillum',
                            'reprehenderit',
                            'in'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Noelle Fuller'
                            },
                            {
                                id: 1,
                                name: 'Avery Norton'
                            },
                            {
                                id: 2,
                                name: 'Jannie Russell'
                            }
                        ],
                        greeting: 'Hello, Patsy Watson! You have 7 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313664d752be8dc2f38',
                        index: 9,
                        guid: 'a9436e66-6180-4069-9893-07cd8db339c6',
                        isActive: true,
                        balance: '$2,302.86',
                        picture: 'http://placehold.it/32x32',
                        age: 20,
                        eyeColor: 'green',
                        name: 'Bell Mcconnell',
                        gender: 'male',
                        company: 'XOGGLE',
                        email: 'bellmcconnell@xoggle.com',
                        phone: '+1 (804) 542-2428',
                        address: '321 Lester Court, Kanauga, North Carolina, 2125',
                        registered: '2014-04-17T03:47:23 +07:00',
                        latitude: 58.475996,
                        longitude: -145.030357,
                        tags: [
                            'veniam',
                            'magna',
                            'sit',
                            'occaecat',
                            'est',
                            'cupidatat',
                            'sint'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Ursula Carey'
                            },
                            {
                                id: 1,
                                name: 'Gordon Massey'
                            },
                            {
                                id: 2,
                                name: 'Sharp Craft'
                            }
                        ],
                        greeting: 'Hello, Bell Mcconnell! You have 8 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313dee94152cb8fe094',
                        index: 10,
                        guid: 'd5a7ee2e-048f-4b68-b4de-0aa465e026bf',
                        isActive: true,
                        balance: '$1,584.06',
                        picture: 'http://placehold.it/32x32',
                        age: 32,
                        eyeColor: 'brown',
                        name: 'Faye Waters',
                        gender: 'female',
                        company: 'GEEKOSIS',
                        email: 'fayewaters@geekosis.com',
                        phone: '+1 (974) 478-2231',
                        address: '205 Aitken Place, Swartzville, Oregon, 9633',
                        registered: '2015-12-29T09:45:57 +08:00',
                        latitude: 82.985774,
                        longitude: -149.213361,
                        tags: [
                            'dolor',
                            'ipsum',
                            'dolor',
                            'laborum',
                            'irure',
                            'aliquip',
                            'anim'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Chandra Sanders'
                            },
                            {
                                id: 1,
                                name: 'Lindsey Camacho'
                            },
                            {
                                id: 2,
                                name: 'Barrett Jensen'
                            }
                        ],
                        greeting: 'Hello, Faye Waters! You have 4 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313d4aa2e17dbf7c85f',
                        index: 11,
                        guid: 'bd804e50-b8d1-401d-91a7-2a65bcd1d93c',
                        isActive: true,
                        balance: '$3,474.41',
                        picture: 'http://placehold.it/32x32',
                        age: 22,
                        eyeColor: 'green',
                        name: 'Evelyn William',
                        gender: 'female',
                        company: 'EARWAX',
                        email: 'evelynwilliam@earwax.com',
                        phone: '+1 (809) 432-3688',
                        address: '762 Waldane Court, Skyland, Ohio, 7772',
                        registered: '2017-03-29T05:27:18 +07:00',
                        latitude: 38.993911,
                        longitude: -135.118742,
                        tags: [
                            'reprehenderit',
                            'fugiat',
                            'in',
                            'dolor',
                            'cupidatat',
                            'laborum',
                            'ea'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Mullins Best'
                            },
                            {
                                id: 1,
                                name: 'Morton Knight'
                            },
                            {
                                id: 2,
                                name: 'Lilia Duran'
                            }
                        ],
                        greeting: 'Hello, Evelyn William! You have 1 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531345d16bbc985b0c35',
                        index: 12,
                        guid: 'ae9fcb94-7f6a-4c25-bd8f-727d28b0d050',
                        isActive: true,
                        balance: '$1,247.42',
                        picture: 'http://placehold.it/32x32',
                        age: 20,
                        eyeColor: 'brown',
                        name: 'Bolton Washington',
                        gender: 'male',
                        company: 'ZILLADYNE',
                        email: 'boltonwashington@zilladyne.com',
                        phone: '+1 (890) 475-3847',
                        address: '791 Beach Place, Greenbush, Maine, 8057',
                        registered: '2017-01-07T12:51:48 +08:00',
                        latitude: -0.962845,
                        longitude: 80.652449,
                        tags: [
                            'consequat',
                            'veniam',
                            'deserunt',
                            'velit',
                            'et',
                            'ipsum',
                            'fugiat'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Lynne Larson'
                            },
                            {
                                id: 1,
                                name: 'Watson Vargas'
                            },
                            {
                                id: 2,
                                name: 'Mckenzie Hicks'
                            }
                        ],
                        greeting: 'Hello, Bolton Washington! You have 4 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313fc02b62b7bebddc7',
                        index: 13,
                        guid: '2bd2b928-c7fb-4dcc-a952-d16112dd23df',
                        isActive: false,
                        balance: '$2,372.81',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'blue',
                        name: 'Elvira Cox',
                        gender: 'female',
                        company: 'QNEKT',
                        email: 'elviracox@qnekt.com',
                        phone: '+1 (983) 419-3086',
                        address: '261 Campus Road, Germanton, District Of Columbia, 1780',
                        registered: '2017-07-16T08:13:14 +07:00',
                        latitude: 61.21201,
                        longitude: 54.931808,
                        tags: [
                            'consectetur',
                            'tempor',
                            'dolor',
                            'voluptate',
                            'ipsum',
                            'amet',
                            'Lorem'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Joann Cobb'
                            },
                            {
                                id: 1,
                                name: 'Fern Salas'
                            },
                            {
                                id: 2,
                                name: 'Marina Keith'
                            }
                        ],
                        greeting: 'Hello, Elvira Cox! You have 9 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53131e6d7d3dcbbe9681',
                        index: 14,
                        guid: '59a3e162-183e-4aad-a7f7-3226f1de3561',
                        isActive: true,
                        balance: '$1,370.30',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'green',
                        name: 'Spencer Silva',
                        gender: 'male',
                        company: 'EXERTA',
                        email: 'spencersilva@exerta.com',
                        phone: '+1 (877) 415-2907',
                        address: '522 Madison Place, Harold, Guam, 9753',
                        registered: '2014-03-22T03:16:13 +07:00',
                        latitude: -81.624729,
                        longitude: -159.036969,
                        tags: [
                            'consequat',
                            'eiusmod',
                            'cupidatat',
                            'occaecat',
                            'do',
                            'eiusmod',
                            'sunt'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Tammie Arnold'
                            },
                            {
                                id: 1,
                                name: 'Ruthie Castro'
                            },
                            {
                                id: 2,
                                name: 'Parks Harrison'
                            }
                        ],
                        greeting: 'Hello, Spencer Silva! You have 8 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53130e23ce1c4f0ee31c',
                        index: 15,
                        guid: 'ec39d264-b305-4572-9476-e0836485045c',
                        isActive: false,
                        balance: '$3,862.15',
                        picture: 'http://placehold.it/32x32',
                        age: 26,
                        eyeColor: 'brown',
                        name: 'Aileen Owen',
                        gender: 'female',
                        company: 'VETRON',
                        email: 'aileenowen@vetron.com',
                        phone: '+1 (957) 581-3374',
                        address: '727 Bedford Avenue, Brecon, Georgia, 8231',
                        registered: '2017-10-16T03:34:43 +07:00',
                        latitude: -21.613282,
                        longitude: 52.576291,
                        tags: [
                            'nisi',
                            'occaecat',
                            'sunt',
                            'officia',
                            'ea',
                            'ex',
                            'non'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Jeri Avila'
                            },
                            {
                                id: 1,
                                name: 'Hogan Ramirez'
                            },
                            {
                                id: 2,
                                name: 'Gay Erickson'
                            }
                        ],
                        greeting: 'Hello, Aileen Owen! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531304404b5df43eedfd',
                        index: 16,
                        guid: 'ecff2751-eac1-4cef-b400-edd8f79b29ab',
                        isActive: false,
                        balance: '$2,817.80',
                        picture: 'http://placehold.it/32x32',
                        age: 32,
                        eyeColor: 'brown',
                        name: 'Petty Rush',
                        gender: 'male',
                        company: 'COGNICODE',
                        email: 'pettyrush@cognicode.com',
                        phone: '+1 (984) 494-3081',
                        address: '512 Monaco Place, Maxville, Northern Mariana Islands, 4549',
                        registered: '2018-12-11T05:34:55 +08:00',
                        latitude: 55.859994,
                        longitude: 82.225741,
                        tags: [
                            'consectetur',
                            'amet',
                            'pariatur',
                            'do',
                            'adipisicing',
                            'Lorem',
                            'excepteur'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Neal Head'
                            },
                            {
                                id: 1,
                                name: 'Rowe Hester'
                            },
                            {
                                id: 2,
                                name: 'Karyn Sexton'
                            }
                        ],
                        greeting: 'Hello, Petty Rush! You have 3 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53139864ebb716365001',
                        index: 17,
                        guid: 'f7d4cbef-42b2-44fc-a6c2-86e1892f8e2f',
                        isActive: true,
                        balance: '$1,771.99',
                        picture: 'http://placehold.it/32x32',
                        age: 39,
                        eyeColor: 'blue',
                        name: 'Mills Sellers',
                        gender: 'male',
                        company: 'VIRVA',
                        email: 'millssellers@virva.com',
                        phone: '+1 (985) 487-2224',
                        address: '160 Vanderbilt Avenue, Dupuyer, Missouri, 8144',
                        registered: '2019-06-08T01:01:19 +07:00',
                        latitude: -19.407343,
                        longitude: -117.676036,
                        tags: [
                            'exercitation',
                            'nostrud',
                            'eiusmod',
                            'magna',
                            'dolor',
                            'reprehenderit',
                            'magna'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Patrica Peck'
                            },
                            {
                                id: 1,
                                name: 'Caroline Cline'
                            },
                            {
                                id: 2,
                                name: 'Martha Morrow'
                            }
                        ],
                        greeting: 'Hello, Mills Sellers! You have 7 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca53139809a4506aecb49d',
                        index: 18,
                        guid: '561e0751-9f23-41ef-9e56-8452343dec48',
                        isActive: false,
                        balance: '$3,836.82',
                        picture: 'http://placehold.it/32x32',
                        age: 30,
                        eyeColor: 'brown',
                        name: 'Sabrina Williamson',
                        gender: 'female',
                        company: 'EXOTECHNO',
                        email: 'sabrinawilliamson@exotechno.com',
                        phone: '+1 (966) 494-2060',
                        address: '437 Woods Place, Clinton, New York, 8372',
                        registered: '2015-03-06T12:13:40 +08:00',
                        latitude: 30.518974,
                        longitude: -18.444719,
                        tags: [
                            'culpa',
                            'magna',
                            'occaecat',
                            'anim',
                            'minim',
                            'amet',
                            'voluptate'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Barton Grimes'
                            },
                            {
                                id: 1,
                                name: 'Glenn Pace'
                            },
                            {
                                id: 2,
                                name: 'Best Day'
                            }
                        ],
                        greeting: 'Hello, Sabrina Williamson! You have 6 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca53134f85bd9906e45fd8',
                        index: 19,
                        guid: 'eb882456-429f-4924-b37c-7a7cab4aac18',
                        isActive: true,
                        balance: '$1,880.08',
                        picture: 'http://placehold.it/32x32',
                        age: 22,
                        eyeColor: 'brown',
                        name: 'Tracie Acosta',
                        gender: 'female',
                        company: 'CINCYR',
                        email: 'tracieacosta@cincyr.com',
                        phone: '+1 (954) 537-2034',
                        address: '706 Junius Street, Graniteville, California, 4391',
                        registered: '2015-06-07T08:28:54 +07:00',
                        latitude: -16.093765,
                        longitude: -142.439792,
                        tags: [
                            'pariatur',
                            'elit',
                            'reprehenderit',
                            'consectetur',
                            'do',
                            'irure',
                            'labore'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Milagros Good'
                            },
                            {
                                id: 1,
                                name: 'Sheila Harrell'
                            },
                            {
                                id: 2,
                                name: 'Briggs Odom'
                            }
                        ],
                        greeting: 'Hello, Tracie Acosta! You have 7 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53133c5654c4abb3a620',
                        index: 20,
                        guid: 'dae2fe92-257b-43e5-8d33-74f5574d9e81',
                        isActive: true,
                        balance: '$3,319.34',
                        picture: 'http://placehold.it/32x32',
                        age: 38,
                        eyeColor: 'blue',
                        name: 'Rena Gonzales',
                        gender: 'female',
                        company: 'MANUFACT',
                        email: 'renagonzales@manufact.com',
                        phone: '+1 (976) 486-3184',
                        address: '659 Hooper Street, Mayfair, North Dakota, 726',
                        registered: '2018-02-24T03:36:58 +08:00',
                        latitude: 86.705419,
                        longitude: 63.536076,
                        tags: [
                            'ut',
                            'dolore',
                            'fugiat',
                            'incididunt',
                            'mollit',
                            'esse',
                            'in'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Morales Paul'
                            },
                            {
                                id: 1,
                                name: 'Stacy Holder'
                            },
                            {
                                id: 2,
                                name: 'Luna Simmons'
                            }
                        ],
                        greeting: 'Hello, Rena Gonzales! You have 3 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531378c321a4258b2209',
                        index: 21,
                        guid: 'a4e00158-e508-4cb3-8b49-37730e95720d',
                        isActive: true,
                        balance: '$1,013.18',
                        picture: 'http://placehold.it/32x32',
                        age: 32,
                        eyeColor: 'brown',
                        name: 'Hill Freeman',
                        gender: 'male',
                        company: 'ACUMENTOR',
                        email: 'hillfreeman@acumentor.com',
                        phone: '+1 (839) 447-2586',
                        address: '741 Fleet Place, Fairview, Pennsylvania, 8046',
                        registered: '2017-04-23T03:59:35 +07:00',
                        latitude: -3.066621,
                        longitude: 95.119164,
                        tags: [
                            'cillum',
                            'ipsum',
                            'in',
                            'sunt',
                            'ipsum',
                            'proident',
                            'nulla'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Mcmillan Navarro'
                            },
                            {
                                id: 1,
                                name: 'Geneva Booker'
                            },
                            {
                                id: 2,
                                name: 'Delia Finley'
                            }
                        ],
                        greeting: 'Hello, Hill Freeman! You have 3 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313f0f4f2b88723408b',
                        index: 22,
                        guid: 'f80757e1-e0ee-4051-bae5-070f4c8f79ec',
                        isActive: true,
                        balance: '$2,672.50',
                        picture: 'http://placehold.it/32x32',
                        age: 31,
                        eyeColor: 'blue',
                        name: 'Potts Roman',
                        gender: 'male',
                        company: 'COMCUBINE',
                        email: 'pottsroman@comcubine.com',
                        phone: '+1 (808) 441-3278',
                        address: '149 Wolcott Street, Dunbar, Arizona, 7011',
                        registered: '2014-09-13T04:03:57 +07:00',
                        latitude: -59.767525,
                        longitude: -57.836178,
                        tags: [
                            'nostrud',
                            'magna',
                            'do',
                            'excepteur',
                            'deserunt',
                            'in',
                            'ex'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Earnestine Snow'
                            },
                            {
                                id: 1,
                                name: 'Maynard Kelley'
                            },
                            {
                                id: 2,
                                name: 'West Oconnor'
                            }
                        ],
                        greeting: 'Hello, Potts Roman! You have 5 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313d67f1929827eaadc',
                        index: 23,
                        guid: '1a74a9c5-bdcb-4f6f-8be9-0619be8553f6',
                        isActive: true,
                        balance: '$1,482.83',
                        picture: 'http://placehold.it/32x32',
                        age: 33,
                        eyeColor: 'blue',
                        name: 'Ochoa Short',
                        gender: 'male',
                        company: 'BIFLEX',
                        email: 'ochoashort@biflex.com',
                        phone: '+1 (905) 447-3807',
                        address: '813 Montieth Street, Wolcott, New Hampshire, 2260',
                        registered: '2016-01-28T08:32:15 +08:00',
                        latitude: 6.362197,
                        longitude: -9.692317,
                        tags: [
                            'occaecat',
                            'eu',
                            'consequat',
                            'consequat',
                            'consectetur',
                            'incididunt',
                            'officia'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Pierce Smith'
                            },
                            {
                                id: 1,
                                name: 'Laurie Ellison'
                            },
                            {
                                id: 2,
                                name: 'Loraine Church'
                            }
                        ],
                        greeting: 'Hello, Ochoa Short! You have 10 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531321956fc317892971',
                        index: 24,
                        guid: 'd20e447e-de16-4f07-857d-8f147f1f5e55',
                        isActive: false,
                        balance: '$3,088.76',
                        picture: 'http://placehold.it/32x32',
                        age: 27,
                        eyeColor: 'brown',
                        name: 'Mattie Steele',
                        gender: 'female',
                        company: 'NAMEGEN',
                        email: 'mattiesteele@namegen.com',
                        phone: '+1 (961) 548-2513',
                        address: '536 Schenck Place, Brenton, Michigan, 7914',
                        registered: '2016-12-23T09:25:01 +08:00',
                        latitude: 72.971035,
                        longitude: 107.386022,
                        tags: [
                            'sit',
                            'amet',
                            'ipsum',
                            'aliqua',
                            'voluptate',
                            'dolore',
                            'tempor'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Beatriz Stanton'
                            },
                            {
                                id: 1,
                                name: 'Phyllis Sweeney'
                            },
                            {
                                id: 2,
                                name: 'Brandy Hutchinson'
                            }
                        ],
                        greeting: 'Hello, Mattie Steele! You have 8 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531320db013c3bdb0b1d',
                        index: 25,
                        guid: '2f54ad6d-08ee-44e1-bebf-17466d17f1a5',
                        isActive: true,
                        balance: '$3,738.04',
                        picture: 'http://placehold.it/32x32',
                        age: 40,
                        eyeColor: 'brown',
                        name: 'Dona Stephenson',
                        gender: 'female',
                        company: 'SULTRAXIN',
                        email: 'donastephenson@sultraxin.com',
                        phone: '+1 (911) 544-2323',
                        address: '721 Royce Place, Coultervillle, Connecticut, 4294',
                        registered: '2015-09-17T02:17:37 +07:00',
                        latitude: 83.041703,
                        longitude: -145.087054,
                        tags: [
                            'reprehenderit',
                            'exercitation',
                            'veniam',
                            'eiusmod',
                            'eiusmod',
                            'eiusmod',
                            'dolor'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Effie Guy'
                            },
                            {
                                id: 1,
                                name: 'Price Alvarado'
                            },
                            {
                                id: 2,
                                name: 'Jana Hines'
                            }
                        ],
                        greeting: 'Hello, Dona Stephenson! You have 2 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca53135bfb261f87eced8c',
                        index: 26,
                        guid: '4e05c40e-1fbb-45a6-8151-bb4afc418a82',
                        isActive: true,
                        balance: '$3,382.15',
                        picture: 'http://placehold.it/32x32',
                        age: 23,
                        eyeColor: 'brown',
                        name: 'Marcella Lang',
                        gender: 'female',
                        company: 'EARGO',
                        email: 'marcellalang@eargo.com',
                        phone: '+1 (890) 565-2699',
                        address: '332 Linden Street, Wheaton, Kentucky, 3192',
                        registered: '2017-04-17T04:56:51 +07:00',
                        latitude: -3.501834,
                        longitude: 4.685731,
                        tags: [
                            'consequat',
                            'veniam',
                            'ut',
                            'irure',
                            'laborum',
                            'est',
                            'ipsum'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Eloise Galloway'
                            },
                            {
                                id: 1,
                                name: 'Hart Hill'
                            },
                            {
                                id: 2,
                                name: 'Medina Tucker'
                            }
                        ],
                        greeting: 'Hello, Marcella Lang! You have 10 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531315ec9de069cbcb90',
                        index: 27,
                        guid: '0fe93e94-166a-492e-baa0-1e6eb7a4e9f4',
                        isActive: true,
                        balance: '$3,485.01',
                        picture: 'http://placehold.it/32x32',
                        age: 22,
                        eyeColor: 'blue',
                        name: 'Mindy Lynch',
                        gender: 'female',
                        company: 'FITCORE',
                        email: 'mindylynch@fitcore.com',
                        phone: '+1 (959) 405-2430',
                        address: '975 Evans Street, Martinsville, Federated States Of Micronesia, 9710',
                        registered: '2016-01-30T10:56:02 +08:00',
                        latitude: -44.430882,
                        longitude: 113.379799,
                        tags: [
                            'nostrud',
                            'ullamco',
                            'labore',
                            'non',
                            'adipisicing',
                            'cillum',
                            'eu'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Samantha Henson'
                            },
                            {
                                id: 1,
                                name: 'Mcbride Armstrong'
                            },
                            {
                                id: 2,
                                name: 'Corrine Richmond'
                            }
                        ],
                        greeting: 'Hello, Mindy Lynch! You have 3 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313ce71b238f6caf770',
                        index: 28,
                        guid: 'bf0fbc5f-bf02-4d0e-8738-a10f93077c41',
                        isActive: true,
                        balance: '$3,368.80',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'blue',
                        name: 'Carrillo Hanson',
                        gender: 'male',
                        company: 'SOPRANO',
                        email: 'carrillohanson@soprano.com',
                        phone: '+1 (899) 466-3535',
                        address: '258 Voorhies Avenue, Mulberry, Florida, 6365',
                        registered: '2017-11-09T11:00:04 +08:00',
                        latitude: 41.561444,
                        longitude: 117.300629,
                        tags: [
                            'incididunt',
                            'est',
                            'exercitation',
                            'excepteur',
                            'est',
                            'occaecat',
                            'consequat'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Earlene Whitley'
                            },
                            {
                                id: 1,
                                name: 'Wall Bonner'
                            },
                            {
                                id: 2,
                                name: 'Felecia Farmer'
                            }
                        ],
                        greeting: 'Hello, Carrillo Hanson! You have 9 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313cba4a08c480d2acb',
                        index: 29,
                        guid: '9334a907-30c5-4390-bb17-c8e548094b8e',
                        isActive: true,
                        balance: '$1,607.49',
                        picture: 'http://placehold.it/32x32',
                        age: 26,
                        eyeColor: 'green',
                        name: 'Shepard Osborn',
                        gender: 'male',
                        company: 'HONOTRON',
                        email: 'shepardosborn@honotron.com',
                        phone: '+1 (977) 589-3214',
                        address: '974 Dennett Place, Moscow, Illinois, 8732',
                        registered: '2018-02-27T11:28:25 +08:00',
                        latitude: -26.604978,
                        longitude: -19.364407,
                        tags: [
                            'aliquip',
                            'sit',
                            'non',
                            'commodo',
                            'cupidatat',
                            'deserunt',
                            'quis'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Leblanc Kirkland'
                            },
                            {
                                id: 1,
                                name: 'Melisa Carter'
                            },
                            {
                                id: 2,
                                name: 'Park Mcclain'
                            }
                        ],
                        greeting: 'Hello, Shepard Osborn! You have 9 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313a7cb3afe967c956e',
                        index: 30,
                        guid: '388fc276-2db9-40bc-9d71-c3ee9d5637b4',
                        isActive: false,
                        balance: '$2,185.20',
                        picture: 'http://placehold.it/32x32',
                        age: 40,
                        eyeColor: 'brown',
                        name: 'Hodge Pate',
                        gender: 'male',
                        company: 'NETERIA',
                        email: 'hodgepate@neteria.com',
                        phone: '+1 (983) 446-3598',
                        address: '195 Tiffany Place, Beaverdale, Minnesota, 9449',
                        registered: '2016-09-25T10:31:35 +07:00',
                        latitude: -39.219373,
                        longitude: -136.984959,
                        tags: [
                            'pariatur',
                            'sit',
                            'reprehenderit',
                            'duis',
                            'laboris',
                            'sint',
                            'nisi'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Jodi Cote'
                            },
                            {
                                id: 1,
                                name: 'Carolina Cervantes'
                            },
                            {
                                id: 2,
                                name: 'Deleon Lewis'
                            }
                        ],
                        greeting: 'Hello, Hodge Pate! You have 7 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313f75e0d0bf20726a0',
                        index: 31,
                        guid: '0ee9b8f3-815c-4feb-895e-b66e13ac077c',
                        isActive: true,
                        balance: '$3,107.32',
                        picture: 'http://placehold.it/32x32',
                        age: 29,
                        eyeColor: 'blue',
                        name: 'Iris Atkinson',
                        gender: 'female',
                        company: 'HOMETOWN',
                        email: 'irisatkinson@hometown.com',
                        phone: '+1 (900) 539-3249',
                        address: '820 Navy Walk, Bend, Utah, 2987',
                        registered: '2018-01-14T10:47:08 +08:00',
                        latitude: -71.21246,
                        longitude: 86.985458,
                        tags: [
                            'ad',
                            'eiusmod',
                            'esse',
                            'fugiat',
                            'quis',
                            'ut',
                            'consequat'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Powers Bright'
                            },
                            {
                                id: 1,
                                name: 'Jefferson Jimenez'
                            },
                            {
                                id: 2,
                                name: 'Simpson Talley'
                            }
                        ],
                        greeting: 'Hello, Iris Atkinson! You have 3 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313d22a9d32bd523f1c',
                        index: 32,
                        guid: '65013bb7-ecb8-43a4-b8aa-002d9ec18a05',
                        isActive: true,
                        balance: '$1,016.56',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'brown',
                        name: 'Tanya Mccall',
                        gender: 'female',
                        company: 'XANIDE',
                        email: 'tanyamccall@xanide.com',
                        phone: '+1 (958) 418-2610',
                        address: '139 Story Street, Woodruff, Delaware, 1015',
                        registered: '2016-02-05T06:08:56 +08:00',
                        latitude: -63.26384,
                        longitude: -56.384447,
                        tags: [
                            'ipsum',
                            'eiusmod',
                            'ut',
                            'ad',
                            'occaecat',
                            'fugiat',
                            'ad'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Wilkerson Morris'
                            },
                            {
                                id: 1,
                                name: 'Angelique Bryant'
                            },
                            {
                                id: 2,
                                name: 'Riddle Sanchez'
                            }
                        ],
                        greeting: 'Hello, Tanya Mccall! You have 7 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531331de2ca5e9bb4c2d',
                        index: 33,
                        guid: 'd3968eb1-ae27-4763-a39f-12ec8136162a',
                        isActive: false,
                        balance: '$1,446.67',
                        picture: 'http://placehold.it/32x32',
                        age: 25,
                        eyeColor: 'blue',
                        name: 'Nicholson Barnes',
                        gender: 'male',
                        company: 'PAWNAGRA',
                        email: 'nicholsonbarnes@pawnagra.com',
                        phone: '+1 (910) 414-2555',
                        address: '810 Manhattan Court, Taycheedah, South Carolina, 3802',
                        registered: '2018-12-06T11:01:24 +08:00',
                        latitude: -9.682089,
                        longitude: -27.823787,
                        tags: [
                            'reprehenderit',
                            'laborum',
                            'aliqua',
                            'nostrud',
                            'pariatur',
                            'qui',
                            'Lorem'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Carrie Stone'
                            },
                            {
                                id: 1,
                                name: 'Rasmussen Dennis'
                            },
                            {
                                id: 2,
                                name: 'Massey Goodman'
                            }
                        ],
                        greeting: 'Hello, Nicholson Barnes! You have 8 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca53137307bf9730b1656b',
                        index: 34,
                        guid: 'c589aa69-766d-4472-bcc7-8c7854240a63',
                        isActive: false,
                        balance: '$3,477.27',
                        picture: 'http://placehold.it/32x32',
                        age: 25,
                        eyeColor: 'brown',
                        name: 'Marta Jefferson',
                        gender: 'female',
                        company: 'MANGELICA',
                        email: 'martajefferson@mangelica.com',
                        phone: '+1 (839) 441-3711',
                        address: '379 Banner Avenue, Dahlen, New Mexico, 2533',
                        registered: '2019-10-04T04:42:48 +07:00',
                        latitude: 43.451152,
                        longitude: 106.112762,
                        tags: [
                            'nisi',
                            'nulla',
                            'veniam',
                            'nisi',
                            'nisi',
                            'irure',
                            'nostrud'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Dina Yang'
                            },
                            {
                                id: 1,
                                name: 'Amalia Quinn'
                            },
                            {
                                id: 2,
                                name: 'Winnie Mullins'
                            }
                        ],
                        greeting: 'Hello, Marta Jefferson! You have 4 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313289a679847e68082',
                        index: 35,
                        guid: '1bbac666-a6aa-4605-802e-309e4165c9fc',
                        isActive: false,
                        balance: '$1,769.86',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'green',
                        name: 'Angela Santos',
                        gender: 'female',
                        company: 'ZIPAK',
                        email: 'angelasantos@zipak.com',
                        phone: '+1 (832) 424-3916',
                        address: '886 Throop Avenue, Calpine, Wyoming, 4826',
                        registered: '2015-05-20T07:42:36 +07:00',
                        latitude: -84.810243,
                        longitude: 163.002039,
                        tags: [
                            'do',
                            'cupidatat',
                            'fugiat',
                            'do',
                            'cillum',
                            'aliquip',
                            'culpa'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Fannie Adkins'
                            },
                            {
                                id: 1,
                                name: 'Winifred Rodriquez'
                            },
                            {
                                id: 2,
                                name: 'Mai Roach'
                            }
                        ],
                        greeting: 'Hello, Angela Santos! You have 8 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531330ec45db9c43943d',
                        index: 36,
                        guid: 'fc7b2fa9-1d65-4dc7-9295-b0c60017a775',
                        isActive: false,
                        balance: '$1,066.12',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'blue',
                        name: 'Kelley Carroll',
                        gender: 'female',
                        company: 'ISONUS',
                        email: 'kelleycarroll@isonus.com',
                        phone: '+1 (870) 548-3272',
                        address: '176 Boerum Place, Broadlands, Kansas, 9318',
                        registered: '2017-07-06T06:06:43 +07:00',
                        latitude: -31.406284,
                        longitude: -64.33793,
                        tags: [
                            'aute',
                            'minim',
                            'ad',
                            'et',
                            'proident',
                            'esse',
                            'ea'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Janette Hays'
                            },
                            {
                                id: 1,
                                name: 'Fanny Copeland'
                            },
                            {
                                id: 2,
                                name: 'Fitzgerald Gregory'
                            }
                        ],
                        greeting: 'Hello, Kelley Carroll! You have 3 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53131c0fee681f4abcdb',
                        index: 37,
                        guid: '81c52d07-53fb-4acc-bcd2-9a305858916e',
                        isActive: true,
                        balance: '$3,496.84',
                        picture: 'http://placehold.it/32x32',
                        age: 28,
                        eyeColor: 'blue',
                        name: 'Weiss Melton',
                        gender: 'male',
                        company: 'ZENTIME',
                        email: 'weissmelton@zentime.com',
                        phone: '+1 (926) 449-3608',
                        address: '907 Driggs Avenue, Needmore, Louisiana, 5289',
                        registered: '2017-07-09T05:08:59 +07:00',
                        latitude: 16.886062,
                        longitude: 82.513063,
                        tags: [
                            'ut',
                            'tempor',
                            'sit',
                            'excepteur',
                            'amet',
                            'elit',
                            'irure'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Velez Leach'
                            },
                            {
                                id: 1,
                                name: 'Eliza Tate'
                            },
                            {
                                id: 2,
                                name: 'Barnett Fulton'
                            }
                        ],
                        greeting: 'Hello, Weiss Melton! You have 10 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313f845e53f3078dfda',
                        index: 38,
                        guid: '1ce0094c-dc34-4a2b-83d9-ef487d360e87',
                        isActive: false,
                        balance: '$3,257.08',
                        picture: 'http://placehold.it/32x32',
                        age: 27,
                        eyeColor: 'brown',
                        name: 'Randolph Velez',
                        gender: 'male',
                        company: 'COMBOGENE',
                        email: 'randolphvelez@combogene.com',
                        phone: '+1 (862) 496-3050',
                        address: '969 Harbor Lane, Limestone, Colorado, 2028',
                        registered: '2019-06-24T04:58:02 +07:00',
                        latitude: -65.964276,
                        longitude: 2.579353,
                        tags: [
                            'esse',
                            'nisi',
                            'sint',
                            'cillum',
                            'esse',
                            'ipsum',
                            'qui'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Jean Matthews'
                            },
                            {
                                id: 1,
                                name: 'Emma Ward'
                            },
                            {
                                id: 2,
                                name: 'Buck Chang'
                            }
                        ],
                        greeting: 'Hello, Randolph Velez! You have 9 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca531397c74e12bb850388',
                        index: 39,
                        guid: '46ac5e1a-5792-4b3c-8e52-4edd4c983a21',
                        isActive: true,
                        balance: '$1,431.95',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'brown',
                        name: 'Hinton Raymond',
                        gender: 'male',
                        company: 'STOCKPOST',
                        email: 'hintonraymond@stockpost.com',
                        phone: '+1 (936) 510-3453',
                        address: '933 Creamer Street, Grandview, Virgin Islands, 1564',
                        registered: '2015-11-30T06:24:18 +08:00',
                        latitude: -86.545135,
                        longitude: -81.799219,
                        tags: [
                            'do',
                            'pariatur',
                            'irure',
                            'mollit',
                            'Lorem',
                            'est',
                            'laborum'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Marcy Newman'
                            },
                            {
                                id: 1,
                                name: 'Garner Malone'
                            },
                            {
                                id: 2,
                                name: 'Pennington Ball'
                            }
                        ],
                        greeting: 'Hello, Hinton Raymond! You have 6 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53138e30caee11ca27d6',
                        index: 40,
                        guid: 'c400374b-1250-4e8e-a804-a4288690b48d',
                        isActive: false,
                        balance: '$2,595.96',
                        picture: 'http://placehold.it/32x32',
                        age: 33,
                        eyeColor: 'blue',
                        name: 'Key Merrill',
                        gender: 'male',
                        company: 'FLOTONIC',
                        email: 'keymerrill@flotonic.com',
                        phone: '+1 (973) 455-2254',
                        address: '259 Ashland Place, Sperryville, Oklahoma, 4729',
                        registered: '2014-11-29T09:15:44 +08:00',
                        latitude: 50.802554,
                        longitude: -91.457199,
                        tags: [
                            'adipisicing',
                            'culpa',
                            'Lorem',
                            'aliquip',
                            'officia',
                            'culpa',
                            'excepteur'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Gloria Franklin'
                            },
                            {
                                id: 1,
                                name: 'Russo Crosby'
                            },
                            {
                                id: 2,
                                name: 'Zimmerman Kemp'
                            }
                        ],
                        greeting: 'Hello, Key Merrill! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53133e68fa573dd3805a',
                        index: 41,
                        guid: '6df12bf5-9040-46e2-8b12-33210dd7dd2c',
                        isActive: true,
                        balance: '$3,604.24',
                        picture: 'http://placehold.it/32x32',
                        age: 29,
                        eyeColor: 'blue',
                        name: 'Katharine Downs',
                        gender: 'female',
                        company: 'EXOTERIC',
                        email: 'katharinedowns@exoteric.com',
                        phone: '+1 (849) 566-2500',
                        address: '599 Coleman Street, Comptche, Virginia, 8244',
                        registered: '2015-10-29T07:10:50 +07:00',
                        latitude: 44.72204,
                        longitude: 92.961854,
                        tags: [
                            'eiusmod',
                            'mollit',
                            'aute',
                            'commodo',
                            'officia',
                            'nulla',
                            'sint'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Gardner Mccray'
                            },
                            {
                                id: 1,
                                name: 'Crosby Diaz'
                            },
                            {
                                id: 2,
                                name: 'Janell Castillo'
                            }
                        ],
                        greeting: 'Hello, Katharine Downs! You have 2 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531397dec956638a8ba0',
                        index: 42,
                        guid: '992a9d2b-944b-4d3f-8043-46a14667e29a',
                        isActive: false,
                        balance: '$2,530.44',
                        picture: 'http://placehold.it/32x32',
                        age: 38,
                        eyeColor: 'blue',
                        name: 'Harper Shields',
                        gender: 'male',
                        company: 'EGYPTO',
                        email: 'harpershields@egypto.com',
                        phone: '+1 (850) 499-3399',
                        address: '783 Mermaid Avenue, Inkerman, Massachusetts, 7976',
                        registered: '2018-02-17T01:21:17 +08:00',
                        latitude: -79.099301,
                        longitude: -19.862433,
                        tags: [
                            'enim',
                            'aliquip',
                            'exercitation',
                            'ex',
                            'ipsum',
                            'adipisicing',
                            'id'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Karla Conner'
                            },
                            {
                                id: 1,
                                name: 'Nellie Howard'
                            },
                            {
                                id: 2,
                                name: 'Clayton Howell'
                            }
                        ],
                        greeting: 'Hello, Harper Shields! You have 9 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313348dfa5b12018a3c',
                        index: 43,
                        guid: '76578b18-7bc2-4430-9982-562036c5062c',
                        isActive: true,
                        balance: '$2,826.08',
                        picture: 'http://placehold.it/32x32',
                        age: 40,
                        eyeColor: 'brown',
                        name: 'Blanca Foley',
                        gender: 'female',
                        company: 'PULZE',
                        email: 'blancafoley@pulze.com',
                        phone: '+1 (839) 403-2025',
                        address: '221 Dahl Court, Dowling, Iowa, 4068',
                        registered: '2015-11-18T08:03:03 +08:00',
                        latitude: 53.303797,
                        longitude: -155.612948,
                        tags: [
                            'ad',
                            'magna',
                            'commodo',
                            'sit',
                            'ea',
                            'adipisicing',
                            'officia'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Terry Davis'
                            },
                            {
                                id: 1,
                                name: 'Charlotte Lee'
                            },
                            {
                                id: 2,
                                name: 'Conley Lloyd'
                            }
                        ],
                        greeting: 'Hello, Blanca Foley! You have 6 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca53132a7f910133213d6f',
                        index: 44,
                        guid: '2e89c5a4-dd14-4c0b-9f6b-1ff958525cf9',
                        isActive: false,
                        balance: '$2,249.42',
                        picture: 'http://placehold.it/32x32',
                        age: 35,
                        eyeColor: 'blue',
                        name: 'Horton Simpson',
                        gender: 'male',
                        company: 'SHADEASE',
                        email: 'hortonsimpson@shadease.com',
                        phone: '+1 (848) 451-3386',
                        address: '718 Harkness Avenue, Waverly, Tennessee, 5209',
                        registered: '2015-05-19T02:38:09 +07:00',
                        latitude: 27.730954,
                        longitude: -159.849034,
                        tags: [
                            'ipsum',
                            'nulla',
                            'dolore',
                            'et',
                            'dolor',
                            'velit',
                            'labore'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Stark Dillard'
                            },
                            {
                                id: 1,
                                name: 'Phelps Maynard'
                            },
                            {
                                id: 2,
                                name: 'Tania Mcfarland'
                            }
                        ],
                        greeting: 'Hello, Horton Simpson! You have 1 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53132305f0100e60c94d',
                        index: 45,
                        guid: '4f13c071-267b-402d-b7a8-88e6b38ba60c',
                        isActive: true,
                        balance: '$3,191.93',
                        picture: 'http://placehold.it/32x32',
                        age: 26,
                        eyeColor: 'blue',
                        name: 'Janelle Le',
                        gender: 'female',
                        company: 'ZAYA',
                        email: 'janellele@zaya.com',
                        phone: '+1 (984) 436-2874',
                        address: '860 Chester Street, Gerber, West Virginia, 6488',
                        registered: '2014-09-13T06:04:00 +07:00',
                        latitude: 42.795954,
                        longitude: 126.677233,
                        tags: [
                            'anim',
                            'qui',
                            'commodo',
                            'voluptate',
                            'ea',
                            'tempor',
                            'Lorem'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Rosella Burnett'
                            },
                            {
                                id: 1,
                                name: 'James Vang'
                            },
                            {
                                id: 2,
                                name: 'Tasha Boyd'
                            }
                        ],
                        greeting: 'Hello, Janelle Le! You have 9 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313c42f3f6d8e9419e1',
                        index: 46,
                        guid: '434d8f6c-dba0-42cd-9ed3-fd49d80c9877',
                        isActive: false,
                        balance: '$3,854.87',
                        picture: 'http://placehold.it/32x32',
                        age: 31,
                        eyeColor: 'green',
                        name: 'Collier Fry',
                        gender: 'male',
                        company: 'GOGOL',
                        email: 'collierfry@gogol.com',
                        phone: '+1 (850) 463-2116',
                        address: '822 Canda Avenue, Otranto, Indiana, 4267',
                        registered: '2017-04-19T06:26:15 +07:00',
                        latitude: 77.60517,
                        longitude: -48.33623,
                        tags: [
                            'in',
                            'quis',
                            'consectetur',
                            'sit',
                            'consequat',
                            'elit',
                            'et'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Colette Goff'
                            },
                            {
                                id: 1,
                                name: 'Carpenter Berger'
                            },
                            {
                                id: 2,
                                name: 'Brandie Page'
                            }
                        ],
                        greeting: 'Hello, Collier Fry! You have 9 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313f010694f69d2f221',
                        index: 47,
                        guid: '94237268-3a68-4377-9a93-ddd1fe3fba27',
                        isActive: true,
                        balance: '$2,769.88',
                        picture: 'http://placehold.it/32x32',
                        age: 25,
                        eyeColor: 'blue',
                        name: 'Lina Nichols',
                        gender: 'female',
                        company: 'EQUITAX',
                        email: 'linanichols@equitax.com',
                        phone: '+1 (830) 436-3354',
                        address: '471 Engert Avenue, Taft, American Samoa, 4658',
                        registered: '2017-07-11T04:08:03 +07:00',
                        latitude: -40.141304,
                        longitude: 38.433878,
                        tags: [
                            'cillum',
                            'sit',
                            'Lorem',
                            'adipisicing',
                            'aliquip',
                            'tempor',
                            'laboris'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Wade Mcmillan'
                            },
                            {
                                id: 1,
                                name: 'Merrill Wilkinson'
                            },
                            {
                                id: 2,
                                name: 'Nora Barr'
                            }
                        ],
                        greeting: 'Hello, Lina Nichols! You have 5 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca53138ce4e4a84281bab8',
                        index: 48,
                        guid: 'c07637b7-1290-4b05-b205-470729d39c27',
                        isActive: true,
                        balance: '$2,580.03',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'green',
                        name: 'Morse Vega',
                        gender: 'male',
                        company: 'QUILM',
                        email: 'morsevega@quilm.com',
                        phone: '+1 (989) 522-2332',
                        address: '922 Opal Court, Lydia, Texas, 1395',
                        registered: '2017-12-07T12:38:13 +08:00',
                        latitude: 87.960609,
                        longitude: 141.78692,
                        tags: [
                            'duis',
                            'ad',
                            'sint',
                            'qui',
                            'voluptate',
                            'esse',
                            'anim'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Christine Barber'
                            },
                            {
                                id: 1,
                                name: 'Kris Collins'
                            },
                            {
                                id: 2,
                                name: 'Dalton Johns'
                            }
                        ],
                        greeting: 'Hello, Morse Vega! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531363e9cc8981170d6c',
                        index: 49,
                        guid: 'e54cd3da-a93c-4c75-ba7c-c9050b324759',
                        isActive: true,
                        balance: '$1,953.16',
                        picture: 'http://placehold.it/32x32',
                        age: 39,
                        eyeColor: 'blue',
                        name: 'Ayers Thompson',
                        gender: 'male',
                        company: 'GRAINSPOT',
                        email: 'ayersthompson@grainspot.com',
                        phone: '+1 (917) 557-2873',
                        address: '191 Ivan Court, Chaparrito, Hawaii, 4287',
                        registered: '2017-06-12T11:52:53 +07:00',
                        latitude: -77.943044,
                        longitude: -23.934664,
                        tags: [
                            'consectetur',
                            'commodo',
                            'minim',
                            'enim',
                            'exercitation',
                            'occaecat',
                            'aute'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Farrell Britt'
                            },
                            {
                                id: 1,
                                name: 'Vera Shepherd'
                            },
                            {
                                id: 2,
                                name: 'Leanne Rogers'
                            }
                        ],
                        greeting: 'Hello, Ayers Thompson! You have 10 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53131ddd18200afd9c64',
                        index: 50,
                        guid: 'ded7d044-f55d-467c-8bd2-9d139b7a9af1',
                        isActive: true,
                        balance: '$3,550.00',
                        picture: 'http://placehold.it/32x32',
                        age: 36,
                        eyeColor: 'blue',
                        name: 'Finch Macias',
                        gender: 'male',
                        company: 'ZOLAREX',
                        email: 'finchmacias@zolarex.com',
                        phone: '+1 (840) 557-3434',
                        address: '687 Ferry Place, Smock, Alaska, 1558',
                        registered: '2014-02-05T03:20:39 +08:00',
                        latitude: 88.260853,
                        longitude: 66.49631,
                        tags: [
                            'nulla',
                            'non',
                            'consequat',
                            'ad',
                            'ullamco',
                            'esse',
                            'pariatur'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Kellie Wells'
                            },
                            {
                                id: 1,
                                name: 'Ewing Moody'
                            },
                            {
                                id: 2,
                                name: 'Patricia Blair'
                            }
                        ],
                        greeting: 'Hello, Finch Macias! You have 5 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531305f8f4b0815f1bb2',
                        index: 51,
                        guid: '1c355811-08bd-4998-a2b1-72a12d3d1af5',
                        isActive: false,
                        balance: '$2,135.02',
                        picture: 'http://placehold.it/32x32',
                        age: 38,
                        eyeColor: 'brown',
                        name: 'Cherry Mckenzie',
                        gender: 'female',
                        company: 'KIOSK',
                        email: 'cherrymckenzie@kiosk.com',
                        phone: '+1 (821) 542-3599',
                        address: '366 McKibbin Street, Mahtowa, Mississippi, 7459',
                        registered: '2017-04-13T12:58:33 +07:00',
                        latitude: 87.965637,
                        longitude: -14.585594,
                        tags: [
                            'aliqua',
                            'excepteur',
                            'aliquip',
                            'occaecat',
                            'tempor',
                            'elit',
                            'veniam'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Anthony Mcguire'
                            },
                            {
                                id: 1,
                                name: 'Minerva Hogan'
                            },
                            {
                                id: 2,
                                name: 'Rosanne Ingram'
                            }
                        ],
                        greeting: 'Hello, Cherry Mckenzie! You have 4 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313e183954312732bbb',
                        index: 52,
                        guid: 'b6fe872f-1ce5-4b41-8812-2cadca8ab1bf',
                        isActive: true,
                        balance: '$1,847.80',
                        picture: 'http://placehold.it/32x32',
                        age: 26,
                        eyeColor: 'green',
                        name: 'Lindsay Guthrie',
                        gender: 'female',
                        company: 'ZOUNDS',
                        email: 'lindsayguthrie@zounds.com',
                        phone: '+1 (838) 408-3135',
                        address: '860 Willow Street, Lacomb, Wisconsin, 3206',
                        registered: '2015-07-17T08:50:00 +07:00',
                        latitude: -71.105319,
                        longitude: 81.165313,
                        tags: [
                            'pariatur',
                            'laboris',
                            'consectetur',
                            'elit',
                            'dolore',
                            'laboris',
                            'sit'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Beth Patrick'
                            },
                            {
                                id: 1,
                                name: 'Webb Boone'
                            },
                            {
                                id: 2,
                                name: 'Vicky Stevens'
                            }
                        ],
                        greeting: 'Hello, Lindsay Guthrie! You have 6 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313e0b75c413d50221a',
                        index: 53,
                        guid: '91ac08bd-3695-4a95-9c75-82d4754b49ed',
                        isActive: false,
                        balance: '$2,120.89',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'brown',
                        name: 'Mejia Griffith',
                        gender: 'male',
                        company: 'MYOPIUM',
                        email: 'mejiagriffith@myopium.com',
                        phone: '+1 (946) 561-3807',
                        address: '122 Bethel Loop, Steinhatchee, Maryland, 421',
                        registered: '2018-05-09T11:29:37 +07:00',
                        latitude: 29.464605,
                        longitude: 45.760619,
                        tags: [
                            'duis',
                            'ut',
                            'labore',
                            'elit',
                            'nulla',
                            'adipisicing',
                            'officia'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Rosalind Mcknight'
                            },
                            {
                                id: 1,
                                name: 'Shepherd Koch'
                            },
                            {
                                id: 2,
                                name: 'Mallory Rowe'
                            }
                        ],
                        greeting: 'Hello, Mejia Griffith! You have 9 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca531313a9b2793d6597bb',
                        index: 54,
                        guid: '02653342-f887-4c37-83c0-0b6680a2062e',
                        isActive: false,
                        balance: '$2,902.61',
                        picture: 'http://placehold.it/32x32',
                        age: 32,
                        eyeColor: 'brown',
                        name: 'Pitts Bruce',
                        gender: 'male',
                        company: 'PLASMOX',
                        email: 'pittsbruce@plasmox.com',
                        phone: '+1 (830) 419-2156',
                        address: '123 Taaffe Place, Bannock, New Jersey, 9433',
                        registered: '2016-08-20T09:46:33 +07:00',
                        latitude: -3.449515,
                        longitude: 178.178285,
                        tags: [
                            'eu',
                            'sint',
                            'sit',
                            'dolor',
                            'laboris',
                            'labore',
                            'mollit'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Delaney Ferrell'
                            },
                            {
                                id: 1,
                                name: 'Patterson Vaughn'
                            },
                            {
                                id: 2,
                                name: 'Booker Nicholson'
                            }
                        ],
                        greeting: 'Hello, Pitts Bruce! You have 1 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313349abcb2ad6c3d54',
                        index: 55,
                        guid: '97e73a2d-4668-4c3f-a571-3cd215eaeb8b',
                        isActive: false,
                        balance: '$1,555.23',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'green',
                        name: 'Moon Vinson',
                        gender: 'male',
                        company: 'VICON',
                        email: 'moonvinson@vicon.com',
                        phone: '+1 (833) 555-3776',
                        address: '242 Ross Street, Kiskimere, South Dakota, 4072',
                        registered: '2015-10-24T01:53:59 +07:00',
                        latitude: -40.422963,
                        longitude: 38.867593,
                        tags: [
                            'reprehenderit',
                            'cillum',
                            'minim',
                            'velit',
                            'quis',
                            'cupidatat',
                            'id'
                        ],
                        friends: [{
                                id: 0,
                                name: 'York Valenzuela'
                            },
                            {
                                id: 1,
                                name: 'Christian Tyler'
                            },
                            {
                                id: 2,
                                name: 'Pate Cook'
                            }
                        ],
                        greeting: 'Hello, Moon Vinson! You have 1 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313d90caf57ccd82961',
                        index: 56,
                        guid: 'a3b980c0-1e79-43f4-8b6b-c9de00752a27',
                        isActive: false,
                        balance: '$2,879.84',
                        picture: 'http://placehold.it/32x32',
                        age: 23,
                        eyeColor: 'brown',
                        name: 'Roseann Santiago',
                        gender: 'female',
                        company: 'OPTYK',
                        email: 'roseannsantiago@optyk.com',
                        phone: '+1 (881) 450-3553',
                        address: '703 Stoddard Place, Tonopah, Rhode Island, 7008',
                        registered: '2019-05-27T03:39:43 +07:00',
                        latitude: 2.932059,
                        longitude: 80.203493,
                        tags: [
                            'duis',
                            'excepteur',
                            'laborum',
                            'aliqua',
                            'laboris',
                            'nostrud',
                            'id'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Le Nunez'
                            },
                            {
                                id: 1,
                                name: 'Paul Fletcher'
                            },
                            {
                                id: 2,
                                name: 'Smith Figueroa'
                            }
                        ],
                        greeting: 'Hello, Roseann Santiago! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313f5b1fac3feec53f2',
                        index: 57,
                        guid: '78a15e80-e4d6-4d1b-a0a5-3518e783a4eb',
                        isActive: false,
                        balance: '$3,944.79',
                        picture: 'http://placehold.it/32x32',
                        age: 20,
                        eyeColor: 'green',
                        name: 'House Parker',
                        gender: 'male',
                        company: 'BRAINCLIP',
                        email: 'houseparker@brainclip.com',
                        phone: '+1 (812) 470-2946',
                        address: '932 Wyckoff Street, Newcastle, Nebraska, 2168',
                        registered: '2017-01-30T10:27:31 +08:00',
                        latitude: 57.617956,
                        longitude: 33.007339,
                        tags: [
                            'eiusmod',
                            'id',
                            'qui',
                            'culpa',
                            'proident',
                            'ipsum',
                            'adipisicing'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Annie Fernandez'
                            },
                            {
                                id: 1,
                                name: 'Lucas Jackson'
                            },
                            {
                                id: 2,
                                name: 'Knight Graham'
                            }
                        ],
                        greeting: 'Hello, House Parker! You have 10 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531324f7a26cadfacefa',
                        index: 58,
                        guid: 'a0a204c0-4a38-4780-9da0-e20c74f1b24b',
                        isActive: true,
                        balance: '$2,332.99',
                        picture: 'http://placehold.it/32x32',
                        age: 38,
                        eyeColor: 'blue',
                        name: 'Lacey Henderson',
                        gender: 'female',
                        company: 'LUXURIA',
                        email: 'laceyhenderson@luxuria.com',
                        phone: '+1 (980) 567-2248',
                        address: '292 Seba Avenue, Austinburg, Arkansas, 178',
                        registered: '2019-10-01T02:10:35 +07:00',
                        latitude: -54.265107,
                        longitude: -54.623142,
                        tags: [
                            'eu',
                            'cupidatat',
                            'Lorem',
                            'sunt',
                            'qui',
                            'labore',
                            'Lorem'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Dillon Curry'
                            },
                            {
                                id: 1,
                                name: 'Antoinette Ray'
                            },
                            {
                                id: 2,
                                name: 'Audrey Avery'
                            }
                        ],
                        greeting: 'Hello, Lacey Henderson! You have 8 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531319a6d30435621718',
                        index: 59,
                        guid: '48226902-3df6-4bf6-ba66-78ce8ed47f7f',
                        isActive: false,
                        balance: '$3,473.49',
                        picture: 'http://placehold.it/32x32',
                        age: 32,
                        eyeColor: 'blue',
                        name: 'Goodwin Nguyen',
                        gender: 'male',
                        company: 'TALKOLA',
                        email: 'goodwinnguyen@talkola.com',
                        phone: '+1 (966) 496-2904',
                        address: '322 Williams Place, Greenfields, Montana, 7735',
                        registered: '2016-06-08T09:47:08 +07:00',
                        latitude: -44.900203,
                        longitude: -163.890906,
                        tags: [
                            'enim',
                            'aliquip',
                            'fugiat',
                            'qui',
                            'elit',
                            'excepteur',
                            'aliqua'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Marquez Fuentes'
                            },
                            {
                                id: 1,
                                name: 'Mcpherson Mcneil'
                            },
                            {
                                id: 2,
                                name: 'Mcclain Maldonado'
                            }
                        ],
                        greeting: 'Hello, Goodwin Nguyen! You have 10 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313d1a734c1a86fa965',
                        index: 60,
                        guid: 'd6fdd9a2-ae15-4a4e-83c5-a035dfe98660',
                        isActive: false,
                        balance: '$1,949.32',
                        picture: 'http://placehold.it/32x32',
                        age: 35,
                        eyeColor: 'brown',
                        name: 'Silva Meyer',
                        gender: 'male',
                        company: 'UNIA',
                        email: 'silvameyer@unia.com',
                        phone: '+1 (942) 553-3699',
                        address: '911 Kane Street, Yardville, Alabama, 8509',
                        registered: '2019-06-09T12:34:39 +07:00',
                        latitude: -28.776619,
                        longitude: 31.091573,
                        tags: [
                            'ipsum',
                            'aliquip',
                            'esse',
                            'proident',
                            'labore',
                            'aliqua',
                            'laboris'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Houston Watts'
                            },
                            {
                                id: 1,
                                name: 'Maggie Dixon'
                            },
                            {
                                id: 2,
                                name: 'Lila Ortega'
                            }
                        ],
                        greeting: 'Hello, Silva Meyer! You have 8 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53134c01faa26a8c857b',
                        index: 61,
                        guid: 'dab95b22-209d-4094-81d2-5c7165847157',
                        isActive: false,
                        balance: '$3,812.28',
                        picture: 'http://placehold.it/32x32',
                        age: 36,
                        eyeColor: 'blue',
                        name: 'Hickman Townsend',
                        gender: 'male',
                        company: 'MAGNEATO',
                        email: 'hickmantownsend@magneato.com',
                        phone: '+1 (883) 419-3658',
                        address: '978 Powell Street, Rosedale, Marshall Islands, 9483',
                        registered: '2017-04-04T10:13:48 +07:00',
                        latitude: 39.012618,
                        longitude: 26.914172,
                        tags: [
                            'excepteur',
                            'officia',
                            'laboris',
                            'elit',
                            'laborum',
                            'aliqua',
                            'tempor'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Corinne Brooks'
                            },
                            {
                                id: 1,
                                name: 'Mendoza Holden'
                            },
                            {
                                id: 2,
                                name: 'Muriel Ayers'
                            }
                        ],
                        greeting: 'Hello, Hickman Townsend! You have 5 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313f33f5c32265228bb',
                        index: 62,
                        guid: 'db3f644e-a8f3-43ee-88b4-967ec771a6e5',
                        isActive: true,
                        balance: '$2,360.23',
                        picture: 'http://placehold.it/32x32',
                        age: 33,
                        eyeColor: 'blue',
                        name: 'Jennie Clayton',
                        gender: 'female',
                        company: 'COLAIRE',
                        email: 'jennieclayton@colaire.com',
                        phone: '+1 (947) 516-2721',
                        address: '147 Narrows Avenue, Welda, Palau, 5932',
                        registered: '2015-01-28T03:52:42 +08:00',
                        latitude: 0.254385,
                        longitude: 106.046837,
                        tags: [
                            'exercitation',
                            'duis',
                            'occaecat',
                            'ex',
                            'adipisicing',
                            'et',
                            'proident'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Hutchinson Vazquez'
                            },
                            {
                                id: 1,
                                name: 'Valenzuela Higgins'
                            },
                            {
                                id: 2,
                                name: 'Henson Justice'
                            }
                        ],
                        greeting: 'Hello, Jennie Clayton! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531330eee43cd7ecda72',
                        index: 63,
                        guid: 'f1eaaed3-3ce9-4377-98a7-c0039847ba10',
                        isActive: true,
                        balance: '$1,816.76',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'blue',
                        name: 'Leah Lucas',
                        gender: 'female',
                        company: 'SPEEDBOLT',
                        email: 'leahlucas@speedbolt.com',
                        phone: '+1 (801) 547-2685',
                        address: '728 Havemeyer Street, Escondida, Puerto Rico, 8140',
                        registered: '2018-08-03T11:12:21 +07:00',
                        latitude: 28.094586,
                        longitude: -43.042286,
                        tags: [
                            'aliqua',
                            'amet',
                            'veniam',
                            'quis',
                            'ad',
                            'laborum',
                            'occaecat'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Ruth Mcdaniel'
                            },
                            {
                                id: 1,
                                name: 'Pittman Richardson'
                            },
                            {
                                id: 2,
                                name: 'Lowe Hurley'
                            }
                        ],
                        greeting: 'Hello, Leah Lucas! You have 2 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313b2d66f30f69fce73',
                        index: 64,
                        guid: 'f4f37c14-288b-4621-9752-3fccd8b4497f',
                        isActive: false,
                        balance: '$3,127.81',
                        picture: 'http://placehold.it/32x32',
                        age: 20,
                        eyeColor: 'brown',
                        name: 'Farley Becker',
                        gender: 'male',
                        company: 'GENESYNK',
                        email: 'farleybecker@genesynk.com',
                        phone: '+1 (891) 459-2692',
                        address: '216 Delevan Street, Bayview, Vermont, 1498',
                        registered: '2017-06-28T01:30:14 +07:00',
                        latitude: 21.000197,
                        longitude: 167.339929,
                        tags: [
                            'duis',
                            'et',
                            'quis',
                            'adipisicing',
                            'anim',
                            'nulla',
                            'eiusmod'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Alison Greene'
                            },
                            {
                                id: 1,
                                name: 'Beard Noble'
                            },
                            {
                                id: 2,
                                name: 'Georgia Alston'
                            }
                        ],
                        greeting: 'Hello, Farley Becker! You have 6 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313a4bb691c7741a69d',
                        index: 65,
                        guid: 'ad12043e-e6f2-4eb5-9427-9195f647050c',
                        isActive: false,
                        balance: '$3,781.43',
                        picture: 'http://placehold.it/32x32',
                        age: 25,
                        eyeColor: 'brown',
                        name: 'Gross Mckay',
                        gender: 'male',
                        company: 'AQUACINE',
                        email: 'grossmckay@aquacine.com',
                        phone: '+1 (992) 507-3959',
                        address: '769 Evergreen Avenue, Bedias, Washington, 7457',
                        registered: '2014-03-03T12:58:42 +08:00',
                        latitude: 57.020361,
                        longitude: -4.664612,
                        tags: [
                            'velit',
                            'laborum',
                            'aute',
                            'elit',
                            'anim',
                            'officia',
                            'excepteur'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Buckley Jordan'
                            },
                            {
                                id: 1,
                                name: 'Dunn Burch'
                            },
                            {
                                id: 2,
                                name: 'Janine Sharpe'
                            }
                        ],
                        greeting: 'Hello, Gross Mckay! You have 2 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313da0bc1ad703a6f4d',
                        index: 66,
                        guid: '485e2ce5-ac02-4b01-8a50-ac7aed2f1dbd',
                        isActive: false,
                        balance: '$1,113.06',
                        picture: 'http://placehold.it/32x32',
                        age: 39,
                        eyeColor: 'blue',
                        name: 'Brady Caldwell',
                        gender: 'male',
                        company: 'NAVIR',
                        email: 'bradycaldwell@navir.com',
                        phone: '+1 (993) 580-3294',
                        address: '976 Llama Court, Zeba, Idaho, 2123',
                        registered: '2014-10-05T03:05:56 +07:00',
                        latitude: 74.794686,
                        longitude: 52.309875,
                        tags: [
                            'minim',
                            'elit',
                            'non',
                            'sint',
                            'occaecat',
                            'ipsum',
                            'ea'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Estrada Irwin'
                            },
                            {
                                id: 1,
                                name: 'Tabatha Kirk'
                            },
                            {
                                id: 2,
                                name: 'Kinney Booth'
                            }
                        ],
                        greeting: 'Hello, Brady Caldwell! You have 7 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313d0398e775eda75d8',
                        index: 67,
                        guid: 'dc238894-2be8-4d90-ac5e-9beed259077b',
                        isActive: false,
                        balance: '$1,577.40',
                        picture: 'http://placehold.it/32x32',
                        age: 28,
                        eyeColor: 'green',
                        name: 'Kristy Mills',
                        gender: 'female',
                        company: 'ZAGGLE',
                        email: 'kristymills@zaggle.com',
                        phone: '+1 (956) 468-3015',
                        address: '828 Pleasant Place, Westmoreland, North Carolina, 8427',
                        registered: '2017-03-02T10:36:09 +08:00',
                        latitude: -77.195901,
                        longitude: 164.74194,
                        tags: [
                            'adipisicing',
                            'minim',
                            'nisi',
                            'aliquip',
                            'ut',
                            'id',
                            'adipisicing'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Mandy Miles'
                            },
                            {
                                id: 1,
                                name: 'Curry Harvey'
                            },
                            {
                                id: 2,
                                name: 'Bowman Sosa'
                            }
                        ],
                        greeting: 'Hello, Kristy Mills! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53137c285a33949604fc',
                        index: 68,
                        guid: '450b12a2-bfcc-429e-8641-4c634b12d8d6',
                        isActive: false,
                        balance: '$3,429.87',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'green',
                        name: 'Adriana Gentry',
                        gender: 'female',
                        company: 'BOINK',
                        email: 'adrianagentry@boink.com',
                        phone: '+1 (984) 502-2426',
                        address: '107 River Street, Jessie, Oregon, 3003',
                        registered: '2018-04-23T02:46:43 +07:00',
                        latitude: 48.741707,
                        longitude: 55.59811,
                        tags: [
                            'magna',
                            'dolor',
                            'duis',
                            'culpa',
                            'ipsum',
                            'voluptate',
                            'sit'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Martinez Davenport'
                            },
                            {
                                id: 1,
                                name: 'Tina Wolfe'
                            },
                            {
                                id: 2,
                                name: 'Benton Wagner'
                            }
                        ],
                        greeting: 'Hello, Adriana Gentry! You have 10 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca531365acf2dee60b3da5',
                        index: 69,
                        guid: 'f3be922e-1556-4b7b-bcb5-17689c138cea',
                        isActive: false,
                        balance: '$2,706.62',
                        picture: 'http://placehold.it/32x32',
                        age: 30,
                        eyeColor: 'blue',
                        name: 'Slater Mccormick',
                        gender: 'male',
                        company: 'PORTICA',
                        email: 'slatermccormick@portica.com',
                        phone: '+1 (958) 428-3287',
                        address: '383 Trucklemans Lane, Richford, Ohio, 6193',
                        registered: '2019-09-06T09:34:31 +07:00',
                        latitude: 44.782738,
                        longitude: 3.764352,
                        tags: [
                            'cillum',
                            'mollit',
                            'et',
                            'et',
                            'ipsum',
                            'incididunt',
                            'aute'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Salas Flynn'
                            },
                            {
                                id: 1,
                                name: 'Summers Peters'
                            },
                            {
                                id: 2,
                                name: 'Vega Hodges'
                            }
                        ],
                        greeting: 'Hello, Slater Mccormick! You have 8 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca5313f5a9efd7958625ac',
                        index: 70,
                        guid: '859e24a4-c4be-4036-b206-7d7551f3961e',
                        isActive: false,
                        balance: '$3,556.96',
                        picture: 'http://placehold.it/32x32',
                        age: 21,
                        eyeColor: 'blue',
                        name: 'Rosalinda Long',
                        gender: 'female',
                        company: 'PROGENEX',
                        email: 'rosalindalong@progenex.com',
                        phone: '+1 (924) 554-2053',
                        address: '640 Prescott Place, Farmers, Maine, 5629',
                        registered: '2015-07-11T06:39:49 +07:00',
                        latitude: -40.162937,
                        longitude: 137.215286,
                        tags: [
                            'excepteur',
                            'voluptate',
                            'velit',
                            'amet',
                            'dolore',
                            'consequat',
                            'tempor'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Casey Davidson'
                            },
                            {
                                id: 1,
                                name: 'Carr Abbott'
                            },
                            {
                                id: 2,
                                name: 'Elnora Pacheco'
                            }
                        ],
                        greeting: 'Hello, Rosalinda Long! You have 6 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca531308d0e599b04749c5',
                        index: 71,
                        guid: '545c729b-957e-4bae-ba16-6f2082a071fb',
                        isActive: true,
                        balance: '$2,925.44',
                        picture: 'http://placehold.it/32x32',
                        age: 20,
                        eyeColor: 'brown',
                        name: 'Nelson Bentley',
                        gender: 'male',
                        company: 'SLAMBDA',
                        email: 'nelsonbentley@slambda.com',
                        phone: '+1 (824) 579-2799',
                        address: '775 Fanchon Place, Elbert, District Of Columbia, 2286',
                        registered: '2019-04-21T10:35:18 +07:00',
                        latitude: 6.663515,
                        longitude: 84.345682,
                        tags: [
                            'nisi',
                            'esse',
                            'aute',
                            'amet',
                            'aliquip',
                            'labore',
                            'veniam'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Myra Mccullough'
                            },
                            {
                                id: 1,
                                name: 'Owen Dodson'
                            },
                            {
                                id: 2,
                                name: 'Pearlie Barker'
                            }
                        ],
                        greeting: 'Hello, Nelson Bentley! You have 10 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313e554cbffef09bd17',
                        index: 72,
                        guid: '59f1c7cc-ed46-4233-9566-bc8da280455c',
                        isActive: true,
                        balance: '$3,363.97',
                        picture: 'http://placehold.it/32x32',
                        age: 20,
                        eyeColor: 'brown',
                        name: 'Genevieve Blackburn',
                        gender: 'female',
                        company: 'GENMEX',
                        email: 'genevieveblackburn@genmex.com',
                        phone: '+1 (866) 438-2209',
                        address: '805 Grand Avenue, Umapine, Guam, 449',
                        registered: '2018-03-14T02:50:43 +07:00',
                        latitude: 79.732811,
                        longitude: -72.967157,
                        tags: [
                            'aute',
                            'laboris',
                            'duis',
                            'ipsum',
                            'dolore',
                            'laboris',
                            'ullamco'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Valdez Webb'
                            },
                            {
                                id: 1,
                                name: 'Young Gamble'
                            },
                            {
                                id: 2,
                                name: 'Flowers Roy'
                            }
                        ],
                        greeting: 'Hello, Genevieve Blackburn! You have 8 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313f75fa41f86e1f9b3',
                        index: 73,
                        guid: '52ce1da0-df05-4080-b895-78dd30a30e18',
                        isActive: true,
                        balance: '$2,670.55',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'blue',
                        name: 'Diann Levy',
                        gender: 'female',
                        company: 'ESSENSIA',
                        email: 'diannlevy@essensia.com',
                        phone: '+1 (991) 529-2063',
                        address: '362 Bills Place, Craig, Georgia, 4134',
                        registered: '2018-09-09T08:13:53 +07:00',
                        latitude: -23.88563,
                        longitude: 163.254751,
                        tags: [
                            'dolor',
                            'veniam',
                            'dolor',
                            'enim',
                            'officia',
                            'ut',
                            'Lorem'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Savage Huff'
                            },
                            {
                                id: 1,
                                name: 'Casandra Wiggins'
                            },
                            {
                                id: 2,
                                name: 'Nguyen Spencer'
                            }
                        ],
                        greeting: 'Hello, Diann Levy! You have 9 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313d3a7af593a9aa9ad',
                        index: 74,
                        guid: 'cf3f0008-441d-401a-a2bd-afd3838b5267',
                        isActive: true,
                        balance: '$1,626.04',
                        picture: 'http://placehold.it/32x32',
                        age: 21,
                        eyeColor: 'green',
                        name: 'Betty Franco',
                        gender: 'female',
                        company: 'ENTOGROK',
                        email: 'bettyfranco@entogrok.com',
                        phone: '+1 (831) 534-2229',
                        address: '145 Lloyd Court, Bynum, Northern Mariana Islands, 6911',
                        registered: '2015-04-07T09:03:45 +07:00',
                        latitude: 68.506996,
                        longitude: 70.646012,
                        tags: [
                            'duis',
                            'dolore',
                            'ullamco',
                            'non',
                            'pariatur',
                            'elit',
                            'eiusmod'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Schroeder Guerrero'
                            },
                            {
                                id: 1,
                                name: 'Deann Middleton'
                            },
                            {
                                id: 2,
                                name: 'Zelma Larsen'
                            }
                        ],
                        greeting: 'Hello, Betty Franco! You have 4 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313e5134895c1a91d09',
                        index: 75,
                        guid: 'ed4d83ea-f492-41f5-a1d4-5b9c99eb719a',
                        isActive: false,
                        balance: '$3,813.85',
                        picture: 'http://placehold.it/32x32',
                        age: 26,
                        eyeColor: 'green',
                        name: 'Stafford Fields',
                        gender: 'male',
                        company: 'DOGNOSIS',
                        email: 'staffordfields@dognosis.com',
                        phone: '+1 (858) 523-2169',
                        address: '631 Lott Street, Bison, Missouri, 610',
                        registered: '2016-12-19T01:16:05 +08:00',
                        latitude: 39.614107,
                        longitude: -4.301823,
                        tags: [
                            'sit',
                            'velit',
                            'est',
                            'velit',
                            'voluptate',
                            'consequat',
                            'cillum'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Laura Duke'
                            },
                            {
                                id: 1,
                                name: 'Noble Mcfadden'
                            },
                            {
                                id: 2,
                                name: 'Rowena Walker'
                            }
                        ],
                        greeting: 'Hello, Stafford Fields! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313397dc0d503fecbac',
                        index: 76,
                        guid: '72892ce6-a453-4cd3-9aa2-dfb091c25a45',
                        isActive: true,
                        balance: '$3,710.43',
                        picture: 'http://placehold.it/32x32',
                        age: 30,
                        eyeColor: 'green',
                        name: 'Keisha Nelson',
                        gender: 'female',
                        company: 'KIGGLE',
                        email: 'keishanelson@kiggle.com',
                        phone: '+1 (874) 535-2412',
                        address: '628 Norfolk Street, Ventress, New York, 5478',
                        registered: '2016-03-14T10:31:54 +07:00',
                        latitude: 24.647082,
                        longitude: 134.645181,
                        tags: [
                            'in',
                            'velit',
                            'proident',
                            'aute',
                            'ad',
                            'laborum',
                            'mollit'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Dodson Hensley'
                            },
                            {
                                id: 1,
                                name: 'Carmella Herman'
                            },
                            {
                                id: 2,
                                name: 'Guthrie Wheeler'
                            }
                        ],
                        greeting: 'Hello, Keisha Nelson! You have 8 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313d94c6a6155b620d0',
                        index: 77,
                        guid: '8b728cb9-492b-45f3-a70c-324f7f1a6d4e',
                        isActive: false,
                        balance: '$1,737.18',
                        picture: 'http://placehold.it/32x32',
                        age: 20,
                        eyeColor: 'blue',
                        name: 'Allison Howe',
                        gender: 'female',
                        company: 'SLOGANAUT',
                        email: 'allisonhowe@sloganaut.com',
                        phone: '+1 (981) 495-2050',
                        address: '299 Stillwell Avenue, Idledale, California, 107',
                        registered: '2019-01-22T05:12:14 +08:00',
                        latitude: -4.725867,
                        longitude: -4.503071,
                        tags: [
                            'aliquip',
                            'proident',
                            'deserunt',
                            'ea',
                            'commodo',
                            'consectetur',
                            'nostrud'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Newton Roberson'
                            },
                            {
                                id: 1,
                                name: 'Adele Mack'
                            },
                            {
                                id: 2,
                                name: 'Conway Combs'
                            }
                        ],
                        greeting: 'Hello, Allison Howe! You have 10 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313f2f24b5d964c8204',
                        index: 78,
                        guid: '5c08ce8d-5b29-4178-9953-aedb9114155b',
                        isActive: false,
                        balance: '$2,608.09',
                        picture: 'http://placehold.it/32x32',
                        age: 29,
                        eyeColor: 'blue',
                        name: 'Lillie Park',
                        gender: 'female',
                        company: 'OHMNET',
                        email: 'lilliepark@ohmnet.com',
                        phone: '+1 (949) 532-3631',
                        address: '739 Ovington Avenue, Windsor, North Dakota, 4302',
                        registered: '2018-03-06T07:14:38 +08:00',
                        latitude: 43.030795,
                        longitude: 112.81937,
                        tags: [
                            'cupidatat',
                            'aliquip',
                            'tempor',
                            'anim',
                            'mollit',
                            'occaecat',
                            'elit'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Page Molina'
                            },
                            {
                                id: 1,
                                name: 'Ware Walsh'
                            },
                            {
                                id: 2,
                                name: 'Carlene Hudson'
                            }
                        ],
                        greeting: 'Hello, Lillie Park! You have 3 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53131ef4f186214fdece',
                        index: 79,
                        guid: 'e747dda8-13b1-4fca-a88b-d733afcbb325',
                        isActive: true,
                        balance: '$2,268.92',
                        picture: 'http://placehold.it/32x32',
                        age: 40,
                        eyeColor: 'green',
                        name: 'Kline Fitzgerald',
                        gender: 'male',
                        company: 'BIOHAB',
                        email: 'klinefitzgerald@biohab.com',
                        phone: '+1 (807) 475-3174',
                        address: '208 Gunther Place, Gasquet, Pennsylvania, 4264',
                        registered: '2014-10-17T02:28:53 +07:00',
                        latitude: 74.524075,
                        longitude: -112.453954,
                        tags: [
                            'ea',
                            'ut',
                            'magna',
                            'exercitation',
                            'consequat',
                            'eiusmod',
                            'irure'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Sawyer Potts'
                            },
                            {
                                id: 1,
                                name: 'Pugh Weeks'
                            },
                            {
                                id: 2,
                                name: 'Byers Terry'
                            }
                        ],
                        greeting: 'Hello, Kline Fitzgerald! You have 6 unread messages.',
                        favoriteFruit: 'strawberry'
                    },
                    {
                        id: '5dca53133cd17ca816cf3433',
                        index: 80,
                        guid: '630807f1-8dfb-4a11-a0f6-dce1261fa1ad',
                        isActive: true,
                        balance: '$2,597.29',
                        picture: 'http://placehold.it/32x32',
                        age: 34,
                        eyeColor: 'brown',
                        name: 'Woods Madden',
                        gender: 'male',
                        company: 'QUINEX',
                        email: 'woodsmadden@quinex.com',
                        phone: '+1 (989) 557-3279',
                        address: '750 Stratford Road, Herald, Arizona, 3068',
                        registered: '2017-03-18T08:48:12 +07:00',
                        latitude: 53.789557,
                        longitude: 71.236122,
                        tags: [
                            'amet',
                            'cillum',
                            'dolore',
                            'aliquip',
                            'veniam',
                            'exercitation',
                            'dolore'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Alvarado Livingston'
                            },
                            {
                                id: 1,
                                name: 'Annette Sweet'
                            },
                            {
                                id: 2,
                                name: 'Minnie Woods'
                            }
                        ],
                        greeting: 'Hello, Woods Madden! You have 1 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313b9ccb40988e9e545',
                        index: 81,
                        guid: 'd03ee6b2-9ea7-4c40-a092-11dc9e872824',
                        isActive: false,
                        balance: '$2,493.13',
                        picture: 'http://placehold.it/32x32',
                        age: 28,
                        eyeColor: 'brown',
                        name: 'Sheena Gilmore',
                        gender: 'female',
                        company: 'QUILCH',
                        email: 'sheenagilmore@quilch.com',
                        phone: '+1 (977) 409-2836',
                        address: '404 Duryea Court, Odessa, New Hampshire, 8131',
                        registered: '2014-01-25T05:41:49 +08:00',
                        latitude: 58.971179,
                        longitude: -48.848797,
                        tags: [
                            'quis',
                            'ex',
                            'proident',
                            'pariatur',
                            'aliquip',
                            'mollit',
                            'laboris'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Albert Reid'
                            },
                            {
                                id: 1,
                                name: 'Mercer Greer'
                            },
                            {
                                id: 2,
                                name: 'Katy Shepard'
                            }
                        ],
                        greeting: 'Hello, Sheena Gilmore! You have 9 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca531307d2bc4e41dee17c',
                        index: 82,
                        guid: 'f05adacd-cfa4-45da-8f53-c9354b429bf9',
                        isActive: false,
                        balance: '$1,542.53',
                        picture: 'http://placehold.it/32x32',
                        age: 29,
                        eyeColor: 'blue',
                        name: 'Lawanda Murray',
                        gender: 'female',
                        company: 'ECRATIC',
                        email: 'lawandamurray@ecratic.com',
                        phone: '+1 (885) 595-2467',
                        address: '565 Mill Lane, Springville, Michigan, 7718',
                        registered: '2019-09-04T05:08:45 +07:00',
                        latitude: 67.74264,
                        longitude: -41.134553,
                        tags: [
                            'magna',
                            'dolore',
                            'cupidatat',
                            'reprehenderit',
                            'aute',
                            'aliqua',
                            'id'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Melendez Albert'
                            },
                            {
                                id: 1,
                                name: 'Cynthia Brock'
                            },
                            {
                                id: 2,
                                name: 'Delacruz Mathis'
                            }
                        ],
                        greeting: 'Hello, Lawanda Murray! You have 1 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca531375a8c686acca96b0',
                        index: 83,
                        guid: 'a716bf01-6557-446b-b0ca-0f822ec07e77',
                        isActive: false,
                        balance: '$3,337.55',
                        picture: 'http://placehold.it/32x32',
                        age: 29,
                        eyeColor: 'blue',
                        name: 'Grant Noel',
                        gender: 'male',
                        company: 'COASH',
                        email: 'grantnoel@coash.com',
                        phone: '+1 (862) 498-2970',
                        address: '369 Hamilton Avenue, Oceola, Connecticut, 1989',
                        registered: '2018-02-02T09:42:53 +08:00',
                        latitude: 10.729459,
                        longitude: -34.504094,
                        tags: [
                            'anim',
                            'anim',
                            'ipsum',
                            'amet',
                            'ut',
                            'ipsum',
                            'consequat'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Trevino Marks'
                            },
                            {
                                id: 1,
                                name: 'Kathie Marsh'
                            },
                            {
                                id: 2,
                                name: 'Mckay Wright'
                            }
                        ],
                        greeting: 'Hello, Grant Noel! You have 8 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53135c866993df4d142f',
                        index: 84,
                        guid: 'e265f17b-90e5-4cb8-a9b4-ec48d27e9e0c',
                        isActive: false,
                        balance: '$3,908.92',
                        picture: 'http://placehold.it/32x32',
                        age: 21,
                        eyeColor: 'blue',
                        name: 'Griffith Heath',
                        gender: 'male',
                        company: 'CENTREE',
                        email: 'griffithheath@centree.com',
                        phone: '+1 (838) 451-3282',
                        address: '284 Colby Court, Barrelville, Kentucky, 5926',
                        registered: '2018-08-23T03:53:12 +07:00',
                        latitude: -88.378673,
                        longitude: -20.817473,
                        tags: [
                            'eiusmod',
                            'est',
                            'voluptate',
                            'cupidatat',
                            'duis',
                            'quis',
                            'pariatur'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Jones Jacobson'
                            },
                            {
                                id: 1,
                                name: 'Charity Sparks'
                            },
                            {
                                id: 2,
                                name: 'Mari Crane'
                            }
                        ],
                        greeting: 'Hello, Griffith Heath! You have 7 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca531303258fd242d559ee',
                        index: 85,
                        guid: '64979aa0-46c0-45d8-b2d7-e1f5ac2b6c45',
                        isActive: true,
                        balance: '$2,588.53',
                        picture: 'http://placehold.it/32x32',
                        age: 22,
                        eyeColor: 'blue',
                        name: 'Cruz Key',
                        gender: 'male',
                        company: 'FANGOLD',
                        email: 'cruzkey@fangold.com',
                        phone: '+1 (985) 534-3276',
                        address: '907 Nevins Street, Garberville, Federated States Of Micronesia, 1561',
                        registered: '2015-04-26T07:34:05 +07:00',
                        latitude: -86.268381,
                        longitude: -21.614001,
                        tags: [
                            'reprehenderit',
                            'eiusmod',
                            'ullamco',
                            'tempor',
                            'minim',
                            'mollit',
                            'incididunt'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Colleen Gates'
                            },
                            {
                                id: 1,
                                name: 'Browning Richard'
                            },
                            {
                                id: 2,
                                name: 'Barbara Lynn'
                            }
                        ],
                        greeting: 'Hello, Cruz Key! You have 3 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313db690e44e7a60c69',
                        index: 86,
                        guid: 'c061ac56-5b91-49e0-aa4e-febfbc7b8dab',
                        isActive: false,
                        balance: '$3,387.33',
                        picture: 'http://placehold.it/32x32',
                        age: 24,
                        eyeColor: 'blue',
                        name: 'Maldonado Buckley',
                        gender: 'male',
                        company: 'CEMENTION',
                        email: 'maldonadobuckley@cemention.com',
                        phone: '+1 (841) 496-2009',
                        address: '875 Greenpoint Avenue, Baker, Florida, 7856',
                        registered: '2015-06-20T05:32:50 +07:00',
                        latitude: 67.785739,
                        longitude: 15.070502,
                        tags: [
                            'nostrud',
                            'tempor',
                            'est',
                            'nulla',
                            'reprehenderit',
                            'elit',
                            'anim'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Lolita Holloway'
                            },
                            {
                                id: 1,
                                name: 'Coleman Ruiz'
                            },
                            {
                                id: 2,
                                name: 'Jewell Richards'
                            }
                        ],
                        greeting: 'Hello, Maldonado Buckley! You have 6 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313bc07601ca626a1e7',
                        index: 87,
                        guid: '887f3e9c-132c-44ed-9863-e1ca10c554c6',
                        isActive: true,
                        balance: '$2,207.39',
                        picture: 'http://placehold.it/32x32',
                        age: 31,
                        eyeColor: 'brown',
                        name: 'Rutledge Cunningham',
                        gender: 'male',
                        company: 'SINGAVERA',
                        email: 'rutledgecunningham@singavera.com',
                        phone: '+1 (974) 446-2009',
                        address: '255 Hart Place, Keller, Illinois, 5581',
                        registered: '2015-08-01T05:29:08 +07:00',
                        latitude: 44.798823,
                        longitude: 129.383504,
                        tags: [
                            'sunt',
                            'eu',
                            'fugiat',
                            'ullamco',
                            'et',
                            'irure',
                            'excepteur'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Angelita Walls'
                            },
                            {
                                id: 1,
                                name: 'Marisol Miranda'
                            },
                            {
                                id: 2,
                                name: 'Alma Woodward'
                            }
                        ],
                        greeting: 'Hello, Rutledge Cunningham! You have 6 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53134bcc5cb68d15fd2a',
                        index: 88,
                        guid: 'edfa8488-8e09-47f8-8162-5f3ae3d9e632',
                        isActive: true,
                        balance: '$3,378.83',
                        picture: 'http://placehold.it/32x32',
                        age: 28,
                        eyeColor: 'green',
                        name: 'Nita Holmes',
                        gender: 'female',
                        company: 'LOVEPAD',
                        email: 'nitaholmes@lovepad.com',
                        phone: '+1 (868) 558-2509',
                        address: '763 Morton Street, Shaft, Minnesota, 8445',
                        registered: '2018-03-21T11:53:54 +07:00',
                        latitude: 76.324264,
                        longitude: -171.124236,
                        tags: [
                            'pariatur',
                            'in',
                            'aute',
                            'aliquip',
                            'commodo',
                            'ad',
                            'voluptate'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Ashley Floyd'
                            },
                            {
                                id: 1,
                                name: 'Walls Haley'
                            },
                            {
                                id: 2,
                                name: 'Antonia Allen'
                            }
                        ],
                        greeting: 'Hello, Nita Holmes! You have 3 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53138c1c51d29c75cdf3',
                        index: 89,
                        guid: '829b973e-59ef-46fc-a2ce-bef0fd48813b',
                        isActive: true,
                        balance: '$3,165.03',
                        picture: 'http://placehold.it/32x32',
                        age: 22,
                        eyeColor: 'green',
                        name: 'Arlene Kirby',
                        gender: 'female',
                        company: 'PATHWAYS',
                        email: 'arlenekirby@pathways.com',
                        phone: '+1 (902) 532-3547',
                        address: '391 Ford Street, Springdale, Utah, 6737',
                        registered: '2017-04-12T07:46:34 +07:00',
                        latitude: -24.852138,
                        longitude: -64.518736,
                        tags: [
                            'proident',
                            'sit',
                            'laborum',
                            'elit',
                            'veniam',
                            'sit',
                            'ullamco'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Sheri Valdez'
                            },
                            {
                                id: 1,
                                name: 'Marcie Bartlett'
                            },
                            {
                                id: 2,
                                name: 'Colon Sullivan'
                            }
                        ],
                        greeting: 'Hello, Arlene Kirby! You have 6 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca53133c60324879cf7505',
                        index: 90,
                        guid: '787925cd-df2b-4784-bdcc-62bc8c3c179a',
                        isActive: true,
                        balance: '$2,033.80',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'blue',
                        name: 'Oneil Skinner',
                        gender: 'male',
                        company: 'EVENTIX',
                        email: 'oneilskinner@eventix.com',
                        phone: '+1 (921) 594-2035',
                        address: '370 Schenck Street, Bartonsville, Delaware, 7808',
                        registered: '2015-07-03T07:47:02 +07:00',
                        latitude: -2.880286,
                        longitude: -153.677525,
                        tags: [
                            'dolore',
                            'aute',
                            'id',
                            'irure',
                            'irure',
                            'ut',
                            'ad'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Knapp Velazquez'
                            },
                            {
                                id: 1,
                                name: 'Patton Stafford'
                            },
                            {
                                id: 2,
                                name: 'Delores Serrano'
                            }
                        ],
                        greeting: 'Hello, Oneil Skinner! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca5313d2b086066f3b3d7b',
                        index: 91,
                        guid: '35f044ec-79b4-437a-bfc8-6c9a2c91fbee',
                        isActive: true,
                        balance: '$1,714.41',
                        picture: 'http://placehold.it/32x32',
                        age: 39,
                        eyeColor: 'green',
                        name: 'Lourdes Scott',
                        gender: 'female',
                        company: 'EWAVES',
                        email: 'lourdesscott@ewaves.com',
                        phone: '+1 (829) 474-2335',
                        address: '168 Christopher Avenue, Dorneyville, South Carolina, 200',
                        registered: '2015-10-27T07:32:22 +07:00',
                        latitude: -41.215253,
                        longitude: -150.129844,
                        tags: [
                            'consequat',
                            'aliqua',
                            'minim',
                            'exercitation',
                            'esse',
                            'et',
                            'quis'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Alexander Holcomb'
                            },
                            {
                                id: 1,
                                name: 'Gonzalez Stephens'
                            },
                            {
                                id: 2,
                                name: 'Alford Hoffman'
                            }
                        ],
                        greeting: 'Hello, Lourdes Scott! You have 5 unread messages.',
                        favoriteFruit: 'banana'
                    },
                    {
                        id: '5dca53139967fc43f4f3ec65',
                        index: 92,
                        guid: 'a95af161-f7f1-45e5-a244-858c44d66835',
                        isActive: false,
                        balance: '$2,604.52',
                        picture: 'http://placehold.it/32x32',
                        age: 38,
                        eyeColor: 'green',
                        name: 'Compton Frye',
                        gender: 'male',
                        company: 'ZILCH',
                        email: 'comptonfrye@zilch.com',
                        phone: '+1 (853) 585-2891',
                        address: '253 Irwin Street, Foxworth, New Mexico, 9110',
                        registered: '2016-04-27T06:26:47 +07:00',
                        latitude: -29.81559,
                        longitude: -26.490554,
                        tags: [
                            'commodo',
                            'sunt',
                            'ad',
                            'veniam',
                            'quis',
                            'cillum',
                            'esse'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Leta Gould'
                            },
                            {
                                id: 1,
                                name: 'Angelina Wolf'
                            },
                            {
                                id: 2,
                                name: 'Sloan Cantrell'
                            }
                        ],
                        greeting: 'Hello, Compton Frye! You have 2 unread messages.',
                        favoriteFruit: 'apple'
                    },
                    {
                        id: '5dca5313abbf072c5cc7c51f',
                        index: 93,
                        guid: '7ced9278-681c-4db1-9cc2-a453834d2aac',
                        isActive: false,
                        balance: '$3,693.59',
                        picture: 'http://placehold.it/32x32',
                        age: 37,
                        eyeColor: 'brown',
                        name: 'Shannon Fleming',
                        gender: 'male',
                        company: 'QUONK',
                        email: 'shannonfleming@quonk.com',
                        phone: '+1 (975) 430-2763',
                        address: '393 Chestnut Street, Chapin, Wyoming, 474',
                        registered: '2017-09-08T06:31:57 +07:00',
                        latitude: 69.603202,
                        longitude: 151.995107,
                        tags: [
                            'esse',
                            'qui',
                            'ullamco',
                            'excepteur',
                            'dolor',
                            'culpa',
                            'officia'
                        ],
                        friends: [{
                                id: 0,
                                name: 'Burch Sampson'
                            },
                            {
                                id: 1,
                                name: 'Alston Randolph'
                            },
                            {
                                id: 2,
                                name: 'Barker Wynn'
                            }
                        ],
                        greeting: 'Hello, Shannon Fleming! You have 8 unread messages.',
                        favoriteFruit: 'strawberry'
                    }
                ]
            };
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/mc/mc-ui-angular/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map