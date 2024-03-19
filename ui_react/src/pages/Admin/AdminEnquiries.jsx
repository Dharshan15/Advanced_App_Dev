import React, { useState, useEffect } from 'react';

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    // Fetch enquiries from local storage on component mount
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries'));
    if (storedEnquiries) {
      setEnquiries(storedEnquiries);
    }
  }, []);

  const handleNoteEnquiry = (id) => {
    const updatedEnquiries = enquiries.filter((enquiry) => enquiry.id !== id);
    setEnquiries(updatedEnquiries);
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));
    alert('Enquiry noted');
  };

  const handleReportEnquiry = (id) => {
    const updatedEnquiries = enquiries.filter((enquiry) => enquiry.id !== id);
    setEnquiries(updatedEnquiries);
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));
    alert('Enquiry reported and removed.');
  };

  // Function to group enquiries in pairs
  const groupEnquiriesInPairs = (enquiries) => {
    const groupedEnquiries = [];
    for (let i = 0; i < enquiries.length; i += 2) {
      groupedEnquiries.push(enquiries.slice(i, i + 2));
    }
    return groupedEnquiries;
  };

  const groupedEnquiries = groupEnquiriesInPairs(enquiries);

  return (
    <div className="container mt-6 mx-auto px-4 py-8 max-w-4xl shadow-md rounded-lg bg-white">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-6">List of Enquiries</h1>
      <div className="mt-8">
        {groupedEnquiries.map((enquiryPair, index) => (
          <div key={index} className="flex flex-wrap justify-between">
            {enquiryPair.map((enquiry) => (
              <div key={enquiry.id} className="w-full p-4">
                <div className="border border-gray-300 rounded-lg p-4">
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
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => handleNoteEnquiry(enquiry.id)}
                      className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
                    >
                      Note
                    </button>
                    <button
                      onClick={() => handleReportEnquiry(enquiry.id)}
                      className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
                    >
                      Report
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEnquiries;
