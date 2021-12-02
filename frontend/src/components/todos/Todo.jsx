import { Link } from 'react-router-dom'

const Todo = ({data, handleDelete}) => {
    return (
        <li>
            <input type="checkbox" checked={data.done}/>
            <p>{data.task}</p>
            <Link to={`/todos/${data.id}`}>
                Edit
            </Link>
            <button onClick={ () => handleDelete(data.id) }>Delete</button>
        </li>
    )
}

export default Todo