from django .urls import path
from .views import numeroHorasMesView, numeroPacientesView

urlpatterns = [
    path('numeroHorasMes', numeroHorasMesView),
    path('numeroPacientes', numeroPacientesView)
]