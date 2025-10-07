from django.db import models



class Project(models.Model):
    createdDate = models.DateTimeField(auto_now_add=True, null=True, verbose_name="تاریخ ثبت")
    updateDate = models.DateTimeField(auto_now=True, null=True, verbose_name="تاریخ ویرایش")

    class Meta:
        verbose_name_plural = "لیست پروژه ها"
        verbose_name = "پروژه"

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, verbose_name="لیست پروژه ها", related_name="projectImage")
    image = models.ImageField(upload_to='', verbose_name="تصویر پروژه", blank=False)
    createdDate = models.DateTimeField(auto_now_add=True, null=True, verbose_name="تاریخ ثبت")
    updateDate = models.DateTimeField(auto_now=True, null=True, verbose_name="تاریخ ویرایش")

    class Meta:
        verbose_name_plural = "لیست تصاویر پروژه"
        verbose_name = "تصویر پروژه"

class ProjectDetail(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, verbose_name="لیست پروژه ها", related_name="projectDetail")
    title = models.CharField(max_length=150, verbose_name="عنوان پروژه", null=False)
    description = models.TextField(verbose_name="توضیحات پروژه", null=False)
    createdDate = models.DateTimeField(auto_now_add=True, null=True, verbose_name="تاریخ ثبت")
    updateDate = models.DateTimeField(auto_now=True, null=True, verbose_name="تاریخ ویرایش")

    class Meta:
        verbose_name_plural = "لیست جزعیات پروژه"
        verbose_name = "جزعیات پروژه"
    

