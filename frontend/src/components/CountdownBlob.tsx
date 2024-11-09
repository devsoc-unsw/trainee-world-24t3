import React from 'react';
import Task, { TaskInfo } from './Task';
import Timer from './Timer';

export default function CountdownBlob({ task }: { task: TaskInfo }) {
  return (
    <>
      <div className='flex'>
        <Task inputTask={task}/>
        <Timer due={task.taskEndTime}/>
      </div>
    </>
  )
}
