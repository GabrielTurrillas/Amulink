""" from django.db import models
from apps.paciente.models import Paciente
from apps.accounts.models import UserAccount

class Terapia(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    UserAccount = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    fechaInicio = models.DateTimeField(auto_now_add=True)
 """