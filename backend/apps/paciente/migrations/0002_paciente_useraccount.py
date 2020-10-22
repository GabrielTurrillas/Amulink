# Generated by Django 3.1 on 2020-10-19 19:55

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('paciente', '0001_initial'),
        ('terapia', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='paciente',
            name='userAccount',
            field=models.ManyToManyField(through='terapia.Terapia', to=settings.AUTH_USER_MODEL),
        ),
    ]