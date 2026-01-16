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

@csrf_exempt
@api_view(['DELETE'])
@permission_classes([AllowAny])
def eliminar_post(request, id_reserva):
    try:
        reserva = reservas.objects.get(id=id_reserva)
        reserva.delete()
        return Response({
            "mensaje": "reserva borrarda con exito"
        }, status=status.HTTP_200_OK)
    except reservas.DoesNotExist:
        return Response({
            "mensaje": "reserva no encontrada" #por si las dudas
        }, status=status.HTTP_404_NOT_FOUND)


@csrf_exempt
@permission_classes([AllowAny])
@api_view(['PUT']) 
def editar_post(request, id_reserva):
    try:
        reserva = reservas.objects.get(id=id_reserva)
        # Usamos partial=True por si solo envías un campo
        serializer = reserva_serializer(reserva, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except reservas.DoesNotExist:
        return Response({"error": "No existe esa reserva"}, status=status.HTTP_404_NOT_FOUND)