import { Component, OnInit, Inject } from '@angular/core';
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
      console.log(event.target.dataset.theme );
      const tema = event.target.dataset.theme;
      const urlStyle = `assets/css/colors/${ tema }.css`;
      this.document.getElementById('theme').setAttribute('href', urlStyle);
    }
  }

}
