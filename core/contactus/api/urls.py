from django.urls import path, include

app_name = "contactus-api"

urlpatterns = [
  path("api/v1/", include("contactus.api.v1.urls"))
]