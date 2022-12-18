export const FormField = ({ type, htmlFor, children, color }) => {
  const colors = {
    blue: "text-blue-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
  }

  let className = "font-semibold"
  className = className + " " + colors[color]

  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
      <input
        type={type}
        id={htmlFor}
        name={htmlFor}
        className="w-full p-2 rounded-xl my-2"
      />
    </>
  )
}
