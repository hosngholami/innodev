from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=150, null=False, verbose_name="عنوان دسته بندی")



class Blog(models.Model):
    category = models.ManyToManyField(Category, verbose_name="دسته بندی")
    title = models.CharField(max_length=150, null=False, verbose_name="عنوان بلاگ")
    tag = models.CharField(max_length=500, null=False, verbose_name="برچسب")


class BlogDetail(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, null=True, verbose_name="بلاگ", related_name="detail")
    description = models.TextField(verbose_name="توضیحات")