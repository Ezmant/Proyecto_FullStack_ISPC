from django.db import models

class Reporte(models.Model):
    id_reporte= models.AutoField(primary_key=True)
    direccion=models.CharField(max_length=45,blank=False)
    motivo=models.CharField(max_length=45,blank=False)
    descripcion=models.TextField(max_length=150,blank=False)
    # dni_usuario2=models.ForeignKey(Usuario, to_field='dni_usuario')
    class Meta:
        db_table='Reporte'
        verbose_name='Reporte'
        verbose_name_plural='Reportes'
   
    def __unicode__(self):
        return self.direccion
    def __str__(self):
        return self.direccion

        
