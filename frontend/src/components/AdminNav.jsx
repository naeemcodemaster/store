import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../store/reducers/AuthReducer';
import { TbMenu2 } from "react-icons/tb";

function AdminNav({openSideBarNav}) {
  const dispatch = useDispatch();
  const adminLogout = () =>{
    dispatch(logout());
    
  }
  return (
    <nav className='fixed left-0 sm:left-64 top-4 right-0 mx-4'>
        <div className='bg-[#fff] w-full flex justify-between sm:justify-end items-center p-2'>
        <TbMenu2 className='text-2xl cursor-pointer sm:hidden block' onClick={openSideBarNav}/>
            <button onClick={adminLogout} className='py-2 px-4 bg-primary hover:bg-secondary text-white rounded-md capitalize'> Logout</button>
        </div>
    </nav>
  )
}

export default AdminNav