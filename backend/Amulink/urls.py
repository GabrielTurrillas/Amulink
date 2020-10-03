from django.contrib import admin
from django.urls import path, include, re_path
from .router import router
from django.views.generic import TemplateView


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/paciente/', include('apps.paciente.urls')),
    path('api/terapia/', include('apps.terapia.urls')),
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls'))
]

