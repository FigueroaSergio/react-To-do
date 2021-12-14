import React from "react";

import "./App.css";

import { TodoProvider } from "./TodoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <>
      {/*  react interpreta las llaves vacias como un Fragment 
        react solo adminte un componente principal  
        */}
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  );
}

export default App;
