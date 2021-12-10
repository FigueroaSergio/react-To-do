import React from "react";
import "../styles/TodoCounter.css";
function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} tareas
    </h2>
  );
}

export { TodoCounter };
// Exportar asi ayuda a forzar  que cuando se use en otro parte se tenga que llamar como el export
