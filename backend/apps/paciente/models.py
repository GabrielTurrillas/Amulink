from django.db import models
from datetime import datetime
# Create your models here.

class Paciente(models.Model):
    rut = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    apellidoPaterno = models.CharField(max_length=50)
    apellidoMaterno = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    genero = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    comunaResidencia = models.CharField(max_length=100) #hacerla con opciones
    ocupacionProfecion = models.CharField(max_length=50)
    fechaNacimiento = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name