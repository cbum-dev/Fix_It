import React from 'react'
import {useState} from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'

const Registration = () => {  
  const { handleRegister } = useAuth() // Assuming useAuth returns a function for registration

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });


  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
    // console.log('CREDS:', credentials);
  };

  return ( 
    <div className="bg-inherit">
    <div className='' >
      <h1 className='text-4xl md:text-6xl lg:text-7xl text-center text-white my-4'>Register</h1>
      <form onSubmit={(e) => handleRegister(e, credentials)} className="my-6 bg-slate-900 px-4 py-6 rounded-3xl w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={credentials.name}
            placeholder="Enter your name..."
            onChange={(e) => handleInputChange(e)}
            className="hover:animate-pulse appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={credentials.email}
            onChange={(e) => handleInputChange(e)}
            className="hover:animate-pulse appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            name="password1"
            placeholder="Enter a password..."
            value={credentials.password1}
            onChange={(e) => handleInputChange(e)}
            className="hover:animate-pulse appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">Confirm password:</label>
          <input
            type="password"
            name="password2"
            placeholder="Confirm your password..."
            value={credentials.password2}
            onChange={(e) => handleInputChange(e)}
            className="hover:animate-pulse appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="submit"
            value="Register"
            className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
         <p className='text-sm md:text-xl text-white'>
        Already have an account? Login <Link className='text-blue-300' to="/login">here</Link>
      </p>
      </form>

     
    </div>
  </div>
  )
}

export default Registration;
