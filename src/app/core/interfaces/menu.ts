import { Submenu } from './submenu';

export interface Menu {
  titulo: string;
  icono: string;
  submenu?: Submenu[];
}
