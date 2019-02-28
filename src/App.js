import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/personList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
         
            <PersonList/>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
