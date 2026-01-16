import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Api_services_reserva } from '../../services/api_reserva.services';
import { Reserva } from '../../models/reserva.models';
import { Api_services_paciente } from '../../services/api_paciente.services';


@Component({
  selector: 'app-subir-reserva',
  imports: [FormsModule, RouterLink],
  templateUrl: './subir-reserva.html',
  styleUrl: './subir-reserva.css',
})
export class SubirReserva implements OnInit{
constructor(
      private paramen : ActivatedRoute,
      private api_reserva : Api_services_reserva,
      private api_paciente : Api_services_paciente,
    ) {}



  public reserva_nuevo = new Reserva();

  public todo_reserva : Reserva[] = [];

    id_reserva : number = 0;
    editar : boolean = false
  ngOnInit(): void {
    this.paramen.queryParams.subscribe(id_re =>{
      this.id_reserva = id_re['id'];

      if(this.id_reserva >= 1){
          this.editar = true;
      }else{
        this.editar = false;
      }
      this.paramen.queryParams.subscribe(parametros =>{
      this.reserva_nuevo.paciente = parametros['id_paciente'];
      console.log('la id es: ', this.reserva_nuevo.paciente)
    })
    })
  }
  subir_reserva(){
    this.api_reserva.subir_reserva_api(this.reserva_nuevo).subscribe({
          next : (data) => {
            console.log("respuesta de servidor: ", data)
    
            this.reserva_nuevo = new Reserva(); /* limpiar el input */
          },
    
          error : (e) =>{
            console.log("error es el siguiente: ", e)
          }
        })
    }
    

  editar_reserva(){
    this.editar = true;
    this.api_paciente.editar_post(this.id_reserva, this.reserva_nuevo).subscribe({
      next: (data) =>{
        console.log("respuesta: ", data)
      },
      error : (e) =>{
        console.log("error es: ", e)
      }
    })
  }

}
