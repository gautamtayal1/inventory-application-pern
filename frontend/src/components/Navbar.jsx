import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-2xl">WiseCart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 m-1">
            <li className='text-[18px] bg-secondary mx-3 rounded'><a>Fiction</a></li>
            <li className='text-[18px] bg-secondary mx-3 rounded'><a>Non-Fiction</a></li>
            <li className='text-[18px] bg-secondary mx-3 rounded'><a>Comics</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-[18px] bg-primary mr-4">Add Book</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
