from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def mostrarServiciosSOM(request):
    return HttpResponse('Hello World')
def vistaSOM(request):
    return render(request,'index.html')