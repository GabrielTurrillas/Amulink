from rest_framework import serializers

from .models import Terapeuta

class TerapeutaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Terapeuta
        fields = '__all__'