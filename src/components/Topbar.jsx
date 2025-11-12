// import React from 'react'
// import ThemeToggle from './ToggleButton'


// const Topbar = () => {
//     return (
//         <div className="flex items-center justify-between px-4 py-3 shadow-sm bg-white dark:bg-gray-800">
//             <div className="text-2xl font-semibold">Dashboard</div>
//             <div className="flex items-center gap-4">
//                 <ThemeToggle />
//             </div>
//         </div>
//     )
// }


// export default Topbar

import React from 'react'
import ThemeToggle from './ToggleButton'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <div className="flex items-center justify-between px-4 py-3 shadow-sm bg-white dark:bg-gray-800">
            {/* Dashboard link */}
            <Link
                to="/"
                className="text-lg font-semibold cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
                Dashboard
            </Link>

            <div className="flex items-center gap-4">
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Topbar
