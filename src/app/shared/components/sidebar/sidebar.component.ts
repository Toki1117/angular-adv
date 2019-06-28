import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/services.index';
import { Menu } from 'src/app/core/interfaces/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menu: Menu[] = this.sidebarService.menu;

  constructor(public sidebarService: SidebarService ) { }

  ngOnInit() {
  }

}
