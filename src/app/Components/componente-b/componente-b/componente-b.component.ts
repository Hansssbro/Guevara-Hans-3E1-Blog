import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate([''])
  }
  nvg1(){
    this.router.navigate(['web3'])
  }
  nvg2(){
    this.router.navigate(['web4'])
  }
}
