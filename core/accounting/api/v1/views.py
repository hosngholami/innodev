import base64
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core.serializers import serialize
from rest_framework.response import Response
from accounting.api.v1.serializers.RegisterSerializer import RegisterSerializer
from accounting.api.v1.serializers.LoginSerializer import LoginSerializer
from rest_framework.views import APIView
from django.shortcuts import render
from rest_framework import status
from accounting.models import User
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from rest_framework.generics import GenericAPIView, UpdateAPIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token



class RegisterAPIView(GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginAPIView(GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = request.data['email']
        password = request.data["password"]

        user = authenticate(email=email, password=password)

        if(user is not None):
            login(request, user)
            return Response("you'r login")
        else:
            return Response("incorrect username or password")