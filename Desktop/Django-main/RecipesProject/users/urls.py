from django.urls import path
from . import views
from django.conf import settings
from .views import admin_view_recipe
from django.conf.urls.static import static

urlpatterns = [path('register', views.UserRegister.as_view(), name="register"),
               path('createprofile',views.CreateProfile.as_view(),name="createprofile"),
               path('home',views.UserHome.as_view(),name="userhome"),
               path('login',views.SignIn.as_view(),name="login"),
               path('logout',views.SignOut.as_view(),name="logout"),
               path('viewprofile',views.ViewProfile.as_view(),name="viewprofile"),
               path('editprofile',views.EditProfile.as_view(),name="editprofile"),

               path('Viewrecip',views.Viewrecip.as_view(),name="Viewrecip"),
               path('admin_logs',views.admin_logs.as_view(),name="admin_logs"),
               path('admin_home',views.admin_home.as_view(),name="admin_home"),
               path('user_view',views.user_view.as_view(),name="user_view"),
               path('admin_recipe_view',views.admin_recipe_view.as_view(),name="admin_recipe_view"),
                #  path('approve/<int:id>',views.approve.as_view(),name='approve'),
              path('approve/<int:id>/',views.approve.as_view(), name='approve'),
              path('recipes/<int:id>/', views.admin_view_recipe.as_view(), name='recipes'),
              path('Approved_recipes', views.Approved_recipes.as_view(), name='Approved_recipes'),
               
]