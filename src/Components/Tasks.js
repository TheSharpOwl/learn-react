import PropTypes from 'prop-types'

export const Tasks = ({tasks}) => {
  return (
    <>
    {
        tasks.map((task) => {return <h3>{task.text}</h3>})
        // or this works (pay attention to parentheses): tasks.map((task) => (<h3>{task.text}</h3>))
    }
    </>
  )
}

export default Tasks
