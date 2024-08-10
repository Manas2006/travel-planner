from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('users.urls')),  # Include the users app URLs for signup and login
    path('api/itineraries/', include('itineraries.urls')),
]