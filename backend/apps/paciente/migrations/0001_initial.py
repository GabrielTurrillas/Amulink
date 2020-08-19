# Generated by Django 3.1 on 2020-08-19 03:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rut', models.CharField(max_length=50)),
                ('nombre', models.CharField(max_length=50)),
                ('apellidoPaterno', models.CharField(max_length=50)),
                ('apellidoMaterno', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=100)),
                ('genero', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=100)),
                ('comunaResidencia', models.CharField(max_length=100)),
                ('ocupacionProfecion', models.CharField(max_length=50)),
                ('fechaNacimiento', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]
