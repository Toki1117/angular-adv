import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Menu[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: 'dashboard'
        },
        {
          titulo: 'Progress bar',
          url: 'progress'
        },
        {
          titulo: 'Charts',
          url: 'charts'
        }
      ]
    }
  ];

  constructor() { }
}
