import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percentage = 50;
  percentage2 = 50;

  constructor() { }

  ngOnInit() {
  }

 /*  update(event: number) {
    this.percentage = event;
    this.percentage2 = event;
  } */

}
