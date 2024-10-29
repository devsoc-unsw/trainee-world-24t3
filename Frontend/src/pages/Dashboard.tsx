import React, { useContext } from 'react'
import AppSidebar from '../components/AppSidebar'

import '../index.css'
import { ThemeContext } from '../context/ThemeContext';

export default function Dashboard() {


  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const themeClass = themeContext.theme === "night" ? "day" : "night";



  return (

    <div className='main-screen'>
        <h1 className='Header '>Dashboard Screen</h1>
        
    </div>
  )
}
