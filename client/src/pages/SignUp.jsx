import React from 'react'
import authStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
  const store = authStore();
  const navigate = useNavigate();


  const submitRegister = (e) => {
    e.preventDefault();
    // alert('hi');
    store.handleSignupSubmit()
    // try {
    navigate('/login');
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className='shadow py-10'>
      <h1 className='text-center font-bold uppercase mb-4'>SignUp</h1>
      <div >

        <form onSubmit={submitRegister} className='flex flex-col gap-4 justify-center items-center' >
          <input
            value={store.signupFormData.username}
            onChange={store.signupFormOnChange} className='border p-4 rounded-md w-96' type="text" name="username" placeholder='username' />
          <input
            value={store.signupFormData.email}
            onChange={store.signupFormOnChange} className='border p-4 rounded-md w-96' type="email" name="email" placeholder='email' />

          <input
            value={store.signupFormData.password}
            onChange={store.signupFormOnChange} className='border p-4 rounded-md w-96' type="password" name="password" placeholder='password' />

          <button className='px-4 py-1 w-96 font-bold text-center uppercase bg-blue-600 rounded-md text-white' type='submit'>sign up</button>
        </form>
      </div>
    </div>
  )
}
