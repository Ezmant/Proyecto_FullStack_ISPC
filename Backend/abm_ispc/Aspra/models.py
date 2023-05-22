from django.db import models

class Usuario(models.Model):
    dni = models.CharField(primary_key=True,max_length=45, blank=False)
    nombre= models.CharField(max_length=45,blank=False)
    contrasena=models.CharField(max_length=45,blank=False)
    telefono=models.CharField(max_length=45,blank=False)
    email=models.CharField(max_length=45,blank=False)
    direccion=models.CharField(max_length=45,blank=False)
    ciudad=models.CharField(max_length=45,blank=False)
    provincia=models.CharField(max_length=45,blank=False)
    class Meta:
        db_table='Usuario'
        verbose_name='Usuario'
        verbose_name_plural='Usuarios'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class UsuarioAnimales(models.Model):
    dni_usuario2=models.ForeignKey(Usuario, to_field='dni', on_delete=models.CASCADE)
    id_animal1=models.CharField(max_length=45,blank=False)
    class Meta:
        db_table='UsuarioAnimales'
        verbose_name='UsuarioAnimales'
        verbose_name_plural='UsuarioAnimales'
    # def __unicode__(self):
    #     return self.nombre
    # def __str__(self):
    #     return self.nombre