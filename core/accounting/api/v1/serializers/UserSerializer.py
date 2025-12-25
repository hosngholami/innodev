from rest_framework import serializers
from accounting.models import User
from accounting.api.v1.serializers.ProfileSerializer import ProfileSerializer

class UserSerializer(serializers.ModelSerializer):
  
    profile = ProfileSerializer(many=True)
    class Meta:
        model = User
        fields = ['id', 
                  'email',
                  'profile'
        ]