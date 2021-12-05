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

const EditButton = styled(Link)`
    margin-right: 9px;
    margin-top: auto;
    margin-bottom: auto;
`

const Folder = ({data, handleDelete}) => {

    return (
        <Element>
            <EditButton to={`/folders/${data.id}`} >
                {data.name}
            </EditButton>
            <button
                onClick={ () => handleDelete(data.id) } 
                style={{maxHeight: "25px", marginTop: "auto", marginBottom: "auto"}}>
                    Delete
            </button>
        </Element>
    )
}

export default Folder