import { Link } from 'react-router-dom'

const Todo = ({data}) => {
    return (
        <li>
            <input type="checkbox" checked={data.done}/>
            {data.task}
            <Link to={`/todos/${data.id}`}>
                Edit
            </Link>
        </li>
    )
}

export default Todo