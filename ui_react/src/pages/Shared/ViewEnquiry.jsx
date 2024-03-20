import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

const ViewEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [enquiryDate, setEnquiryDate] = useState('');
  const [courseName, setCourseName] = useState('');
  const [enquiryDescription, setEnquiryDescription] = useState('');
  const [email, setEmail] = useState('');

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
  };

  return (
    <div className="container mx-auto mt-6 px-4 py-8 max-w-md shadow-md rounded-lg bg-white">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">Student Enquiry Form</h1>

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

export default ViewEnquiry;
