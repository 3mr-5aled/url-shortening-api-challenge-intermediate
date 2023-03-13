import React, { useState } from "react"
import menu_img from "../images/menu_lines_hamburger_icon.svg"

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="text-black">
      <div className="container flex flex-row items-center w-full justify-between">
        <div className="flex flex-row items-center">
          <div className="p-5 font-bold text-4xl">Shortly</div>
          <ul className="hidden md:flex p-5 flex-row items-center list-none gap-x-3 [&>*]:text-black [&>*]:text-opacity-60 [&>*]:px-3 [&>*]:font-bold">
            <li className="hover:text-opacity-100 hover:cursor-pointer">
              Features
            </li>
            <li className="hover:text-opacity-100 hover:cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-opacity-100 hover:cursor-pointer">
              Resources
            </li>
          </ul>
        </div>
        <div className="p-4 [&>*]:py-2 [&>*]:px-6 [&>*]:rounded-3xl hidden md:block">
          <button className="text-gray-600 font-bold hover:text-opacity-60">
            Login
          </button>
          <button className="bg-Cyan hover:bg-cyan-300 text-white font-bold">
            Sign Up
          </button>
        </div>
        <div className="flex md:hidden">
          <button
            className="mr-5 text-gray-600 font-bold hover:text-opacity-60"
            onClick={toggleMenu}
          >
            <img src={menu_img} alt="" />
          </button>
          <div
            className={`fixed p-20 text-3xl inset-0 bg-white z-20 transition-opacity duration-300 ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="p-5">
              <ul className="flex flex-col gap-y-5">
                <li className="hover:text-opacity-100 hover:cursor-pointer">
                  Features
                </li>
                <li className="hover:text-opacity-100 hover:cursor-pointer">
                  Pricing
                </li>
                <li className="hover:text-opacity-100 hover:cursor-pointer">
                  Resources
                </li>
              </ul>
              <button
                className="text-gray-600 text-center text-lg font-bold hover:text-opacity-60 mt-4"
                onClick={closeMenu}
              >
                Exit Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
