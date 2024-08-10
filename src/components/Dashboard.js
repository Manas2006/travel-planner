import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [trips, setTrips] = useState([]);

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8">Your Trips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map(trip => (
          <div key={trip.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
              <p className="text-gray-600 mb-4">{trip.start_date} to {trip.end_date}</p>
              <Link to={`/itinerary/${trip.id}`} className="text-blue-500 hover:underline">Edit</Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/itinerary-planning" className="mt-8 inline-block bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600">
        Create New Trip
      </Link>
    </div>
  );
}

export default Dashboard;