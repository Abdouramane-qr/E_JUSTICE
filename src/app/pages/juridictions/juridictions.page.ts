import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juridictions',
  templateUrl: './juridictions.page.html',
  styleUrls: ['./juridictions.page.scss'],
})
export class JuridictionsPage implements OnInit {

  constructor() { }

  ionViewLoad2()
{

   var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
}
  ngOnInit() {
    this.ionViewLoad2();
  }

}
