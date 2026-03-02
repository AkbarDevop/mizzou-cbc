"""
URL configuration for mizzou_cbc project.
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('landing.urls')),
]
