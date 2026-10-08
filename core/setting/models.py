from django.db import models


class CategoryMenu(models.Model):
    title = models.CharField(verbose_name="عنوان دسته بندی", max_length=30, null=False, blank=False)
    priority = models.IntegerField(verbose_name="اولویت", null=True, blank=True)
    status = models.BooleanField(verbose_name="وضعیت", default=True)

    class Meta:
         db_table = "CategoryMenu"
         
         
         

class Menu(models.Model):
    category = models.ForeignKey(CategoryMenu,  on_delete=models.CASCADE, null=False, blank=False, related_name="category_menu", verbose_name="دسته بندی")
    title = models.CharField(verbose_name="عنوان منو", max_length=400, blank=False)
    parent =  models.ForeignKey('self', null=True, blank=True, related_name='childern', on_delete=models.CASCADE)
    url = models.CharField(max_length=500)
    icon = models.CharField(max_length=200, null=True, verbose_name="آیکون")
    label = models.CharField(max_length=200, null=True, blank=True, verbose_name="توضیحات")
    priority = models.IntegerField(null=True, blank=True, verbose_name="اولویت")
    status = models.BooleanField(verbose_name="وضعیت", default=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        db_table = "Menu"



         
    
