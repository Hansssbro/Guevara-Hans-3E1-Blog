import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-d',
  templateUrl: './componente-d.component.html',
  styleUrls: ['./componente-d.component.css']
})
export class ComponenteDComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }
  regresar(){
    this.ruta.navigate([''])
  }
}
