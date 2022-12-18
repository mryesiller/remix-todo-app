import { json, redirect } from "@remix-run/node"
import { getUserFromSession } from "~/utils/auth/auth.server"
import { useActionData, Link, useSearchParams, Form } from "@remix-run/react"

import FormWrapper from "~/components/layouts/form-wrapper"
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateCredentials,
} from "../utils/auth/validate.server"

import { login, register } from "../utils/data/user.server"

export const loader = async ({ request }) => {
  const userId = await getUserFromSession(request)
  if (userId) return redirect("/dashboard")
  return json({})
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams
  const authMode = searchParams.get("mode") || "login"

  const formData = await request.formData()
  const credentials = Object.fromEntries(formData)

  try {
    validateCredentials(credentials)
  } catch (error) {
    return error
  }

  try {
    if (authMode === "login") {
      return await login(credentials)
    } else {
      return await register(credentials)
    }
  } catch (error) {
    if (error.status === 422) {
      return { credentials: error.message }
    }
  }
}

// export async function action({ request }) {
//   const searchParams = new URL(request.url).searchParams
//   const authMode = searchParams.get("mode") || "login"

//   const formData = await request.formData()
//   const email = formData.get("email") || ""
//   const password = formData.get("password") || ""
//   const username = formData.get("username") || ""

//   try {
//     if (authMode === "login") {
//       return await login(email, password)
//     } else {
//       return await register(username, email, password)
//     }
//   } catch (error) {
//     return json({ error: error.message }, { status: 400 })
//   }

//   // try {
//   //   if (authMode === "login") {
//   //     if (!validateEmail(email)) {
//   //       return json({ email: "Invalid email", password: null }, { status: 400 })
//   //     }
//   //     if (!validatePassword(password)) {
//   //       return json(
//   //         { email: null, password: "Invalid password" },
//   //         { status: 400 }
//   //       )
//   //     }

//   //     await login(email, password)
//   //   } else {
//   //     if (!validateEmail(email)) {
//   //       return json({ email: "Invalid email", password: null }, { status: 400 })
//   //     }
//   //     if (!validatePassword(password)) {
//   //       return json(
//   //         { email: null, password: "Invalid password" },
//   //         { status: 400 }
//   //       )
//   //     }
//   //     if (!validateUsername(username)) {
//   //       return json(
//   //         { username: "Invalid username", email: null, password: null },
//   //         { status: 400 }
//   //       )
//   //     }
//   //     console.log(username, email, password)
//   //     await register(username, email, password)
//   //   }
//   // } catch (error) {
//   //   return json({ error: error.message }, { status: 400 })
//   // }
// }

const Login = () => {
  const [searchParams] = useSearchParams()
  const validationErrors = useActionData()

  const authMode = searchParams.get("mode") || "login"

  return (
    <FormWrapper>
      <div className="w-full max-w-xs">
        <h1 className="text-center font-semibold uppercase mb-3">
          {authMode === "login" ? "Login" : "Register"}
        </h1>
        <Form
          method="post"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            {validationErrors?.email && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.email}
              </p>
            )}
          </div>
          {authMode === "signup" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
              />
              {validationErrors?.username && (
                <p className="text-red-500 text-xs italic">
                  {validationErrors.email}
                </p>
              )}
            </div>
          )}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
            />
            {validationErrors?.password && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.password}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {authMode === "login" ? "Login" : "Register"}
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to={authMode === "login" ? "?mode=signup" : "?mode=login"}
            >
              {authMode === "login"
                ? "Dont have an account?"
                : "Have an account?"}
            </Link>
          </div>
        </Form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </FormWrapper>
  )
}

export default Login
