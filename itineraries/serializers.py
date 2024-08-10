from rest_framework import serializers
from .models import Itinerary

class ItinerarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Itinerary
        fields = '__all__'
        read_only_fields = ['user']  # Ensure the 'user' field is read-only