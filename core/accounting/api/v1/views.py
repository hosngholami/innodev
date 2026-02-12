import base64
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core.serializers import serialize
from rest_framework.response import Response
from accounting.api.v1.serializers.RegisterSerializer import RegisterSerializer
from accounting.api.v1.serializers.LoginSerializer import LoginSerializer, AuthTokenSerializer
from accounting.api.v1.serializers.UserSerializer import UserSerializer
from accounting.api.v1.serializers.EmailSerializer import EmailSerializer
from accounting.api.v1.serializers.CheckPasswordSerializer import CheckPasswordSerializer
from rest_framework.views import APIView
from django.shortcuts import render
from rest_framework import status
from accounting.models import User
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from rest_framework.generics import GenericAPIView, UpdateAPIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView 



class UserAPIView(GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    def get_queryset(self):
        return User.objects.all()
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)



class RegisterAPIView(GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(GenericAPIView):
    serializer_class = AuthTokenSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        if(serializer.is_valid()):
            
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            

            return Response({
                'token' : token.key,
                'userId' : user.pk,
                'email': user.email
            }, status=status.HTTP_200_OK)
            
        return Response({'token' : 'user-notfound'}, status=status.HTTP_404_NOT_FOUND)
        
class CheckEmailAPIView(GenericAPIView):
    serializer_class = EmailSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer._validated_data['email']
        
        isEmailExists = User.objects.filter(email=email).exists()

        return Response(
            {"detail": isEmailExists},
            status=status.HTTP_200_OK
        )
        
        
        
class CheckPasswordAPIView(GenericAPIView):
    serializer_class = CheckPasswordSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
class LogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    
        
        
