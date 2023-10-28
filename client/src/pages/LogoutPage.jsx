import React, { useEffect } from 'react'
import authStore from '../stores/authStore'
// import { useNavigate } from 'react-router-dom';


export default function LogoutPage() {
  const store = authStore();
  // const navigate = useNavigate();

  useEffect(() => {
    store.logout()
  }, [])



  return (
    <div className='shadow py-10'>
      <h1 className='text-center font-bold uppercase mb-4'>Log out successfully!!</h1>
    </div>
  )
}
