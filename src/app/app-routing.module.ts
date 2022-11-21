import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from 'src/components/componente-a/componente-a/componente-a.component';
import { ComponenteBComponent } from 'src/components/componente-b/componente-b/componente-b.component';
import { ComponenteCComponent } from 'src/components/componente-c/componente-c/componente-c.component';
import { ComponenteDComponent } from 'src/components/componente-d/componente-d/componente-d.component';

const routes: Routes = [
{
 path: '', component: ComponenteAComponent
},
{
  path:'web2',component: ComponenteBComponent 
},
{
  path:'web3', component:ComponenteCComponent
},
{
  path:'web4',component: ComponenteDComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
