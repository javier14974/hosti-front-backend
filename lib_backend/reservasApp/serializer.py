from rest_framework import serializers 
from django.contrib.auth.hashers import make_password
from .models import reservas


class reserva_serializer(serializers.ModelSerializer):
    class Meta:
        model = reservas
        fields = '__all__'


