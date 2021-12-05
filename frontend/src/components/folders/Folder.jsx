import { ListElement, RedirectButton } from '../layout'

const Folder = ({data, handleDelete}) => {

    return (
        <ListElement>
            <RedirectButton to={`/folders/${data.id}`} >
                {data.name}
            </RedirectButton>
            <button
                onClick={ () => handleDelete(data.id) } 
                style={{maxHeight: "25px", marginTop: "auto", marginBottom: "auto"}}>
                    Delete
            </button>
        </ListElement>
    )
}

export default Folder