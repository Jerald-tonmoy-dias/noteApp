import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import authStore from '../stores/authStore';

export default function Navbar() {
  // const store = authStore();
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await store.logout
  //     navigate('/login');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className='bg-slate-500 p-4' >
      <ul className='flex gap-4 items-center'>
        <li>
          <Link className='text-white font-bold capitalize' to='/'>Home</Link>
        </li>
        <li>
          <Link className='text-white font-bold capitalize' to='/login'>login</Link>
        </li>
        <li>
          <Link className='text-white font-bold capitalize' to='/signup'>signup</Link>
        </li>
        <li>
          <Link className='text-white font-bold capitalize' to='/logout'>logout</Link>
        </li>
        {/* <li>
          <button onClick={handleLogout} className='text-white font-bold capitalize  bg-black px-4 py-2'>logout</button>
        </li> */}
      </ul>

    </div>
  )
}
