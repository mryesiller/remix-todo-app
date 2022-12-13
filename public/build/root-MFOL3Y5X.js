import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-PGLV2AOZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KIQSGYIA.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ASLNR2KO.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-MFOL3Y5X.js.map
