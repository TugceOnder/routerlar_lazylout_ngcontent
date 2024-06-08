import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsHomeComponent } from './lists-home/lists-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItewListComponent } from './itew-list/itew-list.component';


@NgModule({
  declarations: [
    ListsHomeComponent,
    StatisticsComponent,
    ItewListComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
