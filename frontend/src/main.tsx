import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Countdown from './pages/Countdown';
import Planning from './pages/Planning';
import Tasks from './pages/Tasks';
import AppSidebar from './components/AppSidebar';
import LayoutMain from './pages/LayoutMain';
import { ThemeProvider } from './context/ThemeContext';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <LayoutMain />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);