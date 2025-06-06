import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlaneDeparture, FaPlus, FaMapMarkerAlt } from 'react-icons/fa';

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/api/itineraries/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setTrips(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the itineraries!', error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaPlaneDeparture className="text-blue-500 text-2xl" />
            <span className="text-2xl font-bold tracking-tight">WanderWise</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/dashboard" className="hover:underline underline-offset-4 transition">Dashboard</Link>
            <Link to="/itinerary-planning" className="hover:underline underline-offset-4 transition">Plan Trip</Link>
            <button onClick={handleLogout} className="text-red-500 hover:underline underline-offset-4 transition">Logout</button>
          </div>
        </div>
      </nav>
      <main className="flex-1 px-4 py-8">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg pl-1">Your Trips</h2>
          <Link
            to="/itinerary-planning"
            className="flex items-center bg-[#22c55e] hover:bg-green-600 text-white font-semibold rounded-full px-5 py-2 shadow transition mb-8 w-full sm:w-auto"
          >
            <FaPlus className="mr-2" /> Create New Trip
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trips.map(trip => (
              <div
                key={trip.id}
                className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-[160px]"
              >
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-blue-500 text-lg mr-2" />
                  <h3 className="text-xl font-bold flex-1">{trip.title}</h3>
                </div>
                <div className="text-gray-500 text-sm mb-8">{trip.start_date} to {trip.end_date}</div>
                <div className="absolute bottom-4 right-6">
                  <Link
                    to={`/itinerary/${trip.id}`}
                    className="text-blue-600 underline underline-offset-4 hover:text-blue-800 font-medium transition"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;