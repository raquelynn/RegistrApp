import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: { 
    nombre: string; 
    correo: string; 
    password: string; 
    carrera: string; 
  } | null = null;

  constructor() {
    this.user = {
      nombre: "Raquel Rehbein",
      correo: "",   
      password: "", 
      carrera: "Ingeniería Informática"
    };
  }
  getUser() {
    return this.user;
  }

  setCorreo(correo: string) {
    if (this.user) {
      this.user.correo = correo;
    }
  }

  getCorreo(): string | null {
    return this.user ? this.user.correo : null;
  }

  setPassword(password: string) {
    if (this.user) {
      this.user.password = password;
    }
  }

}
