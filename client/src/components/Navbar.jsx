import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authStore from '../stores/authStore';

export default function Navbar() {
  const store = authStore();
  return (
    <div className='bg-slate-500 p-4 flex justify-between' >
      <ul className='flex gap-4 items-center'>
        <li>
          <Link className='text-white font-bold capitalize' to='/'>Home</Link>
        </li>
        {store.loggedIn === true ?
          <li>
            <Link className='text-white font-bold capitalize' to='/logout'>logout</Link>
          </li> : <>

            <li>
              <Link className='text-white font-bold capitalize' to='/login'>login</Link>
            </li>
            <li>
              <Link className='text-white font-bold capitalize' to='/signup'>sign up</Link>
            </li>
          </>
        }
      </ul>

      {/* user profile */}
      <h4 className='text-white font-bold capitalize'>Hello , {store.user?.username ? store.user?.username : "there"}</h4>
    </div>
  )
}
