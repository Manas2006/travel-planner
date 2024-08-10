from rest_framework import generics, permissions
from .models import Itinerary
from .serializers import ItinerarySerializer

class ItineraryListCreateView(generics.ListCreateAPIView):
    queryset = Itinerary.objects.all()
    serializer_class = ItinerarySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        print(f"Authenticated user: {self.request.user}")
        serializer.save(user=self.request.user)

class ItineraryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Itinerary.objects.all()
    serializer_class = ItinerarySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)