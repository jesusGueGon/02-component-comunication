import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './pages/parent/parent.component';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class HomeParentModule { }
