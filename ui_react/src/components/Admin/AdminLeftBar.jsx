import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, CreditCard, BookCheck, Cog, Mail, Users, Globe, User, LogOut } from 'lucide-react'
const AdminLeftbar = () => {
    const navigate = useNavigate()
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Courses',
            path: '/admin/courses',
            icon: LayoutDashboard
        },
        {
            title: 'Enquiries',
            path: '/admin/enquiries',
            icon: LayoutDashboard
        },
        
        {
            title: 'Profile',
            path: '/admin/profile',
            icon: User
        },
        {
            title: 'Logout',
            path: '/',
            icon: LogOut
        },
    ]
    const handleLogout = () => {
        navigate('/login')
    }
    return (
        <>

            <div className='w-[15vw] bg-purple-200 shadow-md shadow-purple-500 flex flex-col'>
                <div className='h-[5vh]  text-black flex items-center justify-center mt-8 mb-36 w-full font-bold '>
                <h1 className='font-extrabold text-gray-600 text-xl'>
            Z
            <span className='text-violet-800'>inquire</span>
          </h1>
                </div>
                <div className='h-[90vh] flex flex-col gap-1'>
                    {
                        UserLinks.map((link, index) => (
                            <NavLink key={index} to={link.path} className='p-5 border-b-4font-bold mt-2'>
                                <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                    {React.createElement(link.icon, { size: 20 })}
                                    {link.title}
                                </span>
                            </NavLink>
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default AdminLeftbar;