from django.shortcuts import render
from .serializers import TerapiaSerializer

class UpdateTerapiaView(UpdateAPIView):
    queryset = Terapia.objects.all()
    serializer_class = TerapiaSerializer