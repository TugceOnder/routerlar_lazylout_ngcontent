import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent implements OnInit {

  numbers=[
    {value : 50, label :'Müşteri'},
    {value : "35000 TL", label :'Ciro'},
    {value:65,label:'Torumlar'},
  
  ]

  images=[
    {
      images:'/assets/images/koltuk.jpg',
      title: 'Kanape',
      description:'Oturma muhteşem rahat koltuk'
    },
    {
      images:'/assets/images/koltuk3lu.jpg',
      title: 'Başka Koltuk',
      description:'Oturma muhteşem rahat koltuk yatak olabilecek bir koltuk'
    }
    
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
