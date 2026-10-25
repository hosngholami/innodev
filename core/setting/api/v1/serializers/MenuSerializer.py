from rest_framework import serializers
from setting.models import Menu


# class MenuSerializer(serializers.ModelSerializer):
#     category = serializers.CharField(
#         source='category.title',
#         read_only=True
#     )
#     class Meta:
#         model = Menu
#         fields = ['id', 'title', 'category']


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
            'children'          # ← زیرمنوها
        ]

    def get_children(self, obj):
        children = obj.children.filter(status=1).order_by('priority')
        return MenuSerializer(children, many=True).data
        


   