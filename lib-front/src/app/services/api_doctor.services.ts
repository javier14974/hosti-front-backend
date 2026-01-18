import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctor.models";





@Injectable({
  providedIn: 'root'
})
export class Api_services_doctor{
    private registro_url = 'http://127.0.0.1:8000/doctor/registro_doctor/';

    constructor(private http: HttpClient){ }

    registrar_doctor_api(Doctor : Doctor){
        return this.http.post<Doctor>(this.registro_url, Doctor);
    }

}

