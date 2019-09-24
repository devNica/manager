from .models import Leads
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Leads ViewSets


class LeadViewSet(viewsets.ModelViewSet):
    #queryset = Leads.objects.all()
    
    
    # permissions_classes = [
    #     permissions.AllowAny
    # ]

    permission_classes = [
        permissions.IsAuthenticated
    ]

    
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
         serializer.save(owner=self.request.user)