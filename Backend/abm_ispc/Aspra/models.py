from django.db import models

class Refugio(models.Model):
    id_refugio=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=45,blank=False)
    telefono=models.CharField(max_length=45,blank=False)
    email=models.CharField(max_length=45,blank=False)
    direccion=models.CharField(max_length=45,blank=False)
    ciudad=models.CharField(max_length=45,blank=False)
    provincia=models.CharField(max_length=45,blank=False)

    class Meta:
        db_table='Refugio'
        verbose_name='Refugio'
        verbose_name_plural='Refugios'
        
    def __unicode__(self):
        return self.direccion
    def __str__(self):
        return self.direccion
