import Todo from "./Todo"

const TodosList = ({todos, handleDelete}) => {
    
    return(
        <div>
            <ul>
                { todos.map( todo => (
                    <Todo data={todo} key={todo.task} handleDelete={handleDelete}/> 
                ))}
            </ul>
        </div>
    )
}

export default TodosList