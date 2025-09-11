import { Button, ListItem } from "@mui/material";
import React from "react";

const TodoItems: React.FC<{ id : string; text: string; onRemoveTodo : (id : string) => void }> = (props) => {
  return (
    <div>
      <ListItem >
        {props.text}
      </ListItem>
      <Button>Edit</Button>
      <Button onClick={() => props.onRemoveTodo(props.id)}>Delete</Button>
    </div>
  );
};

export default TodoItems;
