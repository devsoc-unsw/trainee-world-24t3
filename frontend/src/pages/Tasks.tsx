import React from 'react'
import Task, { TaskInfo } from '../components/Task'



export let taskArray: TaskInfo[] = [
  {
    taskName: "Itteration 1",
    taskSubject: "Comp1531",
    taskStartTime: new Date(Date.UTC(2024, 10, 10, 4, 30)),
    taskEndTime: new Date(Date.UTC(2024, 11, 24, 4, 30))
  },
  {
    taskName: "Itteration 2",
    taskSubject: "Comp1531",
    taskStartTime: new Date(Date.UTC(2024, 10, 10, 4, 30)),
    taskEndTime: new Date(Date.UTC(2024, 12, 12, 4, 30))
  }
]


export default function Tasks() {
  return (
    <>
    <h1>Tasks</h1>
  
    {taskArray.map((curTask) => {
      return (<Task inputTask={curTask}/>)
    })}
  </>
  )
}
