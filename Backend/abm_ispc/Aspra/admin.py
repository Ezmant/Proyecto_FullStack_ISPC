from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass

admin.site.unregister(Group)

from .models import Refugio
from .models import Veterinario
from .models import Donacion
from .models import Reporte
from .models import Usuario
from .models import UsuarioAnimales
from .models import TipoAnimal
from .models import  Animales
     
class RefugioAdmin(admin.ModelAdmin):
    list_display=('id','nombre','telefono','email','direccion','ciudad','provincia')
     

class VeterinariosAdmin(admin.ModelAdmin):
    list_display = ('matricula', 'nombre', 'telefono', 'email')


class DonacionAdmin(admin.ModelAdmin):
    list_display = ('id','monto')


class ReporteAdmin(admin.ModelAdmin):
    list_display= ('direccion','motivo','descripcion')

class UsuarioAdmin(admin.ModelAdmin):
    list_display= ('dni','nombre','contrasena','telefono','email','direccion','ciudad','provincia')

class UsuarioAnimalesAdmin(admin.ModelAdmin):
    list_display= ('dni_usuario2','id_animal1')

class TipoAnimalAdmin(admin.ModelAdmin):
    list_display=('id','tipo')

class AnimalesAdmin(admin.ModelAdmin):
    list_display=('id','nombre','edad','tamaño','raza','fecha_ingreso','id_refufio','id_tipo')
     
admin.site.register(Refugio,RefugioAdmin)
admin.site.register(Veterinario,VeterinariosAdmin)
admin.site.register(Donacion, DonacionAdmin)
admin.site.register(Reporte,ReporteAdmin)
admin.site.register(Usuario,UsuarioAdmin)
admin.site.register(UsuarioAnimales,UsuarioAnimalesAdmin)
admin.site.register(TipoAnimal,TipoAnimalAdmin)
admin.site.register(Animales,AnimalesAdmin)