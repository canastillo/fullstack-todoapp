import { useState } from "react"
import axios from "axios"

const FolderForm = ({folders, setFolders}) => {
    const [newFolder, setNewFolder] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (newFolder !== "") {
            const response = await axios.post(`${process.env.REACT_APP_API}/folders`, {name: newFolder})
            console.log(response)
            
            if (response.status === 201) {
                setFolders([...folders, { id: folders.length + 1, name: newFolder }])
            }
        }
        
        setNewFolder("")
    }

    const handleOnChange = (e) => {
        setNewFolder(e.target.value)
    }

    return(
        <form onSubmit={ e => handleSubmit(e) }>
            <input 
                type="text"
                placeholder="New folder"
                value={newFolder}
                onChange={e => handleOnChange(e)} 
                autoFocus />
            <input type="submit" value="Add"/>
        </form>
    )
}

export default FolderForm