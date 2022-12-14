import React from "react"

const Button = ({ children, type, className, color, size }) => {
  const buttonSizes = {
    sm: "px-4 py-1.5 rounded-sm",
    md: "px-6 py-3 rounded-md",
    lg: "px-7 py-4 rounded-lg",
  }

  const buttonColors = {
    primary: "bg-blue-500 active:bg-blue-700",
    secondary: "bg-slate-500 active:bg-slate-700",
    info: "bg-cyan-500 active:bg-cyan-700",
    danger: "bg-red-500 active:bg-red-700",
    warning: "bg-orange-500 active:bg-orange-700",
    success: "bg-emerald-600 active:bg-emerald-800",
  }

  let buttonBase =
    "m-2 inline-block text-white font-bold uppercase align-middle transition-all cursor-pointer leading-normal text-xs ease-in tracking-tight-rem "
  let buttonEffects =
    "shadow-xs bg-150 bg-x-25 hover:-translate-y-px hover:shadow-md "
  let buttonSize = buttonSizes[size] || buttonSizes.md
  let buttonColor = buttonColors[color] || buttonColors.primary
  let buttonClassName = `${buttonBase} ${buttonEffects} ${buttonSize} ${buttonColor} `

  return (
    <button
      type={type ? type : "button"}
      className={buttonClassName + className}
    >
      {children}
    </button>
  )
}

export default Button
