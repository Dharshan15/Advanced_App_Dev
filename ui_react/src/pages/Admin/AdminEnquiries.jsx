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

  const handleStatusChange = (id, status) => {
    const updatedEnquiries = enquiries.map(enquiry =>
      enquiry.id === id ? { ...enquiry, status } : enquiry
    );
    setEnquiries(updatedEnquiries);
    localStorage.setItem('enquiries', JSON.stringify(updatedEnquiries));
    alert(`Enquiry status changed to ${status}`);
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
    <div className="w-screen mt-6 mx-auto px-4 py-8 max-w-4xl shadow-md rounded-lg bg-white">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-6">List of Enquiries</h1>
      <div className="mt-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-purple-500 text-white">
              <th className="p-2">Date</th>
              <th className="p-2">Course</th>
              <th className="p-2">Description</th>
              <th className="p-2">Email</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {groupedEnquiries.map((enquiryPair, index) => (
              <React.Fragment key={index}>
                {enquiryPair.map((enquiry) => (
                  <tr key={enquiry.id} className="border border-gray-300">
                    <td className="p-2">{enquiry.date}</td>
                    <td className="p-2">{enquiry.course}</td>
                    <td className="p-2">{enquiry.description}</td>
                    <td className="p-2">{enquiry.email}</td>
                    <td className="p-2">
                      <select
                        value={enquiry.status}
                        onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                        className="bg-white border border-gray-300 p-1 rounded-md"
                      >
                        <option value="pending">Pending</option>
                        <option value="cleared">Cleared</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEnquiries;
