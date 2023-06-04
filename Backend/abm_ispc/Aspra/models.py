from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']

class Refugio(models.Model):
    id=models.AutoField(primary_key=True)
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
    
class Veterinario(models.Model):
    matricula = models.CharField(primary_key=True,max_length=45, blank=False)
    nombre = models.CharField(max_length=45, blank=False)
    telefono = models.CharField(max_length=45, blank=False)
    email = models.CharField(max_length=45, blank=False)
    id_refugio2 = models.ForeignKey('Refugio',to_field='id', on_delete=models.CASCADE)
    class Meta:
        db_table='Veterinario'
        verbose_name='Veterinario'
        verbose_name_plural='Veterinarios'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Donacion(models.Model):
    id = models.AutoField(primary_key=True)
    monto = models.PositiveIntegerField()
    dni_usuario3 = models.ForeignKey('Usuario',to_field='dni', on_delete=models.CASCADE)
    class Meta:
        db_table='Donacion'
        verbose_name='Donacion'
        verbose_name_plural='Donaciones'
    def __unicode__(self):
        return self.id
    def __str__(self):
        return self.id

class Reporte(models.Model):
    id= models.AutoField(primary_key=True)
    direccion=models.CharField(max_length=45,blank=False)
    motivo=models.CharField(max_length=45,blank=False)
    descripcion=models.TextField(max_length=150,blank=False)
    dni_usuario1=models.ForeignKey('Usuario', to_field='dni', on_delete=models.CASCADE)
    class Meta:
        db_table='Reporte'
        verbose_name='Reporte'
        verbose_name_plural='Reportes'
    def __unicode__(self):
        return self.direccion
    def __str__(self):
        return self.direccion

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
    def __unicode__(self):
        return self.dni_usuario2 + self.id_animal1
    def __str__(self):
        return self.dni_usuario2 + self.id_animal1