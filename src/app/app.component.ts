import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UIService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Thời tiết';
  darkModeActive: boolean | undefined;
  showMenu = false;

  constructor(private UIService: UIService) {
    this.UIService.currentMode.subscribe(mode => this.darkModeActive = mode);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.UIService.toggleMode();
  }
}
