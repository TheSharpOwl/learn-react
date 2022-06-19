import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className="task">
            <h3>{task.text}{' '}<FaTimes color={"red"} cursor={"pointer"} onClick = {() => {onDelete(task.id)
            console.log(task.id)}} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task