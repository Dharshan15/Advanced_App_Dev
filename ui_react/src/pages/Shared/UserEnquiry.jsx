import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

const UserEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [enquiryDate, setEnquiryDate] = useState('');
  const [courseName, setCourseName] = useState('');
  const [enquiryDescription, setEnquiryDescription] = useState('');
  const [email, setEmail] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Fetch enquiries from local storage on component mount
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries'));
    if (storedEnquiries) {
      setEnquiries(storedEnquiries);
    }
  }, []);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    const newEnquiry = {
      id: new Date().getTime(), // Generate unique ID
      date: enquiryDate,
      course: courseName,
      description: enquiryDescription,
      email: email,
    };

    const updatedEnquiries = [...enquiries, newEnquiry];
    setEnquiries(updatedEnquiries);

    // Save enquiries to local storage
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));

    // Clear form fields after submission
    setEnquiryDate('');
    setCourseName('');
    setEnquiryDescription('');
    setEmail('');

    // Close the overlay after submission
    setShowOverlay(false);
  };

  return (
    <div className="container mx-auto mt-6 px-4 py-8 max-w-md shadow-md rounded-lg bg-white">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">Student Enquiry Form</h1>
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mb-4 focus:outline-none flex items-center justify-center"
        onClick={() => setShowOverlay(true)}
      >
        <Plus size={24} className="mr-2" /> Add Enquiry
      </button>

      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowOverlay(false)}
            >
              Close
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-purple-500">Add Enquiry</h2>
            <form onSubmit={handleEnquirySubmit}>
              <div className="mb-4">
                <label htmlFor="enquiry-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Enquiry Date
                </label>
                <input
                  type="date"
                  id="enquiry-date"
                  value={enquiryDate}
                  onChange={(e) => setEnquiryDate(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="course-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  id="course-name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="enquiry-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Enquiry Description
                </label>
                <textarea
                  id="enquiry-description"
                  value={enquiryDescription}
                  onChange={(e) => setEnquiryDescription(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                  rows="3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Display Enquiries */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-500">Enquiries</h2>
        <ul className="divide-y divide-gray-300">
          {enquiries.map((enquiry) => (
            <li key={enquiry.id} className="py-4 px-4 flex flex-col space-y-2 border-b border-gray-300">
              <p className="text-gray-800">
                <strong>Date:</strong> {enquiry.date}
              </p>
              <p className="text-gray-800">
                <strong>Course:</strong> {enquiry.course}
              </p>
              <p className="text-gray-800">
                <strong>Description:</strong> {enquiry.description}
              </p>
              <p className="text-gray-800">
                <strong>Email:</strong> {enquiry.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserEnquiry;
