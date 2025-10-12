from django.urls import path, include
from .views import *

app_name = "api-v1"


urlpatterns = [
    path("category/", CategoryAPIView.as_view(), name="category"),
    path("category/<int:id>/update/", CategoryAPIView.as_view(), name="category"),
    path("category/<int:id>/delete/", CategoryAPIView.as_view(), name="category"),
    path("", BlogAPIView.as_view(), name="blog"),
    path("<int:id>/", BlogAPIView.as_view(), name="blog"),
    path("<int:id>/delete/", BlogAPIView.as_view(), name="blog"),
    path("<int:id>/detail/", BlogDetailAPIView.as_view(), name="blog-detail"),
    path("<int:id>/detail/<int:pk>/", BlogDetailAPIView.as_view(), name="blog-detail"),
]