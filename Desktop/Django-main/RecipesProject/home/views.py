from django.shortcuts import render,redirect
from recipes.models import recipe
from django.views.generic import TemplateView

# Create your views here.


class Home(TemplateView):
    context = {}
    template_name = 'home/home.html'

    def get(self, request, *args, **kwargs):
        user = request.user.id
        if user:
            return redirect('userhome')
        data = recipe.objects.all()
        self.context['data'] = data
        return render(request,self.template_name , self.context)


# def admin(request):
#     return render(request, 'users/admin.html') 

class admin(TemplateView):
    context = {}
    template_name = 'home/adminlogin.html'

    def get(self, request, *args, **kwargs):
        # user = request.user.id
        # if user:
        #     return redirect('userhome')
        # data = recipe.objects.all()

        # self.context['data'] = data
        return render(request,self.template_name , self.context)
        
def log1(request):
    if request.method=='POST':
      
        if adminlogin.objects.filter(username=request.POST['username'],password=request.POST['password']).exists():
            x=adminlogin.objects.get(username=request.POST['username'],password=request.POST['password'])
           # messages.success(request, 'Login successfully.')
            return redirect('/home')
        else:
            context = {'msg': 'Invalid username or password'}
            return render(request,"home/adminlogin.html", context)