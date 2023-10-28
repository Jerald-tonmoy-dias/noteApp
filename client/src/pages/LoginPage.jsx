import React from 'react'
import authStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
  const store = authStore();
  const navigate = useNavigate();


  const submitLogin = async (e) => {
    e.preventDefault();

    // console.log("__click click))__");
    try {
      await store.handleLoginSubmit();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='shadow py-10'>
      <h1 className='text-center font-bold uppercase mb-4'>lOGIN</h1>
      <div >

        <form onSubmit={submitLogin} className='flex flex-col gap-4 justify-center items-center' >
          <input
            value={store.loginFormData.email}
            onChange={store.loginFormOnChange} className='border p-4 rounded-md w-96' type="email" name="email" placeholder='email' />

          <input
            value={store.loginFormData.password}
            onChange={store.loginFormOnChange} className='border p-4 rounded-md w-96' type="password" name="password" placeholder='password' />

          <button className='px-4 py-1 w-96 font-bold text-center uppercase bg-blue-600 rounded-md text-white' type='submit'>login</button>
        </form>
      </div>
    </div>
  )
}
