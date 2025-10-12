from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser, PermissionsMixin)
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.




class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_("the email must be set"))
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_field):
        extra_field.setdefault('is_staff', True)
        extra_field.setdefault('is_superuser', True)
        extra_field.setdefault('is_active', True)


        return self.create_user(email=email, password=password, **extra_field)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=150, unique=True, verbose_name="آدرس ایمیل")
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True, verbose_name="فعال/غیرفعال")
    is_superuser = models.BooleanField(default=False)
    # is_verified = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ثبت")
    updated_date = models.DateTimeField(auto_now=True, verbose_name="تاریخ ویرایش")


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


    objects = UserManager()

    def __str__(self) -> str:
        return self.email
    
    class Meta:
        verbose_name_plural = "کاربران"
        verbose_name = "کاربر"
 
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="کاربر")
    first_name = models.CharField(max_length=250, verbose_name="نام")
    last_name = models.CharField(max_length=250, verbose_name="نام و نام خانوادگی")
    image = models.ImageField(blank=True, null=True, verbose_name="آدرس تصویر")
    describtion = models.TextField(verbose_name="توضیحات", blank=True, null=True)
    created_date = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ثبت")
    updated_date = models.DateTimeField(auto_now=True, verbose_name="تاریخ ویرایش")

    def __str__(self):
        return self.user.email
    
    class Meta:
        verbose_name_plural = "پروفایل"
        verbose_name = "پروفایل"
    