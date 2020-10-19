from rest_framework.permissions import BasePermission
from apps.terapia.models import Terapia

class PermisoTerapiaPaciente(BasePermission):
    def has_object_permission(self, request, view, obj):
        instanciaTerapia = Terapia.objects.get(paciente=obj.id)
        return instanciaTerapia.userAccount == request.user
