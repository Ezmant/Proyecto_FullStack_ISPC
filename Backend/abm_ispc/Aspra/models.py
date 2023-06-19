from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    username = models.CharField(max_length=150, unique=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password"]

    def __unicode__(self):
        return self.username

    def __str__(self):
        return self.username


class Refugio(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=45, blank=False)
    telefono = models.CharField(max_length=45, blank=False)
    email = models.CharField(max_length=45, blank=False)
    direccion = models.CharField(max_length=45, blank=False)
    ciudad = models.CharField(max_length=45, blank=False)
    provincia = models.CharField(max_length=45, blank=False)

    class Meta:
        db_table = "Refugio"
        verbose_name = "Refugio"
        verbose_name_plural = "Refugios"

    def __unicode__(self):
        return self.direccion

    def __str__(self):
        return self.direccion


class Veterinario(models.Model):
    matricula = models.CharField(primary_key=True, max_length=45, blank=False)
    nombre = models.CharField(max_length=45, blank=False)
    telefono = models.CharField(max_length=45, blank=False)
    email = models.CharField(max_length=45, blank=False)
    id_refugio2 = models.ForeignKey("Refugio", to_field="id", on_delete=models.CASCADE)

    class Meta:
        db_table = "Veterinario"
        verbose_name = "Veterinario"
        verbose_name_plural = "Veterinarios"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre


class Donacion(models.Model):
    id = models.AutoField(primary_key=True)
    monto = models.PositiveIntegerField()
    usuario = models.ForeignKey("CustomUser", to_field="id", on_delete=models.CASCADE)

    class Meta:
        db_table = "Donacion"
        verbose_name = "Donacion"
        verbose_name_plural = "Donaciones"

    def __unicode__(self):
        return self.id

    def __str__(self):
        return str(self.id)


class Reporte(models.Model):
    id = models.AutoField(primary_key=True)
    direccion = models.CharField(max_length=45, blank=False)
    motivo = models.CharField(max_length=45, blank=False)
    descripcion = models.TextField(max_length=150, blank=False)
    dni_usuario1 = models.ForeignKey(
        "Usuario", to_field="dni", on_delete=models.CASCADE
    )

    class Meta:
        db_table = "Reporte"
        verbose_name = "Reporte"
        verbose_name_plural = "Reportes"

    def __unicode__(self):
        return self.direccion

    def __str__(self):
        return self.direccion


class Contacto(models.Model):
    id_contacto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=45)
    email = models.EmailField(null=True, blank=True)
    mensaje = models.CharField(max_length=255)
    id_usuario = models.ForeignKey(
        "contacto", to_field="id_usuario", on_delete=models.CASCADE
    )
    

    class Meta:
        db_table = "Contacto"
        verbose_name = "Contacto"
        verbose_name_plural = "Contactos"

    def __unicode__(self):
        return self.mensaje

    def __str__(self):
        return self.mensaje


class TipoAnimal(models.Model):
    id = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=45, blank=False)

    class Meta:
        db_table = "TipoAnimal"
        verbose_name = "TipoAnimal"
        verbose_name_plural = "TiposAnimales"

    def __unicode__(self):
        return self.tipo

    def __str__(self):
        return self.tipo


class Animales(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=45, blank=False)
    edad = models.IntegerField(blank=False)
    tamano = models.CharField(max_length=45, blank=False)
    raza = models.CharField(max_length=45, blank=False)
    fecha_ingreso = models.DateField(blank=False)
    img = models.CharField(max_length=500, blank=False)
    id_refufio = models.ForeignKey(Refugio, to_field="id", on_delete=models.CASCADE)
    id_tipo = models.ForeignKey(TipoAnimal, to_field="id", on_delete=models.CASCADE)

    class Meta:
        db_table = "Animales"
        verbose_name = "Animal"
        verbose_name_plural = "Animales"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre


class Usuario(models.Model):
    dni = models.CharField(primary_key=True, max_length=45, blank=False)
    nombre = models.CharField(max_length=45, blank=False)
    contrasena = models.CharField(max_length=45, blank=False)
    telefono = models.CharField(max_length=45, blank=False)
    email = models.CharField(max_length=45, blank=False)
    direccion = models.CharField(max_length=45, blank=False)
    ciudad = models.CharField(max_length=45, blank=False)
    provincia = models.CharField(max_length=45, blank=False)

    class Meta:
        db_table = "Usuario"
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return self.nombre


class UsuarioAnimales(models.Model):
    dni_usuario2 = models.ForeignKey(Usuario, to_field="dni", on_delete=models.CASCADE)
    id_animal1 = models.CharField(max_length=45, blank=False)

    class Meta:
        db_table = "UsuarioAnimales"
        verbose_name = "UsuarioAnimales"
        verbose_name_plural = "UsuarioAnimales"

    def __unicode__(self):
        return self.dni_usuario2 + self.id_animal1

    def __str__(self):
        return self.dni_usuario2 + self.id_animal1
