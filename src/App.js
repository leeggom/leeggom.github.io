import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Wrapper from './component/Wrapper';

  
function App() {
    return (
        <div className="App">
        <Headers />
            <Wrapper>
            <Main />
            </Wrapper>
        <Footer />
        </div>
    );    
}

export default App;
