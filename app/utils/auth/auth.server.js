import { redirect } from "@remix-run/node"

import { sessionStorage } from "./session.server"

export async function createUserSession(userId, redirectTo) {
  const session = await sessionStorage.getSession()
  session.set("userId", userId)
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  })
}

export async function getUserFromSession(request) {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"))
  const userId = session.get("userId")
  return userId
}

export async function destroyUserSession(request) {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"))
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  })
}

export async function requireUserSession(request) {
  const userId = await getUserFromSession(request)
  if (!userId) {
    throw redirect("/auth")
  }
  return userId
}

// export async function requireUserId(
//   request,
//   redirectTo = new URL(request.url).pathname
// ) {
//   const session = await getUserSession(request)
//   const userId = session.get("userId")
//   if (!userId || typeof userId !== "string") {
//     const searchParams = new URLSearchParams([["redirectTo", redirectTo]])
//     throw redirect(`/login?${searchParams}`)
//   }
//   return userId
// }

// export async function getUserId(request) {
//   const session = await getUserSession(request)
//   const userId = session.get("userId")
//   if (!userId) {
//     return json({ error: "Not logged in" }, { status: 401 })
//   }
//   return userId
// }

// export async function getUser(request) {
//   const userId = await getUserId(request)
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//       select: { id: true, email: true, profile: true },
//     })
//     return user
//   } catch {
//     throw logout(request)
//   }
// }

// export async function logout(request) {
//   const session = await getUserSession(request)
//   return redirect("/login", {
//     headers: {
//       "Set-Cookie": await storage.destroySession(session),
//     },
//   })
// }
