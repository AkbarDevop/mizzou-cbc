from django.urls import path

from . import views

app_name = 'dashboard'

urlpatterns = [
    path('', views.dashboard_login, name='login'),
    path('logout/', views.dashboard_logout, name='logout'),
    path('dashboard/', views.dashboard_home, name='home'),
    # Chunk 3: gallery CRUD
    # Chunk 4: events CRUD
    # Chunk 5: projects CRUD
]