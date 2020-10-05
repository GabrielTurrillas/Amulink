from django .urls import path
from .views import TerapiaDetailView

urlpatterns = [
    path('<int:pk>', TerapiaDetailView.as_view()),
]