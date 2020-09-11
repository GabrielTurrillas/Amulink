from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Paciente
from .serializers import PacienteSerializer

class PacienteListCreateView(ListCreateAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    pagination_class = None 


class PacienteView(RetrieveUpdateDestroyAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer


