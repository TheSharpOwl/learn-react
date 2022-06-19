import React, { useState } from "react";

import Header from './Components/Header'
import Tasks from './Components/Tasks'

export const App = () => {
  // setTasks returns the list and a function to set the state (it will be the whole new state because it's immutable)
  // this is just unpacking it
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  const onDelete = (taskId) => (setTasks(tasks.filter((task) => (task.id !== taskId))))

  return (
    <div className="container">
      <div>
        <Header />
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {onDelete}/>) : ('No tasks to show')}
        
      </div>
    </div>
  )
}


export default App;
