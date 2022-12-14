import { createCookieSessionStorage } from "@remix-run/node"

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set")
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session",
    secure: true,
    secrets: [sessionSecret],
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  },
})
