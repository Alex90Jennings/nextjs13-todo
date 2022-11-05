"use client";

import { useRouter } from "next/navigation"

async function update(id, isDone, refresh) {
    await fetch(`/api/todo/update`, {
        method: 'POST',
        body: JSON.stringify({ id, isDone })
    });

    refresh();
}

async function deleteTodo(id, refresh) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: 'DELETE'
    });

    refresh();
}

export default function TodoLI({ todo }) {
    const router = useRouter();

    return (
        <li key={todo.id} style={{padding: "5px 0"}}>
            <input 
                type="checkbox" 
                onChange={(e) => update( todo.id, e.target.checked, router.refresh )}
                check={todo.isDone}
            />
            <span>{todo.name}</span>
            <button onClick={() => {deleteTodo( todo.id, router.refresh )}}>Delete</button>
        </li>
    )
} 