import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstTestComponent } from './components/first-test/first-test.component';
import { SecondTestComponent } from './components/second-test/second-test.component';



@NgModule({
  declarations: [FirstTestComponent, SecondTestComponent],
  imports: [
    CommonModule
  ]
})
export class ThreeModule { }
