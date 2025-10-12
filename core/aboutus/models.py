from django.db import models



class Aboutus(models.Model):
    createdDate = models.DateTimeField(auto_now_add=True, null=True, verbose_name="تاریخ ثبت")
    updateDate = models.DateTimeField(auto_now=True, null=True, verbose_name="تاریخ ویرایش")
    title = models.CharField(max_length=150, null=False, verbose_name="عنوان")
    description = models.TextField(verbose_name="توضیحات")
    image = models.ImageField(upload_to='', null=False, verbose_name="تصویر")

    class Meta:
        verbose_name_plural = "درباره ما"
        verbose_name = "درباره ما"

    def __str__(self):
        return self.title
    

class Fetaure(models.Model):
    aboutus = models.ForeignKey(Aboutus, on_delete=models.CASCADE, verbose_name="درباره ما", related_name="feature")
    createdDate = models.DateTimeField(auto_now_add=True, null=True, verbose_name="تاریخ ثبت")
    updateDate = models.DateTimeField(auto_now=True, null=True, verbose_name="تاریخ ویرایش")
    title = models.CharField(max_length=150, null=False, verbose_name="عنوان")
    description = models.TextField(verbose_name="توضیحات")
    image = models.ImageField(upload_to='', verbose_name="تصویر")

    class Meta:
        verbose_name_plural = "لیست تصاویر ویژگی"
        verbose_name = "ویژگی"

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
    

class Service(models.Model):
    title = models.CharField(max_length=150, null=False, verbose_name="عنوان")
    description = models.TextField(verbose_name="توضیحات")
    icon = models.ImageField(upload_to='', verbose_name="آیکون")
    createdDate = models.DateTimeField(auto_now_add=True, null=True, verbose_name="تاریخ ثبت")
    updateDate = models.DateTimeField(auto_now=True, null=True, verbose_name="تاریخ ویرایش")