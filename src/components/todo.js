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
        {JSON.stringify(this.state.tasks)}
      </div>
    );
  }
}

export default ToDoList;
