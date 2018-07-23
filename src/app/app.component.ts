import { Component } from '@angular/core';
import {SnotifyPosition, SnotifyService, SnotifyToastConfig} from 'ng-snotify';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private snotifyService: SnotifyService) {}

}
