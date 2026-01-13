import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Paciente } from "../models/paciente.models";
import { Reserva } from "../models/reserva.models";




@Injectable({
  providedIn: 'root'
})
export class Api_services_reserva{
    private subir_reservas_url = 'http://127.0.0.1:8000/reserva/subir_reserva/';

    constructor(private http: HttpClient){ }

    subir_reserva_api(reserva : Reserva){
        return this.http.post<Paciente>(this.subir_reservas_url, reserva);
    }


}
