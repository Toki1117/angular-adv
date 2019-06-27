import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService ) { }

  ngOnInit() {
  }

}
