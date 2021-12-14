import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValue = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      onChange={onSearchValue}
      className="TodoSearch"
      placeholder={searchValue}
    />
  );
}

export { TodoSearch };
