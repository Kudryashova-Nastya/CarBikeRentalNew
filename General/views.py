from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from General.models import User, Deliveryman
from Car.models import Car_rent
from Bike.models import Bike_rent

def index(request):
    return render(request, 'index.html', {})

def login_detail(request):
    return render(request, 'index.html', {})

def profile_detail(request):
    return render(request, 'index.html', {})

def user_edit(request):
    return render(request, 'index.html', {})

def rent_car(request):
    return render(request, 'index.html', {})

def rent_bike(request):
    return render(request, 'index.html', {})

def profile_auth(request):
    mail = request.GET.get('email')
    try:
        user = User.objects.filter(email=mail).values()

    except User.DoesNotExist:
        return HttpResponse('пользователя с такой почтой не существует')
    if (list(user) == []):
        return HttpResponse('пользователя с такой почтой не существует')
    return JsonResponse(list(user), safe=False)

def deliveryman_auth(request):
    mail = request.GET.get('email')
    try:
        user = Deliveryman.objects.filter(email=mail).values()

    except User.DoesNotExist:
        return HttpResponse('Курьера с такой почтой не существует')
    if (list(user) == []):
        return HttpResponse('Курьера с такой почтой не существует')
    return JsonResponse(list(user), safe=False)

def user_rent(request):
    id = request.GET.get('id')
    try:
        rent = Car_rent.objects.filter(user_id=id).values()

    except Car_rent.DoesNotExist:
        return HttpResponse('у пользователя нет ни одного заказа на аренду авто')
    if (list(rent) == []):
        return HttpResponse('у пользователя нет ни одного заказа на аренду авто')
    return JsonResponse(list(rent), safe=False)

def user_rent_bike(request):
    id = request.GET.get('id')
    try:
        rent = Bike_rent.objects.filter(user_id=id).values()

    except Bike_rent.DoesNotExist:
        return HttpResponse('у пользователя нет ни одного заказа на аренду велосипеда')
    if (list(rent) == []):
        return HttpResponse('у пользователя нет ни одного заказа на аренду велосипеда')
    return JsonResponse(list(rent), safe=False)