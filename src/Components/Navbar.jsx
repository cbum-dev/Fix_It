import React from 'react';
// Assuming you are using React Router for navigation

const Navbar = () => {
    return (
        <nav className=" bg-gray-900 border-2 border-black rounded-lg w-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a to="/" className="flex-shrink-0 flex">
                            <img className="h-10 w-10 m-2 rounded-full" src="public/pullrequest-logo-1200px-square.png" alt="" />
                            <h1 className="text-4xl m-1 hover:first-letter:text-gray-900">Fix It</h1>
                        </a>
                        <div className="hidden md:block ml-4">
                            <div className="flex items-baseline space-x-4">
                                <a to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a to="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                                <a to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb for smaller screens */}
            <div className="md:hidden px-4 py-2 bg-gray-400">
                <a to="/" className="text-gray-700 hover:text-white">Home</a>
                <span className="mx-2 text-gray-700">/</span>
                <span className="text-gray-700">Current Page</span>
            </div>
        </nav>
    );
};

export default Navbar;
