from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import TerapiaSerializer
from .models import Terapia

class UpdateTerapiaView(RetrieveUpdateAPIView):
    queryset = Terapia.objects.all()
    serializer_class = TerapiaSerializer