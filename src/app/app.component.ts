
//app.component.ts
import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private animationCtrl: AnimationController) {}
  animarBoton(){
    const boton = document.querySelector('.boton-animado')
    if(boton){
      const animacion = this.animationCtrl.create()
      .addElement(boton)//aplicacion
        .duration(500)
        .fromTo('transform','scale(1)','scale(1.5)')
        
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
      .addElement(texto)//aplicacion
      .duration(1500)
      .fromTo('opacity','0','1')//partimos con opacidad 0 y terminamos en 100
      animacion.play()
    }
    else{
      console.error("No se pudo encontrar una clase .texto-desvanecido");
    }
  }
}
