from django .urls import path
from .views import terapiaDetailView, SesionListView, SesionDetalle, sesionCurrentMonthCountView, createTerapiaView

urlpatterns = [
    path('<int:pk>', terapiaDetailView),
    path('admin/create', createTerapiaView),
    path('sesion/<int:pk>', SesionListView),
    path('sesion/sesion_detalle/<int:pk>', SesionDetalle),
    path('sesion/contar_sesiones_mes', sesionCurrentMonthCountView)
]