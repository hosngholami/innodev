from rest_framework import serializers
from aboutus.models import Aboutus
from aboutus.api.v1.serializers.FeautreSerializer import FetaureSerializer

class AboutusSerializer(serializers.ModelSerializer):
    feature = FetaureSerializer(many=True, read_only=True)
    class Meta:
        model = Aboutus
        fields = ['id',
                  'title',
                  'description',
                  'feature',
                  'image']