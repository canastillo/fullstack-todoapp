import Todo from "./Todo"

const TodosList = ({todos}) => {
    
    return(
        <div>
            <ul>
                { todos.map( todo => (
                    <Todo data={todo} key={todo.task}/> 
                ))}
            </ul>
        </div>
    )
}

export default TodosList