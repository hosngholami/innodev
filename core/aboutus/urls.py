from django.urls import path, include

app_name = "aboutus-api"

urlpatterns = [
  path("api/v1/", include("aboutus.api.v1.urls"))
]