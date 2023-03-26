import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import AboutusPage from './Pages/AboutusPage';
import Caloriecalculator from './Pages/CalorieCalculator';
import BMIcalculator from './Pages/BMIcalculator';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import Arms from './Pages/Exercises/Arms';

interface State {

}

class App extends Component<{}, State> {


  render() {
    return <div>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/kapcsolat' element={<ContactPage></ContactPage>} />
          <Route path='/rolunk' element={<AboutusPage></AboutusPage>} />
          <Route path='/kaloria' element={<Caloriecalculator></Caloriecalculator>} />
          <Route path='/bmi' element={<BMIcalculator></BMIcalculator>} />
          <Route path='/register' element={<RegisterPage></RegisterPage>} />
          <Route path='/login' element={<LoginPage></LoginPage>} />
          <Route path='/arm' element={<Arms></Arms>} />
        </Routes>
    </div>
  }
}

export default App;
