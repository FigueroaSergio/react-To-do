import React from "react";
import { useState } from "react";
import "./App.css";
import { TodoCounter } from "./componets/TodoCounter";
import { TodoSearch } from "./componets/TodoSearch";
import { TodoItem } from "./componets/TodoItem";
import { TodoList } from "./componets/TodoList";
import { CreateTodoButton } from "./componets/CreateTodoButton";
let defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "tallar cebolla 2", completed: true },
  { text: "cortar cebolla 3", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  var searchTodos = [];
  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      let text = todo.text.toLowerCase();
      let searcText = searchValue.toLowerCase();
      return text.includes(searcText);
    });
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (
    <>
      {/*  react interpreta las llaves vacias como un Fragment 
        react solo adminte un componente principal  
        */}
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
