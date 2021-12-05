import { useEffect, useState } from "react"
import axios from "axios"

import FoldersList from "../components/folders/FoldersList"
import FolderForm from "../components/folders/FolderForm"
import Container from "../components/layout"

const AllFolders = () => {

    const [folders, setFolders] = useState([])

    useEffect(() => {
        const fetchFolders = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/folders`)
                console.log(response.data)
                setFolders(response.data)
            } catch (err) {
                console.error(err)
            }
        }

        fetchFolders()
    }, [])

    const handleDelete = async (id) => {
        const response = await axios.delete(`${process.env.REACT_APP_API}/folders/${id}`)

        if (response.status === 200) {
            const position = folders.findIndex(folder => folder.id === id)
            const aux = [...folders]
            
            aux.splice(position, 1)
            setFolders(aux)
        }
    }

    return(
        <>
            <main>
            <Container>
                <h1>Folders</h1>
                <FoldersList folders={folders} handleDelete={handleDelete}/>
                <FolderForm folders={folders} setFolders={setFolders} />
            </Container>
            </main>
        </>
    )
}

export default AllFolders