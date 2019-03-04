import React, { Component } from "react";
import ToDoForm from "./todo-form";
import Task from "./Task";

class ToDoList extends Component {
  state = {
    tasks: []
  };

  addNew = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  onComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <ToDoForm onSubmit={this.addNew} />
        {this.state.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onComplete={() => this.onComplete(task.id)}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
