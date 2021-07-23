import TodoList from "./TodoList";
import { useState } from 'react'

function App() {
  // set use state for TodoList
  const [todos, setTodos] = useState(['ToDo 1', 'ToDo 2'])
  return (
    // create and return component as jsx wrapped in fragment
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
