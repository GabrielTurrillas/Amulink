from django .urls import path
from .views import UpdateTerapiaView

urlpatterns = [
    path('<int:pk>', UpdateTerapiaView.as_view()),
]