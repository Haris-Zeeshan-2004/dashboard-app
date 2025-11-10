import React from 'react'
import { useTheme } from '../Context/ThemeContext'

import { Switch } from '@/components/ui/switch'

const ToggleButton = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="flex items-center gap-2">
            <span className="sr-only">Toggle theme</span>
            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
        </div>
    )
}

export default ToggleButton
