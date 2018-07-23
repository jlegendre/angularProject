import { Component, OnInit } from '@angular/core';
import {SnotifyPosition, SnotifyService, SnotifyToastConfig} from 'ng-snotify';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }

}
