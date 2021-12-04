import { useEffect, useState } from "react"
import axios from "axios"

import TodosList from "../components/todos/TodosList"
import TodoForm from "../components/todos/TodoForm"
import Container from "../components/layout"

const AllTodos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/todos`)
                setTodos(response.data.data)
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

    return(
        <>
            <main>
            <Container>
                <h1>To-Do List</h1>
                <TodosList todos={todos} handleDelete={handleDelete}/>
                <TodoForm todos={todos} setTodos={setTodos} />
            </Container>
            </main>
        </>
    )
}

export default AllTodos