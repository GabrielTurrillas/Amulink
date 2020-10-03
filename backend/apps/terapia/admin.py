from django.contrib import admin
from .models import Terapia

class TerapiaAdmin(admin.ModelAdmin):
    list_display = ('paciente', 'userAccount', 'fechaInicio')
    list_per_page = 25

admin.site.register(Terapia, TerapiaAdmin)