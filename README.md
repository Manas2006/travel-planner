# WanderWise - Travel Planning Platform

WanderWise is a full-stack travel planning application that helps users create, manage, and share their travel itineraries. The platform combines a Django backend with a React frontend to provide a seamless travel planning experience.

## Tech Stack

### Backend
- Django (Python web framework)
- Django REST Framework (API development)
- SQLite (Database)

### Frontend
- React 18
- React Router DOM
- Google Maps API integration
- TailwindCSS for styling
- Axios for API requests

## Project Structure

```
travel-planner/
├── travel_planner/          # Django project settings
├── users/                   # User management app
├── itineraries/            # Itinerary management app
├── wanderwise-frontend/    # React frontend
├── public/                 # Static files
└── manage.py              # Django management script
```

## Features

- User authentication and authorization
- Create and manage travel itineraries
- Interactive map integration using Google Maps API
- Responsive design with TailwindCSS
- RESTful API architecture

## Getting Started

### Prerequisites
- Python 3.x
- Node.js and npm
- Google Maps API key

### Backend Setup
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run migrations:
   ```bash
   python manage.py migrate
   ```

4. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd wanderwise-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Users
- `/api/users/` - User registration and management
- `/api/users/login/` - User authentication

### Itineraries
- `/api/itineraries/` - CRUD operations for travel itineraries
- `/api/itineraries/<id>/` - Individual itinerary management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
