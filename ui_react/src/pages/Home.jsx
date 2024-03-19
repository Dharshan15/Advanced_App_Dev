import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen -mt-20 -mb-16 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Z<span className='text-violet-800'>inquire</span>, Student Enquiry Portal</h1>
      <p className="text-lg text-gray-600 mb-8">Explore courses, ask questions, and find the right answers here.</p>
      <div className="flex space-x-4">
        <NavLink to='/login'>
          <button className="bg-purple-500 hover:bg-purole-600 w text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none">
            Get Started
          </button>
        </NavLink>
      
      </div>
    </div>
  );
};

export default Home;
