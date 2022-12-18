import bcrypt from "bcryptjs"
import { json } from "@remix-run/node"

import { prisma } from "~/utils/config/prisma.server"
import { createUserSession } from "../auth/auth.server"

export const createUser = async (user) => {}
//export const updateUser = async (id, user) => {}
//export const deleteUser = async (id) => {}
//export const getUsers = async () => {}
//export const getUser = async (id) => {}

export const login = async ({ email, password }) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return json({ error: `Incorrect login` }, { status: 400 })
    }
    return createUserSession(user.id, "/dashboard")
  } catch (error) {
    return json({ error: `Failed to login` }, { status: 400 })
  }
}
export const register = async ({ username, email, password }) => {
  const existingUser = await prisma.user.findFirst({ where: { email } })
  if (existingUser) {
    return json({ error: `Email already exists` }, { status: 400 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    })
    return createUserSession(user.id, "/dashboard")
  } catch (error) {
    console.log(error)
    return json({ error: `Failed to register` }, { status: 400 })
  }
}
