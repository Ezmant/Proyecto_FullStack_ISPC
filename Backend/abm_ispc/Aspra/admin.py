from django.contrib import admin

from .models import Usuario
from .models import UsuarioAnimales

class UsuarioAdmin(admin.ModelAdmin):
    list_display= ('dni','nombre','contrasena','telefono','email','direccion','ciudad','provincia')

class UsuarioAnimalesAdmin(admin.ModelAdmin):
    list_display= ('dni_usuario2','id_animal1')
     
admin.site.register(Usuario,UsuarioAdmin)
admin.site.register(UsuarioAnimales,UsuarioAnimalesAdmin)