from django.contrib import admin
from django.urls import path, include
from apps.Users import views as user_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', user_views.register, name='register'),
    path('login/', user_views.login, name='login'),
    path('test_token/', user_views.test_token, name='test_token'),
    path('movies/', include('apps.Movies.urls'))
]
