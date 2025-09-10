import TodoList from "./components/TodoList"
function App() {
   const todos = [new Todo('Learn React'), new Todo ('Learn TypeScript')]
  return (
    <>
     <h1>TodoList</h1> 
     <TodoList items={todos} />
    </>
  )
}

export default App
