from django.db import models
from ..paciente.models import Paciente
from ..accounts.models import UserAccount

class TipoTerapia(models.Model):
    tipoTerapia = models.CharField(max_length=50)


class Terapia(models.Model):
    tipoTerapia_choise = (
        ('Isapre', 'Isapre'),
        ('Fonasa', 'Fonasa'),
        ('Bajo Costo', 'Bajo Costo'),
    )
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    userAccount = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    tipoTerapia = models.ForeignKey(TipoTerapia, on_delete=models.CASCADE)
    fechaInicio = models.DateTimeField(auto_now_add=True)
    motivoConsulta = models.CharField(max_length=100, blank=True, null=True)
    tipoTerapia = models.CharField(max_length=30, blank=True, null=True, choices=tipoTerapia_choise)
    captacion = models.CharField(max_length=100, blank=True, null=True)
    isActive = models.BooleanField(default=True)


class Sesion(models.Model):
    terapia = models.ForeignKey(Terapia, on_delete=models.CASCADE)
    pago = models.BooleanField(default=False)
    asistio = models.BooleanField(default=False)
    fechaSesion = models.DateTimeField(blank=True, null=True)
    modalidad = models.CharField(max_length=30, blank=True, null=True)
    notasSesion = models.TextField(blank=True, null=True)
    fechaPago = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['-id']
    
