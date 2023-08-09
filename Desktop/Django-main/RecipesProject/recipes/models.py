from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class recipe(models.Model):
    recipe_name = models.CharField(max_length=120)
    ingredient = models.CharField(max_length=600)
    category = models.CharField(max_length=120)
    recipe_pic = models.ImageField(upload_to="images")
    How_to_make = models.CharField(max_length=200)
    stat = models.CharField(max_length=600,default="")
    created_by = models.ForeignKey(to=User,on_delete=models.CASCADE)
    # status = models.CharField(max_length=600)

    def __str__(self):
        return self.recipe_name


class adminlogin(models.Model):
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=600)
