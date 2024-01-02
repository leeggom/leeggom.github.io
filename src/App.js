import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Headers />
      <Main name="호두자두" color="pink" maleYn />
      <Footer />
    </div>
  );
}

export default App;
