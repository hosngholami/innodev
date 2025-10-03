from rest_framework import serializers
from accounting.models import User
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
class RegisterSerializer(serializers.ModelSerializer):

    repeat_password = serializers.CharField(
        write_only=True,
        required=True,
        error_messages={'required': 'تکرار کلمه عبور نمی تواند خالی باشد'}
    )

    def __init__(self, *args, **kwargs):
        super(RegisterSerializer, self).__init__(*args, **kwargs)
        self.fields['email'].error_messages['required'] = u'فیلد ایمیل نمی تواند خالی باشد'
        self.fields['password'].error_messages['required'] = u'فیلد کلمه عبور نمی تواند خالی باشد'
    
    def validate(self, attr):
        if attr['password'] != attr['repeat_password']:
            raise serializers.ValidationError({"details": "کلمه عبور و تکرار آن یکسان نیستند."})
        try:
            validate_password(attr['password'])
        except exceptions.ValidationError as e:
            raise serializers.ValidationError({'password': list(e.messages)})
        return super().validate(attr)

    def create(self, validated_date):
        validated_date.pop('repeat_password', None)
        return User.objects.create_user(**validated_date)

    class Meta:
        model = User
        fields = ["email", "password", "repeat_password"]
        
               
            
        