import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTestComponent } from './three/components/first-test/first-test.component';
import { SecondTestComponent } from './three/components/second-test/second-test.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-test',
  },
  {
    path: 'three',
    loadChildren: () =>
      import('./three/three.module').then((module) => module.ThreeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
