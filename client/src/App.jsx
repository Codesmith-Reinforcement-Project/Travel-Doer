import './App.css';
// import React from 'react';
import { Routes, Route } from 'react-router';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Results from './pages/Results.jsx';
import NotFound from './pages/Notfound.jsx'; //If file path error, check here first

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Use the helper function to apply the layout */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/results' element={<Results />} />
        {/* Catch-all route without the layout */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
