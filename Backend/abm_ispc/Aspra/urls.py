from django.urls import path, include
from .views import (
    LoginView,
    LogoutView,
    SignupView,
    VerAnimalesView,
    AgregarAnimalView,
    VerContactoView,
    VerDonacionView,
)

urlpatterns = [
    path("auth/login/", LoginView.as_view(), name="auth_login"),
    path("auth/logout/", LogoutView.as_view(), name="auth_logout"),
    path("auth/signup/", SignupView.as_view(), name="auth_signup"),
    path(
        "pages/animales/",
        VerAnimalesView.as_view({"get": "list"}),
        name="pages_VerAnimales",
    ),
    path(
        "pages/contacto/",
        VerContactoView.as_view({"get": "list"}),
        name="pages_VerContacto",
    ),
    path(
        "pages/donacion/",
        VerDonacionView.as_view({"get": "list"}),
        name="pages_VerDonacion",
    ),
    path(
        "pages/agregarAnimal/", AgregarAnimalView.as_view(), name="pages_agregarAnimal"
    ),
]
