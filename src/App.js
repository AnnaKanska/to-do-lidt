import React, { Component } from "react";
import "./App.css";
import ToDoList from "./todo";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>This is header</h1>
        </header>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList />
      </div>
    );
  }
}

export default App;
