import styled from "styled-components"
import Folder from "./Folder"

const List = styled.ul`
    width: 100%;
    max-width: 500px;
    padding-left: 0;
` 

const FoldersList = ({folders, handleDelete}) => {
    
    return(
        <div>
            <List>
                { folders.map(folder => (
                    <Folder data={folder} key={folder.task} handleDelete={handleDelete}/> 
                ))}
            </List>
        </div>
    )
}

export default FoldersList