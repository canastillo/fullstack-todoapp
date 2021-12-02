import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Element = styled.li`
    width: 100%;
    padding-top: 3px;
    padding-bottom: 3px;
    list-style: none;
    display: flex;
    justify-content: space-between;
`

const TodoText = styled.p`
    flex-grow: 2;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5px;
    margin-right: 5px;
`

const Todo = ({data, handleDelete}) => {
    return (
        <Element>
            <input type="checkbox" checked={data.done}/>
            <TodoText>{data.task}</TodoText>
            <Link to={`/todos/${data.id}`}  style={{marginRight: "5px", marginTop: "auto", marginBottom: "auto"}} >
                Edit
            </Link>
            <button onClick={ () => handleDelete(data.id) } style={{maxHeight: "25px", marginTop: "auto", marginBottom: "auto"}}>Delete</button>
        </Element>
    )
}

export default Todo