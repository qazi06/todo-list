import { Box, Button, Input, InputLabel } from "@mui/material";
import React, { useRef } from "react";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <Box
      sx={{ width: "40rem", margin: "2rem auto" }}
      component="form"
      onSubmit={submitHandler}
    >
      <InputLabel
        sx={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}
      >
        Enter Text
      </InputLabel>
      <Input
        type="text"
        id="text"
        inputRef={todoTextInputRef}
        sx={{
          display: "block",
          width: "100%",
          font: "inherit",
          fontSize: "1.5rem",
          padding: "o.5rem",
          borderRadius: "4px",
          bgcolor: "#f7f5ef",
          border: "none",
          borderBottom: "2px solid #494844",
          borderBottomRightRadius: "0",
          borderBottomLeftRadius: "0",
          marginBottom: "0.5rem",
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          font: "inherit",
          bgcolor: "#ebb002",
          border: "1px solid #ebb002",
          color: "#201d0f",
          padding: "0.5rem 1.5rem",
          borderRadius: "4px",
          cursor: "pointer",
          "&:hover": { bgcolor: "#ebc002", borderColor: "#ebc002" },
          "&:active": { bgcolor: "#ebc002", borderColor: "#ebc002" },
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default NewTodo;
