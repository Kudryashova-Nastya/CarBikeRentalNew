from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from General.models import User
import json
from django.core import serializers

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
        # user = json.dumps(user)
        # user = json.loads(user)
        # serializer = user.get_serializer(user) 
        # user = serializers.serialize('json', user)

    except User.DoesNotExist:
        return HttpResponse('пользователя с такой почтой не существует')
    return JsonResponse(list(user), safe=False)
    # return JsonResponse({'results': list(user)})
    # return HttpResponse(user)
    # return render(request, 'index.html', {})