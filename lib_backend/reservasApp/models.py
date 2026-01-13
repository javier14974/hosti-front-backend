from django.db import models

from pacienteApp.models import Paciente
from doctorApp.models import Doctor


class reservas(models.Model):
    id = models.AutoField(primary_key=True)
    descripcion_dolor = models.CharField(max_length=500)
    fecha_creacion = models.DateField(auto_now_add=True) 
    
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, related_name='mis_reservas')

    doctor = models.ForeignKey(Doctor, on_delete=models.SET_NULL , null=True, blank=True, related_name='citas_asignadas')
    

    estado = models.CharField(max_length=20, default='pendiente')

    nombre_paciente = models.CharField(max_length=40)

    def __str__(self):
        return f"Reserva {self.id} - Paciente: {self.paciente.nombre} | estado: {self.estado}"