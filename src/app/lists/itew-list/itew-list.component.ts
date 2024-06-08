import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-itew-list',
  templateUrl: './itew-list.component.html',
  styleUrls: ['./itew-list.component.css']
})
export class ItewListComponent implements OnInit { 
@Input() items =[] //lists*home.component html de  '<app-itew-list [items] ="images"></app-itew-list>' verisi tuttarken kullanıyoruz
  constructor() { }

  ngOnInit(): void {
  }

}
