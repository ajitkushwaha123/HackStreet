import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx';
import Profile from './components/Profile.jsx';
import Exercise from './components/Exercise.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' 
          element={
            <>
              <Navbar />
              <Hero />
              <Exercise />
              <Footer />
            </>
          }/>
          <Route path='/profile' 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          {/* <Route path='/' element={<Layout />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  </React.StrictMode>,
);
