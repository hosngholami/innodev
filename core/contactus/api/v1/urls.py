from django.urls import path, include
from .views import *

app_name = "api-v1"


urlpatterns = [
   path("", ContactUsAPIView.as_view(), name="contactus" ),
]