import { useEffect, useState } from "react"
import axios from "axios"

import { TodosList } from "../components/todos"
import { RedirectButton } from "../components/layout"

const AllTodos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/todos`)
                setTodos(response.data)
            } catch (err) {
                console.error(err)
            }
        }

        fetchTodos()
    }, [])

    const handleDelete = async (id) => {
        const response = await axios.delete(`${process.env.REACT_APP_API}/todos/${id}`)

        if (response.status === 200) {
            const position = todos.findIndex(todo => todo.id === id)
            const aux = [...todos]

            aux.splice(position, 1)
            setTodos(aux)
        }
    }

    return (
        <div style={{marginTop: "15px"}}>
            <RedirectButton to="/">Go back</RedirectButton>
            <h1>To-Do List</h1>
            <TodosList todos={todos} handleDelete={handleDelete} />
        </div>
    )
}

export default AllTodos