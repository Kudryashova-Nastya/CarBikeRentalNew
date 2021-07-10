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
from Bike.views import bike_detail, bikes_detail
from General.views import login_detail, profile_detail, profile_auth, deliveryman_auth, user_edit, rent_car, rent_bike, user_rent, user_rent_bike, index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('api/', include('General.urls')),
    path('about/', about_detail),
    path('cars/', cars_detail),
    path('cars/<int:id>/', car_detail),
    path('bikes/', bikes_detail),
    path('bikes/<int:id>/', bike_detail),
    path('login/', login_detail),
    path('profile/', profile_detail),
    path('auth/', profile_auth),
    path('authDel/', deliveryman_auth),
    path('userEdit/', user_edit),
    path('historyRentCar/', rent_car),
    path('historyRentBike/', rent_bike),
    path('userRent/', user_rent),
    path('userRentBike/', user_rent_bike),
]
