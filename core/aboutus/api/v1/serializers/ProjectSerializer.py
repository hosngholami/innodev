from rest_framework import serializers
from aboutus.models import Project
from aboutus.api.v1.serializers.ProjectImageSerializer import ProjectImageSerializer
from aboutus.api.v1.serializers.ProjectDetailSerializer import ProjectDetailSerializer

class ProjectSerializer(serializers.ModelSerializer):
    projectImage = ProjectImageSerializer(many=True, read_only=True)
    projectDetail = ProjectDetailSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = ['id', 
                  'createdDate', 
                  'projectImage', 
                  'projectDetail']