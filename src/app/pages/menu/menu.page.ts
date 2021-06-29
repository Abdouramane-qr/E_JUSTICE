import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  tab=[
    {
      Id:1,
      Nom:"Home",
      Description:"",
      url:"/",
     icon:"home-outline"
    },
    {
      Id:1,
      Nom:"Juridictions",
      Description:"",
      url:"/juridictions",
     icon:"reader-outline"
    },
    {
      Id:2,
      Nom:"Acteurs Judiciaires",
      Description:"",
      url:"/details-menu",
      icon:"school-outline"
    },
    {
      Id:3,
      Nom:"Actes Judiciaires",
      Description:"",
      url:"/actes",
      icon:"newspaper-outline"
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
