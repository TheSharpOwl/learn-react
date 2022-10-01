import { useState } from "react"



const AddTask = ({onAdd}) => {

  const [text, setText] = useState()
  const [day, setDay] = useState()
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    
    if(!text)
    {
      alert("please add a text")
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Add a new task</label>
          <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Date & Time</label>
          <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
          <label>Reminder</label>
          <input type="checkbox" checked = {reminder} value={setReminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  )
}

export default AddTask