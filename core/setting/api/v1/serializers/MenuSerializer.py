from rest_framework import serializers
from setting.models import Menu, CategoryMenu


class MenuSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    parent_url = serializers.CharField(source='parent.url', read_only=True, allow_null=True)
    full_url = serializers.SerializerMethodField()
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
            'children',
            'parent_url',
            'full_url'
        ]

    def get_children(self, obj):
        children = obj.children.filter(status=1).order_by('priority')
        return MenuSerializer(children, many=True).data
    
    def get_full_url(self, obj):

        parts = []
        current = obj

        while current:
            if current.url:
                clean_url = current.url.strip('/')
                if clean_url:
                    parts.insert(0, clean_url)
            current = current.parent

        if not parts:
            return '#'

        return '/' + '/'.join(parts)
        


   