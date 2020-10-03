from django.contrib import admin
from .models import Terapia

class TerapiaAdmin(admin.ModelAdmin):
    list_display = ('id', 'paciente', 'userAccount', 'tipoTerapia', 'fechaInicio', 'motivoConsulta', 'tipoTerapia', 'captacion', 'isActive')
    list_per_page = 25

admin.site.register(Terapia, TerapiaAdmin)