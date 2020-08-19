from .models import Terapeuta
from .serializers import TerapeutaSerializer
from rest_framework import viewsets

class TerapeutaViewSet(viewsets.ModelViewSet):
    queryset = Terapeuta.objects.all()
    serializer_class = TerapeutaSerializer