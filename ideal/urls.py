from django.conf import settings
from django.contrib import admin
from django.conf.urls import url
from frontend.views import FrontendAppView
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Ideal_api.urls', namespace='Ideal_api')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('', FrontendAppView.as_view()),
    # url(r'^(?:.*)/?$', FrontendAppView.as_view()),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#     urlpatterns += static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
