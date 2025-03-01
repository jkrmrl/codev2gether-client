import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/authActions"; 
import { register } from "../actions/registerActions"; 

interface FormProps {
    login: (username: string, password: string) => void;
    register: (name: string, username: string, password: string, confirmPassword: string) => void; // Add register prop
    loading: boolean;
    errorMessage: string | null;
}

const Form: React.FC<FormProps> = ({ login, register, loading, errorMessage }) => {
    const location = useLocation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (location.pathname === "/login") {
            login(username, password);
        } else if (location.pathname === "/register") {
            register(name, username, password, confirmPassword); 
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg mt-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                {location.pathname === "/login" ? "Login" : "Register"}
            </h2>
            <form onSubmit={handleSubmit}>
                {location.pathname === "/register" && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                {location.pathname === "/register" && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue
hover:bg-blue-500"
                    disabled={loading}
                >
                    {loading ? "Loading..." : location.pathname === "/login" ? "Login" : "Register"}
                </button>
                {errorMessage && <p className="text-red-600 mt-2 text-center">{errorMessage}</p>}
            </form>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    loading: state.auth.loading || state.register.errorMessage,
    errorMessage: state.auth.errorMessage || state.register.errorMessage,
});

const mapDispatchToProps = {
    login,
    register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);