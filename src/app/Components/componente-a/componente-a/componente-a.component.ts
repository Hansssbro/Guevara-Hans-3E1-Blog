import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }
  //siempre que se crea una variable se inicializa
  //aqui se crean las variables 
  suma:number=0;  
  suma2:number=0;
  vector: string[] = [];//como se crean vectores 

  ngOnInit(): void {
    this.total()

  }

  navegacion(){
    //variable let sirve para crear variable local dentro de un metodo
    //let es unica, propia de un solo metodo
    
    this.router.navigate(['web2'])
  }

  navegacion2(){
    this.router.navigate(['web3'])
  }

  navegacion3(){
    this.router.navigate(['web4'])
  }

  navegacion4(){
    this.router.navigate(['web5'])
  }
  total(){
    let numero1:number=2;
    let numero2:number=1;
    
    this.suma=numero1+numero2;
    console.log("Sumatoria:",this.suma);

    this.suma2=this.suma+5;
    console.log("Sumatoria 2:",this.suma2);

    this.total1(this.suma2);
  }
  total1 (sm:number){
    console.log("Suma multiplicacion:",sm*2);
  } 
}  
