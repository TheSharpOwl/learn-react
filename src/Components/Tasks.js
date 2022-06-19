import PropTypes from 'prop-types'
import Task from './Task'

export const Tasks = ({tasks, onDelete}) => {
  return (
    <>
    {
        tasks.map((task) => {return <Task key = {task.id} task = {task} onDelete = {onDelete} />})
        // or this works (pay attention to parentheses): tasks.map((task) => (<h3>{task.text}</h3>))
    }
    </>
  )
}

export default Tasks
