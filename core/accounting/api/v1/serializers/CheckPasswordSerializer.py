from rest_framework import serializers
from accounting.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError




class CheckPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(write_only=True)
    repeat_password = serializers.CharField(write_only=True)
    
    def validate(self, attrs):
        
        error = "test"
        password = attrs.get('password')
        repeat_password = attrs.get('repeat_password')
        
        if(password != repeat_password):
            raise serializers.ValidationError({'detail' : 'کلمه عبور با تکرار کلمه عبور یکسان نیست.'})
        try:
            validate_password(password, user=None)
        except DjangoValidationError as e:
            raise serializers.ValidationError({
                'password': e.messages
            })
       
        
        return attrs
        
        
        

    


