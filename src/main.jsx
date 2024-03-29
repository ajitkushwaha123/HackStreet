import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
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
import AbsWorkout from './components/AbsWorkout.jsx';
import Daily from './components/Daily.jsx';
import FormInfo from './components/FormInfo.jsx';
import ChestWorkout from './components/ChestWorkout.jsx';
import Experiment from './components/Experiment.jsx';

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
            <> 
              {/* <Navbar />
              <Profile />
              <Footer /> */}
            </>
            </ProtectedRoute>
          }/>
          {/* <Route path='/' element={<Layout />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/abs-workout/' element={<AbsWorkout />} />
          <Route path='/daily-task' element={<Daily />} />
          <Route path='/form' element={<FormInfo />} />
          <Route path='/chest-workout' element={<ChestWorkout />} />
          <Route path='/experiment' element={<Experiment />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  </React.StrictMode>,
);
