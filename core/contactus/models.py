from django.db import models



class ContactType(models.TextChoices):
    Contact = 'contact', 'تماس با ما'
    Support = 'supoort', 'پشتیبانی'
    CONSULTATION = 'consultation', 'درخواست مشاوره'
    
# Create your models here.
class ContactUs(models.Model):
    name = models.CharField(max_length=80, null = False, verbose_name = "نام و نام خانوادگی")
    email = models.EmailField(max_length=200, null = False, verbose_name = "آدرس ایمیل")
    title = models.CharField(max_length=100, verbose_name = "عنوان")
    message = models.TextField(verbose_name = "توضیحات")
    phone = models.CharField(verbose_name="شماره تماس", max_length=11)
    type = models.CharField(
        max_length=20,
        choices=ContactType.choices,
        default=ContactType.Contact,
        verbose_name="نوع درخواست"
    )


    class Meta:
        verbose_name_plural = "تماس با ما"
        verbose_name = "تماس با ما"
        db_table = "Contact"