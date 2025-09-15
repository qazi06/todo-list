import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";
import { useLocalStorage } from "./Store/useLocalStorage";
const App = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>( "todos" ,[]);
  const [editTodos, setEditTodos] = useState<string | null >(null);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const editTodoHandler = (todoId: string) => {
    setEditTodos(todoId);
  };

  const addUpdateHandler = (id: string, newText: string) => {
  setTodos((prevTodos) =>
    prevTodos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
  );
  setEditTodos(null); 
};

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} onEditTodo={editTodoHandler} />
      <Todos
        items={todos}
        onRemoveTodo={removeTodoHandler}
        onEditTodo={editTodoHandler}
        onEditTodoId={editTodos}
        onUpdateTodo={addUpdateHandler}

      />
    </>
  );
};

export default App;
