import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen  bg-slate-800 flex flex-col'>
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />

      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element ={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element ={<Dashboard setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>

    </div>
  );
}

export default App;
