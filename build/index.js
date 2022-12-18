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
var tailwind_default = "/build/_assets/tailwind-53EKKKUV.css";

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

// app/routes/dashboard.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader
});
var import_node4 = require("@remix-run/node");

// app/utils/auth/auth.server.js
var import_node3 = require("@remix-run/node");

// app/utils/auth/session.server.js
var import_node2 = require("@remix-run/node"), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "session",
    secure: !0,
    secrets: [sessionSecret],
    path: "/",
    sameSite: "lax",
    httpOnly: !0,
    maxAge: 24 * 60 * 60
  }
});

// app/utils/auth/auth.server.js
async function createUserSession(userId, redirectTo) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node3.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  return (await sessionStorage.getSession(request.headers.get("Cookie"))).get("userId");
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(request.headers.get("Cookie"));
  return (0, import_node3.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node3.redirect)("/auth");
  return userId;
}

// app/routes/dashboard.jsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async ({ request }) => (await requireUserSession(request), null), DashboardLayout = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", {
      children: "Layout"
    }, void 0, !1, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, {
      method: "post",
      action: "/logout",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", {
        type: "submit",
        className: "",
        children: "Logout"
      }, void 0, !1, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/routes/dashboard.jsx",
  lineNumber: 12,
  columnNumber: 5
}, this), dashboard_default = DashboardLayout;

// app/routes/dashboard/todos.$todoId.jsx
var todos_todoId_exports = {};
__export(todos_todoId_exports, {
  default: () => todos_todoId_default
});
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Todo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
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
var import_react5 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), UpdateTodo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
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
var import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), NewTodo = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
  children: " CreateTodo"
}, void 0, !1, {
  fileName: "app/routes/dashboard/todos.new.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), todos_new_default = NewTodo;

// app/routes/dashboard/index.jsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2
});
var import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Dashboard = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
  children: "Dashboard"
}, void 0, !1, {
  fileName: "app/routes/dashboard/index.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), dashboard_default2 = Dashboard;

// app/routes/dashboard/todos.jsx
var todos_exports = {};
__export(todos_exports, {
  default: () => todos_default
});
var import_react8 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Todos = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
  children: "Todos"
}, void 0, !1, {
  fileName: "app/routes/dashboard/todos.jsx",
  lineNumber: 4,
  columnNumber: 10
}, this), todos_default = Todos;

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
var import_node5 = require("@remix-run/node");
function action({ request }) {
  if (request.method !== "POST")
    throw (0, import_node5.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react12 = require("@remix-run/react");

// app/components/navigation/mainNavigation.jsx
var import_react9 = require("react"), import_classnames = __toESM(require("classnames")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Navbar({ children, color, className, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("nav", {
      ...rest,
      className: (0, import_classnames.default)(
        "w-full flex flex-wrap items-center justify-between px-2 py-3 mb-3",
        {
          light: "bg-blueGray-200",
          dark: "bg-blueGray-800",
          transparent: "bg-transparent",
          white: "bg-white",
          blueGray: "bg-blueGray-500",
          red: "bg-red-500",
          orange: "bg-orange-500",
          amber: "bg-amber-500",
          emerald: "bg-emerald-500",
          teal: "bg-teal-500",
          lightBlue: "bg-lightBlue-500",
          indigo: "bg-indigo-500",
          purple: "bg-purple-500",
          pink: "bg-pink-500"
        }[color],
        className
      ),
      children
    }, void 0, !1, {
      fileName: "app/components/navigation/mainNavigation.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/navigation/mainNavigation.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/components/navigation/navbarLink.jsx
var import_react10 = require("react"), import_classnames2 = __toESM(require("classnames")), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function NavbarListLink({
  children,
  className,
  breakpoint,
  type,
  to,
  ...rest
}) {
  let types = {
    light: "text-white",
    dark: "text-blueGray-800"
  }, breakpoints = {
    all: "py-2",
    sm: "py-4 sm:py-2",
    md: "py-4 md:py-2",
    lg: "py-4 lg:py-2",
    xl: "py-4 xl:py-2"
  }, classes = (0, import_classnames2.default)(
    "hover:opacity-75 px-3 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out",
    className,
    types[type],
    breakpoints[breakpoint]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {
    children: [
      to && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Link, {
        ...rest,
        to,
        className: classes,
        children
      }, void 0, !1, {
        fileName: "app/components/navigation/navbarLink.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      to === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", {
        ...rest,
        className: classes,
        children
      }, void 0, !1, {
        fileName: "app/components/navigation/navbarLink.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navigation/navbarLink.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), navProps = { color: "orange", className: "text-white" };
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", {
    className: "w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Navbar, {
        ...navProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NavbarListLink, {
            to: "/dashboard",
            children: "Dashboard"
          }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NavbarListLink, {
            to: "/auth",
            children: "Login"
          }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 14,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", {
        type: "button",
        className: "mr-3 inline-block px-6 py-3 font-bold text-center bg-gradient-to-tl from-blue-500 to-violet-500 uppercase align-middle transition-all rounded-lg cursor-pointer leading-normal text-xs ease-in tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md text-white",
        children: "Button"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/auth.jsx
var auth_exports = {};
__export(auth_exports, {
  action: () => action2,
  default: () => auth_default,
  loader: () => loader2
});
var import_node7 = require("@remix-run/node");
var import_react14 = require("@remix-run/react");

// app/components/layouts/form-wrapper.jsx
var import_react13 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), FormWrapper = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", {
  className: "h-screen flex justify-center items-center",
  children
}, void 0, !1, {
  fileName: "app/components/layouts/form-wrapper.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), form_wrapper_default = FormWrapper;

// app/utils/auth/validate.server.js
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(input) {
  let validationErrors = {};
  if (isValidEmail(input.email) || (validationErrors.email = "Invalid email address."), isValidPassword(input.password) || (validationErrors.password = "Invalid password. Must be at least 7 characters long."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/utils/data/user.server.js
var import_bcryptjs = __toESM(require("bcryptjs")), import_node6 = require("@remix-run/node");

// app/utils/config/prisma.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/data/user.server.js
var login = async ({ email, password }) => {
  try {
    let user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return !user || !await import_bcryptjs.default.compare(password, user.password) ? (0, import_node6.json)({ error: "Incorrect login" }, { status: 400 }) : createUserSession(user.id, "/dashboard");
  } catch {
    return (0, import_node6.json)({ error: "Failed to login" }, { status: 400 });
  }
}, register = async ({ username, email, password }) => {
  if (await prisma.user.findFirst({ where: { email } }))
    return (0, import_node6.json)({ error: "Email already exists" }, { status: 400 });
  let passwordHash = await import_bcryptjs.default.hash(password, 10);
  try {
    let user = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash
      }
    });
    return createUserSession(user.id, "/dashboard");
  } catch (error) {
    return console.log(error), (0, import_node6.json)({ error: "Failed to register" }, { status: 400 });
  }
};

// app/routes/auth.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => await getUserFromSession(request) ? (0, import_node7.redirect)("/dashboard") : (0, import_node7.json)({});
async function action2({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), credentials = Object.fromEntries(formData);
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  try {
    return authMode === "login" ? await login(credentials) : await register(credentials);
  } catch (error) {
    if (error.status === 422)
      return { credentials: error.message };
  }
}
var Login = () => {
  let [searchParams] = (0, import_react14.useSearchParams)(), validationErrors = (0, import_react14.useActionData)(), authMode = searchParams.get("mode") || "login";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(form_wrapper_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
      className: "w-full max-w-xs",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", {
          className: "text-center font-semibold uppercase mb-3",
          children: authMode === "login" ? "Login" : "Register"
        }, void 0, !1, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 112,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Form, {
          method: "post",
          className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
          autoComplete: "off",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
              className: "mb-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "email",
                  children: "Email"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 121,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                  id: "email",
                  name: "email",
                  type: "email",
                  placeholder: "Email"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 127,
                  columnNumber: 13
                }, this),
                (validationErrors == null ? void 0 : validationErrors.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", {
                  className: "text-red-500 text-xs italic",
                  children: validationErrors.email
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 135,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth.jsx",
              lineNumber: 120,
              columnNumber: 11
            }, this),
            authMode === "signup" && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
              className: "mb-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "username",
                  children: "Username"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 142,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                  id: "username",
                  name: "username",
                  type: "text",
                  placeholder: "Username"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 148,
                  columnNumber: 15
                }, this),
                (validationErrors == null ? void 0 : validationErrors.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", {
                  className: "text-red-500 text-xs italic",
                  children: validationErrors.email
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 156,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth.jsx",
              lineNumber: 141,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
              className: "mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "password",
                  children: "Password"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 163,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", {
                  className: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                  id: "password",
                  name: "password",
                  type: "password",
                  placeholder: "******************"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 169,
                  columnNumber: 13
                }, this),
                (validationErrors == null ? void 0 : validationErrors.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", {
                  className: "text-red-500 text-xs italic",
                  children: validationErrors.password
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 177,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth.jsx",
              lineNumber: 162,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", {
              className: "flex items-center justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", {
                  className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                  type: "submit",
                  children: authMode === "login" ? "Login" : "Register"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 183,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, {
                  className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",
                  to: authMode === "login" ? "?mode=signup" : "?mode=login",
                  children: authMode === "login" ? "Dont have an account?" : "Have an account?"
                }, void 0, !1, {
                  fileName: "app/routes/auth.jsx",
                  lineNumber: 189,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth.jsx",
              lineNumber: 182,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 115,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", {
          className: "text-center text-gray-500 text-xs",
          children: "\xA92020 Acme Corp. All rights reserved."
        }, void 0, !1, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 199,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/auth.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/auth.jsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}, auth_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "01913684", entry: { module: "/build/entry.client-2AVTCKAL.js", imports: ["/build/_shared/chunk-X7HYHKD5.js", "/build/_shared/chunk-VPGYRKCU.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SQERJTFL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-ZGIBAQHE.js", imports: ["/build/_shared/chunk-5PKAW3K5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-T6MPKD34.js", imports: ["/build/_shared/chunk-5PKAW3K5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-KQ67CY7M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos": { id: "routes/dashboard/todos", parentId: "routes/dashboard", path: "todos", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos-R2AMAJHB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos.$todoId": { id: "routes/dashboard/todos.$todoId", parentId: "routes/dashboard", path: "todos/:todoId", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos.$todoId-Z7X7D4X7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos.new": { id: "routes/dashboard/todos.new", parentId: "routes/dashboard", path: "todos/new", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos.new-FILYK42Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/todos.update": { id: "routes/dashboard/todos.update", parentId: "routes/dashboard", path: "todos/update", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/todos.update-WQMEDBQQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-N2RDK3MQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-TIVGJ7SQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-01913684.js" };

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
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/todos.$todoId": {
    id: "routes/dashboard/todos.$todoId",
    parentId: "routes/dashboard",
    path: "todos/:todoId",
    index: void 0,
    caseSensitive: void 0,
    module: todos_todoId_exports
  },
  "routes/dashboard/todos.update": {
    id: "routes/dashboard/todos.update",
    parentId: "routes/dashboard",
    path: "todos/update",
    index: void 0,
    caseSensitive: void 0,
    module: todos_update_exports
  },
  "routes/dashboard/todos.new": {
    id: "routes/dashboard/todos.new",
    parentId: "routes/dashboard",
    path: "todos/new",
    index: void 0,
    caseSensitive: void 0,
    module: todos_new_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/dashboard/todos": {
    id: "routes/dashboard/todos",
    parentId: "routes/dashboard",
    path: "todos",
    index: void 0,
    caseSensitive: void 0,
    module: todos_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
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
