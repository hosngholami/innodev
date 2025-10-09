from rest_framework import serializers
from blog.models import Blog, Category
from blog.api.v1.serializers.CategorySerializer import CategorySerializer
from blog.api.v1.serializers.BlogDeatilSerializer import BlogDetailSerializer


class BlogSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),  # Queryset دسته‌بندی‌ها
        many=True
    )
    categoryDetail = CategorySerializer(source='category', many=True, read_only=True)
    detail = BlogDetailSerializer(many=True)

    class Meta:
        model = Blog
        fields = ['id', 
                  'title', 
                  'tag', 
                  'category', 
                  'categoryDetail', 
                  'detail']
      