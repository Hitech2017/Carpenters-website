from django.db.models import Q
from django.shortcuts import render,redirect,HttpResponse,HttpResponseRedirect
from django.contrib.auth import login, logout,authenticate
from django.contrib import messages
from django.views.generic import CreateView
from .forms import *
from django.contrib.auth.forms import AuthenticationForm
from .models import *
from .models import User
from datetime import date
from datetime import datetime 


global xval,yval,kval
# Create your views here.
def homepage(request):
    return render(request, 'homepage.html')

def register(request):
    return render(request, '../templates/register.html')

class patient_register(CreateView):
    model = User
    form_class = PatientSignUpForm
    template_name = 'patient_register.html'

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('/patient_register')

class doctor_register(CreateView):
    model = User
    form_class = DoctorSignUpForm
    template_name = '../templates/doctor_register.html'

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('/dashboard')

def login_request(request):
    if request.method=='POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None :
                login(request,user)
             #   return redirect('index.html')
                return render(request, 'index.html')
            else:
                messages.error(request,"Invalid username or password")
        else:
                messages.error(request,"Invalid username or password")
    return render(request, '../templates/login.html',
    context={'form':AuthenticationForm()})

#adminlogin
def adlogin_request(request):
    if request.method=='POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None :
                login(request,user)
             #   return redirect('index.html')
                return render(request, 'admin/adminhome.html')
            else:
                messages.error(request,"Invalid username or password")
        else:
                messages.error(request,"Invalid username or password")
    return render(request, '../templates/alogin.html',
    context={'form':AuthenticationForm()})


def logout_view(request):
    logout(request)
    return redirect('/')
