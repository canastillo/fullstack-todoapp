import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import styled from "styled-components"

const TaskInput = styled.input`
    display: block;
    width: 100%;
    max-width: 500px;
    margin-bottom: 10px;
`

const SingleTodo = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState({})
    const [newTask, setNewTask] = useState("")

    const todoURL = `${process.env.REACT_APP_API}/todos/${id}`

    useEffect(() => {
        const fetchSingleTodo = async () => {
            try {
                const response = await axios.get(todoURL)
                setTodo(response.data)
                setNewTask(response.data.task)
            } catch (err) {
                console.error(err)
            }
        }

        fetchSingleTodo()
    }, [todoURL])

    const handleSave = async (e) => {
        e.preventDefault()

        if (newTask === "") {
            alert("You cannot save an empty task")
            setNewTask(todo.task)
        }
        else if (newTask === todo.task)
            navigate(-1)
        else {
            const response = await axios.put(todoURL, { task: newTask })

            if (response.status === 200)
                navigate(-1)
        }

    }

    const handleCancel = (e) => {
        e.preventDefault()

        if (newTask !== todo.task && newTask !== "") {
            const choice = window.confirm("Discard changes?")

            if (choice)
                navigate(-1)
        } else
            navigate(-1)
    }

    return (
        <>
            <h1>Editing task "{todo.task}"</h1>
            <form>
                <TaskInput
                    type="text"
                    value={newTask}
                    autoFocus
                    onChange={e => { setNewTask(e.target.value) }} />
                <input type="submit" onClick={(e) => handleSave(e)} value="Save" />
                <button onClick={(e) => handleCancel(e)}> Cancel </button>
            </form>
        </>
    )
}

export default SingleTodo