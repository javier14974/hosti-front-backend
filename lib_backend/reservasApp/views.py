from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from .models import reservas
from .serializer import reserva_serializer
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def subir_reserva(request):
    
    serializers_reg = reserva_serializer(data=request.data)

    if serializers_reg.is_valid():
        serializers_reg.save()
        return Response(serializers_reg.data, status=status.HTTP_201_CREATED)

    return Response(serializers_reg.errors, status=status.HTTP_400_BAD_REQUEST)
