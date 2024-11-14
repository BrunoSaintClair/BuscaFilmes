from django.shortcuts import render
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def findMovie(request, name):
    movie = Movie.objects.filter(title=name)
    return Response(MovieSerializer(movie, many=True).data, status=status.HTTP_200_OK)

@api_view(['GET'])
def getSimilarMoviesTo(request, name):
    instances = []
    movie = Movie.objects.filter(title=name)
    # tive que fazer essa gambiarra pesada por que no db esses dados estavam salvos como string, no formato: "['<filme 1>', '<filme 2>']",
    # por que na hora de converter pro script sql não tinha como passar esses dados como um array, só como string
    # depois eu melhoro
    movies_string = MovieSerializer(movie, many=True).data[0]['similar_movies']
    movies_serialized = movies_string[1: len(movies_string) - 1].replace("'", "").split(",")
    movies_serialized = [m.strip() for m in movies_serialized]

    for m in movies_serialized:
        movie = Movie.objects.filter(title=m)
        instances.append(MovieSerializer(movie, many=True).data)
    return Response({"similar movies" : instances}, status=status.HTTP_200_OK)
