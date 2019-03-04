import React, { Component } from "react";
import ToDoForm from "./todo-form";

class ToDoList extends Component {
  state = {
    tasks: []
  };

  addNew = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  render() {
    return (
      <div>
        <ToDoForm onSubmit={this.addNew} />
        {this.state.tasks.map(task => (
          <div key={task.id}>{task.text}</div>
        ))}
      </div>
    );
  }
}

export default ToDoList;
