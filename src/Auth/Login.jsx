import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    };

    return (
        <div className="flex items-center justify-center h-screen  w-screen">
            <div className="bg-slate-900 p-8 h-2/5 rounded-xl shadow-md  w-3/4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl text-center mb-6 font-semibold text-gray-200">Login</h1>
                <form>
                    <div className="mb-4">
                        <input
                            className="bg-slate-300 w-full mt-6 p-3 border rounded-md focus:outline-none focus:border-blue-500"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="bg-slate-300 w-full mt-6 mb-6 p-3 border rounded-md focus:outline-none focus:border-blue-500"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-900 hover:border-2 focus:outline-none"
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
