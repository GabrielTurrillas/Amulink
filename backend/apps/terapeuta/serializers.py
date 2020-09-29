from rest_framework import serializers

from .models import PerfilTerapeuta

class TerapeutaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PerfilTerapeuta
        fields = '__all__'