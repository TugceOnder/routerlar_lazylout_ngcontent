import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data =[
    { name:'Tugce',age:28,job : 'Bilgisayar Mühendisligi',employed: 'Hayir'},
    { name:'Bengisu',age:32,job : 'Rehberlik Ögretmeni',employed: 'Evet'},
    { name:'Ayse',age:18,job : 'Ögrenci',employed: 'Evet'},
  ];

  headers =[
   {key: 'employed',label:'Aldıgı ücretden memnun musun' },
   {key: 'name',label:'Ad Soyad' },
   {key: 'age',label:'Yas' },
   {key: 'job',label:'Meslek' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
