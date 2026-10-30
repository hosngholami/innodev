from rest_framework import serializers
from setting.models import Menu, CategoryMenu


class MenuSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model = Menu
        fields = [
            'id', 
            'title', 
            'url', 
            'icon', 
            'priority', 
            'status',
            'parent', 
            'category', 
            'children'
        ]

    def get_children(self, obj):
        children = obj.children.filter(status=1).order_by('priority')
        return MenuSerializer(children, many=True).data
        


   