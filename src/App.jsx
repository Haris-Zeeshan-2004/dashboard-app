import React from 'react'
import { ThemeProvider } from './Context/ThemeContext'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import UserProfile from './components/UserProfile'
import { ToastContainer } from 'react-toastify'


export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-200">
        <Topbar />


        <div className="flex">
          <Sidebar />


          <main className="flex-1 p-6">
            <UserProfile />
          </main>
        </div>


        <ToastContainer position="top-right" autoClose={2500} />
      </div>
    </ThemeProvider>
  )
}