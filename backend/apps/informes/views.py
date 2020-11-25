import datetime
from calendar import monthrange
from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from ..terapia.models import Sesion
from ..paciente.models import Paciente

""" 
pagina resumen mensual (sitio terapeuta)
    numero de horas atendidas por mes(preguntar si 1 sesion=1hora)*
    pagos pendientes amulen(historico)(modalidad)
    cantidad de pacientes totales*
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
def numeroPacientesView(request):
    """ cantidad de pacientes totales """
    if request.method == 'GET':
        numeroPacientes = Paciente.objects.filter(userAccount=request.user).count()
        return Response(numeroPacientes)


""" 
area comercial (admin)
    registro de ventas mensuales => (numero de sesiones mensuales totales)(preguntar)*
    cantidad de pacientes activos*
    registro de ventas mensuales de cada terapeuta por tipo de terapia (cantidad de sesiones por terapeuta mensuales)*
"""

@api_view(['GET',])
@permission_classes([IsAdminUser])
def numeroSesionesMensualesView(request, mes, año):
    """ numero de sesiones mensuales totales """
    ultimoDiaMes = monthrange(año, mes)[1]
    if request.method == 'GET':
        numeroSesionesMensuales = Sesion.objects.filter(fechaSesion__gte=datetime.date(año,mes,1),
                                                        fechaSesion__lte=datetime.date(año,mes,ultimoDiaMes)).count()
        return Response(numeroSesionesMensuales)



""" samples = Sample.objects.filter(sampledate__gte=datetime.date(2011, 1, 1),
                                sampledate__lte=datetime.date(2011, 1, 31)) """


@api_view(['GET',])
@permission_classes([IsAdminUser])
def numeroPacientesActivosView(request):
    """ cantidad de pacientes activos """
    numeroPacientesActivos = Paciente.objects.filter(isActive=True).count()
    print(numeroPacientesActivos)
    if request.method == 'GET':
        return Response(numeroPacientesActivos)



@api_view(['GET',])
@permission_classes([IsAdminUser])
def numeroSesionesAnualesView(request, prevision, año):
    """ numero de sesiones anuales totales por tipo de terapia """
    def get_sesiones(año, mes):
        ultimoDiaMes = monthrange(año, mes)[1]
        Sesion.objects.filter(fechaSesion__gte=datetime.date(año,mes,1),
                                fechaSesion__lte=datetime.date(año,mes,ultimoDiaMes),
                                terapia__paciente__prevision=prevision).count()

    if request.method == 'GET':
        diccionarioSesiones = { 
            'enero': get_sesiones(año, 1),
            'febrero': get_sesiones(año, 2),
            'marzo': get_sesiones(año, 3),
            'abril': get_sesiones(año, 4),
            'mayo': get_sesiones(año, 5),
            'junio': get_sesiones(año, 6),
            'julio': get_sesiones(año, 7),
            'agosto': get_sesiones(año, 8),
            'septiembre': get_sesiones(año, 9),
            'octubre': get_sesiones(año, 10),
            'nobiembre': get_sesiones(año, 11),
            'diciembre': get_sesiones(año, 12),
        }
    return Response(diccionarioSesiones)



"""
finansas (admin) (como se realizan los pagos?)(como se debe calcular el pago? ¿por mes?)
    pagos de equipo interno a centro
    pagos de equipo externo a centro 
    pago de derivaciones equipo interno
    pago de derivaciones equipo externo
    pago sesiones practicantes
    atrasos
"""

"""
area de operaciones
    registro de cupos por terapeuta(semanales o mensuales)
    panel de derivacion
    pago y confirmacion de pago (terapeuta y administrador)
    frecuencia sesion 
"""