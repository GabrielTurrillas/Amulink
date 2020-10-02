from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..accounts.models import UserAccount
from .models import Paciente, Terapia
from .serializers import PacienteSerializer
from ..accounts.models import UserAccount

class PacienteListCreateView(ListCreateAPIView):
    serializer_class = PacienteSerializer
    pagination_class = None
    queryset = Paciente.objects.all()
    
    def get_queryset(self):
        return Paciente.objects.filter(userAccount=self.request.user)
    
    def list(self, request):
        queryset = self.get_queryset()
        serializer = PacienteSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer_class = PacienteSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            instanciaPaciente = Paciente.objects.get(id=serializer_class.data.get('id'))
            Terapia.objects.create(paciente=instanciaPaciente, userAccount=request.user)
            return Response(serializer_class.data)
        return Response(serializer_class.errors)



class PacienteView(RetrieveUpdateDestroyAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer



""" class UserIdViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id) """
