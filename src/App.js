import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/pages/registration';
import Dashboard from './components/pages/home';
import Login from './components/pages/login';
import RegistraionLanding from './components/pages/registrationLanding';

function App() { 
  return (
    <Router>
      <Routes>
        <Route exact path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path ="/registration/success" element={<RegistraionLanding/>} />
      </Routes>
    </Router>
  );
}

export default App;
