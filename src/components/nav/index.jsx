import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 bg-blue-200'>
      <Link to={'/'} className='font-bold'>logo</Link>
      <ul className='flex justify-between items-center gap-4'>
        <li><Link to={'/'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/news'}>News</Link></li>
        <li><Link to={'/create'}>Create News</Link></li>
      </ul>
    </div>
  )
}

export default Navbar