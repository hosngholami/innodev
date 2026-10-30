from rest_framework import serializers
from setting.models import Menu, CategoryMenu


class MenuSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=CategoryMenu.objects.all(),
        source='category' 
    )
    
    parent = serializers.PrimaryKeyRelatedField(
        queryset=Menu.objects.all(),
        required=False,
        allow_null=True
    )

    class Meta:
        model = Menu
        fields = [
            'id',
            'title',
            'url',
            'icon',
            'priority',
            'status',
            'children', 
            'category_id',
            'parent'
        ]

    def get_children(self, obj):
        children = obj.children.filter(status=1).order_by('priority')
        return MenuSerializer(children, many=True).data
        


   