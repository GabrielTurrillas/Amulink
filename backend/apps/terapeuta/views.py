from .models import PerfilTerapeuta
from .serializers import TerapeutaSerializer
from rest_framework import viewsets

class TerapeutaViewSet(viewsets.ModelViewSet):
    queryset = PerfilTerapeuta.objects.all()
    serializer_class = TerapeutaSerializer