import { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Tópico 1', 'Tópico 2', 'Tópico 3', 'Tópico 4'];

class App extends Component {
  render() {
    return (
      <ul>{ tasks.map(tasks => Task(tasks)) }</ul>
    );
  }
}

export default App;