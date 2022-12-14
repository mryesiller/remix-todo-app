import { prisma } from "~/utils/config/prisma.server"

export const createTodo = async (todoData, userId) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        title: todoData.title,
        content: todoData.content,
        completed: todoData.completed,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })
    return todo
  } catch (error) {
    throw new Error("Failed to create todo")
  }
}
export const updateTodo = async (todoData, todoId) => {
  try {
    const todo = await prisma.todo.update({
      where: {
        id: todoId,
      },
      data: {
        title: todoData.title,
        content: todoData.content,
        completed: todoData.completed,
      },
    })
    return todo
  } catch (error) {
    throw new Error("Failed to update todo")
  }
}
export const deleteTodo = async (todoId) => {
  try {
    const todo = await prisma.todo.delete({
      where: {
        id: todoId,
      },
    })
    return todo
  } catch (error) {
    throw new Error("Failed to delete todo")
  }
}
export const getTodos = async (userId) => {
  try {
    const todos = await prisma.todo.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    })
    return todos
  } catch (error) {
    throw new Error("Failed to get todos")
  }
}
export const getTodo = async (todoId) => {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: todoId },
    })
    return todo
  } catch (error) {
    throw new Error("Failed to get todo")
  }
}
