from django.urls import path, include

app_name = "account-api"

urlpatterns = [
  path("api/v1/", include("accounting.api.v1.urls"))
]