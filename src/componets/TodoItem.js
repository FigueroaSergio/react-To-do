import React from "react";
import "../styles/TodoItem.css";
function TodoItem(props) {
  const onComplete = () => {
    alert("Completastes:" + props.text);
  };
  const onDelete = () => {
    alert("Borraste: " + props.text);
  };
  return (
    <li className="TodoItem">
      <span
        onClick={onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        c
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
