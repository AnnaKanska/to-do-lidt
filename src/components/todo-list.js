import React, { Component } from "react";
import ToDoForm from "./todo-form";
import Task from "./Task";

class ToDoList extends Component {
  state = {
    tasks: [],
    tasksToShow: "all"
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

  handleDelete = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };

  showOnly = str => {
    this.setState({
      tasksToShow: str
    });
  };

  render() {
    let tasks = [];
    if (this.state.tasksToShow === "all") {
      tasks = this.state.tasks;
    } else if (this.state.tasksToShow === "remaining") {
      tasks = this.state.tasks.filter(task => !task.complete);
    } else if (this.state.tasksToShow === "completed") {
      tasks = this.state.tasks.filter(task => task.complete);
    }
    return (
      <div>
        <ToDoForm onSubmit={this.addNew} />
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onComplete={() => this.onComplete(task.id)}
            onDelete={() => this.handleDelete(task.id)}
          />
        ))}
        <div>
          <p>
            Tasks left: {this.state.tasks.filter(task => !task.complete).length}
          </p>
        </div>
        <div>
          <button onClick={() => this.showOnly("all")}>All tasks</button>
          <button onClick={() => this.showOnly("remaining")}>Remaining</button>
          <button onClick={() => this.showOnly("completed")}>Completed</button>
        </div>
      </div>
    );
  }
}

export default ToDoList;
