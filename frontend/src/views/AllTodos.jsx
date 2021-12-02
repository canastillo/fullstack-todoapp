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

   
    return(
        <>
            <h1>To-Do List</h1>
            <main>
                <TodosList todos={todos}/>
                <TodoForm todos={todos} setTodos={setTodos}/>
            </main>
        </>
    )
}

export default AllTodos