import styled from "styled-components"
import Todo from "./Todo"

const List = styled.ul`
    width: 100%;
    max-width: 500px;
    padding-left: 0;
` 

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