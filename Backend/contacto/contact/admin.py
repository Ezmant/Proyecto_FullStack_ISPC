from django.contrib import admin
from .models import Contacto


class ContactoAdmin(admin.ModelAdmin):
    list_display = ("id_contacto", "horario", "celular", "email")


admin.site.register(Contacto, ContactoAdmin)
