import React from 'react';
import {BrowserRouter , Router , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// React
function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element= {<Home />} />
        </Routes>
 
    </BrowserRouter>
  )
}

export default App
