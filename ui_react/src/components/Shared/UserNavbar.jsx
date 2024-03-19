import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const UserNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setLoggedInUser(userData.userName);
    }
  }, []);

  const NavLinks = [
    {
      title: 'Dashboard',
      path: '/user/dashboard',
    },
    {
      title: 'Subscriptions',
      path: '/user/membership',
    },
    {
      title: loggedInUser ? `${loggedInUser}` : 'Profile',
      path: '/user/profile',
    },
    {
        title: 'Logout',
        path: '/',
      },
  ];

  
  return (
    <>
      <div className='bg-gradient-to-r from-gray-200 to-purple-300 flex items-center justify-center h-16 sticky'>
        <div className='w-5/6 flex items-center justify-between'>
          <h1 className='font-extrabold text-gray-600 text-xl'>
            Z
            <span className='text-violet-800'>inquire</span>
          </h1>
          <ul className='flex w-2/4 justify-evenly items-center font-bold text-violet-700'>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className='border-2 border-transparent p-5'>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
