import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [collegeSchool, setCollegeSchool] = useState('');
  const [address, setAddress] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user's details from local storage or API
    const storedFullName = localStorage.getItem('fullName');
    const storedEmail = localStorage.getItem('email');
    const storedUsername = localStorage.getItem('username');
    const storedProfileImage = localStorage.getItem('profileImage');
    const storedDateOfBirth = localStorage.getItem('dateOfBirth');
    const storedGender = localStorage.getItem('gender');
    const storedPhone = localStorage.getItem('phone');
    const storedCollegeSchool = localStorage.getItem('collegeSchool');
    const storedAddress = localStorage.getItem('address');

    if (storedFullName) setFullName(storedFullName);
    if (storedEmail) setEmail(storedEmail);
    if (storedUsername) setUsername(storedUsername);
    if (storedProfileImage) setProfileImage(storedProfileImage);
    if (storedDateOfBirth) setDateOfBirth(storedDateOfBirth);
    if (storedGender) setGender(storedGender);
    if (storedPhone) setPhone(storedPhone);
    if (storedCollegeSchool) setCollegeSchool(storedCollegeSchool);
    if (storedAddress) setAddress(storedAddress);
  }, []);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    localStorage.setItem('fullName', e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    localStorage.setItem('email', e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    localStorage.setItem('username', e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem('profileImage', reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
    localStorage.setItem('dateOfBirth', e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    localStorage.setItem('gender', e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    localStorage.setItem('phone', e.target.value);
  };

  const handleCollegeSchoolChange = (e) => {
    setCollegeSchool(e.target.value);
    localStorage.setItem('collegeSchool', e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    localStorage.setItem('address', e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save updated details to local storage or API
    // You can add your save logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <label htmlFor="profile-image" className="cursor-pointer">
            <img
              src={imagePreview || profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
            {isEditing ? (
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            ) : null}
          </label>
          <div>
            <h2 className="text-2xl font-semibold">{username}</h2>
            <h3 className="text-gray-500">{email}</h3>
          </div>
          {!isEditing && (
            <button
              className="ml-4 bg-purple-500 text-white px-4 py-2 rounded-lg"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}
        </div>
        {isEditing && (
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <div className="mb-4">
              <label htmlFor="full-name" className="block mb-1">Full Name</label>
              <input
                type="text"
                id="full-name"
                value={fullName}
                onChange={handleFullNameChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date-of-birth" className="block mb-1">Date of Birth</label>
              <input
                type="date"
                id="date-of-birth"
                value={dateOfBirth}
                onChange={handleDateOfBirthChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block mb-1">Gender</label>
              <select
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="college-school" className="block mb-1">College/School</label>
              <input
                type="text"
                id="college-school"
                value={collegeSchool}
                onChange={handleCollegeSchoolChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-1">Address</label>
              <textarea
                id="address"
                value={address}
                onChange={handleAddressChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
                rows="3"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        )}
        {/* Display saved details */}
        {!isEditing && (
          <div className="mt-8 border-t border-gray-200 pt-4">
            <h3 className="text-xl font-medium mb-2">Personal Details</h3>
            <div className='flex flex-col justify-around space-y-4 mt-6 '>
              <p><strong>Full Name:</strong> {fullName}</p>
              <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
              <p><strong>Gender:</strong> {gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>College/School:</strong> {collegeSchool}</p>
              <p><strong>Address:</strong> {address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;