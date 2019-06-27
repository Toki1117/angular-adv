import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/core/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document,
    public settingsService: SettingsService ) { }

  ngOnInit() {
    this.addCheck();
  }

  cambiarColor(event) {
    if ( event.target.tagName === 'A' ) {
      const tema = event.target.dataset.theme;
      this.settingsService.applyTheme(tema);

      const selectores: Array<HTMLElement> = this.document.getElementsByClassName('selector');

      for ( const selector of selectores ) {
        selector.classList.remove('working');
      }
      event.target.classList.add('working');
    }
  }

  addCheck() {
    const selectores: Array<HTMLElement> = this.document.getElementsByClassName('selector');

    for ( const selector of selectores ) {
      if (selector.dataset.theme === this.settingsService.settings.theme) {
        selector.classList.add('working');
        break;
      }
    }
  }

}
