from rest_framework import serializers
from setting.models import Menu




class ParentMenuSerializer(serializers.ModelSerializer):
   

    class Meta:
        model = Menu
        fields = [
            'id',
            'title',
            'url',
            'icon',
            'priority',
            'status',
        ]

    
        


   