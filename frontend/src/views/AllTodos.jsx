import { useState } from "react"

import TodosList from "../components/todos/TodosList"
import TodoForm from "../components/todos/TodoForm"

const AllTodos = () => {
    
    const [todos, setTodos] = useState([
        {
            id: "1",
            task: "Take Ensolvers test",
            done: true
        },
        {
            id: "2",
            task: "Code fullstack SPA",
            done: true
        },
        {
            id: "3",
            task: "Get hired",
            done: false
        }
    ])

    const handleDelete = (id) => {
        const position = todos.findIndex(todo => todo.id === id)
        const aux = [...todos]
        aux.splice(position, 1)
        setTodos(aux)
    }
   
    return(
        <>
            <main>
            <div>
                <h1>To-Do List</h1>
                <TodosList todos={todos} handleDelete={handleDelete}/>
                <TodoForm todos={todos} setTodos={setTodos} />
            </div>
            </main>
        </>
    )
}

export default AllTodos