from django.contrib import admin
from .models import Donacion


class DonacionAdmin(admin.ModelAdmin):
    list_display = ("id_donacion", "monto", "dni_usuario3")


admin.site.register(Donacion, DonacionAdmin)
