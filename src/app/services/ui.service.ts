import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private darkModeState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentMode = this.darkModeState.asObservable();
  constructor() {
  }

  toggleMode() {
    this.darkModeState.next(!this.darkModeState.value);
  }
}
