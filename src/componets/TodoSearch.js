import React from "react";
import "../styles/TodoSearch.css";
function TodoSearch() {
  const onSearchValue = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      onChange={onSearchValue}
      className="TodoSearch"
      placeholder="todos"
    />
  );
}

export { TodoSearch };
