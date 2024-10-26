import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to={'/'}>BookLists</NavLink>
      <NavLink to={'/bookForm'}>BookAddForm</NavLink>
    </div>
  )
}

export default Navbar
