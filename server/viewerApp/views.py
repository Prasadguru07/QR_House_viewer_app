from django.shortcuts import render
from .models import User
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework import status
from django.db import IntegrityError
import json
# Create your views here.

User = get_user_model()

@csrf_exempt
@api_view(['POST'])
def registerUser(request):
    
    #loading users data from the request body
    data = json.loads(request.body)

    #storing user data
    username = data.get("username")
    email = data.get("email")
    phone = data.get("phone")
    location = data.get("location")
    password = data.get("password")

    try:
        # creating an user
        user = User.objects.create_user(username=username, email=email, password=password, phone=phone, location=location)

        return Response(
            {"info": "Successfully registered"}, 
            status=status.HTTP_201_CREATED
        )    
    
    except IntegrityError:

        return Response(
            {"info": "Username or Email already exists"}, 
            status= status.HTTP_400_BAD_REQUEST
        )

    except Exception as e:

        return Response(
            {"info": str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
        

