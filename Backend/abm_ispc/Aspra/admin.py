from django.contrib import admin

from .models import Refugio
from .models import Veterinario
from .models import Donacion
from .models import Reporte
from .models import Usuario
from .models import UsuarioAnimales
     
class RefugioAdmin(admin.ModelAdmin):
    list_display=('nombre','telefono','email','direccion','ciudad','provincia')
     

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
     
admin.site.register(Refugio,RefugioAdmin)
admin.site.register(Veterinario,VeterinariosAdmin)
admin.site.register(Donacion, DonacionAdmin)
admin.site.register(Reporte,ReporteAdmin)
admin.site.register(Usuario,UsuarioAdmin)
admin.site.register(UsuarioAnimales,UsuarioAnimalesAdmin)