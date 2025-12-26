from rest_framework import serializers
from accounting.models import User




class EmailSerializer(serializers.Serializer):
    email = serializers.EmailField()