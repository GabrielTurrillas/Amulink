from django.contrib import admin
from django.urls import path, include, re_path
from .router import router


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/cuenta/', include('apps.cuentas.urls')),
    path('api/paciente/', include('apps.paciente.urls')),
    path('admin/', admin.site.urls),
]

