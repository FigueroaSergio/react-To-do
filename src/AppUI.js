import { TodoCounter } from "./componets/TodoCounter";
import { TodoSearch } from "./componets/TodoSearch";
import { TodoItem } from "./componets/TodoItem";
import { TodoList } from "./componets/TodoList";
import { CreateTodoButton } from "./componets/CreateTodoButton";
import { TodoContext } from "./TodoContext";
function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ error, loading, searchTodos, deleteTodo, completeTodo }) => (
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}
export { AppUI };
