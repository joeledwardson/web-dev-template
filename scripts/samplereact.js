"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const mathjs_1 = require("mathjs");
class App extends React.Component {
    render() {
        return React.createElement("div", null,
            "PI: ",
            mathjs_1.pi);
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
