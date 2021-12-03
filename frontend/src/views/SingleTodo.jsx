import axios from "axios"
import { useEffect, useState } from "react"
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
    const [todo, setTodo] = useState({})
    const [newTask, setNewTask] = useState("")

    useEffect(() => {
        const fetchSingleTodo = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/todos/${id}`)
                console.log(response)
                setTodo(response.data.data)
                setNewTask(response.data.data.task)
            } catch (err) {
                console.error(err)
            }
        }

        fetchSingleTodo()
    }, [])

    const handleSave = (e) => {
        e.preventDefault()

        if (newTask !== "") {
            // TODO: Save task
            navigate(-1)
        }
        else {
            alert("You cannot save an empty task")
            setNewTask(todo.task)
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()

        if (newTask !== todo.task) {
            const choice = window.confirm("Discard changes?")
            if (choice) navigate(-1)
        } else 
            navigate(-1)
    }

    return (
        <main>
            <Container>
                <h1>Editing task "{todo.task}"</h1>
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