import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrarPaciente } from './components/paciente/registrar-paciente/registrar-paciente';
import { LoginPaciente } from './components/paciente/login-paciente/login-paciente';
import { HomePaciente } from './components/paciente/home-paciente/home-paciente';
import { SubirReserva } from './components/subir-reserva/subir-reserva';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RegistrarPaciente, LoginPaciente, HomePaciente, SubirReserva, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lib-front');
}
