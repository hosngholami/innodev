from rest_framework import serializers
from blog.models import BlogDetail


class BlogDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogDetail
        fields = '__all__'