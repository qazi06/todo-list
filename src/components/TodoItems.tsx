import { Button, ListItem, TextField } from "@mui/material";
import React, {useState, useEffect} from "react";

const TodoItems: React.FC<{
  id: string;
  text: string;
  onEditTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
  onUpdateTodo: (id:string, newText:string) => void;
  isEditing: boolean;
}> = (props) => {
  const [editText, setEditText] = useState(props.text);

  useEffect( ()=> {
    setEditText(props.text);
  }, [props.text]);

   const handleUpdate = () => {
    if (editText.trim().length === 0) {
      return;
    }
    props.onUpdateTodo(props.id, editText);
  };
  
  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {props.isEditing ? (
        <>
          <TextField
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ flexGrow: 1 }}
            autoFocus
          />
          <Button onClick={handleUpdate} variant="contained" color="primary">
            Save
          </Button>
        </>
      ) : (
        <>
          <ListItem>{props.text}</ListItem>
          <Button onClick={() => props.onEditTodo(props.id)}>Edit</Button>
          <Button onClick={() => props.onRemoveTodo(props.id)}>
            Delete
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default TodoItems;
