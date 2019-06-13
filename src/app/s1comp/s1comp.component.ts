import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s1comp',
  template:`<div [ngSwitch]="name">
            <div *ngSwitchCase="'Aditi'">welcome Aditi</div>
            <div *ngSwitchCase="'Abhi'">welcome Abhi</div>
            <div *ngSwitchCase="'Anvi'">welcome Anvi</div>
            <div *ngSwitchDefault>choose again</div>





            ` ,
  styles: []
})
export class S1compComponent implements OnInit {
  public name="Anvi";

  constructor() { }

  ngOnInit() {
  }

}
