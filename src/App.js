import TodoList from "./TodoList";

function App() {
  return (
    // create and return component as jsx wrapped in fragment
    <>
      <TodoList />
      <input type="text" />
      <button>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
