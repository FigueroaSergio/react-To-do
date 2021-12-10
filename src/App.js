import React from "react";
import "./App.css";
import { TodoCounter } from "./componets/TodoCounter";
import { TodoSearch } from "./componets/TodoSearch";
import { TodoItem } from "./componets/TodoItem";
import { TodoList } from "./componets/TodoList";
import { CreateTodoButton } from "./componets/CreateTodoButton";
let todos = [
  { text: "cortar cebolla", completed: false },
  { text: "cortar cebolla 2", completed: true },
  { text: "cortar cebolla 3", completed: false },
];

function App() {
  return (
    <>
      {/*  react interpreta las llaves vacias como un Fragment 
        react solo adminte un componente principal  
        */}
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
