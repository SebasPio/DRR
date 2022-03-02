import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomizerComponent } from './randomizer/randomizer.component';

const routes: Routes = [
  {path: 'randomizer', component: RandomizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
