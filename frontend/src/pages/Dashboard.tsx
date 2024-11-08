import React, { useContext } from 'react'
import AppSidebar from '../components/AppSidebar'
// import CountdownBlob from '../components/CountdownBlob';

import { ThemeContext } from '../context/ThemeContext';
import { TaskInfo } from '../components/Task';

export default function Dashboard() {


  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const themeClass = themeContext.theme === "night" ? "day" : "night";

  const task: TaskInfo = {
    taskName: 'Assignment 1',
    taskSubject: 'COMP1511',
    taskStartTime: new Date(),
    taskEndTime: new Date()
  }

  return (

    <div>
        <h1 className='text-xl font-semibold'>Dashboard Screen</h1>
      {/* <CountdownBlob task={task}/> */}
    </div>
  )
}
