from django.urls import path, include
from .views import *

app_name = "api-v1"


urlpatterns = [
    path("project/", ProjectAPIView.as_view(), name="project"),
    path("project/<int:id>/", ProjectAPIView.as_view(), name="project"),
    path("project/<int:id>/images/", ProjectImageAPIView.as_view(), name="project-image"),
    path("project/<int:id>/images/<int:pk>/", ProjectImageAPIView.as_view(), name="project-image"),
    path("project/<int:id>/images/<int:pk>/delete/", ProjectImageAPIView.as_view(), name="project-image"),
    path("project/<int:id>/detail/", ProjectDetailAPIView.as_view(), name="project-detail"),
    path("project/<int:id>/detail/<int:pk>/", ProjectDetailAPIView.as_view(), name="project-detail"),
    path("project/<int:id>/detail/<int:pk>/delete/", ProjectDetailAPIView.as_view(), name="project-detail"),
]