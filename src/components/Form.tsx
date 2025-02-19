import React from 'react';

const Form: React.FC = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg mt-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
            <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                Username
                </label>
                <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>
    
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500"
            >
                Submit
            </button>
            </form>
        </div>
    )
}

export default Form;