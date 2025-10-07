from rest_framework import serializers
from aboutus.models import ProjectDetail


class ProjectDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDetail
        fields = '__all__'