import React from "react";
import "../styles/TodoForm.css";

import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodo, setNewTodo] = React.useState("");
  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo todo</label>
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder="Añade Una tarea"
      />
      <div className="TodoForm-buttonContainer ">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel "
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add " type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
