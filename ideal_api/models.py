from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField
from django.urls import reverse
from ckeditor.fields import RichTextField
from django.utils.safestring import mark_safe
from mptt.models import MPTTModel
from mptt.fields import TreeForeignKey


class Category(MPTTModel):
    parent = TreeForeignKey('self', blank=True, null=True,
                            related_name='children', on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    keywords = models.CharField(max_length=255)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class Blog(models.Model):
    name = models.CharField(max_length=250)
    # category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)
    description = RichTextUploadingField()
    image = models.ImageField(upload_to='image/', blank=True, null=True)
    slug = models.SlugField()

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f'/{self.slug}/'

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
            return self.image.url
        return ''


class About(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='image/', blank=True, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f'/{self.slug}/'

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
            return self.image.url
        return ''


class Service(models.Model):
    name = models.CharField(max_length=250)
    date_added = models.DateTimeField(auto_now_add=True)
    description = RichTextUploadingField()
    image = models.ImageField(upload_to='image/', blank=True, null=True)
    slug = models.SlugField()

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f'/{self.slug}/'

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
            return self.image.url
        return ''


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name
