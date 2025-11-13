import React, { createContext, useState, useEffect, useContext } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const [theme, setTheme] = useState(() => {

        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light"
        }
        return "light"
    })


    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light"
        setTheme(next)
        localStorage.setItem("theme", next)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme,backendurl }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
