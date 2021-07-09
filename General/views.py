from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from General.models import User

def index(request):
    return render(request, 'index.html', {})

def login_detail(request):
    return render(request, 'index.html', {})

def profile_detail(request):
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