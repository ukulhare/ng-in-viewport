(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InViewportConfigDirection;
    (function (InViewportConfigDirection) {
        InViewportConfigDirection[InViewportConfigDirection["Both"] = 0] = "Both";
        InViewportConfigDirection[InViewportConfigDirection["Vertical"] = 1] = "Vertical";
        InViewportConfigDirection[InViewportConfigDirection["Horizontal"] = 2] = "Horizontal";
    })(InViewportConfigDirection = exports.InViewportConfigDirection || (exports.InViewportConfigDirection = {}));
    var InViewportConfig = (function () {
        function InViewportConfig(options) {
            this.rootElement = (options && options.rootElement)
                ? options.rootElement
                : void 0;
            this.partial = (options && 'partial' in options)
                ? options.partial
                : true;
            this.direction = (options && 'direction' in options)
                ? options.direction
                : InViewportConfigDirection.Both;
        }
        Object.defineProperty(InViewportConfig.prototype, "rootElement", {
            get: function () {
                return this._rootElement;
            },
            set: function (value) {
                this._rootElement = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InViewportConfig.prototype, "partial", {
            get: function () {
                return this._partial;
            },
            set: function (value) {
                this._partial = !!(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InViewportConfig.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (value) {
                this._direction = value;
            },
            enumerable: true,
            configurable: true
        });
        return InViewportConfig;
    }());
    exports.InViewportConfig = InViewportConfig;
});
//# sourceMappingURL=in-viewport-config.class.js.map