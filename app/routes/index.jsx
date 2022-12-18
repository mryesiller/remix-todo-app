import Button from "~/components/common/Button"
import { Link } from "@remix-run/react"

import Navbar from "~/components/navigation/mainNavigation"
import NavbarListLink from "~/components/navigation/navbarLink"

const navProps = { color: "orange", className: "text-white" }

export default function Index() {
  return (
    <div className="w-full">
      <Navbar {...navProps}>
        <NavbarListLink to="/dashboard">Dashboard</NavbarListLink>
        <NavbarListLink to="/auth">Login</NavbarListLink>
      </Navbar>

      <br></br>
      <button
        type="button"
        className="mr-3 inline-block px-6 py-3 font-bold text-center bg-gradient-to-tl from-blue-500 to-violet-500 uppercase align-middle transition-all rounded-lg cursor-pointer leading-normal text-xs ease-in tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md text-white"
      >
        Button
      </button>
    </div>
  )
}
