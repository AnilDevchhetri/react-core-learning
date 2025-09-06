import { TodoCard } from "./TodoCard";
export function TodoList(props) {
    const { todos, selectedTab } = props;

    const tab = selectedTab
    const filterTodosList = tab === 'All' ?
        todos :
        tab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {
                filterTodosList.map((todo, index) => {
                    return (
                        <TodoCard key={index} todo={todo} index={todos.findIndex(val => val.input == todo.input)} {...props} />
                    )
                })
            }
        </>
    );
}