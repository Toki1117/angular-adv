import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styles: []
})
export class MainlayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
