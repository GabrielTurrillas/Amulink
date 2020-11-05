from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from ..accounts.models import UserAccount
from ..terapia.models import Terapia
from ..accounts.models import UserAccount
from .models import Paciente
from .serializers import PacienteSerializer
from .permissions import PermisoTerapiaPaciente

class PacienteListCreateView(ListCreateAPIView):
    serializer_class = PacienteSerializer
    pagination_class = None
    queryset = Paciente.objects.all()
    permission_classes = [IsAdminUser]


class PacienteView(RetrieveUpdateDestroyAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, PermisoTerapiaPaciente]


class PacienteAdminView(RetrieveUpdateDestroyAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    permission_classes = [IsAdminUser]


class PacienteListView(ListAPIView):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all
    pagination_class = None
    permission_classes = [PermisoTerapiaPaciente]

    def get_queryset(self):
        return Paciente.objects.filter(userAccount=self.request.user)

    def list(self, request):
        queryset = self.get_queryset()
        serializer = PacienteSerializer(queryset, many=True)
        return Response(serializer.data)




