import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AppSidebar.css';
import { ThemeContext } from '../context/ThemeContext';
import { PiCube, PiCalendar, PiCircle, PiChartBarThin  } from "react-icons/pi";

interface LinkIconProps {
  name: string,
  path: string,
  icon: ReactNode 
}

function LinkIcon({ name, path, icon }: LinkIconProps) {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const isActive = location.pathname === path;
  const themeClass = themeContext?.theme === "day" ? "day" : "night";

  return (
    <Link to={path} className={`sidebar-link ${isActive ? 'active' : ''} ${themeClass}`}>
      <div className="icon-text-wrapper">
        {icon}
        <span className="sidebar-link-text">{name}</span>
      </div>
    </Link>
  );
}

export const routes: LinkIconProps[] = [
  { name: 'Dashboard', path: '/dashboard', icon: <PiCube /> },
  { name: 'Countdown', path: '/countdown', icon: <PiCalendar /> },
  { name: 'Planning', path: '/planning', icon: <PiCircle /> },
  { name: 'Tasks', path: '/tasks', icon: <PiChartBarThin /> }
];

export default function AppSidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);


  // if (!themeContext) return null;

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarOpen');
    if (savedState !== null) {
      setIsOpen(JSON.parse(savedState));
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem('sidebarOpen', JSON.stringify(newState));
  };

  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const themeClass = themeContext.theme === "day" ? "day" : "night";



  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${themeClass}`}>
      <div className='sidebar-options-list'>
        {isOpen && routes.map((route) => (
          <LinkIcon key={route.path} {...route} />
        ))}
      </div>
    </div>
  );
}
