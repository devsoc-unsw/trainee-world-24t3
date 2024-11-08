import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Countdown from '../pages/Countdown';
import Planning from '../pages/Planning';
import Tasks from '../pages/Tasks';
import AppSidebar from '../components/AppSidebar';
import { ThemeContext } from '../context/ThemeContext';
import { Button } from '../components/ui/button';


import '../index.css'

export default function LayoutMain() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { toggleTheme } = themeContext;

  return (
    <div className="layout-main">
      <AppSidebar />
      <div className="main-content">
        <Button className='fixed top-2.5 right-2.5' onClick={toggleTheme}>Toggle Theme</Button>
        {/* <button className="fixed top-2.5 right-2.5" onClick={toggleTheme}>
          Toggle Theme
        </button> */}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="countdown" element={<Countdown />} />
          <Route path="planning" element={<Planning />} />
          <Route path="tasks" element={<Tasks />} />
        </Routes>
      </div>
    </div>
  );
}
