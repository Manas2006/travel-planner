import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaPlaneDeparture } from 'react-icons/fa';

const LandingPage = () => {
  const destinations = [
    '/eiffel-tower.jpg', 
    '/greece.jpg',
    '/mountain.jpg',
    '/Planning.jpg',
    '/friends.jpg',
    '/pdf.png'
  ];

  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-gray-800">
      {/* Blurred Background Image */}
      <div className="fixed inset-0 z-0">
        <img src="/mountain.jpg" alt="Background" className="w-full h-full object-cover brightness-95" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-blue-200/60 to-blue-300/60"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 shadow-sm p-4 fixed top-0 left-0 w-full z-20 flex justify-center">
        <div className="w-full max-w-5xl flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaPlaneDeparture className="text-blue-500 text-2xl" />
            <span className="text-2xl font-bold tracking-tight">WanderWise</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/signup" className="text-gray-800 hover:underline underline-offset-4 transition">Sign Up</Link>
            <Link to="/auth" className="text-gray-800 hover:underline underline-offset-4 transition">Log in</Link>
            <ScrollLink
              to="mission"
              smooth={true}
              duration={1000}
              className="text-gray-800 hover:underline underline-offset-4 transition cursor-pointer"
            >
              Mission Statement
            </ScrollLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 pb-12 px-4">
        <div className="w-full max-w-3xl bg-white bg-opacity-80 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold leading-tight mb-6 text-gray-900">Plan Your Next Adventure</h2>
          <p className="text-lg mb-8 text-gray-700">Effortlessly plan your trips with WanderWise. Start today!</p>
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </main>

      {/* Scroll Down for More Section */}
      <div className="relative z-10 flex justify-center mt-10">
        <p className="text-white text-lg">Scroll down to discover more</p>
      </div>

      {/* Cards Section */}
      <section className="relative z-10 mt-10 p-6 bg-white text-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinations[3]} alt="Easy Itinerary Planning" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Easy Itinerary Planning</h3>
              <p className="text-gray-700">Create and manage your travel plans with just a few clicks.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinations[4]} alt="Share with Friends" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Share with Friends</h3>
              <p className="text-gray-700">Easily share your travel itinerary with friends and family.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinations[5]} alt="Export to PDF" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Export to PDF</h3>
              <p className="text-gray-700">Download your itinerary as a PDF for offline access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <footer id="mission" className="relative z-10 p-10 bg-white text-gray-900 text-center flex items-center justify-center">
        <img src="pfp.jpg" alt="Your Name" className="w-40 h-40 rounded-full mr-8"/>
        <div>
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="mt-4 max-w-3xl text-left">
            At WanderWise, our mission is to make travel planning simple and enjoyable. We aim to empower travelers with the tools they need to create memorable experiences. 
            Our platform is designed with user experience in mind, ensuring that your travel plans are easy to create, share, and access. We believe in the power of exploration 
            and are dedicated to helping you discover the world, one adventure at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;