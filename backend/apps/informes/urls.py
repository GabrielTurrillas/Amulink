from django .urls import path
from .views import numeroHorasMesView, numeroPacientesView, numeroSesionesMensualesView, numeroPacientesActivosView,numeroSesionesTerapeutaMesView

urlpatterns = [
    path('numeroHorasMes', numeroHorasMesView),
    path('numeroPacientes', numeroPacientesView),
    path('numeroSesionesMensuales/<int:mes>/<int:año>', numeroSesionesMensualesView),
    path('numeroPacientesActivosView', numeroPacientesActivosView),
    path('numeroSesionesTerapeutaMesView/<int:terapeuta>/<int:mes>/<int:año>', numeroSesionesTerapeutaMesView)
]