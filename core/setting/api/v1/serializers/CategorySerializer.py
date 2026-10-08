from rest_framework import serializers
from setting.models import CategoryMenu


class CategorySerializer(serializers.ModelSerializer):
        class Meta:
                model = CategoryMenu
                fields = '__all__'
    