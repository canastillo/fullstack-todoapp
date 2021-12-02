import { useState } from "react"

const TodoForm = ({todos, setTodos}) => {
    const [newTodo, setNewTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setTodos([...todos, { id: todos.length + 1, task: newTodo, done: false }])
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
                onChange={e => handleOnChange(e)} />
            <input type="submit" value="Add"/>
        </form>
    )
}

export default TodoForm