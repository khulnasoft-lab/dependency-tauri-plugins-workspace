if("__TAURI__"in window){var __TAURI_GLOBALSHORTCUT__=function(t){"use strict";function e(t,e,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(t):n?n.value:e.get(t)}var r;"function"==typeof SuppressedError&&SuppressedError;class n{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,r.set(this,(()=>{})),this.id=function(t,e=!1){return window.__TAURI_INTERNALS__.transformCallback(t,e)}((t=>{e(this,r,"f").call(this,t)}))}set onmessage(t){!function(t,e,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===n?o.call(t,r):o?o.value=r:e.set(t,r)}(this,r,t,"f")}get onmessage(){return e(this,r,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}async function o(t,e={},r){return window.__TAURI_INTERNALS__.invoke(t,e,r)}return r=new WeakMap,t.isRegistered=async function(t){return await o("plugin:globalShortcut|is_registered",{shortcut:t})},t.register=async function(t,e){const r=new n;return r.onmessage=e,await o("plugin:globalShortcut|register",{shortcut:t,handler:r})},t.registerAll=async function(t,e){const r=new n;return r.onmessage=e,await o("plugin:globalShortcut|register_all",{shortcuts:t,handler:r})},t.unregister=async function(t){return await o("plugin:globalShortcut|unregister",{shortcut:t})},t.unregisterAll=async function(){return await o("plugin:globalShortcut|unregister_all")},t}({});Object.defineProperty(window.__TAURI__,"globalShortcut",{value:__TAURI_GLOBALSHORTCUT__})}
