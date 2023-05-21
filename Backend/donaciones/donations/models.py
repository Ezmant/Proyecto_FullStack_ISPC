from django.db import models


class Donacion(models.Model):
    id_donacion = models.AutoField(primary_key=True)
    monto = models.PositiveIntegerField()
    dni_usuario3 = models.PositiveIntegerField()
