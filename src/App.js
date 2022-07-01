import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import { Routes, BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import Detail from './components/Detail/Detail';


function App() {
  return (
    <div className="App"> 
    
         <Router>
              <Header />
              <Routes>
                  <Route exact path="detail" element={<Detail />} />
                  <Route exact path="/" element={<Home />} />
              </Routes>
          </Router>
          
    </div>
  );
}

export default App;
