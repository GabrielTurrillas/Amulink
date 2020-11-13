import datetime
from django.http import Http404, HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView
from rest_framework.decorators import api_view, permission_classes
from ..paciente.models import Paciente
from ..paciente.serializers import PacienteSerializer
from .serializers import TerapiaSerializer, SesionSerializer
from .models import Terapia, Sesion



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
    



@api_view(['GET','POST'])
def SesionListView(request, pk):

    if request.method == 'GET':
        sesiones = Sesion.objects.filter(terapia__paciente__id=pk, terapia__userAccount=request.user)
        serializer = SesionSerializer(sesiones, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SesionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT'])
def SesionDetalle(request, pk):

    if request.method == 'GET':
        sesion = Sesion.objects.get(id=pk)
        serializer = SesionSerializer(sesion)
        return Response(serializer.data)



@api_view(['GET',])
def sesionCurrentMonthCountView(request):
    try:
        sesionCurrentMonthCount = Sesion.objects.filter(terapia__userAccount=request.user, fechaSesion__gte=datetime.datetime.today().replace(day=1, hour=0, minute=0, second=0, microsecond=0)).count()
    except sesionCurrentMonthCount.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = SesionSerializer(sesionCurrentMonthCount, many=True)
        return Response(sesionCurrentMonthCount)


"""     Order.objects.filter(created_at__gte=datetime.datetime.today().replace(day=1, hour=0, minute=0, second=0, microsecond=0)).count() """
    
    

    

        
        
