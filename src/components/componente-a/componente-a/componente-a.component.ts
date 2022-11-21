import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  navegacion(){
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

}  
