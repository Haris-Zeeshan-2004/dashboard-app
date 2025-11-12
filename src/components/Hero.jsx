import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
    const [profile, setProfile] = useState({ fullName: "", email: "", bio: "" });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setProfile({
                fullName: "Haris Zeeshan",
                email: "haris@example.com",
                bio: "Hello! I am a frontend developer.",
            });
            setLoading(false);
        }, 1000);
    }, []);


    useEffect(() => {
        const savedData = localStorage.getItem("userData");
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setProfile({
                    fullName: parsed.fullName || "",
                    email: parsed.email || "",
                    bio: parsed.bio || "",
                });
            } catch (err) {
                console.error("Error parsing localStorage data", err);
            }
        }
    }, []);


    const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });


    const handleSubmit = (e) => {
        e.preventDefault();
        setSaving(true);
        localStorage.setItem("userData", JSON.stringify(profile));
        setTimeout(() => {
            setSaving(false);
            toast.success("Profile saved successfully!");
        }, 500);
    };

    if (loading) return <div className="text-center py-10 dark:text-white">Loading...</div>;

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
                <form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg w-full max-w-md transition-colors duration-300"
                >
                    <h2 className="text-2xl font-semibold text-center mb-6 dark:text-white">
                        User Information
                    </h2>


                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your name"
                            value={profile.fullName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                            required
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                            required
                        />
                    </div>


                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Bio</label>
                        <textarea
                            name="bio"
                            placeholder="Write something about yourself..."
                            value={profile.bio}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                            rows="3"
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-400"
                    >
                        {saving ? "Saving..." : "Save"}
                    </button>
                </form>
            </div>


            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Hero;

