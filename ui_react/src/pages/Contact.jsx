import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center h-[500px] w-[400px] border border-black rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" placeholder="Your Message"></textarea>
        </div>
        <div className="text-center">
          <Link to='/'><button type="submit" className="bg-purple-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-purple-600">Send</button></Link>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default Contact;