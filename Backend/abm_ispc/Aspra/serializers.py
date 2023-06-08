from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import Animales, Contacto


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = get_user_model()
        fields = ("email", "password")

    def validate_password(self, value):
        return make_password(value)


class AnimalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animales
        fields = "__all__"


class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = "__all__"
