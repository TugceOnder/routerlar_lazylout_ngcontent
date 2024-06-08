import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
@Input () data =[]; // html de *ngFor="let dataObject of data" data karşılığı
  constructor() { }

  ngOnInit(): void {
  }

}
