from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render

from .models import Event, GalleryImage, Project


def dashboard_login(request):
    if request.user.is_authenticated:
        return redirect('dashboard:home')

    error = None
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard:home')
        else:
            error = 'Invalid credentials.'

    return render(request, 'dashboard/login.html', {'error': error})


def dashboard_logout(request):
    logout(request)
    return redirect('index')


@login_required(login_url='/cb-exec/')
def dashboard_home(request):
    context = {
        'gallery_count': GalleryImage.objects.count(),
        'event_count': Event.objects.count(),
        'project_count': Project.objects.count(),
    }
    return render(request, 'dashboard/home.html', context)