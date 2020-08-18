from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import permissions
from .models import Paciente
from .serializers import PacienteSerializer

class PacienteListCreateView(ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    pagination_class = None 


class PacienteView(RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer


