// export const validateEmail = (email) => {
//   var validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   return !email.length || !validRegex.test(email)
// }

// export function validateEmail(email) {
//   return typeof email === "string" && !email.length > 3 && !email.includes("@")
// }

// export const validatePassword = (password) => {
//   return !password.length || !password.length < 6
// }

// export const validateUsername = (name) => {
//   return !name.length || name.length < 3
// }

// export const validateTodoTitle = (title) => {
//   if (!title.length) return `Please enter a value`
// }

// export const validateTodoContent = (content) => {
//   if (!content.length) return `Please enter a value`
// }

function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30
}

function isValidAmount(value) {
  const amount = parseFloat(value)
  return !isNaN(amount) && amount > 0
}

function isValidDate(value) {
  return value && new Date(value).getTime() < new Date().getTime()
}

export function validateExpenseInput(input) {
  let validationErrors = {}

  if (!isValidTitle(input.title)) {
    validationErrors.title =
      "Invalid expense title. Must be at most 30 characters long."
  }

  if (!isValidAmount(input.amount)) {
    validationErrors.amount =
      "Invalid amount. Must be a number greater than zero."
  }

  if (!isValidDate(input.date)) {
    validationErrors.date = "Invalid date. Must be a date before today."
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors
  }
}

function isValidEmail(value) {
  return value && value.includes("@")
}

function isValidPassword(value) {
  return value && value.trim().length >= 7
}

export function validateCredentials(input) {
  let validationErrors = {}

  if (!isValidEmail(input.email)) {
    validationErrors.email = "Invalid email address."
  }

  if (!isValidPassword(input.password)) {
    validationErrors.password =
      "Invalid password. Must be at least 7 characters long."
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors
  }
}
