import React, { useState } from "react";

import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task} // TODO ask why id works here like this (is it because it is set first as in the structure or because of the var name or type?)
    setTasks([...tasks, task])}

  const onDelete = (taskId) => (setTasks(tasks.filter((task) => (task.id !== taskId))))

  const toggleReminder = (taskId) => (setTasks(tasks.map((task) => (task.id === taskId ? { ...task, reminder: !task.reminder } : task))))

  return (
    <div className="container">
      <div>
        <Header />
        <AddTask onAdd = {addTask} />
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />) : ('No tasks to show')}
      </div>
    </div>
  )
}


export default App;
