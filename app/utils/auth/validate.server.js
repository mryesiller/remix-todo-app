export const validateEmail = (email) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (!email.length || !validRegex.test(email)) {
    return "Please enter a valid email address"
  }
}

export const validatePassword = (password) => {
  if (password.length < 6) {
    return "Please enter a password that is at least 6 characters long"
  }
}

export const validateName = (name) => {
  if (!name.length) return `Please enter a value`
}

export const validateTodoTitle = (title) => {
  if (!title.length) return `Please enter a value`
}

export const validateTodoContent = (content) => {
  if (!content.length) return `Please enter a value`
}
