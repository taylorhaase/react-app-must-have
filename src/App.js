import React, { Component } from 'react';
import logo from '/Users/taylorhaase/lc101/must-have/src/logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mustHave: [],
      mustHaveToAdd: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const nextMustHaveToAdd = event.target.value;

    this.setState({
      mustHaveToAdd: nextMustHaveToAdd
    });
  }

  handleClick(event) {
    const nextMustHave =
  this.state.mustHave.concat(this.state.mustHaveToAdd);
    const nextMustHaveToAdd = '';

    this.setState({
      mustHave: nextMustHave,
      mustHaveToAdd: nextMustHaveToAdd
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <style>
            @import url('https://fonts.googleapis.com/css?family=Dosis');
          </style>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Must-Have List!</h2>
          <h3>Please Add Must-Have Items</h3>
        
        </div>
        <ul>
          {this.state.mustHave.map((mustHave, index) => <li key={index}>{mustHave}</li>)}
        </ul>
        <input 
            type="text" 
            placeholder="New Must-Have Item"
            value={this.state.mustHaveToAdd}
            onChange={this.handleChange} 
        />
        <button onClick={this.handleClick}>Add Must-Have</button>
      </div>
    );
  }
}

export default App;
