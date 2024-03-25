import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Headers from './component/Header/Header';
import Footers from './component/Footer/Footer';
import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';

const App = () => {
    return (
        <div>
            <Headers />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">about</Link></li>
                <li><Link to="/Profile/velopert">doctor</Link></li>
                <li><Link to="/Profile/gildong">police</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
            <Footers />
        </div>
    );
};


const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);
