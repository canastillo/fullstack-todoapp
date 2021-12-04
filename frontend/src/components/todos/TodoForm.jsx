import { useState } from "react"
import axios from "axios"

const TodoForm = ({todos, setTodos}) => {
    const [newTodo, setNewTodo] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (newTodo !== "") {
            const response = await axios.post(`${process.env.REACT_APP_API}/todos`, {task: newTodo})
            console.log(response)
            
            if (response.status === 201) {
                setTodos([...todos, { id: todos.length + 1, task: newTodo, done: false }])
            }
        }
        
        setNewTodo("")
    }

    const handleOnChange = (e) => {
        setNewTodo(e.target.value)
    }

    return(
        <form onSubmit={ e => handleSubmit(e) }>
            <input 
                type="text"
                placeholder="New task"
                value={newTodo}
                onChange={e => handleOnChange(e)} 
                autoFocus />
            <input type="submit" value="Add"/>
        </form>
    )
}

export default TodoForm