import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <Link to ='/home' className="btn btn-ghost text-2xl">WiseCart</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 m-1">
            <li className='text-[18px] mx-3 rounded'><Link to='/fiction'>Fiction</Link></li>
            <li className='text-[18px] mx-3 rounded'><Link to='/nonFiction'>Non-Fiction</Link></li>
            <li className='text-[18px] mx-3 rounded'><Link to='/comics'>Comics</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/add' className="btn text-[18px] bg-secondary mr-4">Add Book</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
