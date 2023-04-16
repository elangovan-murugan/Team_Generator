import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamGeneratorComponent } from './team-generator/team-generator.component';

const routes: Routes = [
  {path:"", component : TeamGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
