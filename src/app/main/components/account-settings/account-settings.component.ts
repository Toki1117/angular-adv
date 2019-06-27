import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document ) { }

  ngOnInit() {
  }

  cambiarColor(event) {
    if ( event.target.tagName === 'A' ) {
      const tema = event.target.dataset.theme;
      const urlStyle = `assets/css/colors/${ tema }.css`;
      this.document.getElementById('theme').setAttribute('href', urlStyle);

      const selectores: Array<HTMLElement> = this.document.getElementsByClassName('selector');

      for ( const selector of selectores ) {
        selector.classList.remove('working');
      }

      event.target.classList.add('working');

      console.log(event.target.dataset.theme, selectores );
    }
  }

}
