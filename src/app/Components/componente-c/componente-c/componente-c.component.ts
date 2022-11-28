import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-c',
  templateUrl: './componente-c.component.html',
  styleUrls: ['./componente-c.component.css']
})
export class ComponenteCComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate([''])
  }
  nvg1(){
    this.router.navigate(['web2'])
  }
  nvg2(){
    this.router.navigate(['web4'])
  }
}
