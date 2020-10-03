from rest_framework import serializers
from .models import Terapia
from ..accounts.models import UserAccount

class TerapiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Terapia
        fields = '__all__'