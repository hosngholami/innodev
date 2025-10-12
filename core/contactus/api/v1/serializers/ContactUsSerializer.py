from rest_framework import serializers
from contactus.models import ContactUs

class ContactUsSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
        required=True,
        error_messages={
            'required': 'فیلد ایمیل نمی‌تواند خالی باشد',
            'invalid': 'فرمت ایمیل معتبر نیست'
        }
    )

    name = serializers.CharField(
        required=True,
        error_messages={
            'required': 'فیلد نام نمی‌تواند خالی باشد',
            'invalid': 'فرمت ایمیل معتبر نیست'
        }
    )


    title = serializers.CharField(
        required=True,
        error_messages={
            'required': 'فیلد عنوان نمی‌تواند خالی باشد',
            'invalid': 'فرمت ایمیل معتبر نیست'
        }
    )

    describtion = serializers.CharField(
        required=True,
        error_messages={
            'required': 'فیلد توضیحات نمی‌تواند خالی باشد',
            'invalid': 'فرمت ایمیل معتبر نیست'
        }
    )

    class Meta:
        model = ContactUs
        fields = ['email', 'name', 'title', 'describtion']





    def create(self, validated_data):
        return ContactUs.objects.create(**validated_data)