import Todo from "./Todo"
import { List } from "../layout"

const TodosList = ({todos, handleDelete}) => {
    
    return(
        <div>
            <List>
                { todos.map( todo => (
                    <Todo data={todo} key={todo.task} handleDelete={handleDelete}/> 
                ))}
            </List>
        </div>
    )
}

export default TodosList