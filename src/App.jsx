import React, { useState } from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import Topbar from './components/Topbar';
import { ToastContainer } from 'react-toastify';
import Hero from './components/Hero';
import Profile from './Pages/Profile';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen px-0.5 bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-200">
        <Topbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
        <ToastContainer position="top-right" autoClose={1500} />
      </div>
    </ThemeProvider>
  );
}
