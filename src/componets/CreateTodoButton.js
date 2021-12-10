import React from "react";
import "../styles/CreateTodoButton.css";
function CreateTodoButton() {
  const onClickButton = () => {
    alert("clic");
  };
  return (
    <button onClick={onClickButton} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
