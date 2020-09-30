from django.contrib import admin
from .models import Paciente, Terapia

class PacienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellidoMaterno', 'apellidoPaterno', 'telefono', 'email')
    list_per_page = 25

class TerapiaAdmin(admin.ModelAdmin):
    list_display = ('paciente', 'userAccount', 'fechaInicio')
    list_per_page = 25

admin.site.register(Paciente, PacienteAdmin)
admin.site.register(Terapia, TerapiaAdmin)
