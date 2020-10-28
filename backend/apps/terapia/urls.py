from django .urls import path
from .views import TerapiaDetailView, SesionListCreateView

urlpatterns = [
    path('sesion/<int:pk>', SesionListCreateView.as_view()),
    path('<int:pk>', TerapiaDetailView.as_view()),
]