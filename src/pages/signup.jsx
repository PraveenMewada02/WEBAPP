// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import logo from '/src/Logo (1).png';
import odt_logo from "/src/White-logo-1 (1).png";
// eslint-disable-next-line no-unused-vars
// import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password1: '',
    password2: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://web-back-zzo1.onrender.com/User/register', formData);
      if (response.data.message) {
        alert('Registration successful');
        navigate('/');
      }
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.error);
    }
  };
  return (
    <div className="flex  height-main  dark:bg-slate-800 flex-1 flex-col justify-center lg:px-8">
      {/* <div className="grid grid-flow-row-dense  grid-cols-2 mt-2"> */}
            
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
            {/* <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" /> */}
            <img className="mx-auto h-8 mb-10 w-8 height-50" src={odt_logo} alt="Your Company" />
              <h2 className=" mb-6 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up to your account
              </h2>
              <form className= "grid grid-cols-2 gap-4 space-y-6 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" onSubmit={handleSubmit}>
                <div className="col-span-2">
                  <label htmlFor="username" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Username</label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2 mt-0">
                  <label htmlFor="email" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Email</label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-0" > 
                  <label htmlFor="password1" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="mt-0">
                    <input
                      id="password1"
                      name="password1"
                      type="password"
                      value={formData.password1}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-0">
                  <label htmlFor="password2" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Re-enter Password</label>
                  <div className="mt-0">
                    <input
                      id="password2"
                      name="password2"
                      type="password"
                      value={formData.password2}
                      onChange={handleChange}
                      
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2 mt-2">
                  <button type="submit" className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                    Sign up
                  </button>
                </div>
              </form>
              <p className="mt-1 text-center text-sm p-6 text-gray-500 dark:text-white">
                Already a member?{' '} 
                <a href="/" className="font-semibold leading-6 text-blue-500 hover:text-blue-500">SignIn</a>
                <FcGoogle className='text-3xl text-center cus_mar text-white mt-6' />
              </p>
            </div>
      </div>
    // </div>
  );
}



export default Form;
