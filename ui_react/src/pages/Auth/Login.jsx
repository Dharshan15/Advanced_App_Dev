import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const storedData = JSON.parse(localStorage.getItem('signupData'));

    if (email === 'admin@zinquire.com') {
      navigate('/admin/dashboard'); // Redirect to admin dashboard if admin email
    }
    else{
      const storedData = JSON.parse(localStorage.getItem('signupData'));
      if (storedData && storedData.email === email && storedData.password === password) {
        navigate('/user/dashboard'); // Redirect to user dashboard if credentials match
      } else {
        alert('Invalid email or password');
      }
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-20 mb-28">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-purple-800">Login</h1>
          <p className="mt-2 text-gray-500">Login below to access your account</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autoComplete="NA"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-purple-700 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Don&#x27;t have an account yet?{' '}
              <Link
                to='/signup'
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Sign up
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
