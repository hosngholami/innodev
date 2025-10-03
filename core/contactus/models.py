from django.db import models

# Create your models here.
class ContactUs(models.Model):
    name = models.CharField(max_length=80, null = False, verbose_name = "نام و نام خانوادگی")
    email = models.EmailField(max_length=200, null = False, verbose_name = "آدرس ایمیل")
    title = models.CharField(max_length=100, verbose_name = "عنوان")
    describtion = models.CharField(max_length=400, verbose_name = "توضیحات")


    class Meta:
        verbose_name_plural = "تماس با ما"
        verbose_name = "تماس با ما"