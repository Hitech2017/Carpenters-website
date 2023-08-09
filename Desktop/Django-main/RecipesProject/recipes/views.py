from django.shortcuts import render,redirect
from .forms import *
from .models import *
from users.models import *
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from django.utils.decorators import method_decorator
from django.shortcuts import get_object_or_404


# Create your views here.
@method_decorator(login_required(login_url='login'), name='dispatch')
class CreateRecipe(TemplateView):
    form_class = CreateRecipeForm
    context = {}
    template_name = 'recipes/createrecipe.html'

    def get(self,request,*args,**kwargs):
        user = request.user
        self.context['form'] =self.form_class(initial={'created_by': user})
        return render(request,self.template_name, self.context)

    def post(self,request,*args,**kwargs):
        form = self.form_class(data=request.POST,files=request.FILES)
        if form.is_valid():
            form.save()
            return redirect('viewprofile')
        else:
            self.context['form'] = form
            return render(request,self.template_name,self.context)


@method_decorator(login_required(login_url='login'), name='dispatch')
class ViewRecipe(TemplateView):
    template_name = 'recipes/viewrecipe.html'
    context ={}

    def get(self,request,*args,**kwargs):
        id =kwargs.get('id')
        obj = get_object_or_404(recipe,pk=id)
        self.context['obj'] = obj
        user = request.user.id
        if user:
            try:
                profile = Profile.objects.get(user=user)
                self.context['profile'] = 'pro_exist'
                return render(request, self.template_name, self.context)
            except Exception:
                return redirect('createprofile')
        return render(request,self.template_name,self.context)


@method_decorator(login_required(login_url='login'), name='dispatch')
class EditRecipe(TemplateView):
    form_class =CreateRecipeForm
    context = {}
    template_name = 'recipes/createrecipe.html'

    def get(self, request, *args, **kwargs):
        id = kwargs.get('id')
        recipes = get_object_or_404(recipe, pk=id)
        form = self.form_class(instance=recipes)
        self.context['form'] = form
        return render(request,self.template_name , self.context)

    def post(self,request,*args,**kwargs):
        id = kwargs.get('id')
        recipes = get_object_or_404(recipe, pk=id)
        form = self.form_class(instance=recipes,data=request.POST,files=request.FILES)
        if form.is_valid():
            form.save()
            return redirect('viewprofile')
        else:
            self.context['form']=form
            return render(request,self.template_name,self.context)


@method_decorator(login_required(login_url='login'), name='dispatch')
class DeleteRecipe(TemplateView):
    def get(self, request, *args, **kwargs):
        id = kwargs.get('id')
        recipes = get_object_or_404(recipe, pk=id)
        recipes.delete()
        return redirect('viewprofile')


# class adminlog(TemplateView):
#     form_class = adForm
#     context = {}
#     template_name = 'adminlogin.html'

#     def get(self,request,*args,**kwargs):
#         self.context['form'] = self.form_class()
#         return render(request, self.template_name, self.context)

#     def post(self,request,*args,**kwargs):
#         form = self.form_class(request.POST)
#         if request.method=='POST':
#             username = request.POST['username']
#             password = request.POST['password']
#             # user = adminlogin(request, username=username, password=password)
#             if adminlogin.objects.filter(username=username,password=password).exists():
#                 x=adminlogin.objects.get(username=username,password=password)
#                 return redirect('userhome')
#             else:
#                 # self.context['form'] = ''
#                 return render(request,self.template_name)
        # if request.method=='POST':
        #     if adminlogin.objects.filter(username=request.POST['username'],password=request.POST['password']).exists():
        #         x=adminlogin.objects.get(username=request.POST['username'],password=request.POST['password'])
        #    # messages.success(request, 'Login successfully.')
        #         return redirect('/home')
        #     else:
        #         context = {'msg': 'Invalid username or password'}
        #         return render(request,"adminlogin.html", context)



