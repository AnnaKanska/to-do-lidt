import React, { Component } from "react";
import ToDoForm from "./todo-form";
import task from "./task";

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
          <task key={task.id} text={task.text} />
        ))}
      </div>
    );
  }
}

export default ToDoList;
