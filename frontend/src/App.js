import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import ItineraryPlanning from './components/ItineraryPlanning';
import ItineraryForm from './components/ItineraryForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/itinerary-planning" element={<PrivateRoute><ItineraryPlanning /></PrivateRoute>} />
                    <Route path="/itinerary-form" element={<PrivateRoute><ItineraryForm /></PrivateRoute>} />
                    <Route path="/itinerary/:id" element={<PrivateRoute><ItineraryForm /></PrivateRoute>} />
                    <Route path="*" element={<LandingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;