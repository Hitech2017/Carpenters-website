from django.forms import ModelForm
from .models import *
from django import forms

class CreateRecipeForm(ModelForm):
    class Meta:
        model = recipe
        fields = "__all__"
        widgets = {'ingredient':forms.Textarea(),'How_to_make':forms.Textarea(),
                   'created_by':forms.HiddenInput()}


class adForm(ModelForm):
    class Meta:
        model = adminlogin
        fields = "__all__"