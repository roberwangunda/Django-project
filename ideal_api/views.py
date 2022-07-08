# import socket

from django.http import Http404
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from Ideal_api.serializers import (AboutSerializer, BlogSerializer,
                                    ServiceSerializer, ContactSerializer)

from .models import About, Blog, Contact, Service


class BlogList(APIView):
    def get(self, request, format=None):
        # try:
        #     print('hostname: ', socket.gethostname())
        # except:
        #     print('localhost')
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        blogs = Blog.objects.all()
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        blogs = Blog.objects.all()
        blogs = self.get_object(pk)
        blogs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AboutList(APIView):
    def get(self, request):
        article = About.objects.all()
        serializer = AboutSerializer(article, many=True)
        return Response(serializer.data)

    def post(self, request):
        article = About.objects.all()
        serializer = AboutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        article = About.objects.all()
        blogs = self.get_object(pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ServiceList(APIView):
    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)

    def post(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        services = Service.objects.all()
        services = self.get_object(pk)
        services.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ContactList(APIView):
    def get(self, request):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)

    def post(self, request):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        contacts = Contact.objects.all()
        contacts = self.get_object(pk)
        contacts.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
