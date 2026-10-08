from django.urls import path, include

app_name = "setting-api"

urlpatterns = [
  path("api/v1/", include("setting.api.v1.urls"))
]