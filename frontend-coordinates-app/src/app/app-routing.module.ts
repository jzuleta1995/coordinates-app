import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinateComponent } from './controllers/coordinate/coordinate.component';

const routes: Routes = [
  {path:'', component: CoordinateComponent},
  {path:'coordinates', component: CoordinateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
