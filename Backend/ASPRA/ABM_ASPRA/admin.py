from django.contrib import admin

from .models import Veterinarios

# Register your models here.
class VeterinariosAdmin(admin.ModelAdmin):
    list_display = ('matricula', 'nombre_veterinario', 'telefono_veterinario', 'email_veterinario')

admin.site.register(Veterinarios,VeterinariosAdmin)


