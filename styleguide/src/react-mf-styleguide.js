import "./set-public-path";
import "./global.css?modules=false";

// You can also export React components from this file and import them into your microfrontends
export { default as Button } from "./button.component.js";
export { default as Icon } from "./icon.component.js";
export { default as NavbarOption } from "./navbarOption.component"