import { useState } from "react";
import "../styles/TodoSearch.css";
function TodoSearch() {
  const [searchValue, setSearchValue] = useState("");
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
