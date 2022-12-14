import { json, redirect } from "@remix-run/node"
import { getUser } from "~utils/auth/auth.server"

export const loader = async ({ request }) => {
  return (await getUser(request)) ? redirect("/dashboard") : null
}
