from django .urls import path
from .views import PacienteListCreateView, PacienteView, PacienteListView

urlpatterns = [
    path('', PacienteListView.as_view()),
    path('<int:pk>', PacienteView.as_view()),
    path('admin', PacienteListCreateView.as_view()),
]