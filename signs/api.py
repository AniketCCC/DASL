"""
This module defines the API endpoints for the Sign model using Django REST framework.
Classes:
    SignViewSet: A viewset for viewing and editing Sign instances.
The SignViewSet class provides the following functionalities:
- Lists all Sign instances.
- Allows any user to access the API endpoints.
- Uses SignSerializer to serialize and deserialize Sign instances.
- Supports filtering of Sign instances based on handshape, flexion, sign_type, major_location, and minor_location fields.
Dependencies:
- signs.models: Contains the Sign model definition.
- rest_framework: Provides the viewsets and permissions classes.
- .serializers: Contains the SignSerializer class for serializing Sign instances.
- django_filters.rest_framework: Provides the DjangoFilterBackend for filtering querysets.
This file is used to manage the API endpoints related to Sign instances.
"""

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
    filter_backends = [DjangoFilterBackend]    
    filterset_fields = ['handshape', 'flexion', 'sign_type', 'major_location', 'minor_location']

