from django.urls import path
from .views import BlogList, AboutList, ServiceList
from django.conf.urls.static import static
from django.conf import settings

app_name = 'Ideal_api'

urlpatterns = [
    path('home/', BlogList.as_view(), name='blog_list'),
    path('about/', AboutList.as_view(), name='about_list'),
    path('services/', ServiceList.as_view(), name='service_list'),
]
