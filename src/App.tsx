import React, { Component } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutusPage from './Pages/AboutusPage';
import Caloriecalculator from './Pages/CalorieCalculator';
import BMIcalculator from './Pages/BMIcalculator';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Biceps from './Pages/Exercises/Biceps';
import ArmPage from './Pages/Exercises/Arm';
import ProfilePage from './Pages/Profile';
import Triceps from './Pages/Exercises/Triceps';


interface State {

}

class App extends Component<{}, State> {


  render() {
    return <div>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/rolunk' element={<AboutusPage></AboutusPage>} />
          
          <Route path='/kaloria' element={<Caloriecalculator></Caloriecalculator>} />
          <Route path='/bmi' element={<BMIcalculator></BMIcalculator>} />

          <Route path='/register' element={<RegisterPage></RegisterPage>} />
          <Route path='/login' element={<LoginPage></LoginPage>} />
          <Route path='/profile' element={<ProfilePage></ProfilePage>} />

          <Route path='/arm' element={<ArmPage></ArmPage>} />
          <Route path='/biceps' element={<Biceps></Biceps>} />
          <Route path='/triceps' element={<Triceps></Triceps>} />

        </Routes>
      <Footer />
    </div>
  }
}

export default App;
