from django.db import models
# Create your models here.
class Veterinarios(models.Model):
    matricula = models.CharField(max_length=45, blank=False)
    nombre_veterinario = models.CharField(max_length=45, blank=False)
    telefono_veterinario = models.CharField(max_length=45, blank=False)
    email_veterinario = models.CharField(max_length=45, blank=False)
    # id_refugio2 = models.ForeignKey(Refugio,to_field=id_refugio, on_delete=models.CASCADE)
    def __unicode__(self):
        return self.nombre_veterinario
    def __str__(self):
        return self.nombre_veterinario

