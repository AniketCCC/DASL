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
import json

from signs.models import Sign
from rest_framework import viewsets, permissions
from .serializers import SignSerializer

from django.http import JsonResponse
from django.middleware.csrf import get_token
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.views.decorators.http import require_POST

class SignViewSet(viewsets.ModelViewSet):
    queryset = Sign.objects.all()
    permission_classes = [
				permissions.IsAuthenticated
        #permissions.AllowAny
    ]
    serializer_class = SignSerializer
    #filter_backends = [DjangoFilterBackend]    
    filterset_fields = ['handshape', 'location', 'movement']#, 'major_location', 'minor_location']

    def perform_create(self, serializer):
      serializer.save(creator=self.request.user)
    def get_queryset(self): 
      return self.queryset.filter(creator=self.request.user)

class SignNameViewSet(viewsets.ModelViewSet):
    queryset = Sign.objects.all()
    permission_classes = [
				permissions.IsAuthenticated
        #permissions.AllowAny
    ]
    serializer_class = SignSerializer
    #filter_backends = [DjangoFilterBackend]    
    filterset_fields = ['id']


@require_POST
def LoginView(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({'detail': 'Please provide username and password.'}, status=400)

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({'detail': 'Invalid credentials.'}, status=400)

    login(request, user)
    return JsonResponse({'detail': 'Successfully logged in.'})

@require_POST
def RegisterView(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({'detail': 'Please provide username and password.'}, status=400)

    #user = authenticate(username=username, password=password)
    user = User.objects.create_user(username=username, password=password)

    if user is None:
        return JsonResponse({'detail': 'Registration failed'}, status=400)

    login(request, user)
    return JsonResponse({'detail': 'Successfully registered.'})


def get_csrf(request):
    response = JsonResponse({'detail': 'CSRF cookie set'})
    #response['X-CSRFToken'] = get_token(request)
    return response
