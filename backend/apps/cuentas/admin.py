from django.contrib import admin
from .models import Cuenta

# Register your models here.

class CuentaAdmin(admin.ModelAdmin):
    list_display = ('email',)
    list_per_page = 25

admin.site.register(Cuenta, CuentaAdmin)
