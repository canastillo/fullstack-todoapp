import Todo from "./Todo"

const TodosList = () => {
    const todos = [
        {
            id: "1",
            task: "Take Ensolvers test",
            done: true
        },
        {
            id: "2",
            task: "Code fullstack SPA",
            done: true
        },
        {
            id: "3",
            task: "Get hired",
            done: false
        }
    ]

    return(
        <ul>
            { todos.map( todo => (
                <Todo data={todo} /> )
            )}
        </ul>
    )
}

export default TodosList