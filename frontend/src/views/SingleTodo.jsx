import { useState } from "react"
import { useNavigate, useParams } from "react-router"

const SingleTodo = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const data = {
        id: id,
        task: "Create awesome web app",
        done: true
    }

    const [task, setTask] = useState(data.task)
    
    const handleSave = () => {
        navigate(-1)
    }

    const handleCancel = () => {
        const choice = window.confirm("Discard changes?")
        if (choice) navigate(-1)
    }

    return (
        <main>
            <div>
                <h1>Editing task "{data.task}"</h1>
                <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
                <input type="submit" onClick={() => handleSave()} value="Save"/>
                <button onClick={() => handleCancel()}> Cancel </button>
            </div>
        </main>
    )
}

export default SingleTodo