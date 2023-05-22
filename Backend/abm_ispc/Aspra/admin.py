from django.contrib import admin

from .models import Refugio
     
class RefugioAdmin(admin.ModelAdmin):
    list_display=('nombre','telefono','email','direccion','ciudad','provincia')
     
admin.site.register(Refugio,RefugioAdmin)