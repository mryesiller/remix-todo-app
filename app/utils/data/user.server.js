import { hash, compare } from "bcryptjs"

import { prisma } from "~/utils/config/prisma.server"
import { createUserSession } from "../auth/auth.server"

export const createUser = async (user) => {}
//export const updateUser = async (id, user) => {}
//export const deleteUser = async (id) => {}
//export const getUsers = async () => {}
//export const getUser = async (id) => {}

export const login = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) {
      throw new Error("User not found", { status: 401 })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new Error("Invalid password", { status: 401 })
    }
    return createUserSession(user.id)
  } catch (error) {
    throw new Error("Failed to login", { status: 401 })
  }
}
export const register = async (email, password) => {
  const existingUser = await prisma.user.findFirst({ where: { email } })
  if (existingUser) {
    throw new Error("User already exists", { status: 401 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: passwordHash,
      },
    })
    return createUserSession(user.id)
  } catch (error) {
    throw new Error("Failed to register", { status: 401 })
  }
}
