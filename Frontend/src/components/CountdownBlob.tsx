import React from 'react'
import { TaskInfo } from './Task'

export default function CountdownBlob({ task } : { task: TaskInfo }) {
  return (
    <>
      <div className='bg-teal-600'>
        <div>
          <div>
            <h1>{task.taskName}</h1>
            <p>{task.taskEndTime.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</p>
          </div>
          <p>{task.taskEndTime.getHours()}:{task.taskEndTime.getMinutes()}</p> 
        </div>
      </div>
    </>
  )  
}