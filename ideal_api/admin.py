from mptt.admin import MPTTModelAdmin
from django.contrib import admin
from Ideal_api.models import Blog, About, Service, Category, Contact
from mptt.admin import DraggableMPTTAdmin

admin.site.site_header = "Rose Busili Dashboard Admin"
admin.site.site_title = "Rose Dashboard Portal"
admin.site.index_title = "Welcome to Rose Busili Portal:"


@admin.register(Blog)
class BlogModel(admin.ModelAdmin):
    list_filter = ('name', 'date_added')


@admin.register(About)
class AboutModel(admin.ModelAdmin):
    list_filter = ('name', 'description')


@admin.register(Service)
class ServiceModel(admin.ModelAdmin):
    list_filter = ('name', 'date_added')


admin.site.register(Category, DraggableMPTTAdmin)


@admin.register(Contact)
class ContactModel(admin.ModelAdmin):
    list_filter = ('name', 'email')
