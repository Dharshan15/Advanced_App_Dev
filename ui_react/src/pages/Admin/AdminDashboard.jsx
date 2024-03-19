import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
  const coursesCount = 10;
  const studentsCount = 150;
  const enquiriesCount = 25;
  const earnings = '$5000';

  return (
    <div className="flex flex-col gap-12 p-4 bg-gray-100 rounded-lg shadow-md h-screen">
  <h1 className="text-4xl font-bold text-center mb-8 text-black">Admin Dashboard</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Courses Box */}
    <NavLink to="/admin/courses">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20 p-6 flex flex-col items-center justify-center hover:bg-purple-50">
        <h2 className="text-xl font-semibold text-black mb-4">Courses</h2>
        <span className="text-gray-500">{coursesCount}</span>
      </div>
    </NavLink>

    {/* Students Box */}
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20 p-6 flex flex-col items-center justify-center hover:bg-purple-50">
      <h2 className="text-xl font-semibold text-black mb-4">Students enrolled</h2>
      <span className="text-gray-500">{studentsCount}</span>
    </div>

    {/* Enquiries Box */}
    <NavLink to="/admin/enquiries">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20 p-6 flex flex-col items-center justify-center hover:bg-purple-50">
        <h2 className="text-xl font-semibold text-black mb-4">Enquiries</h2>
        <span className="text-gray-500">{enquiriesCount}</span>
      </div>
    </NavLink>

    {/* Earnings Box */}
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20 p-6 flex flex-col items-center justify-center hover:bg-purple-50">
      <h2 className="text-xl font-semibold text-black mb-4">Earnings</h2>
      <span className="text-gray-500">{earnings}</span>
    </div>
  </div>
</div>

  );
};

export default AdminDashboard;
