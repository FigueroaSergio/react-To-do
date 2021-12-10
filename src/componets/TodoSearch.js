import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
