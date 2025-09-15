import React from "react";
import Todo from "../models/todo";
import TodoItems from "./TodoItems";
import { List } from "@mui/material";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
  onEditTodo:(id: string) => void;
  onUpdateTodo:(id: string, newText: string, ) => void;
  onEditTodoId: string | null;
}> = (props) => {
  return (
    <List
      sx={{
        listStyle: "none",
        margin: "2rem auto",
        padding: "0",
        width: "40rem",
      }}
    >
      {props.items.map((item) => {
        return (
          <TodoItems
            key={item.id}
            id={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo}
            onEditTodo={props.onEditTodo}
            onUpdateTodo={props.onUpdateTodo}
            isEditing = {props.onEditTodoId === item.id}
          />
        );
      })}
    </List>
  );
};

export default Todos;
