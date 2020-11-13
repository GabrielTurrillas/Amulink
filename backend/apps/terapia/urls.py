from django .urls import path
from .views import TerapiaDetailView, SesionListView, SesionDetalle, sesionCurrentMonthCountView

urlpatterns = [
    path('<int:pk>', TerapiaDetailView.as_view()),
    path('sesion/<int:pk>', SesionListView),
    path('sesion/sesion_detalle/<int:pk>', SesionDetalle),
    path('sesion/contar_sesiones_mes', sesionCurrentMonthCountView)
]