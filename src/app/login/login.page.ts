import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../servicios/user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    correo:"",
    password:""
  }
  

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
  }
ingresar(){
  this.userService.setCorreo(this.user.correo);
    this.userService.setPassword(this.user.password);

    this.router.navigate(['/home']);
}
recuperarPassword(){
  this.router.navigate(['/recover-password']);
}
}

