import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './register/Main';
import Trainingsheet from './components/Trainingsheet';
//import LoginBox from './register/LoginBox';
//import RegisterBox from './register/RegisterBox';




function App() {
  return (
    <div >
      <header className="App-header">
        Trainingapp
      </header>
    
      <div>
      <Trainingsheet />

      </div>
      <footer className='app-footer'>
      &copy; Copyright 2022
      </footer>

    </div>
  );
}

export default App;