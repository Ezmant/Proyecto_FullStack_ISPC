from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny
from .serializers import (
    UserSerializer,
    AnimalesSerializer,
    ContactoSerializer,
    DonacionSerializer,
)
from .models import Animales, Contacto, Donacion


class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email", None)
        password = request.data.get("password", None)
        user = authenticate(email=email, password=password)
        if user:
            login(request, user)
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class VerAnimalesView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Animales.objects.all()
    serializer_class = AnimalesSerializer


class VerContactoView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer


class VerDonacionView(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Donacion.objects.all()
    serializer_class = DonacionSerializer


class AgregarAnimalView(APIView):
    permission_classes = [AllowAny]

    # permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = AnimalesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
