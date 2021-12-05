import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { ListElement, RedirectButton } from '../layout'

const TodoText = styled.p`
    flex-grow: 2;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5px;
    margin-right: 5px;
    text-decoration-line: ${ ({isDone}) => isDone ? 'line-through' : 'none'};
`

const Todo = ({data, handleDelete}) => {

    const [isDone, setIsDone] = useState(data.done)

    const toggleStatus = async () => {
        const response = await axios.put(`${process.env.REACT_APP_API}/todos/${data.id}`, { done: !data.done })

        if(response.status === 200) setIsDone(!isDone)
    }

    return (
        <ListElement>
            <input type="checkbox" checked={isDone} onChange={ () => toggleStatus()}/>
            <TodoText isDone={isDone}>{data.task}</TodoText>
            <RedirectButton to={`/todos/${data.id}`} >
                Edit
            </RedirectButton>
            <button onClick={ () => handleDelete(data.id) } style={{maxHeight: "25px", marginTop: "auto", marginBottom: "auto"}}>Delete</button>
        </ListElement>
    )
}

export default Todo