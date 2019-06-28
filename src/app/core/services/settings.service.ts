import { Injectable, Inject } from '@angular/core';
import { Settings } from '../interfaces/settings';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default',
  };

  constructor( @Inject(DOCUMENT) private document ) {
    this.setSettings();
   }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  setSettings() {
    if ( localStorage.getItem('settings') ) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      console.log('Cargando del local storage');

      this.applyTheme(this.settings.theme);
    } else {
      console.log('Usando valores por defecto');
    }
  }

  applyTheme(tema: string) {
    const urlStyle = `assets/css/colors/${ tema }.css`;
    this.document.getElementById('theme').setAttribute('href', urlStyle);

    this.settings.theme = tema;
    this.settings.themeUrl = urlStyle;

    this.saveSettings();
  }

}
