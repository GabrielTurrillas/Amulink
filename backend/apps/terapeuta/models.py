from django.db import models
from django.db.models.signals import post_save
from datetime import datetime
from apps.accounts.models import UserAccount
from django.dispatch import receiver

class PerfilTerapeuta(models.Model):
    userAccount = models.OneToOneField(UserAccount, related_name='perfilTerapeuta' ,on_delete=models.CASCADE)
    rut = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    apellidoPaterno = models.CharField(max_length=50)
    apellidoMaterno = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    genero = models.CharField(max_length=50)
    fechaNacimiento = models.DateTimeField(null=True, blank=True)
        
    def __str__(self):
        return self.nombre

@receiver(post_save, sender=UserAccount)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        PerfilTerapeuta.objects.create(userAccount=instance)

@receiver(post_save, sender=UserAccount)
def save_user_profile(sender, instance, **kwargs):
    instance.perfilTerapeuta.save()







