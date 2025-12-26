from django.urls import path, include
from .views import *

app_name = "api-v1"


urlpatterns = [
  path("register", RegisterAPIView.as_view(), name="register" ),
  path("login", LoginAPIView.as_view(), name="login" ),
  path("user", UserAPIView.as_view(), name="user" ),
  path("verification-email", CheckEmailAPIView.as_view(), name="verification-email" ),
  path("verification-password", CheckPasswordAPIView.as_view(), name="verification-password" ),
]