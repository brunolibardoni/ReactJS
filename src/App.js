import React, {Component} from 'react';
import Routes from './routes';
import Header from './components/Header';
import './styles.css';
import Main from './pages/main';

// chamando o componente header e routes

const App = () => (
  <div className="App">
    <Header /> 
    <Routes/>
  </div>
);


export default App;
