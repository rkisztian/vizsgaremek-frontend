import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

interface State {

}

class App extends Component<{}, State> {


  render() {
    return <div>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
        </Routes>
    </div>
  }
}

export default App;
