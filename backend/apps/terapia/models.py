from django.db import models
from apps.paciente.models import Paciente
from apps.accounts.models import UserAccount

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