import React, { useState, useEffect } from 'react';

const CoursePage = () => {
  // State to manage courses
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Load courses from local storage on component mount
    const storedCourses = JSON.parse(localStorage.getItem('courses'));
    if (storedCourses) {
      setCourses(storedCourses);
    }
  }, []);

  // Function to add a new course
  const handleAddCourse = () => {
    // Your logic to add a new course

    // Update local storage with the updated courses array
    localStorage.setItem('courses', JSON.stringify(courses));
  };

  // Function to edit a course
  const handleEditCourse = (id) => {
    // Your logic to edit a course

    // Update local storage with the updated courses array
    localStorage.setItem('courses', JSON.stringify(courses));
  };

  // Function to delete a course
  const handleDeleteCourse = (id) => {
    // Your logic to delete a course

    // Update local storage with the updated courses array
    localStorage.setItem('courses', JSON.stringify(courses));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Explore Courses</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover a wide range of courses to enhance your skills.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white overflow-hidden shadow-lg rounded-lg mb-6">
              <div className="px-4 py-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Offered By:</span> {course.offeredBy}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Course Fee:</span> {course.fee}
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100 text-center">
                <button
                  className="text-sm text-purple-500 hover:underline"
                  
                >
                  View
                </button>
                {/* <button
                  className="text-sm text-red-500 hover:underline ml-2"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  Delete
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
