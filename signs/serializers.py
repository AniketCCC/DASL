from rest_framework import serializers
from signs.models import Sign

class SignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sign
        fields = "__all__"
