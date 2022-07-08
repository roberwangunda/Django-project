from rest_framework import serializers
from Ideal_api.models import Blog, About, Service, Contact
from django.urls import reverse
from django.utils.html import strip_tags


class BlogSerializer(serializers.ModelSerializer):
    class Meta:

        model = Blog
        fields = ['name', 'get_image']

    def get_image_url(self, blogs):
        request = self.context.get('request')
        image_url = blogs.image.url
        return blogs.image.url

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['description'] = strip_tags(instance.description)
        return data


class AboutSerializer(serializers.ModelSerializer):

    class Meta:
        model = About

        fields = ['name', 'description', 'get_image']


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service

        fields = ['name', 'description', 'get_image']
    
    def get_image_url(self, blogs):
        request = self.context.get('request')
        image_url = blogs.image.url
        return blogs.image.url

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['description'] = strip_tags(instance.description)
        return data


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact

        fields = ['name', 'email']
