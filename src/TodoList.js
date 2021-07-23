import React from 'react'
import Todo from "./Todo"

export default function TodoList({ todos }) {
    return (
        <div>
            {todos.length}
        </div>
    )
}
