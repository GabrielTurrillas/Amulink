from django .urls import path
from .views import PacienteListCreateView, PacienteView

urlpatterns = [
    path('pacientes/', PacienteListCreateView.as_view()),
    path('pacientes/<int:pk>', PacienteView.as_view()),
]