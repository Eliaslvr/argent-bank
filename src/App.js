import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './pages/Index/Index';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
