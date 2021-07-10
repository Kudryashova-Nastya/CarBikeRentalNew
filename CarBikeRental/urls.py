"""CarBikeRental URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from Car.views import car_detail, cars_detail, about_detail
from General.views import login_detail, profile_detail, profile_auth, user_edit, index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('api/', include('General.urls')),
    path('about/', about_detail),
    path('cars/', cars_detail),
    path('cars/<int:id>/', car_detail),
    path('login/', login_detail),
    path('profile/', profile_detail),
    path('auth/', profile_auth),
    path('userEdit/', user_edit),
]
