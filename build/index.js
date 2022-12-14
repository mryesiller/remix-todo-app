var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SQCK5HXJ.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/todos.$todoId.jsx
var todos_todoId_exports = {};
__export(todos_todoId_exports, {
  default: () => todos_todoId_default
});
var import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Todo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
  children: "Todo"
}, void 0, !1, {
  fileName: "app/routes/dashboard/todos.$todoId.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), todos_todoId_default = Todo;

// app/routes/dashboard/todos.update.jsx
var todos_update_exports = {};
__export(todos_update_exports, {
  default: () => todos_update_default
});
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), UpdateTodo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
  children: "UpdateTodo"
}, void 0, !1, {
  fileName: "app/routes/dashboard/todos.update.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), todos_update_default = UpdateTodo;

// app/routes/dashboard/todos.new.jsx
var todos_new_exports = {};
__export(todos_new_exports, {
  default: () => todos_new_default
});
var import_react5 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), NewTodo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
  children: " CreateTodo"
}, void 0, !1, {
  fileName: "app/routes/dashboard/todos.new.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), todos_new_default = NewTodo;

// app/routes/dashboard/index.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default
});
var import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Dashboard = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
  children: "Dashboard"
}, void 0, !1, {
  fileName: "app/routes/dashboard/index.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), dashboard_default = Dashboard;

// app/routes/dashboard/todos.jsx
var todos_exports = {};
__export(todos_exports, {
  default: () => todos_default
});
var import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Todos = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
  children: "Todos"
}, void 0, !1, {
  fileName: "app/routes/dashboard/todos.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), todos_default = Todos;

// app/routes/Dashboard.jsx
var Dashboard_exports = {};
__export(Dashboard_exports, {
  default: () => Dashboard_default
});
var import_react8 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), DashboardLayout = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
  children: "Layout"
}, void 0, !1, {
  fileName: "app/routes/Dashboard.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), Dashboard_default = DashboardLayout;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/common/Button.jsx
var import_react9 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Button = ({ children, type, className, color, size }) => {
  let buttonSizes = {
    sm: "px-4 py-1.5 rounded-sm",
    md: "px-6 py-3 rounded-md",
    lg: "px-7 py-4 rounded-lg"
  }, buttonColors = {
    primary: "bg-blue-500 active:bg-blue-700",
    secondary: "bg-slate-500 active:bg-slate-700",
    info: "bg-cyan-500 active:bg-cyan-700",
    danger: "bg-red-500 active:bg-red-700",
    warning: "bg-orange-500 active:bg-orange-700",
    success: "bg-emerald-600 active:bg-emerald-800"
  }, buttonBase = "m-2 inline-block text-white font-bold uppercase align-middle transition-all cursor-pointer leading-normal text-xs ease-in tracking-tight-rem ", buttonEffects = "shadow-xs bg-150 bg-x-25 hover:-translate-y-px hover:shadow-md ", buttonSize = buttonSizes[size] || buttonSizes.md, buttonColor = buttonColors[color] || buttonColors.primary, buttonClassName = `${buttonBase} ${buttonEffects} ${buttonSize} ${buttonColor} `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", {
    type: type || "button",
    className: buttonClassName + className,
    children
  }, void 0, !1, {
    fileName: "app/components/common/Button.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}, Button_default = Button;

// app/routes/index.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", {
    className: "ml-5",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", {
        className: "text-blue-600",
        children: "TEST"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button_default, {
        type: "button",
        color: "primary",
        children: "button"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", {
        type: "button",
        className: "mr-3 inline-block px-6 py-3 font-bold text-center bg-gradient-to-tl from-blue-500 to-violet-500 uppercase align-middle transition-all rounded-lg cursor-pointer leading-normal text-xs ease-in tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md text-white",
        children: "Button"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/Login.jsx
var Login_exports = {};
__export(Login_exports, {
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_auth = require("~utils/auth/auth.server"), loader = async ({ request }) => await (0, import_auth.getUser)(request) ? (0, import_node2.redirect)("/dashboard") : null;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "aa20e4cc", entry: { module: "/build/entry.client-5PBAS2ZB.js", imports: ["/build/_shared/chunk-PGLV2AOZ.js", "/build/_shared/chunk-KIQSGYIA.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CJPEDUPH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Dashboard": { id: "routes/Dashboard", parentId: "root", path: "Dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/Dashboard-GWZLHA3I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Login": { id: "routes/Login", parentId: "root", path: "Login", index: void 0, caseSensitive: void 0, module: "/build/routes/Login-P3RP3MNA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "root", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-ZBUCDCOW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos": { id: "routes/dashboard/todos", parentId: "root", path: "dashboard/todos", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos-RFWKEEDP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos.$todoId": { id: "routes/dashboard/todos.$todoId", parentId: "root", path: "dashboard/todos/:todoId", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos.$todoId-FZMADQ27.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos.new": { id: "routes/dashboard/todos.new", parentId: "root", path: "dashboard/todos/new", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos.new-SLD7UQ7L.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos.update": { id: "routes/dashboard/todos.update", parentId: "root", path: "dashboard/todos/update", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos.update-PZH7B3Y7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DOPIPCIE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-AA20E4CC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard/todos.$todoId": {
    id: "routes/dashboard/todos.$todoId",
    parentId: "root",
    path: "dashboard/todos/:todoId",
    index: void 0,
    caseSensitive: void 0,
    module: todos_todoId_exports
  },
  "routes/dashboard/todos.update": {
    id: "routes/dashboard/todos.update",
    parentId: "root",
    path: "dashboard/todos/update",
    index: void 0,
    caseSensitive: void 0,
    module: todos_update_exports
  },
  "routes/dashboard/todos.new": {
    id: "routes/dashboard/todos.new",
    parentId: "root",
    path: "dashboard/todos/new",
    index: void 0,
    caseSensitive: void 0,
    module: todos_new_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "root",
    path: "dashboard",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/todos": {
    id: "routes/dashboard/todos",
    parentId: "root",
    path: "dashboard/todos",
    index: void 0,
    caseSensitive: void 0,
    module: todos_exports
  },
  "routes/Dashboard": {
    id: "routes/Dashboard",
    parentId: "root",
    path: "Dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: Dashboard_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Login": {
    id: "routes/Login",
    parentId: "root",
    path: "Login",
    index: void 0,
    caseSensitive: void 0,
    module: Login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
