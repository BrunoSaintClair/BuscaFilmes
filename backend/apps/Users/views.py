from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404

@api_view(['POST'])
def register(request):
    user_serialized = UserSerializer(data=request.data)
    if user_serialized.is_valid():
        user = user_serialized.save()
        user_serialized = UserSerializer(user)
        token = Token.objects.create(user=user)
        return Response({
            "message": "User created",  
            "token" : token.key,
            "user": user_serialized.data
        }, status=status.HTTP_201_CREATED)
    else:
        return Response(user_serialized.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"message" : "Not found"}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    return Response({
        "message" : "Logged in",
        "token" : token.key,
        "user" : UserSerializer(instance=user).data
    }, status=status.HTTP_200_OK)

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response(f"Passed for user: {request.user.username}")