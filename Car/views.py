from django.shortcuts import render

def car_detail(request, id):
    return render(request, 'index.html', {})

def cars_detail(request):
    return render(request, 'index.html', {})

def about_detail(request):
    return render(request, 'index.html', {})
