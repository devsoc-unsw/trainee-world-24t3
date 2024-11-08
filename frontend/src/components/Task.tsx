import React from 'react'

export interface TaskInfo {
    taskName: string,
    taskDescription?: string,
    taskSubject: string,

    taskStartTime: Date;
    taskEndTime: Date;

}

export default function Task(props: any) {
  
    let curTask: TaskInfo = props.inputTask;
  
    return (
    <div>
        <h1>{curTask.taskName}</h1>
        <p>{curTask.taskSubject}</p>
        <p>Due: {curTask.taskEndTime.toDateString()}</p>

    </div>
  )
}
