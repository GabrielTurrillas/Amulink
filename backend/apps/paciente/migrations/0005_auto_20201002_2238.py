# Generated by Django 3.1 on 2020-10-03 01:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('paciente', '0004_sesion_tipoterapia'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sesion',
            name='terapia',
        ),
        migrations.RemoveField(
            model_name='terapia',
            name='paciente',
        ),
        migrations.RemoveField(
            model_name='terapia',
            name='userAccount',
        ),
        migrations.DeleteModel(
            name='TipoTerapia',
        ),
    ]
