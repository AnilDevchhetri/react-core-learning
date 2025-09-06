export function TodoCard(props) {
    const { todo, handleDeleteTodo, index, handleCompleteTodo } = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete} onClick={() => handleCompleteTodo(index)}><h6>Done</h6></button>
                <button onClick={() => handleDeleteTodo(index)}><h6>delete</h6></button>
            </div>
        </div>
    )
}