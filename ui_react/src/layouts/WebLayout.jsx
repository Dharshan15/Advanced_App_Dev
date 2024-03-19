import React from 'react'
import Navbar from '../components/Public/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'

const WebLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default WebLayout