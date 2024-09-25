import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
  
})
export class RecoverPasswordPage implements OnInit {
  correo: string = '';
  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }
  volverLogin(){
    this.router.navigate(['/login']);
  }
  enviarCorreo() {
    this.animarBoton();
    this.animarTexto();
    console.log(`Se enviará un correo a: ${this.correo}`);
}
animarBoton(){
  const boton = document.querySelector('.boton-animado')
  if(boton){
    const animacion = this.animationCtrl.create()
    .addElement(boton)
			.duration(50)
      .fromTo('transform','scale(1)','scale(1.1)')
			animacion.play()
  }
  else{
    console.error("error")
  }
}
animarTexto(){
	const texto= document.querySelector('.texto-desvanecido')

	if(texto){
		const animacion= this.animationCtrl.create()
		.addElement(texto)
		.duration(500)
		.fromTo('opacity','0','1')
		animacion.play()
	}
	else{
		console.error("No se pudo encontrar una clase .texto-desvanecido");
	}
}
}
