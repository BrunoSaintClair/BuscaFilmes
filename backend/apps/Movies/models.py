from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    vote_average = models.CharField(max_length=6)
    vote_count = models.IntegerField()
    overview = models.CharField(max_length=1000)
    genres = models.CharField(max_length=150)
    runtime = models.IntegerField()
    similar_movies = models.CharField(max_length=500)
