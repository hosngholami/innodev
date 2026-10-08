from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=150, null=False, verbose_name="عنوان دسته بندی")
    
    class Meta:
          db_table = "BlogCategory"



class Blog(models.Model):
    category = models.ManyToManyField(Category, verbose_name="دسته بندی")
    title = models.CharField(max_length=150, null=False, verbose_name="عنوان بلاگ")
    tag = models.CharField(max_length=500, null=False, verbose_name="برچسب")
    name = models.CharField(max_length=50)

    class Meta:
        db_table = "Blog"

class BlogDetail(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, null=True, verbose_name="بلاگ", related_name="detail")
    description = models.TextField(verbose_name="توضیحات")

    class Meta:
        db_table = "BlogDetail"






    
    