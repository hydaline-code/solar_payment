import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/signUpPage';
import SignupConfirm from './screens/SignupConfirm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
       < Route path="/SignupConfirm" element={<SignupConfirm/>} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <LoginPage />
//   );
// }

// export default App;
