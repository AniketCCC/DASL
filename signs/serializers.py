"""
serializers.py
This module defines the serializer for the Sign model using Django REST framework's ModelSerializer.
Serializers in Django REST framework are used to convert complex data types, 
    such as querysets and model instances, into native Python datatypes that can then be 
    easily rendered into JSON, XML, or other content types.
They also provide deserialization, allowing parsed data to be converted back into complex types, 
    after first validating the incoming data.
Classes:
    SignSerializer: A serializer for the Sign model that includes all fields of the model.
"""
from rest_framework import serializers
from signs.models import Sign

class SignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sign
        fields = "__all__"
