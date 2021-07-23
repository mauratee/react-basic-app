import React from 'react'
import Todo from "./Todo"

// pass props to TodoList
export default function TodoList({ todos, toggleTodo }) {
    return (
        // loop over all todos in list and return todo element
        // key tells React which components should be re-rendered
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
