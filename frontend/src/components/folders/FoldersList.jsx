import Folder from "./Folder"
import { List } from "../layout" 

const FoldersList = ({folders, handleDelete}) => {
    
    return(
        <div>
            <List>
                { folders.map(folder => (
                    <Folder data={folder} key={folder.name} handleDelete={handleDelete}/> 
                ))}
            </List>
        </div>
    )
}

export default FoldersList