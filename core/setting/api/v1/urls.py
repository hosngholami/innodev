from django.urls import path, include
from .views import *

app_name = "api-v1"


urlpatterns = [
    path("category/", CategoryMenuAPIView.as_view(), name="category-menu"),
    path("menu/", MenuAPIView.as_view(), name="menu"),
    path("menu/<int:id>/", MenuDateilAPIView.as_view(), name="menu-detail"),
    

]