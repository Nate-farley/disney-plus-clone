import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';






function App() {
  return (
    <div className="App"> 
    
         <Router>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/detail/:id" element={<Detail />} />
                  <Route exact path="/home" element={<Home />} />
              </Routes>
          </Router>
       
    </div>
  );
}

export default App;
