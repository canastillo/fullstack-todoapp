import axios from 'axios'
import { useState } from 'react'
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
    text-decoration-line: ${ ({isDone}) => isDone ? 'line-through' : 'none'};

`

const EditButton = styled(Link)`
    margin-right: 9px;
    margin-top: auto;
    margin-bottom: auto;
`

const Todo = ({data, handleDelete}) => {

    const [isDone, setIsDone] = useState(data.done)

    const toggleStatus = async () => {
        const response = await axios.put(`${process.env.REACT_APP_API}/todos/${data.id}`, { done: !data.done })

        if(response.status === 200) setIsDone(!isDone)
    }

    return (
        <Element>
            <input type="checkbox" checked={isDone} onChange={ () => toggleStatus()}/>
            <TodoText isDone={isDone}>{data.task}</TodoText>
            <EditButton to={`/todos/${data.id}`} >
                Edit
            </EditButton>
            <button onClick={ () => handleDelete(data.id) } style={{maxHeight: "25px", marginTop: "auto", marginBottom: "auto"}}>Delete</button>
        </Element>
    )
}

export default Todo