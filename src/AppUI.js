import React from "react";

import { TodoCounter } from "./componets/TodoCounter";
import { TodoSearch } from "./componets/TodoSearch";
import { TodoItem } from "./componets/TodoItem";
import { TodoList } from "./componets/TodoList";
import { CreateTodoButton } from "./componets/CreateTodoButton";
import { TodoContext } from "./TodoContext";
import { Modal } from "./componets/Modal";
function AppUI() {
  const {
    error,
    loading,
    searchTodos,
    deleteTodo,
    completeTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchTodos.length && <p>¡Crea tu primer TODO!</p>}
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
      {openModal && (
        <Modal>
          <p>Crear modal</p>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
}
export { AppUI };
