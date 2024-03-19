import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Login / Signup",
      path: "/login"
    }
  ]
  return (
    <>
      <div className='bg-gradient-to-r from-gray-200 to-purple-300 flex items-center justify-center h-16  sticky'>
        <div className='w-5/6 flex items-center justify-between'>
          <h1 className='font-extrabold text-gray-600 text-xl'>
            Z
            <span className=' text-violet-800'>
              inquire
            </span>
          </h1>
          <ul className='flex w-2/4 justify-evenly items-center font-bold text-violet-700'>
            {
              NavLinks.map((links, index) => (
                <li key={index}>
                  <NavLink to={links.path} className="border-2 border-transparent p-5">
                    {links.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar