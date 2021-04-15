var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import "../../style.css";
import { Btn } from "../Btn";
export var CoolButton = function (_a) {
    var buttons = _a.buttons;
    return buttons.map(function (btn, index) { return (React.createElement(Btn, __assign({ key: index, index: index }, btn))); });
};
//# sourceMappingURL=CoolButton.js.map