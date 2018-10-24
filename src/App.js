import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Form';
import i18nInstance from './i18n';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
