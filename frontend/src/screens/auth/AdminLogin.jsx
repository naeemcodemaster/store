import React from 'react'

function AdminLogin() {
  return (
    <div className='bg-[#f3f3f3] h-screen flex justify-center items-center'>
        <form className='bg-[#fff] p-3 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded shadow'>
            <h3 className='mb-4 capitalize font-semibold text-lg'>Admin Login</h3>
            <div className='mb-4'>
                <input type='email' name='email' className='w-full p-3 rounded border outline-none' placeholder='Enter Email'/>
            </div>
            <div className='mb-4'>
                <input type='password' name='password' className='w-full p-3 rounded border outline-none' placeholder='Enter Password'/>
            </div>
            <div className='mb-4'>
                <input type='submit' value='Sign in' className='bg-primary text-white p-2 rounded cursor-pointer hover:bg-secondary w-full uppercase font-semibold'/>
            </div>
        </form>
    </div>
  )
}

export default AdminLogin