import * as React from 'react';
import { useState } from 'react';
import { SimpleText } from "../SimpleText";
var localization = {
    defaulttext: "Click the button please!",
    clickedtext: "Cool! Thanks :)"
};
export var Btn = function (_a) {
    var index = _a.index, text = _a.text, _b = _a.border, border = _b === void 0 ? true : _b, _c = _a.radius, radius = _c === void 0 ? true : _c, _d = _a.width, width = _d === void 0 ? 100 : _d, _e = _a.height, height = _e === void 0 ? 30 : _e;
    var _f = useState(localization.defaulttext), defText = _f[0], setdefText = _f[1];
    var style = {
        borderRadius: radius ? '5px' : '0',
        backgroundColor: '#3f51b5',
        color: 'white',
        border: border ? '2px solid rgb(0 0 0)' : '0',
        width: width + "px",
        height: height + "px",
        cursor: 'pointer'
    };
    var onclick = function () {
        setdefText(localization.clickedtext);
        setTimeout(function () {
            setdefText(localization.defaulttext);
        }, 3000);
    };
    return (React.createElement("div", { className: "cool-button-wrapper" },
        React.createElement("h3", null,
            index + 1,
            ". button"),
        React.createElement("button", { type: "button", style: style, onClick: onclick }, text),
        React.createElement("div", { className: "simple-text-wrapper" },
            React.createElement(SimpleText, { text: defText }))));
};
//# sourceMappingURL=Btn.js.map