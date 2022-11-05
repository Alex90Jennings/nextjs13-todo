import TodoLI from "./todoLI";

const getTodolist = async () => {
    let todoList = await fetch("http://localhost:3001/api/todo/list");
    return todoList.json();
}

export default async function TodoList() {
    const todoList  = await getTodolist();
    const { todos } = todoList;

    return (
        <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo) => {
                    return (
                        <TodoLI todo = { todo } />
                    )
                })}
            </ul>
        </div>
    )
}