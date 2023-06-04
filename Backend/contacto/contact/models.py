from django.db import models


class Contacto(models.Model):
    id_contacto = models.AutoField(primary_key=True)
    horario = models.CharField(max_length=50)
    celular = models.PositiveIntegerField()
    email = models.EmailField(null=True, blank=True)
