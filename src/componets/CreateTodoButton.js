import React from "react";
import "../styles/CreateTodoButton.css";
function CreateTodoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    // setOpenModal((prevState) => !prevState);
    setOpenModal(!openModal);
  };
  return (
    <button onClick={onClickButton} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
