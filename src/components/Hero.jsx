import { assets } from "@/assets/assets";
import { useTheme } from "@/Context/ThemeContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
    const navigate = useNavigate();
    const { backendurl } = useTheme()
    const [State, setState] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true;

            if (State === "Sign Up") {
                const { data } = await axios.post(`${backendurl}/api/auth/register`, {
                    name,
                    email,
                    password,
                });

                if (data.success) {
                    toast.success("Register successfully!.Please Login");
                } else {
                    toast.error(data.message || "Something went wrong");
                }
            } else {
                const { data } = await axios.post(`${backendurl}/api/auth/Login`, {
                    email,
                    password,
                });

                if (data.success) {
                    toast.success("Logged in successfully!");
                    navigate("/profile");
                } else {
                    toast.error(data.message || "Invalid credentials");
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };
    return (
        <div className="flex flex-col sm:flex-row py-2 gap-2 dark:text-white">

            <div className="w-full sm:w-1/6 sm:h-screen sm:border-r-2 border-gray-200 shadow-lg dark:border-gray-700 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <h2 className="font-bold text-2xl border-b-2 border-gray-200 dark:border-gray-600 sm:py-2 sm:px-2 px-2 py-2">
                    Menu
                </h2>
                <ul className="flex flex-row sm:flex-col my-3 sm:m-0 gap-2 sm:gap-2">
                    <li className="sm:pt-2 px-2 py-2 rounded cursor-pointer">
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `block  rounded transition-colors ${isActive ? "bg-gray-200  py-2 dark:bg-gray-800 font-bold" : "hover:bg-gray-200   dark:hover:bg-gray-700"
                                }`
                            }
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li className="px-2 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                        Settings
                    </li>
                </ul>
            </div>


            <div className="w-full sm:w-10/12 flex items-center justify-center py-10 sm:py-0">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg w-full max-w-md transition-colors duration-300">
                    <h2 className="text-3xl font-semibold text-center mb-4 dark:text-white">
                        {State === "Sign Up" ? "Create Account" : "Login"}
                    </h2>
                    <p className="text-center mb-6 dark:text-indigo-300">
                        {State === "Sign Up"
                            ? "Create your account"
                            : "Login to your Account"}
                    </p>
                    <form onSubmit={onSubmitHandler}>
                        {State === "Sign Up" && (
                            <div className="mb-4 flex items-center gap-3 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-200">
                                <img src={assets.person_icon} alt="" className="w-5 h-5" />
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="text-gray-800 bg-transparent w-full outline-none placeholder:text-gray-400"
                                />
                            </div>
                        )}

                        <div className="mb-4 flex items-center gap-3 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-200">
                            <img src={assets.mail_icon} alt="" className="w-5 h-5" />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email"
                                required
                                className="text-gray-800 bg-transparent w-full outline-none placeholder:text-gray-400"
                            />
                        </div>
                        <div className="mb-4 flex items-center gap-3 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-200">
                            <img src={assets.lock_icon} alt="" className="w-5 h-5" />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password"
                                required
                                className="text-gray-800 bg-transparent w-full outline-none placeholder:text-gray-400"
                            />
                        </div>

                        <button
                            className="w-full font-semibold text- bg-black text-white py-2 rounded-full hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-400 "
                        >
                            {State}
                        </button>
                    </form>
                    {State === "Sign Up" ? (
                        <p className="text-gray-600 text-center dark:text-white text-xs mt-4">
                            Already have an account?{"  "}
                            <span
                                onClick={() => setState("Login")}
                                className="text-blue-400 cursor-pointer underline"
                            >
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p className="text-gray-600 text-center dark:text-white text-xs mt-4">
                            Don't have an account?{"  "}
                            <span
                                onClick={() => setState("Sign Up")}
                                className="text-blue-400 cursor-pointer underline"
                            >
                                Sign Up
                            </span>
                        </p>
                    )}
                </div>
            </div>


            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Hero;

