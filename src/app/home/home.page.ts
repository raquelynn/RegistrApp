import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreEstudiante: string;
  carreraEstudiante: string;
  correoEstudiante: string | null;

  constructor(private userService: UserService) {
    
    const user = this.userService.getUser();

    
    this.nombreEstudiante = user?.nombre || 'Estudiante';
    this.carreraEstudiante = user?.carrera || 'No asignada'; 
    this.correoEstudiante = this.userService.getCorreo(); 
  }

  ngOnInit() {}
}
