from rest_framework import serializers
from contactus.models import ContactType

class ContactTypeSerializer(serializers.Serializer):
    types = serializers.SerializerMethodField()
    
    def get_types(self, obj):
        return [
            {"value": key, "label": value}
            for key, value in ContactType.choices
        ]

    




  

