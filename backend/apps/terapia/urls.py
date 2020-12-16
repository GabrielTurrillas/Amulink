from django .urls import path
from .views import terapiaDetailView, sesionListView, sesionDetalle, sesionCurrentMonthCountView, createTerapiaView, putSesion

urlpatterns = [
    path('<int:pk>', terapiaDetailView),
    path('admin/create', createTerapiaView),
    path('sesion/<int:pk>', sesionListView),
    path('sesion/sesion_detalle/<int:pk>', sesionDetalle),
    path('sesion/contar_sesiones_mes', sesionCurrentMonthCountView),
    path('sesion/put_sesion/<int:pk>', putSesion)
]