from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('<str:name>/', findMovie, name='find_movie'),
    path('similar-to/<str:name>/', getSimilarMoviesTo, name='get_similar_movies'),
]
