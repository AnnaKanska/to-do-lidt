import React from "react";

export default props => (
  <div
    style={{
      textDecoration: props.task.complete ? "line-through" : ""
    }}
    onClick={props.onComplete}
  >
    {props.task.text}
  </div>
);
