import TodosList from "../components/todos/TodosList"

const AllTodos = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return(
        <>
            <h1>To-Do List</h1>
            <main>
                <div>
                    <TodosList />
                </div>
                <form onSubmit={ e => handleSubmit(e) }>
                    <input type="text" placeholder="New task"/>
                    <input type="submit" value="Add"/>
                </form>
            </main>
        </>
    )
}

export default AllTodos