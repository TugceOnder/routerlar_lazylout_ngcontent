import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    PlaceholdersHomeComponent,
    PlaceholdersComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule,
    SharedModule // export ettimiz modulü burada import ederek  divided modulü kullanabiliriz
  ],
  exports: [
   // PlaceholdersHomeComponent
  ]
})
export class PlaceholdersModule { }
