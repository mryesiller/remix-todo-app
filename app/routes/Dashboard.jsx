import { json, redirect } from "@remix-run/node"
import { requireUserSession } from "~/utils/auth/auth.server"
import { Link, Form } from "@remix-run/react"

export const loader = async ({ request }) => {
  await requireUserSession(request)
  return null
}

const DashboardLayout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Form method="post" action="/logout">
        <button type="submit" className="">
          Logout
        </button>
      </Form>
    </div>
  )
}

export default DashboardLayout
