from rest_framework import serializers
from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    
    email = serializers.EmailField()
    password = serializers.CharField()