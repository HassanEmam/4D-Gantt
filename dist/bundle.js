/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_scales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scales */ \"./src/utils/scales.ts\");\n/* harmony import */ var _types_ganttChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/ganttChart */ \"./src/types/ganttChart.ts\");\n\n\nvar data = [\n    {\n        id: 1,\n        name: \"Task 1\",\n        start: new Date(2020, 0, 1),\n        end: new Date(2020, 0, 30),\n        parent: 0,\n    },\n    {\n        id: 2,\n        name: \"Task 2\",\n        start: new Date(2020, 0, 12),\n        end: new Date(2020, 1, 28),\n        parent: 0,\n    },\n    {\n        id: 3,\n        name: \"Task 3\",\n        start: new Date(2020, 2, 1),\n        end: new Date(2020, 2, 30),\n        parent: 0,\n    },\n];\nfunction drawGantt() {\n    var chartCanvas = document.getElementById(\"chartCanvas\");\n    chartCanvas.width = chartCanvas.parentElement.clientWidth;\n    chartCanvas.height = 500;\n    var options = {\n        canvas: chartCanvas,\n        padding: 20,\n        gridScale: 5,\n        gridColor: \"black\",\n        data: data,\n        titleOptions: \"Music\",\n        colors: [\"#a55ca5\", \"#67b6c7\", \"#bccd7a\", \"#eb9743\"],\n    };\n    console.log(\"Creating Gantt Chart\");\n    var gantt = new _types_ganttChart__WEBPACK_IMPORTED_MODULE_1__.GanttChart(options);\n    gantt.draw();\n    console.log(\"Drawing Gantt Chart\");\n}\ndrawGantt();\nconsole.log((0,_utils_scales__WEBPACK_IMPORTED_MODULE_0__.scaleX)(new Date(\"2022/12/31\"), new Date(\"2022/01/01\"), new Date(\"2022/12/31\"), 100));\nconsole.log((0,_utils_scales__WEBPACK_IMPORTED_MODULE_0__.scaleDate)(499, new Date(\"2022/01/01\"), new Date(\"2022/12/31\").getTime() - new Date(\"2022/01/01\").getTime(), 1000));\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/types/ganttChart.ts":
/*!*********************************!*\
  !*** ./src/types/ganttChart.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GanttChart\": () => (/* binding */ GanttChart)\n/* harmony export */ });\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper */ \"./src/utils/helper.ts\");\n/* harmony import */ var _utils_scales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/scales */ \"./src/utils/scales.ts\");\n\n\nfunction maxDate(data) {\n    var max = new Date(0);\n    var min = data[0].start;\n    data.forEach(function (element) {\n        if (element.end > max) {\n            max = element.end;\n        }\n        if (element.start < min) {\n            min = element.start;\n        }\n    });\n    return [min, max];\n}\nvar GanttChart = /** @class */ (function () {\n    function GanttChart(options) {\n        this.options = options;\n        this.canvas = options.canvas;\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.colors = options.colors;\n        this.titleOptions = options.titleOptions;\n        var maxmin = maxDate(this.options.data);\n        this.maxValue = maxmin[1].getTime();\n        this.minValue = maxmin[0].getTime();\n        this.minDate = maxmin[0];\n        this.maxDate = maxmin[1];\n        console.log(new Date(this.maxValue));\n        var currentDate = new Date(2020, 1, 15);\n        console.log(\"maxValue\", (0,_utils_scales__WEBPACK_IMPORTED_MODULE_1__.scaleX)(currentDate, this.minDate, this.maxDate, this.canvas.width), \"\\nCurrent Date \" + currentDate.toLocaleDateString(\"en-GB\"), \"\\nMin Date \" + this.minDate.toLocaleDateString(\"en-GB\"), \"\\nMax Date \" + this.maxDate.toLocaleDateString(\"en-GB\"), \"\\nWidth \" + this.canvas.width);\n    }\n    GanttChart.prototype.drawGridLines = function () {\n        var canvasActualHeight = this.canvas.height - this.options.padding * 2;\n        var canvasActualWidth = this.canvas.width - this.options.padding * 2;\n        var gridValue = 0;\n        // while (gridValue <= this.maxValue) {\n        var gridY = canvasActualWidth * (1 - gridValue / this.maxValue) +\n            this.options.padding;\n        console.log(\"gridY\", gridY);\n        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.drawLine)(this.ctx, this.options.padding, this.options.padding, canvasActualWidth, this.options.padding, \"black\");\n        var rowHeight = 50;\n        for (var i in this.options.data) {\n            (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.drawLine)(this.ctx, this.options.padding, this.options.padding + rowHeight * (parseInt(i) + 1), canvasActualWidth, this.options.padding + rowHeight * (parseInt(i) + 1), \"lightgray\");\n            //   console.log(this.options.data[i]);\n        }\n        //   drawLine(\n        //     this.ctx,\n        //     15,\n        //     this.options.padding / 2,\n        //     15,\n        //     gridY + this.options.padding / 2,\n        //     \"lightgray\"\n        //   );\n        // Writing grid markers\n        //   this.ctx.save();\n        //   this.ctx.fillStyle = this.options.gridColor;\n        //   this.ctx.textBaseline = \"bottom\";\n        //   this.ctx.font = \"bold 10px Arial\";\n        //   this.ctx.fillText(gridValue.toString(), 0, gridY - 2);\n        //   this.ctx.restore();\n        gridValue += this.options.gridScale;\n        // }\n    };\n    GanttChart.prototype.drawBars = function () {\n        var canvasActualHeight = this.canvas.height - this.options.padding * 2;\n        var canvasActualWidth = this.canvas.width - this.options.padding * 2;\n        var barIndex = 0;\n        var numberOfBars = Object.keys(this.options.data).length;\n        var barSize = (canvasActualWidth - numberOfBars * 40) / numberOfBars;\n        var values = Object.values(this.options.data);\n        for (var idx in this.options.data) {\n            var taskData = this.options.data[idx];\n            var yOffset = this.options.padding + 50 * parseInt(idx) + 10;\n            var xStart = (0,_utils_scales__WEBPACK_IMPORTED_MODULE_1__.scaleX)(taskData.start, this.minDate, this.maxDate, this.canvas.width);\n            var xEnd = (0,_utils_scales__WEBPACK_IMPORTED_MODULE_1__.scaleX)(taskData.end, this.minDate, this.maxDate, this.canvas.width);\n            var barWidth = xEnd - xStart;\n            (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.drawBar)(this.ctx, xStart, yOffset, barWidth, 30, \"blue\");\n            // this.colors[barIndex % this.colors.length];\n            console.log(taskData, yOffset);\n        }\n        // for (let val of values) {\n        //   var barHeight = Math.round((canvasActualHeight * val) / this.maxValue);\n        //   console.log(barHeight);\n        //   drawBar(\n        //     this.ctx,\n        //     this.options.padding + barIndex * (barSize + 40),\n        //     this.canvas.height - barHeight - this.options.padding,\n        //     barSize - 40,\n        //     barHeight,\n        //     this.colors[barIndex % this.colors.length]\n        //   );\n        //   barIndex++;\n        // }\n    };\n    GanttChart.prototype.draw = function () {\n        this.drawGridLines();\n        this.drawBars();\n    };\n    return GanttChart;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/types/ganttChart.ts?");

/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawBar\": () => (/* binding */ drawBar),\n/* harmony export */   \"drawLine\": () => (/* binding */ drawLine)\n/* harmony export */ });\nfunction drawLine(ctx, startX, startY, endX, endY, color) {\n    ctx.save();\n    ctx.strokeStyle = color;\n    ctx.beginPath();\n    // ctx.lineWidth = 10;\n    ctx.moveTo(startX, startY);\n    ctx.lineTo(endX, endY);\n    ctx.stroke();\n    ctx.restore();\n}\nfunction drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {\n    ctx.save();\n    ctx.fillStyle = color;\n    ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);\n    ctx.restore();\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/utils/helper.ts?");

/***/ }),

/***/ "./src/utils/scales.ts":
/*!*****************************!*\
  !*** ./src/utils/scales.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scaleDate\": () => (/* binding */ scaleDate),\n/* harmony export */   \"scaleX\": () => (/* binding */ scaleX),\n/* harmony export */   \"scaleY\": () => (/* binding */ scaleY)\n/* harmony export */ });\n/**\n * Gets a date and returns a scaled value\n * @param  {Date} dateToSclae the date to convert into a scaled value\n * @param  {Date} minDate the min date of the chart\n * @param {Date} maxDate the max date of the chart\n * @param {number} canvasWidth the width of the canvas\n * @return {number} the scaled value\n */\nfunction scaleX(dateToSclae, minDate, maxDate, width) {\n    var min = minDate.getTime();\n    var max = maxDate.getTime();\n    var overallDuration = max - min;\n    var date = dateToSclae.getTime();\n    var scale = Math.ceil((date - min) * (width / overallDuration));\n    return scale;\n}\nfunction scaleY() {\n    // TODO\n}\nfunction scaleDate(x, minStart, overallDuration, canvasWidth) {\n    var retDate = new Date(Math.ceil(minStart.getTime() + x * (overallDuration / canvasWidth)));\n    return retDate;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/utils/scales.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;