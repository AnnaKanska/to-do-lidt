import React from "react";

export default props => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        textDecoration: props.task.complete ? "line-through" : ""
      }}
      onClick={props.onComplete}
    >
      {props.task.text}
    </div>
    <button onClick={props.onDelete}>x</button>
  </div>
);
