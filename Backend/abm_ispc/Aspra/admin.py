from django.contrib import admin

from .models import Reporte
 
class ReporteAdmin(admin.ModelAdmin):
    list_display= ('direccion','motivo','descripcion')
     
admin.site.register(Reporte,ReporteAdmin)
