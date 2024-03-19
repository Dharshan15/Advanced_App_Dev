import React, { useState, useEffect } from 'react';

const AdminCourse = () => {
  // Initialize courses state with an empty array
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: '',
    duration: '',
    offeredBy: '',
    fee: '',
  });

  useEffect(() => {
    // Load courses from local storage on component mount
    const storedCourses = JSON.parse(localStorage.getItem('courses'));
    if (storedCourses) {
      setCourses(storedCourses);
    }
  }, []);

  useEffect(() => {
    // Save courses to local storage whenever courses state changes
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const handleAddCourse = () => {
    // Your logic to add a new course
    if (newCourse.name && newCourse.duration && newCourse.offeredBy && newCourse.fee) {
      const updatedCourses = [
        ...courses,
        { ...newCourse, id: Math.max(...courses.map((course) => course.id), 0) + 1 },
      ];
      setCourses(updatedCourses);
      setNewCourse({ name: '', duration: '', offeredBy: '', fee: '' });
    } else {
      alert('Please fill in all fields to add a new course.');
    }
  };

  const handleEditCourse = (id) => {
    setEditingCourseId(id); // Set editingCourseId to the selected course ID
    const courseToEdit = courses.find((course) => course.id === id);
    setNewCourse(courseToEdit); // Populate the form with the course data to edit
  };

  const handleSaveEdit = () => {
    const updatedCourses = courses.map((course) =>
      course.id === editingCourseId ? { ...newCourse, id: editingCourseId } : course
    );
    setCourses(updatedCourses);
    setEditingCourseId(null); // Reset editingCourseId after saving edit
    setNewCourse({ name: '', duration: '', offeredBy: '', fee: '' }); // Clear the form fields
  };

  const handleDeleteCourse = (id) => {
    // Your logic to delete a course
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Courses</h2>
          <p className="mt-4 text-lg text-gray-600">Manage courses: Add, Edit, and Delete</p>
        </div>
        <div className="mt-12">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Add New Course</h3>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Course Name"
                className="border border-gray-300 rounded-md px-3 py-1 mr-2"
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Duration"
                className="border border-gray-300 rounded-md px-3 py-1 mr-2"
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
              />
              <input
                type="text"
                placeholder="Offered By"
                className="border border-gray-300 rounded-md px-3 py-1 mr-2"
                value={newCourse.offeredBy}
                onChange={(e) => setNewCourse({ ...newCourse, offeredBy: e.target.value })}
              />
              <input
                type="text"
                placeholder="Course Fee"
                className="border border-gray-300 rounded-md px-3 py-1 mr-2"
                value={newCourse.fee}
                onChange={(e) => setNewCourse({ ...newCourse, fee: e.target.value })}
              />
              <button
                className="bg-purple-400 text-white px-4 py-1 rounded-md hover:bg-purple-300"
                onClick={handleAddCourse}
              >
                Add
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  <div className="flex justify-between items-center">
                  <button
                  className="text-sm text-purple-500 hover:underline"
                  onClick={() => handleEditCourse(course.id)}
                >
                  Edit
                </button>
                <button
                  className="text-sm text-red-500 hover:underline ml-2"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  Delete
                </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;
