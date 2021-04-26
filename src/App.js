import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app loads,we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //This code here... fires when the app loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, [input]);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop refresh

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //setTodos([...todos, input]);
    //setInput(""); //clear up the input after clicking add todo button
  };
  return (
    <div className="App">
      <h1>Nikhil Singh </h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
        {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
}

export default App;
