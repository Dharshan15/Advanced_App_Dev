import React from 'react';
import {NavLink } from 'react-router-dom';
import Footer from '../../components/Public/Footer';

const UserDashboard = () => {
  return (
    <div className="flex flex-col gap-12 p-4 bg-gray-100 rounded-lg shadow-md h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {/* View Courses Box */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:bg-purple-50">
          <h2 className="text-xl font-semibold text-black mb-4">View Courses</h2>
          <NavLink to='/user/courses'>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
              Explore Courses
            </button>
          </NavLink>
        </div>

        {/* Courses Enrolled Box */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:bg-purple-50">
          <h2 className="text-xl font-semibold text-black mb-4">Courses Enrolled</h2>
          <span className="text-gray-500">4</span>
        </div>

        {/* Add Enquiry Box (optional for keeping layout consistent) */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:bg-purple-50">
          <h2 className="text-xl font-semibold text-black mb-4">Enquiry</h2>
          <NavLink to='/user/enquiry'><button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            Ask a Question
          </button></NavLink>
        </div>
       

        {/* View Enquiry Box (optional for keeping layout consistent) */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:bg-purple-50">
          <h2 className="text-xl font-semibold text-black mb-4">View Enquiry</h2>
          <NavLink to='/user/viewenquiry'><button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            See Enquiries
          </button></NavLink>
        </div>
      </div>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
};

export default UserDashboard;
