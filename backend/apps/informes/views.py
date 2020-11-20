import datetime
from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from ..terapia.models import Sesion
from ..paciente.models import Paciente

""" 
pagina resumen mensual (sitio terapeuta)
    numero de horas atendidas por mes(preguntar si 1 sesion=1hora)*
    pagos pendientes amulen(historico)(modalidad)
    cantidad de pacientes totales
"""

@api_view(['GET',])
def numeroHorasMesView(request):
    """ numero de horas atendidas por mes(preguntar si 1 sesion=1hora) """
    try:
        sesionCurrentMonthCount = Sesion.objects.filter(terapia__userAccount=request.user, fechaSesion__gte=datetime.datetime.today().replace(day=1, hour=0, minute=0, second=0, microsecond=0)).count()
    except sesionCurrentMonthCount.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        return Response(sesionCurrentMonthCount)


@api_view(['GET',])
def pagosPendientes(request):
    """ pagos pendientes amulen(historico)(modalidad)(falta info) """


@api_view(['GET',])
def numeroPacientesView(request, pk):
    """ cantidad de pacientes totales """
    if request.method == 'GET':
        numeroPacientes = Paciente.objects.filter(userAccount=request.user)
        return Response(numeroPacientes)



"""
 area comercial
"""

""" 
area comercial (admin)
    registro de ventas mensuales
    cantidad de pacientes atendidos por mes
    registro de ventas mensuales de cada terapeuta por tipo de terapia
"""

"""
finansas (admin)
    pagos de equipo interno a centro
    pagos de equipo externo a centro
    pago de derivaciones equipo interno
    pago de derivaciones equipo externo
    pago sesiones practicantes
    atrasos
"""

"""
area de operaciones
    registro de cupos por terapeuta
    panel de derivacion
    pago y confirmacion de pago (terapeuta y administrador)
    frecuencia sesion 
"""