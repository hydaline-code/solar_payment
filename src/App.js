import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './screens/LoginPage';
import SignupPage from './screens/signUpPage';
import SignupConfirm from './screens/SignupConfirm';
import SignupError from './screens/SigninErr';
import HomePage from './screens/HomePage';
import AdminPage from './screens/adminMenu';
import AddUser from './screens/addUsers';
import AddConfirm from './screens/addConfirm';
import UserDetail from './screens/userDetails';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/SignupConfirm" element={<SignupConfirm />} />
        <Route path="/SignupError" element={<SignupError />} />
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/AdminPage" element={<AdminPage/>}/>
        <Route path="/addUsers" element={<AddUser/>}/>
        <Route path="/addConfirm" element={<AddConfirm/>}/>
        <Route path="/" element={<UserDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
