import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const {count} = this.state;
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Counter App</h1>
        <div className="card">
        <p>Count: {count}</p>
        <button onClick={() => this.setState((prevState) => ({count: prevState.count - 1}))}>
            Decrement
          </button>
          <button onClick={() => this.setState((prevState) => ({count: prevState.count + 1}))}>
            Increment
          </button>
        </div>
      </>
    );
  }
}

export default App;
