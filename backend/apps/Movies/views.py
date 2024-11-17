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
    movies = Movie.objects.filter(title=name).first().similar_movies
    array_similar_movies = movies.strip("[]").replace("'", "").split(",") 

    serialized_movies = []

    for movie in array_similar_movies:
        movie_instance = Movie.objects.filter(title=movie.strip())
        serialized_movies.append(MovieSerializer(movie_instance, many=True).data)
    return Response({"similar movies" : serialized_movies}, status=status.HTTP_200_OK)
