from django.shortcuts import render

def bike_detail(request, id):
    return render(request, 'index.html', {})

def bikes_detail(request):
    return render(request, 'index.html', {})
