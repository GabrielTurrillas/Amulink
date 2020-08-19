from django.contrib import admin
from django.urls import path, include, re_path
from .router import router


urlpatterns = [
    path('api/paciente', include('apps.paciente.urls')),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]

