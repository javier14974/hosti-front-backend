
import { ChangeDetectorRef, Component, Inject, numberAttribute, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Api_services_paciente } from '../../../services/api_paciente.services';
import { Reserva } from '../../../models/reserva.models';




@Component({
  selector: 'app-home-paciente',
  imports: [RouterLink],
  templateUrl: './home-paciente.html',
  styleUrl: './home-paciente.css',
})
export class HomePaciente implements OnInit{

    constructor(
      private paramen : ActivatedRoute,
      private router : Router,
      private api_paciente : Api_services_paciente,
      private cdr : ChangeDetectorRef
    ) {}


nombreUsuario: string | null = '';
id_param : number = 0;

lista_post : Reserva[] = [];

  ngOnInit(): void {
    this.paramen.queryParams.subscribe(parametros =>{
      this.nombreUsuario = parametros['nombre'];
      this.id_param = parametros['id'];

      this.api_paciente.ver_tus_post(this.id_param).subscribe(
        {
        next: (data) =>{
          this.lista_post = data;
          console.log("todo los post: ", this.lista_post)
          this.cdr.detectChanges();
        },
        error : (e) =>{
            console.log("error es: ", e)
        }
      })
    })
    
  }

  salir(){
    this.nombreUsuario = '';
    this.router.navigate(['/login_paciente'])
  }

  enviar_id_reserva(){
    this.router.navigate(['/reserva'], {queryParams: {id_paciente: this.id_param}})
  }

  eliminar_post(id: any){
    this.api_paciente.eliminar_post(id).subscribe({
      next: (data) =>{
        console.log("respuesta: ", data)
      }
    })
  }

  editar_post(id_reserva : any){
    this.router.navigate(['/reserva', id_reserva], {queryParams: { id : id_reserva, id_paciente: this.id_param}})
  }


  }

