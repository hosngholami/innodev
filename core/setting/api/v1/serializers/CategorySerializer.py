from rest_framework import serializers
from setting.models import CategoryMenu
from setting.api.v1.serializers.MenuSerializer import MenuSerializer

# class CategorySerializer(serializers.ModelSerializer):
        
#         menu = MenuSerializer(many=True, read_only=True)
#         class Meta:
#                 model = CategoryMenu
#                 fields = ['id', 'title',  'priority', 'status', 'menu']

class CategorySerializer(serializers.ModelSerializer):
    menu = serializers.SerializerMethodField()      # ← تغییر دادم

    class Meta:
        model = CategoryMenu
        fields = ['id', 'title', 'priority', 'status', 'menu']

    def get_menu(self, obj):
        # فقط منوهای سطح اول (parent=None)
        main_menus = obj.menu.filter(parent__isnull=True, status=1).order_by('priority')
        return MenuSerializer(main_menus, many=True).data
    