import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // or it can be className = {`task ${task.reminder ? "reminder" : ""}`}
        <div className={"task " + (task.reminder ? "reminder" : "")} onDoubleClick={() => { onToggle(task.id) }}>
            <h3>{task.text}{' '}<FaTimes color={"red"} cursor={"pointer"} onClick={() => {
                onDelete(task.id)
                console.log(task.id)
            }} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task