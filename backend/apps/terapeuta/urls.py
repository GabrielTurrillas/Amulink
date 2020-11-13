from django .urls import path
from .views import ListPerfilTerapeuta, getPerfilTerapeutaView, putPerfilTerapeutaView

urlpatterns = [
    path('', ListPerfilTerapeuta.as_view()),
    path('perfil', getPerfilTerapeutaView),
    path('modificar_perfil', putPerfilTerapeutaView)
]