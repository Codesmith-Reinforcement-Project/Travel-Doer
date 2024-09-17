import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Results from './pages/Results.jsx';
import NavBar from './pages/NavBar.jsx';
import NotFound from './pages/Notfound.jsx'; //If file path error, check here first

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        {/* Use the helper function to apply the layout */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/results' element={<Results />} />
        {/* Catch-all route without the layout */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
