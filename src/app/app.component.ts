import { Component } from '@angular/core';
import { SettingsService } from './core/services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'adminpro';

  constructor(public settingsService: SettingsService) { }
}
