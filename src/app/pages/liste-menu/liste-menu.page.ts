import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-liste-menu',
  templateUrl: './liste-menu.page.html',
  styleUrls: ['./liste-menu.page.scss'],
})
export class ListeMenuPage implements OnInit {
jsonData=[];
public tab:any=[];
  constructor(private router:Router, private menu:MenuController) {
this.initializationJSONData();
   }

FilterJSONData(ev:any)
{
  this.initializationJSONData();
const val= ev.target.value;
if(val && val.trim() !='')
{
  this.tab=this.tab.filter((item) => {
    return (item.Nom.toLowerCase().indexOf(val.toLowerCase())>-1);
  });
}
}

   initializationJSONData()
   {
     this.tab=[
       {
        "Nom":"Juridictions",
        "Description":"Accéder plus aux informations sur la jurididctions",
        "url":"/juridictions",
        "Image":"/assets/Imgs/img1.jfif",
       },
       {
        "Nom":"Acteurs Judiciaires",
        "Description":"Les informtions sur les acteurs judiciaires",
        "Image":"/assets/Imgs/img.jfif",
        "url":"/details-menu"
       },
       {
        "Nom":"Actes Judiciaires",
        "Description":"accéder à tous les informations sur les actes judiciares",
        "Image":"/assets/Imgs/img2.jfif",
        "url":"/actes"
       }
     ]

     this.jsonData=[
      {
        "Id":"1",
        "Nom":"Juridictions",
        "Description":"Accéder plus aux information sur la jurididctions"
      },
      {
        "Id":"2",
        "Nom":"Acteurs Judiciaires",
        "Description":"Les informtion sur les acteurs judiciaires"

      },
      {
        "Id":"3",
        "Nom":"Actes Judiciaires",
        "Description":"accéder à tous les informations sur les actes judiciares"
      }
     ]
   }
  openMenu()
  {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {
    this.initializationJSONData();
}
}