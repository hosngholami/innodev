from rest_framework import serializers
from aboutus.models import Fetaure, Aboutus


class FetaureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fetaure
        fields = '__all__'
        read_only_fields = ['aboutus']


    def create(self, validated_data):
        aboutusID = self.context.get('aboutus_id')
        aboutus = Aboutus.objects.get(id=aboutusID)
        validated_data['aboutus'] = aboutus
        return super().create(validated_data)