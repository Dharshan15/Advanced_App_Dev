import React from 'react'
import AdminLeftBar from '../components/Admin/AdminLeftBar'
import { Outlet } from 'react-router-dom'


const AdminLayout = () => {
  return (
    <>
              <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <AdminLeftBar />
                <div className='h-screen'>
                    <div className='w-[85vw] h-[95vh] flex flex-col p-2 gap-4'>
                        <Outlet />
                    </div>
                </div>
                </div>
    </>
  )
}

export default AdminLayout