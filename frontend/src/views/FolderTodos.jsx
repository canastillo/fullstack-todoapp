import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import axios from "axios"

import { Link } from 'react-router-dom'


import TodosList from "../components/todos/TodosList"
import TodoForm from "../components/todos/TodoForm"
import Container from "../components/layout"

const List = styled.ul`
    width: 100%;
    max-width: 500px;
    padding-left: 0;
` 
const EditButton = styled(Link)`
    margin-right: 9px;
    margin-top: auto;
    margin-bottom: auto;
`

const FolderTodos = () => {
    const { id } = useParams()
    const [todos, setTodos] = useState([])
    const [folder, setFolder] = useState("")

    useEffect(() => {
        const fetchTodosByFolder = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/todos?folder=${id}`)
                setTodos(response.data)
            } catch (err) {
                console.error(err)
            }
        }

        const fetchFolderName = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/folders/${id}`)
                setFolder(response.data.name)
            } catch (err) {
                console.error(err)
            }
        }

        fetchTodosByFolder()
        fetchFolderName()
    }, [])

    const handleDelete = async () => {
        const response = await axios.delete(`${process.env.REACT_APP_API}/todos/${id}`)

        if (response.status === 200) {
            const position = todos.findIndex(todo => todo.id === id)
            const aux = [...todos]
            
            aux.splice(position, 1)
            setTodos(aux)
        }
    }

    return(
        <>
            <main>
            <Container>
                <h1>
                    <EditButton to="/folders">
                        Folders
                    </EditButton>
                     &gt; {folder}</h1>
                <TodosList todos={todos} handleDelete={handleDelete}/>
                <TodoForm todos={todos} setTodos={setTodos} folderId={id}/>
            </Container>
            </main>
        </>
    )
}

export default FolderTodos