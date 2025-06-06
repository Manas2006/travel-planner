import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link, useNavigate } from 'react-router-dom';

function ItineraryPlanning() {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [selectedDay, setSelectedDay] = useState(1);
  const [location, setLocation] = useState({ lat: -3.745, lng: -38.523 });
  const navigate = useNavigate();

  const addActivity = () => {
    setActivities([...activities, { day: selectedDay, name: newActivity }]);
    setNewActivity('');
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">WanderWise</h1>
          <div className="space-x-4">
            <Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
            <Link to="/itinerary-planning" className="text-blue-500 hover:underline">Plan Trip</Link>
            <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
          </div>
        </div>
      </nav>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Itinerary for Day {selectedDay}</h2>
        <div className="flex space-x-8">
          <div className="w-1/4">
            <div className="flex flex-col space-y-4">
              {[1, 2, 3].map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-3 px-6 rounded-lg font-semibold ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
                >
                  Day {day}
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/4">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Add activity"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <button onClick={addActivity} className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
                Add Activity
              </button>
            </div>
            <ul className="space-y-2">
              {activities.filter(activity => activity.day === selectedDay).map((activity, index) => (
                <li key={index} className="bg-white p-3 rounded-lg shadow-lg">
                  {activity.name}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={location}
                  zoom={10}
                >
                  <Marker position={location} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryPlanning;