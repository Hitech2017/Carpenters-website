from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    is_Customer = models.BooleanField(default=False)
    is_Delivery = models.BooleanField(default=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

class Customer(models.Model):
    # user = models.OneToOneField(User, on_delete = models.CASCADE, primary_key = True)
    user = models.ForeignKey('myapp.User', on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20)
    location = models.CharField(max_length=20)
    email = models.CharField(max_length=200)

class Delivery(models.Model):
    # user = models.OneToOneField(User, on_delete = models.CASCADE, primary_key = True)
    user = models.ForeignKey('myapp.User', on_delete=models.CASCADE)
    username = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=20)
    designation = models.CharField(max_length=20)
    email = models.CharField(max_length=200)
    postingDate = models.DateTimeField(auto_now_add=True)
