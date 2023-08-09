from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    is_Patient = models.BooleanField(default=False)
    is_Doctor = models.BooleanField(default=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

class Patient(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE, primary_key = True)
    phone_number = models.CharField(max_length=20)
    location = models.CharField(max_length=20)
    email = models.CharField(max_length=200)
    

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE, primary_key = True)
    username = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=20)
    designation = models.CharField(max_length=20)
    email = models.CharField(max_length=200)
    postingDate = models.DateTimeField(auto_now_add=True)