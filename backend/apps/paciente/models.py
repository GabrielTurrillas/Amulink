from datetime import datetime
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.accounts.models import UserAccount
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
    userAccount = models.ManyToManyField('accounts.UserAccount', through='Terapia')

    def __str__(self):
        return self.nombre


class TipoTerapia(models.Model):
    tipoTerapia = models.CharField(max_length=50)


class Terapia(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    userAccount = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    tipoTerapia = models.ForeignKey(TipoTerapia, on_delete=models.CASCADE)
    fechaInicio = models.DateTimeField(auto_now_add=True)
    motivoConsulta = models.CharField(max_length=100, blank=True, null=True)
    tipoTerapia = models.CharField(max_length=100, blank=True, null=True)
    captacion = models.CharField(max_length=100, blank=True, null=True)
    isActive = models.BooleanField(default=True)


class Sesion(models.Model):
    terapia = models.ForeignKey(Terapia, on_delete=models.CASCADE)
    asistio = models.BooleanField(default=False)
    fechaSesion = models.DateField()






