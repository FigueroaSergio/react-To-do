import React from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoCounter.css";
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} tareas
    </h2>
  );
}

export { TodoCounter };
// Exportar asi ayuda a forzar  que cuando se use en otro parte se tenga que llamar como el export
