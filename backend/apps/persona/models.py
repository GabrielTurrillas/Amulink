from django.db import models

# Create your models here.

from django.db import models

# Create your models here.

class Persona(models.Model):
    rut = models.CharField(max_length=100)
    nombre = models.CharField(max_length=100)
    ApellidoPaterno = models.CharField(max_length=100)
    apellidoMaterno = models.CharField(max_length=100)
    genero = models.CharField(max_length=1)        
    telefono = models.CharField(max_length=100)
    email = models.CharField(max_length=100)      
    direccion = models.CharField(max_length=100)
    comunaDeResidencia = models.CharField(max_length=100)
    orientacionSexual = models.CharField(max_length=100)
    fechaNacimiento = models.DateField()                        

    class Meta:
        abstract = True


class Paciente(Persona):
    ocupacionProfecion = models.CharField(max_length=100)
    nombreContactoEmergencia = models.CharField(max_length=100)
    telefonoContactoEmergencia = models.CharField(max_length=100)
    emailContactoEmergencia = models.CharField(max_length=100)
    tienePsiquiatra = models.BooleanField()
    nombrePsiquiatra = models.CharField(max_length=100)
    emailPsiquiatra = models.CharField(max_length=100)


class Terapeuta(Persona):
    director    = models.BooleanField()