import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/eshop_logo.jpeg'
import { BsBagHeartFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { LuBarChart } from "react-icons/lu";



function Sidebar({sideNav,closeSideBarNav}) {
  return (
    <div className={`fixed top-0 ${sideNav} sm:left-0 w-64 h-screen bg-[#fff] z-10 transition-all`}>
        <div className='absolute top-4 right-4 sm:hidden block cursor-pointer text-2xl' onClick={closeSideBarNav}>
        <MdClose />
        </div>
        <div className='pt-4'>
            {/* <img src={logo} alt='logo' className='w-10 rounded'/> */}
            <h2 className='px-4 font-semibold flex items-center gap-2'><BsBagHeartFill /> E-Shop <span className='text-primary font-semibold'>Store</span></h2>
        </div>
        <ul className='mt-10'>
            <li className='px-4 py-3 cursor-pointer transition-all flex items-center gap-2 hover:bg-primary hover:text-white'><CiShoppingCart /> <Link to={'/dashboard/products'} className='text-base capitalize'> Products</Link></li>
            <li className='px-4 py-3 cursor-pointer transition-all flex items-center gap-2 hover:bg-primary hover:text-white'><IoBagCheckOutline /> <Link to={'/dashboard/products'} className='text-base capitalize'> Orders</Link></li>
            <li className='px-4 py-3 cursor-pointer transition-all flex items-center gap-2 hover:bg-primary hover:text-white'><LuUsers /> <Link to={'/dashboard/products'} className='text-base capitalize'> Customers</Link></li>
            <li className='px-4 py-3 cursor-pointer transition-all flex items-center gap-2 hover:bg-primary hover:text-white'><LuBarChart />  <Link to={'/dashboard/categories'} className='text-base capitalize'> Categories</Link></li>
            
        </ul>
    </div>
  )
}

export default Sidebar