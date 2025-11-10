import React from 'react'
import ThemeToggle from './ToggleButton'


const Topbar = () => {
    return (
        <div className="flex items-center justify-between px-4 py-3 shadow-sm bg-white dark:bg-gray-800">
            <div className="text-lg font-semibold">Dashboard</div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
            </div>
        </div>
    )
}


export default Topbar