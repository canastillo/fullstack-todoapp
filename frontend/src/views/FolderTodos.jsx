import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"

import {TodosList, TodoForm} from "../components/todos"
import { RedirectButton } from "../components/layout"

const FolderTodos = () => {
    const { id } = useParams()
    const [todos, setTodos] = useState([])
    const [folder, setFolder] = useState("")

    useEffect(() => {
        const fetchTodosByFolder = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/todos?folder=${id}`)
                setTodos(response.data)
            } catch (err) {
                console.error(err)
            }
        }

        const fetchFolderName = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/folders/${id}`)
                setFolder(response.data.name)
            } catch (err) {
                console.error(err)
            }
        }

        fetchTodosByFolder()
        fetchFolderName()
    }, [id])

    const handleDelete = async () => {
        const response = await axios.delete(`${process.env.REACT_APP_API}/todos/${id}`)

        if (response.status === 200) {
            const position = todos.findIndex(todo => todo.id === id)
            const aux = [...todos]

            aux.splice(position, 1)
            setTodos(aux)
        }
    }

    return (
        <>
            <h1>
                <RedirectButton to="/folders">
                    Folders
                </RedirectButton>
                &gt; {folder}</h1>
            <TodosList todos={todos} handleDelete={handleDelete} />
            <TodoForm todos={todos} setTodos={setTodos} folderId={id} />
        </>
    )
}

export default FolderTodos