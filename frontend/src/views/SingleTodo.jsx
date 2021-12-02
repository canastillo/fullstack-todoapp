import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import styled from "styled-components"

import Container from "../components/layout"

const TaskInput = styled.input`
    display: block;
    width: 100%;
    max-width: 500px;
    margin-bottom: 10px;
`

const SingleTodo = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    // TODO: Request task
    const data = {
        id: id,
        task: "Create awesome web app",
        done: true
    }

    const [newTask, setNewTask] = useState(data.task)

    const handleSave = (e) => {
        e.preventDefault()

        if (newTask !== "") {
            // TODO: Save task
            navigate(-1)
        }
        else {
            alert("You cannot save an empty task")
            setNewTask(data.task)
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()

        if (newTask !== data.task) {
            const choice = window.confirm("Discard changes?")
            if (choice) navigate(-1)
        } else 
            navigate(-1)
    }

    return (
        <main>
            <Container>
                <h1>Editing task "{data.task}"</h1>
                <form>
                    <TaskInput 
                        type="text"
                        value={newTask}
                        autoFocus
                        onChange={e => { setNewTask(e.target.value) }} />
                    <input type="submit" onClick={(e) => handleSave(e)} value="Save"  />
                    <button onClick={(e) => handleCancel(e)}> Cancel </button>
                </form>
            </Container>
        </main>
    )
}

export default SingleTodo