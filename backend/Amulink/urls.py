from django.contrib import admin
from django.urls import path, include, re_path


urlpatterns = [
    path('api/', include('apps.paciente.urls')),
    path('admin/', admin.site.urls),
]

