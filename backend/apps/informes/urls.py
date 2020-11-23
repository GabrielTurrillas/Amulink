from django .urls import path
from .views import numeroHorasMesView, numeroPacientesView, numeroSesionesMensualesView, numeroPacientesActivosView

urlpatterns = [
    path('numeroHorasMes', numeroHorasMesView),
    path('numeroPacientes', numeroPacientesView),
    path('numeroSesionesMensuales/<int:mes>/<int:año>', numeroSesionesMensualesView),
    path('numeroPacientesActivosView', numeroPacientesActivosView)
]