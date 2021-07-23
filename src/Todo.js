import React from 'react'

// create Todo component
export default function Todo({ todo, toggleTodo }) {
    // toggles check using OnChange and toggleTodo by passing id 
    function handleTodoclick()  {
        toggleTodo(todo.id)
    }
    // return HTML elements to render for each component
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoclick}/>
                {todo.name}
            </label>
        </div>
    )
}
