from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.paciente.models import Paciente
from apps.paciente.serializers import PacienteSerializer
from .serializers import TerapiaSerializer
from .models import Terapia


class TerapiaDetailView(APIView):
    def get_object(self, pk):
        try:
            return Paciente.objects.get(pk=pk)
        except Paciente.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        paciente = self.get_object(pk)
        terapia = Terapia.objects.get(userAccount=request.user, paciente=paciente)
        terapiaSerializer = TerapiaSerializer(terapia)
        return Response(terapiaSerializer.data)



        
        
