import React from 'react'
import UserNavbar from '../components/Shared/UserNavbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
        <UserNavbar/>
        <Outlet/>
    </>
  )
}

export default UserLayout