import React, { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">

            <button
                className="sm:hidden px-4 py-2 m-2 rounded-md cursor-pointer bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
            </button>


            {isOpen && (
                <div className="sm:hidden absolute left-2 top-14 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg w-48 z-50">
                    <ul className="flex flex-col space-y-2 p-2">
                        <li className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                            Profile
                        </li>
                        <li className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                            Settings
                        </li>
                        <li className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                            Help
                        </li>
                    </ul>
                </div>
            )}


            <aside className="hidden sm:block w-64 p-4 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-56px)]">
                <div className="mb-6 font-semibold">Menu</div>
                <ul className="space-y-2 text-sm">
                    <li className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                        Profile
                    </li>
                    <li className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                        Settings
                    </li>
                    <li className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                        Help
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
