from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.db import transaction
from .models import *

class PatientSignUpForm(UserCreationForm):
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    phone_number = forms.CharField(required=True)
    location = forms.CharField(required=True)
    email = forms.CharField(required=True)

    class Meta(UserCreationForm.Meta):
        model = User
    
    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_Patient = True
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.save()
        patient = Patient.objects.create(user=user)
        patient.phone_number=self.cleaned_data.get('phone_number')
        patient.location=self.cleaned_data.get('location')
        patient.email=self.cleaned_data.get('email')
        patient.save()
        return user

class DoctorSignUpForm(UserCreationForm):
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    username = forms.CharField(required=True)
    phone_number = forms.CharField(required=True)
    designation = forms.CharField(required=True)
    email = forms.CharField(required=True)
  
    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_Doctor = True
        user.is_staff = True
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.save()
        doctor = Doctor.objects.create(user=user)
        doctor.username=self.cleaned_data.get('username')
        doctor.phone_number=self.cleaned_data.get('phone_number')
        doctor.designation=self.cleaned_data.get('designation')
        doctor.email=self.cleaned_data.get('email')
        doctor.save()
        return 