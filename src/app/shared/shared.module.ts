import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule
  ],

  exports :[
    DividerComponent //divider componeti dışarıdan kullanılmasını izin veriyor
  ]
})
export class SharedModule { }
