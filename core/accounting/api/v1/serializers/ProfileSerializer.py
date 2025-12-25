from rest_framework import serializers
from accounting.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
  

    class Meta:
        model = Profile
        fields = ['id', 
                  'first_name'
        ]