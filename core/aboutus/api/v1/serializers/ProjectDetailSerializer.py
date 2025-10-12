from rest_framework import serializers
from aboutus.models import ProjectDetail, Project


class ProjectDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDetail
        fields = '__all__'
        read_only_fields = ['project']


    def create(self, validated_data):
        projectID = self.context.get('project_id')
        project = Project.objects.get(id=projectID)
        validated_data['project'] = project
        return super().create(validated_data)