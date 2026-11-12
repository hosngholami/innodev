from django.db import models


class CategoryMenu(models.Model):
    title = models.CharField(verbose_name="عنوان دسته بندی", max_length=30, null=False, blank=False)
    priority = models.IntegerField(verbose_name="اولویت", null=True, blank=True)
    status = models.IntegerField(verbose_name="وضعیت", default=1, blank=True, null=True)

    class Meta:
         db_table = "CategoryMenu"
         
         
         

class Menu(models.Model):
    category = models.ForeignKey(CategoryMenu,  on_delete=models.CASCADE, null=False, blank=False, related_name="menu", verbose_name="دسته بندی")
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name="children")
    title = models.CharField(verbose_name="عنوان منو", max_length=400, blank=False)
    url = models.CharField(max_length=500)
    icon = models.CharField(max_length=200, null=True, verbose_name="آیکون")
    priority = models.IntegerField(null=True, blank=True, verbose_name="اولویت")
    status = models.IntegerField(verbose_name="وضعیت", default=1)
    
    def __str__(self):
        return self.title
    
    
    class Meta:
        db_table = "Menu"
        ordering = ['priority']



         
    
