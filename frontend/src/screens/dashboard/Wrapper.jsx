import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import AdminNav from '../../components/AdminNav'
function Wrapper({children}) {
  const [sideNav,setSideNav] = useState('-left-64');
  const openSideBarNav = () => {
    setSideNav('left-0');
  }
  const closeSideBarNav = () => {
    setSideNav('-left-64')
  }
  return (
    <>
    <Sidebar sideNav={sideNav} closeSideBarNav={closeSideBarNav}/>
    <AdminNav openSideBarNav={openSideBarNav}/>
    <section className='sm:ml-64 bg-[#f1f1f1] min-h-screen pt-24 px-4'>
        <div className='bg-[#fff] p-4'>

            {children}

        </div>
    </section>
    </>
  )
}

export default Wrapper