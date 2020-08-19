from django .urls import path
from .views import PacienteListCreateView, PacienteView

urlpatterns = [
    path('', PacienteListCreateView.as_view()),
    path('<int:pk>', PacienteView.as_view()),
]