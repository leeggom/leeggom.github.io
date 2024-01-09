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
      <Main name="mains" color="pink" maleYn />
      <Footer />
    </div>
  );
}

export default App;
