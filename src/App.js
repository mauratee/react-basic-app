import TodoList from "./TodoList";
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// create local storage variable to save state of todo list
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // set state for TodoList using useState hook and destructured array
  const [todos, setTodos] = useState([])
  // use useRef hook to get input text from user
  const todoNameRef = useRef()

// loads stored todos using useEffect hook
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // using useEffect hook to save state of todo list through browser refresh
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // stores info of todo that is toggled from checked to unchecked
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

    // listens for event on "Add todo" button and adds
    // user input to list of todos if not blank
  function handleAddTodo (e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  // clears complete items using onClick listener on Clear Completed button
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    // create and return component as jsx wrapped in fragment
    <>
      {/* pass current todos as prop to TodoList */}
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
