
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

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Navigate, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Countdown from './pages/Countdown';
// import Planning from './pages/Planning';
// import Tasks from './pages/Tasks';
// import AppSidebar from './components/AppSidebar';


// // const router = createBrowserRouter(
// //   createRoutesFromElements(

// //   )
// // )

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );


// export const routes = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Countdown', path: '/countdown' },
//   { name: 'Planning', path: '/planning' },
//   { name: 'Tasks', path: '/tasks' },
// ]


// root.render(
//   <React.StrictMode>
//     <BrowserRouter>

//       <AppSidebar/>
//       <Routes >
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="countdown" element={<Countdown />} />
//         <Route path="planning" element={<Planning />} />
//         <Route path="tasks" element={<Tasks />} />
//     </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

