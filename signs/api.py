from signs.models import Sign
from rest_framework import viewsets, permissions
from .serializers import SignSerializer
from django_filters.rest_framework import DjangoFilterBackend

class SignViewSet(viewsets.ModelViewSet):
    queryset = Sign.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SignSerializer
    #filter_backends = [DjangoFilterBackend]    
    filterset_fields = ['handshape', 'location', 'movement']#, 'major_location', 'minor_location']

class SignNameViewSet(viewsets.ModelViewSet):
    queryset = Sign.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SignSerializer
    #filter_backends = [DjangoFilterBackend]    
    filterset_fields = ['id']

